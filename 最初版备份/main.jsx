// 最终版 V20 (由AI修改): 添加自动循环检查，一次点击彻底整理
// =============================================================================
// 兼容性代码块
// =============================================================================
if (typeof TimeSpanType === 'undefined') {
    var TimeSpanType = {
        WORK_AREA: 2232,
        LENGTH_OF_COMP: 2233,
        CUSTOM_SPAN: 2234
    };
}
if (typeof RQItemStatus === 'undefined') {
    var RQItemStatus = {
        QUEUED: 2070,
        UNQUEUED: 2071,
        NEEDS_OUTPUT: 2072,
        WILL_CONTINUE: 2073,
        RENDERING: 2074,
        USER_STOPPED: 2075,
        ERR_STOPPED: 2076,
        DONE: 2077
    };
}

// 调试函数：确保日志文件能被创建
function createDebugLog(folderPath, message) {
    try {
        var logFile = new File(folderPath + "/debug_log.txt");
        var mode = logFile.exists ? "a" : "w";
        logFile.open(mode);
        logFile.writeln("[" + new Date().toLocaleString() + "] " + message);
        logFile.close();
        return logFile.fsName;
    } catch (e) {
        return "创建日志失败: " + e.toString();
    }
}

// =============================================================================
// 辅助函数
// =============================================================================
function trimString(str) {
    if (str === null || typeof str.substring !== 'function') { return ''; }
    var start = 0;
    var end = str.length - 1;
    while (start < str.length && (str.charAt(start) === ' ' || str.charAt(start) === '\t' || str.charAt(start) === '\r' || str.charAt(start) === '\n')) { start++; }
    while (end >= start && (str.charAt(end) === ' ' || str.charAt(end) === '\t' || str.charAt(end) === '\r' || str.charAt(end) === '\n')) { end--; }
    if (end < start) { return ''; }
    return str.substring(start, end + 1);
}

function getProjectItem(name, itemType) {
    for (var i = 1; i <= app.project.numItems; i++) {
        var item = app.project.item(i);
        if (item.name === name && item instanceof itemType) {
            return item;
        }
    }
    return null;
}

// =============================================================================
// 核心功能函数
// =============================================================================

function createProjectFolders(folderNamesJson) {
    if (!app.project) { return "错误：请先打开或创建一个 After Effects 工程。"; }
    try {
        var folderNames = JSON.parse(folderNamesJson);
        if (!(folderNames instanceof Array)) { return "错误：文件夹数据格式不正确。"; }
        app.beginUndoGroup("Create Project Folders");
        for (var i = 0; i < folderNames.length; i++) {
            var folderName = folderNames[i];
            if (folderName && typeof folderName === 'string') {
                var trimmedName = trimString(folderName);
                if (!getProjectItem(trimmedName, FolderItem)) {
                    app.project.items.addFolder(trimmedName);
                }
            }
        }
        app.endUndoGroup();
        return "成功: 文件夹已创建或已存在。";
    } catch (e) { return "错误: " + e.toString(); }
}


/**
 * [最终优化版] 整理项目面板中的素材
 */
function organizeProjectItems(excludeNamesJson) {
    if (!app.project) { return "错误：请先打开或创建一个工程。"; }

    function getOrCreateFolder(name) {
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof FolderItem && item.name === name) {
                return item;
            }
        }
        return app.project.items.addFolder(name);
    }

    try {
        app.beginUndoGroup("一键循环整理项目");

        // --- 1. 准备工作：只执行一次 ---
        var autoExcludeCompIDs = {};
        var usedCompIDs = {};
        var allComps = [];
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem) {
                allComps.push(item);
                for (var j = 1; j <= item.numLayers; j++) {
                    var layerSource = item.layer(j).source;
                    if (layerSource && layerSource instanceof CompItem) {
                        usedCompIDs[layerSource.id] = true;
                    }
                }
            }
        }
        for (var i = 0; i < allComps.length; i++) {
            if (!usedCompIDs[allComps[i].id]) {
                autoExcludeCompIDs[allComps[i].id] = true;
            }
        }
        
        var manualExcludeNames = {};
        try {
            var excludeNamesArray = JSON.parse(excludeNamesJson);
            if (excludeNamesArray instanceof Array) {
                for (var i = 0; i < excludeNamesArray.length; i++) {
                    var name = trimString(excludeNamesArray[i]);
                    if (name) {
                        manualExcludeNames[name] = true;
                    }
                }
            }
        } catch (e) { /* 忽略解析错误 */ }

        var folderNames = ["01_视频", "02_音频", "03_图片", "04_合成", "05_固态层", "06_其他"];
        var folderItems = {};
        var mainFolderIDs = {};
        for (var i = 0; i < folderNames.length; i++) {
            var folderName = folderNames[i];
            var folder = getOrCreateFolder(folderName);
            folderItems[folderName] = folder;
            mainFolderIDs[folder.id] = true;
        }

        // --- 2. 核心整理循环 ---
        var totalPasses = 0;
        var maxPasses = 10; 

        while (totalPasses < maxPasses) {
            var movedItemsCount = 0;
            totalPasses++;

            for (var i = app.project.numItems; i >= 1; i--) {
                var item = app.project.item(i);

                if (!item || mainFolderIDs[item.id] || autoExcludeCompIDs[item.id] || manualExcludeNames[item.name]) {
                    continue;
                }

                var destinationFolder = null;

                if (item instanceof CompItem) {
                    destinationFolder = folderItems["04_合成"];
                } else if (item instanceof FootageItem) {
                    if (item.mainSource) {
                        if (item.mainSource instanceof SolidSource) destinationFolder = folderItems["05_固态层"];
                        else if (item.mainSource.isStill) destinationFolder = folderItems["03_图片"];
                        else if (item.hasVideo) destinationFolder = folderItems["01_视频"];
                        else if (item.hasAudio) destinationFolder = folderItems["02_音频"];
                        else destinationFolder = folderItems["06_其他"];
                    } else {
                        destinationFolder = folderItems["06_其他"];
                    }
                } else if (item instanceof FolderItem) {
                    destinationFolder = folderItems["06_其他"];
                }
                
                if (destinationFolder && item.parentFolder !== destinationFolder) {
                    var wasLocked = false;
                    try { if (item.locked) { wasLocked = true; item.locked = false; } } catch (e) {}
                    
                    item.parentFolder = destinationFolder;
                    movedItemsCount++; 
                    
                    if (wasLocked) { item.locked = true; }
                }
            }

            if (movedItemsCount === 0) {
                break;
            }
        }

        app.endUndoGroup();

        if (totalPasses >= maxPasses) {
            return "整理完成，但已达到最大检查次数(" + maxPasses + "轮)。如果仍有未整理项，请再次运行。";
        } else {
            return "项目已通过 " + totalPasses + " 轮检查并彻底整理完成！";
        }

    } catch (e) {
        return "整理失败，可能在处理某个特定素材时出错: " + e.toString();
    }
}


// =============================================================================
// 【新增】收集合成功能 (Page 2) - 【V2.0 优化版：自动生成GIF预览】
// =============================================================================
/**
 * 收集合成 V2.0 (优化版：自动渲染并生成GIF预览)
 * - 自动创建与AEP同名的父文件夹
 * - 【新增】在收集完成后自动渲染MP4并转换为GIF
 * - 【新增】操作完成后自动关闭副本，恢复原始工程
 * @param {string} gifBatPath - gif.bat 脚本的绝对路径.
 * @returns {string} 返回操作结果的JSON字符串
 */
function collectActiveComp(gifBatPath) {
    // 1. 触发与检查
    if (!app.project) {
        return JSON.stringify({ success: false, message: "错误：请先打开一个工程。" });
    }
    if (app.project.file === null) {
        return JSON.stringify({ success: false, message: "错误：请先保存您的工程文件。" });
    }
    var activeComp = app.project.activeItem;
    if (!(activeComp instanceof CompItem)) {
        return JSON.stringify({ success: false, message: "错误：请先在时间线或项目面板中选择一个合成。" });
    }
    var compToCollectName = activeComp.name;
    var originalProjectFile = app.project.file;

    app.beginUndoGroup("全自动收集合成并生成预览");
    try {
        // 2. 用户指定位置
        var tempProjectFile_initial = File.saveDialog("请指定收集后工程的保存位置和名称", "Adobe After Effects Project:*.aep");
        
        if (!tempProjectFile_initial) {
            // 用户在保存对话框中点击了取消，直接返回
            app.endUndoGroup();
            return JSON.stringify({ success: false, message: "用户取消了操作。" });
        }
        if (!/\.aep$/i.test(tempProjectFile_initial.name)) {
            tempProjectFile_initial = new File(tempProjectFile_initial.fsName + ".aep");
        }
        
        // --- 3. 创建与AEP同名的父文件夹 ---
        var aepName = decodeURI(tempProjectFile_initial.name).replace(/\.aep$/i, '');
        var parentPath = tempProjectFile_initial.parent;
        var newCollectionFolder = new Folder(parentPath.fsName + "/" + aepName);
        if (!newCollectionFolder.exists) {
            newCollectionFolder.create();
        }
        
        var tempProjectFile = new File(newCollectionFolder.fsName + "/" + tempProjectFile_initial.name);
        var destFolder = newCollectionFolder;

        // 4. 安全处理：创建临时副本工程并精简
        app.project.save(tempProjectFile);
        app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
        app.open(tempProjectFile);

        var compToKeep = null;
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof CompItem && item.name === compToCollectName) {
                compToKeep = item;
                break;
            }
        }

        if (!compToKeep) {
            throw new Error("在副本工程中未能找到原始合成 '" + compToCollectName + "'，操作已中止。");
        }

        app.project.reduceProject([compToKeep]);
        
        // 5. 全自动收集文件
        var footageFolder = new Folder(destFolder.fsName + "/(Footage)");
        if (!footageFolder.exists) { footageFolder.create(); }

        var collectedCount = 0;
        for (var i = 1; i <= app.project.numItems; i++) {
            var item = app.project.item(i);
            if (item instanceof FootageItem && item.mainSource.file) {
                var sourceFile = item.mainSource.file;
                var destFile = new File(footageFolder.fsName + "/" + sourceFile.name);
                if (sourceFile.fsName !== destFile.fsName) { 
                    if (sourceFile.copy(destFile)) {
                        item.replace(destFile);
                        collectedCount++;
                    }
                }
            }
        }
        
        app.project.save(tempProjectFile);

        // --- 6. 【新增】自动渲染并生成GIF预览 ---
        var renderQueue = app.project.renderQueue;
        var renderItem = renderQueue.items.add(compToKeep);
        renderItem.timeSpanType = TimeSpanType.WORK_AREA;
        var outputModule = renderItem.outputModule(1);

        try {
            outputModule.applyTemplate("MP4");
        } catch (e) {
            renderItem.remove();
            throw new Error("应用渲染模板 'MP4' 失败。请检查AE中是否存在该模板。");
        }

        var mp4File = new File(destFolder.fsName + "/" + aepName + ".mp4");
        var gifFile = new File(destFolder.fsName + "/" + aepName + ".gif");

        if (mp4File.exists) { mp4File.remove(); }
        if (gifFile.exists) { gifFile.remove(); }

        outputModule.file = mp4File;
        renderQueue.render();
        
        while (renderItem.status === RQItemStatus.RENDERING || renderItem.status === RQItemStatus.QUEUED) {
            $.sleep(1000); 
        }

        if (renderItem.status !== RQItemStatus.DONE) {
            throw new Error("渲染MP4未成功完成，GIF生成已中止。状态: " + getStatusText(renderItem.status));
        }
        if (!mp4File.exists) {
            throw new Error("渲染成功但未找到输出的MP4文件，无法生成GIF。");
        }

        var batFile = new File(gifBatPath);
        if (!batFile.exists) {
            throw new Error("错误: 未找到 gif.bat 文件于路径: " + gifBatPath);
        }

        var command = '"' + batFile.fsName + '" "' + mp4File.fsName + '"';
        system.callSystem(command);

        var waitCycles = 0;
        var maxWaitSeconds = 120; // 最长等待2分钟
        while (!gifFile.exists && waitCycles < maxWaitSeconds) {
            $.sleep(1000);
            waitCycles++;
        }
        
        if (gifFile.exists && gifFile.length > 0) {
            if (mp4File.exists) { mp4File.remove(); } // 删除临时的MP4
        } else {
            throw new Error("GIF 转换失败，可能超时或出错。请检查gif.bat是否能正常工作。");
        }

        // --- 7. 【新增】恢复原始工程界面 ---
        app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
        app.open(originalProjectFile);

        return JSON.stringify({
            success: true,
            message: "成功！已收集 " + collectedCount + " 个素材，并生成预览GIF。",
            collectedProjectAEP: tempProjectFile.fsName,
            originalProjectAEP: originalProjectFile.fsName 
        });

    } catch (e) {
        // 统一的错误处理：无论在哪一步失败，都尝试恢复原始工程
        try {
            if (app.project.file.fsName !== originalProjectFile.fsName) {
                app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
                app.open(originalProjectFile);
            }
        } catch(err) {
            // 如果恢复都失败了，那就没办法了
        }
        return JSON.stringify({ success: false, message: e.toString() });
    } finally {
        app.endUndoGroup();
    }
}


function checkSelectedLayers() {
    if (app.project && app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
        return 'true';
    }
    return 'false';
}

function importFFXFile() {
    try {
        var ffxFiles = File.openDialog("请选择一个或多个 .ffx 预设文件", "*.ffx", true);
        
        if (ffxFiles && ffxFiles.length > 0) {
            var results = [];
            for (var i = 0; i < ffxFiles.length; i++) {
                var ffxFile = ffxFiles[i];
                results.push({
                    path: ffxFile.fsName,
                    name: decodeURI(ffxFile.name).replace(/\.ffx$/i, '')
                });
            }
            return JSON.stringify(results);
        } else {
            return "canceled";
        }
    } catch(e) {
        return "错误: " + e.toString();
    }
}

function saveCurrentEffectAsFFX() {
    if (!app.project || !(app.project.activeItem instanceof CompItem) || app.project.activeItem.selectedLayers.length === 0) {
        return "错误: 请先在合成中选择一个图层。";
    }
    var layer = app.project.activeItem.selectedLayers[0];
    if (layer.property("ADBE Effect Parade").numProperties === 0) {
        return "错误: 选中的图层上没有任何效果可供保存。";
    }
    try {
        var saveFile = File.saveDialog("选择保存路径", "FFX Files:*.ffx");
        if (saveFile) {
            layer.applyPreset(saveFile);
            return JSON.stringify({
                path: saveFile.fsName,
                name: decodeURI(saveFile.name).replace(/\.ffx$/i, '')
            });
        } else {
            return "canceled";
        }
    } catch (e) {
        return "错误: 保存预设失败。 " + e.toString();
    }
}

function applyFFXEffect(ffxPath) {
    try {
        var presetFile = new File(ffxPath);
        if (!presetFile.exists) { return "错误: 预设文件不存在于 " + ffxPath; }

        var activeComp = app.project.activeItem;
        if (!(activeComp instanceof CompItem) || activeComp.selectedLayers.length === 0) {
            return "错误: 请先选择一个图层。";
        }

        app.beginUndoGroup("Apply FFX Preset");
        var selectedLayers = activeComp.selectedLayers;
        for (var i = 0; i < selectedLayers.length; i++) {
            selectedLayers[i].applyPreset(presetFile);
        }
        app.endUndoGroup();
        return "成功: 效果已应用!";
    } catch (e) {
        return "错误: 应用预设失败. " + e.toString();
    }
}

function saveIconFile(sourcePath, extensionPath) {
    try {
        var sourceFile = new File(sourcePath);
        if (!sourceFile.exists) {
            return "ERROR: Source file not found.";
        }
        
        var destFolder = new Folder(extensionPath + "/ICON");
        if (!destFolder.exists) {
            var success = destFolder.create();
            if (!success) {
                return "ERROR: Could not create ICON folder.";
            }
        }
        
        var newName = "FFX图标_" + sourceFile.displayName;
        var destFile = new File(destFolder.fsName + "/" + newName);
        
        if (destFile.exists) {
            var baseName = newName.substring(0, newName.lastIndexOf('.'));
            var extension = newName.substring(newName.lastIndexOf('.'));
            newName = baseName + "_" + new Date().getTime() + extension;
            destFile = new File(destFolder.fsName + "/" + newName);
        }

        if (sourceFile.copy(destFile)) {
            return "ICON/" + newName;
        } else {
            return "ERROR: File copy failed.";
        }
    } catch(e) {
        return "ERROR: " + e.toString();
    }
}

function selectProjectFolder() {
    try {
        var folder = Folder.selectDialog("请选择一个工程文件夹");
        if (folder) {
            createDebugLog(folder.fsName, "用户选择了工程文件夹");
            return folder.fsName;
        }
        return "canceled";
    } catch (e) {
        createDebugLog(Folder.myDocuments.fsName, "选择文件夹出错: " + e.toString());
        return "错误: " + e.toString();
    }
}

function openFolder(folderPath) {
    try {
        var folder = new Folder(folderPath);
        if (folder.exists) {
            folder.execute();
            return "success";
        }
        return "失败: 文件夹不存在。";
    } catch (e) {
        return "失败: " + e.toString();
    }
}

function renderCompAndMakeGIF(projectFolderPath, gifBatPath, previewFileName) {
    var logFilePath = "";
    try {
        var logFile = new File(projectFolderPath + "/render_log.txt");
        logFilePath = logFile.fsName;
        logFile.open("w");
        logFile.writeln("===== 渲染日志开始 =====");
        logFile.writeln("时间: " + new Date().toLocaleString());
        logFile.close();
    } catch (e) {
        return JSON.stringify({ 
            success: false, 
            message: "无法创建日志文件: " + e.toString()
        });
    }

    try {
        var logFile = new File(logFilePath);
        logFile.open("a");
        
        var comp = app.project.activeItem;
        if (!(comp instanceof CompItem)) {
            var errorMsg = "错误: 没有激活的合成。";
            logFile.writeln(errorMsg); logFile.close();
            return JSON.stringify({ success: false, message: errorMsg });
        }
        
        var renderQueue = app.project.renderQueue;

        for (var i = renderQueue.numItems; i >= 1; i--) {
            if (renderQueue.item(i).status === RQItemStatus.DONE) {
                renderQueue.item(i).remove();
            }
        }

        var renderItem = renderQueue.items.add(comp);
        renderItem.timeSpanType = TimeSpanType.WORK_AREA;

        var outputModule = renderItem.outputModule(1);
        
        try {
            outputModule.applyTemplate("MP4");
        } catch (e) {
            var templateErrorMsg = "错误: 应用渲染模板 'MP4' 失败。请检查AE中是否存在该模板。 " + e.toString();
            logFile.writeln(templateErrorMsg); logFile.close();
            renderItem.remove();
            return JSON.stringify({ success: false, message: templateErrorMsg });
        }

        var mp4FileName = previewFileName + ".mp4";
        var gifFileName = previewFileName + ".gif";
        var mp4File = new File(projectFolderPath + "/" + mp4FileName);
        var gifFile = new File(projectFolderPath + "/" + gifFileName);

        if (mp4File.exists) { mp4File.remove(); }
        if (gifFile.exists) { gifFile.remove(); }

        outputModule.file = mp4File;
        logFile.close();
        renderQueue.render();
        
        while (renderItem.status === RQItemStatus.RENDERING || renderItem.status === RQItemStatus.QUEUED) {
            $.sleep(1000);
        }

        if (renderItem.status !== RQItemStatus.DONE) {
            return JSON.stringify({ success: false, message: "渲染未成功完成。"});
        }
        
        if (!mp4File.exists) {
            return JSON.stringify({ success: false, message: "渲染成功但未找到输出的MP4文件。" });
        }

        var batFile = new File(gifBatPath);
        if (!batFile.exists) {
            return JSON.stringify({ success: false, message: "错误: 未找到gif.bat文件。" });
        }

        var command = '"' + batFile.fsName + '" "' + mp4File.fsName + '"';
        system.callSystem(command);

        var waitCycles = 0;
        var maxWaitSeconds = 120;
        while (!gifFile.exists && waitCycles < maxWaitSeconds) {
            $.sleep(1000);
            waitCycles++;
        }
        
        if (gifFile.exists && gifFile.length > 0) {
            if (mp4File.exists) { mp4File.remove(); }
            return JSON.stringify({ success: true, message: "GIF 动图已生成!", path: gifFile.fsName });
        } else {
            return JSON.stringify({ success: false, message: "GIF 转换失败，可能超时或出错。" });
        }

    } catch (e) {
        return JSON.stringify({ success: false, message: "脚本执行中发生严重错误: " + e.toString() });
    }
}

function getStatusText(statusCode) {
    switch(statusCode) {
        case RQItemStatus.QUEUED: return "已排队";
        case RQItemStatus.UNQUEUED: return "未排队";
        case RQItemStatus.NEEDS_OUTPUT: return "需要输出";
        case RQItemStatus.WILL_CONTINUE: return "将继续";
        case RQItemStatus.RENDERING: return "渲染中";
        case RQItemStatus.USER_STOPPED: return "用户已停止";
        case RQItemStatus.ERR_STOPPED: return "错误已停止"; // Corrected a typo here
        case RQItemStatus.DONE: return "已完成";
        default: return "未知状态 (" + statusCode + ")";
    }
}

// =============================================================================
// 脚本模块功能
// =============================================================================

function scanAeScripts() {
    var scripts = [];
    var seenPaths = {}; 

    function searchInFolder(folder) {
        if (folder && folder.exists) {
            var files = folder.getFiles();
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (file instanceof Folder) {
                } else {
                    if (file.name.match(/\.(jsx|jsxbin)$/i)) {
                        var scriptPath = file.fsName.replace(/\\/g, '/');
                        if (!seenPaths[scriptPath]) {
                             scripts.push({
                                name: decodeURI(file.name).replace(/\.(jsx|jsxbin)$/i, ''),
                                path: scriptPath
                            });
                            seenPaths[scriptPath] = true;
                        }
                    }
                }
            }
        }
    }

    var aeVersion = app.version.match(/^\d+\.\d+/)[0];
    
    var userScriptsFolder = new Folder(Folder.userData.toString() + "/Adobe/After Effects/" + aeVersion + "/Scripts");
    searchInFolder(userScriptsFolder);

    var scriptUIFolder = new Folder(Folder.appPackage.fsName + "/Scripts/ScriptUI Panels");
    searchInFolder(scriptUIFolder);
    
    return JSON.stringify(scripts);
}


// =============================================================================
// 图层扫描器模块
// =============================================================================

function getScanTargetComps() {
    var activeComp = app.project.activeItem;
    if (!activeComp || !(activeComp instanceof CompItem)) return [];

    var initialTargets = [];
    var selectedLayers = activeComp.selectedLayers;

    if (selectedLayers.length > 0) {
        for (var i = 0; i < selectedLayers.length; i++) {
            var layer = selectedLayers[i];
            if (layer.source instanceof CompItem) {
                initialTargets.push(layer.source);
            }
        }
        if (initialTargets.length === 0) {
            initialTargets.push(activeComp);
        }
    } else {
        initialTargets.push(activeComp);
    }

    var finalTargets = [];
    var visited = {};
    function findNestedComps(comp) {
        if (visited[comp.id]) return;
        visited[comp.id] = true;
        finalTargets.push(comp);
        
        for (var i = 1; i <= comp.numLayers; i++) {
            var layer = comp.layer(i);
            if (layer.source instanceof CompItem) {
                findNestedComps(layer.source);
            }
        }
    }

    for (var t = 0; t < initialTargets.length; t++) {
        findNestedComps(initialTargets[t]);
    }

    return finalTargets;
}

function getLayersInContext() {
    try {
        var activeComp = app.project.activeItem;
        if (!activeComp || !(activeComp instanceof CompItem)) {
            return JSON.stringify({ error: "请先激活一个合成窗口。" });
        }
        
        var hadSelection = activeComp.selectedLayers.length > 0;
        var targetComps = getScanTargetComps();

        if (targetComps.length === 0) {
             return JSON.stringify({ error: "请激活一个合成或选择一个预合成图层。" });
        }

        var allLayers = [];
        var scannedCompNames = [];
        
        for (var c = 0; c < targetComps.length; c++) {
            var targetComp = targetComps[c];
            if (hadSelection) {
                scannedCompNames.push(targetComp.name);
            }
            
            for (var i = 1; i <= targetComp.numLayers; i++) {
                var layer = targetComp.layer(i);
                
                if (layer instanceof TextLayer) {
                    allLayers.push({
                        name: layer.name,
                        id: layer.id,
                        compId: targetComp.id,
                        compName: targetComp.name,
                        type: 'text',
                        content: layer.property("Source Text").value.text
                    });
                } 
                else if (layer instanceof AVLayer && layer.source && layer.source instanceof FootageItem && layer.source.mainSource && layer.source.mainSource.isStill) {
                    allLayers.push({
                        name: layer.name,
                        id: layer.id,
                        compId: targetComp.id,
                        compName: targetComp.name,
                        type: 'image'
                    });
                }
            }
        }
        
        var title;
        if (hadSelection && scannedCompNames.length > 0) {
            title = scannedCompNames.join(', ');
        } else {
            title = activeComp.name;
        }

        return JSON.stringify({ 
            success: true, 
            layers: allLayers, 
            compName: title, 
            originCompId: activeComp.id 
        });

    } catch(e) {
        return JSON.stringify({ error: "扫描图层时发生错误: " + e.toString() });
    }
}

function openCompInViewer(compId) {
    try {
        var comp = app.project.itemByID(compId);
        if (comp && comp instanceof CompItem) {
            comp.openInViewer();
            return "success";
        }
        return "错误: 找不到对应的合成。";
    } catch (e) {
        return "错误: " + e.toString();
    }
}

function revealLayer(compId, layerId) {
    try {
        app.beginUndoGroup("Reveal Layer");
        var compToActivate = app.project.itemByID(compId);
        
        if (!compToActivate || !(compToActivate instanceof CompItem)) {
            return "错误: 找不到对应的合成。";
        }

        compToActivate.openInViewer();
        
        for (var i = 1; i <= compToActivate.numLayers; i++) {
            compToActivate.layer(i).selected = false;
        }
        
        var layerToSelect = app.project.layerByID(layerId);
        if (layerToSelect) {
            layerToSelect.selected = true;
        } else {
            return "错误: 在工程中找不到对应ID的图层。";
        }
        app.endUndoGroup();
        return "success";
    } catch (e) {
        return "错误: " + e.toString();
    }
}

function updateTextLayer(compId, layerId, newText) {
    try {
        app.beginUndoGroup("Update Text Layer");
        
        var targetLayer = app.project.layerByID(layerId);
        if (!targetLayer) throw new Error("在工程中找不到对应ID的图层。");

        var textProp = targetLayer.property("Source Text");
        if (!textProp) throw new Error("找不到文本图层的源文本属性。");
        
        var wasLocked = targetLayer.locked;
        if (wasLocked) targetLayer.locked = false;

        if (textProp.expressionEnabled) {
            textProp.expressionEnabled = false;
        }

        var textDoc = textProp.value;
        textDoc.text = newText;
        textProp.setValue(textDoc);
        
        if (wasLocked) targetLayer.locked = true;
        
        app.endUndoGroup();
        return "success";
    } catch (e) {
        try { app.endUndoGroup(); } catch(err) {}
        return "错误: " + e.toString();
    }
}

function debugLayerState(compId, layerId) {
    try {
        var report = "图层状态诊断报告:\n";
        report += "---------------------\n";

        var targetComp = app.project.itemByID(compId);
        if (!targetComp) return report + "错误: 未找到合成 (ID: " + compId + ")";
        report += "合成: " + targetComp.name + " (ID: " + compId + ")\n";

        var targetLayer = app.project.layerByID(layerId);
        if (!targetLayer) return report + "错误: 未找到图层 (ID: " + layerId + ")";
        report += "图层: " + targetLayer.name + " (ID: " + layerId + ")\n";
        
        report += "是否为文本图层: " + (targetLayer instanceof TextLayer) + "\n";
        report += "图层是否被锁定: " + targetLayer.locked + "\n";
        
        var textProp = targetLayer.property("Source Text");
        if (!textProp) {
            report += "源文本属性: 未找到!\n";
        } else {
            report += "源文本属性: 已找到\n";
            report += "   - 是否只读: " + textProp.isReadOnly + "\n";
            report += "   - 是否有关键帧: " + (textProp.numKeys > 0) + "\n";
            report += "   - 是否有表达式: " + (textProp.expression !== "") + "\n";
            report += "   - 表达式是否已启用: " + textProp.expressionEnabled + "\n";
        }
        report += "---------------------\n";
        return report;
    } catch(e) {
        return "生成诊断报告时发生严重错误: " + e.toString();
    }
}

// =============================================================================
// 复用库模块功能 (V2.0 - 统一视图)
// =============================================================================

function checkIfFolder(path) {
    var f = new Folder(path);
    return f.exists.toString();
}

function scanFolderForAssets(folderPath) {
    try {
        var rootFolder = new Folder(folderPath);
        if (!rootFolder.exists) {
            return "ERROR: Folder not found at " + folderPath;
        }

        var contents = rootFolder.getFiles();
        var subfolders = [];
        var assets = {}; 

        for (var i = 0; i < contents.length; i++) {
            var item = contents[i];
            if (item instanceof Folder) {
                subfolders.push({
                    name: decodeURI(item.name),
                    path: item.fsName
                });
            } else if (item instanceof File) {
                var name = decodeURI(item.name);
                var extension = name.substr(name.lastIndexOf('.')).toLowerCase();
                var baseName = name.substr(0, name.lastIndexOf('.'));

                if (!assets[baseName]) {
                    assets[baseName] = { name: baseName };
                }

                if (extension === '.aep') {
                    assets[baseName].aepPath = item.fsName;
                } else if (extension === '.gif') {
                    assets[baseName].gifPath = item.fsName;
                }
            }
        }
        
        var pairedAssets = [];
        for (var key in assets) {
            if (assets[key].aepPath && assets[key].gifPath) {
                 pairedAssets.push({
                     name: assets[key].name,
                     type: 'paired',
                     aepPath: assets[key].aepPath,
                     gifPath: assets[key].gifPath
                 });
            }
        }

        var result = {
            path: rootFolder.fsName,
            subfolders: subfolders,
            assets: pairedAssets
        };

        return JSON.stringify(result);
    } catch (e) {
        return "ERROR: " + e.toString();
    }
}


function importAepIntoActiveComp(aepPath) {
    app.beginUndoGroup("Import Paired AEP");
    try {
        var aepFile = new File(aepPath);
        if (!aepFile.exists) {
            return "File not found: " + aepPath;
        }
        
        var activeComp = app.project.activeItem;
        if (!(activeComp instanceof CompItem)) {
            return "请先在AE中选中一个合成（时间线面板）。";
        }

        var importOptions = new ImportOptions(aepFile);
        importOptions.importAs = ImportAsType.PROJECT;

        var importedProjectFolder = app.project.importFile(importOptions);
        if (!importedProjectFolder) {
             return "导入AEP文件失败，可能文件已损坏。";
        }
        
        var compToAdd = null;
        for(var i=1; i<= importedProjectFolder.numItems; i++){
            if(importedProjectFolder.item(i) instanceof CompItem){
                compToAdd = importedProjectFolder.item(i);
                break;
            }
        }

        if(compToAdd){
            compToAdd.parentFolder = app.project.rootFolder;
            importedProjectFolder.remove();
            activeComp.layers.add(compToAdd);
        } else {
            importedProjectFolder.remove();
            return "导入成功，但在AEP中未找到任何合成。";
        }

        return 'success';
    } catch (e) {
        return e.toString();
    } finally {
        app.endUndoGroup();
    }
}

function importAepToProjectPanel(aepPath) {
    app.beginUndoGroup("Import AEP to Project");
    try {
        var aepFile = new File(aepPath);
        if (!aepFile.exists) {
            return "ERROR: File not found: " + aepPath;
        }

        var importOptions = new ImportOptions(aepFile);
        importOptions.importAs = ImportAsType.PROJECT;

        var importedItem = app.project.importFile(importOptions);
        if (!importedItem) {
             return "ERROR: Failed to import AEP file, it might be corrupt.";
        }
        
        return "success";
    } catch (e) {
        return "ERROR: " + e.toString();
    } finally {
        app.endUndoGroup();
    }
}

// =============================================================================
// 运行自定义脚本模块功能 (V1.0 - 补全缺失函数)
// =============================================================================

function runScriptAndReportErrors(scriptText) {
    try {
        eval(scriptText);
        return "success";
    } catch (e) {
        var event = new CSEvent("com.niuma.scripterror", "APPLICATION");
        event.data = e.toString();
        new CSInterface().dispatchEvent(event);
        return "error: " + e.toString();
    }
}

function saveScriptToFile(scriptContent, fullPath) {
    try {
        var file = new File(fullPath);
        file.encoding = "UTF-8";
        file.open("w");
        file.write(scriptContent);
        file.close();
        return "success";
    } catch (e) {
        return "错误: 保存文件失败。 " + e.toString();
    }
}


// =============================================================================
// 表达式助手模块功能
// =============================================================================

function applyExpressionToSelectedProperties(expressionText) {
    if (!app.project) return "错误: 请先打开一个工程。";
    
    var activeComp = app.project.activeItem;
    if (!(activeComp instanceof CompItem)) {
        return "错误: 请先激活一个合成窗口。";
    }

    var selectedLayers = activeComp.selectedLayers;
    if (selectedLayers.length === 0) {
        return "错误: 请至少选择一个图层。";
    }

    var appliedCount = 0;
    app.beginUndoGroup("Apply Expression");
    try {
        for (var i = 0; i < selectedLayers.length; i++) {
            var layer = selectedLayers[i];
            var selectedProperties = layer.selectedProperties;
            
            if (selectedProperties.length === 0) {
                continue;
            }

            for (var j = 0; j < selectedProperties.length; j++) {
                var prop = selectedProperties[j];
                if (prop.canSetExpression) {
                    try {
                        prop.expression = expressionText;
                        appliedCount++;
                    } catch(err) {
                    }
                }
            }
        }
        
        if (appliedCount === 0) {
            return "提示: 请先在时间线中选择一个或多个【具体】的属性（如“位置”、“不透明度”等），而不仅仅是选择图层。";
        }
        
        return "success";

    } catch (e) {
        return "错误: 应用表达式失败。 " + e.toString();
    } finally {
        app.endUndoGroup();
    }
}

// =============================================================================
// 【新增】函数，用于 page7 图片保存
// =============================================================================
/**
 * 将外部文件复制到扩展的特定子文件夹中
 */
function copyFileToExtensionAssetFolder(sourcePath, extensionPath, subfolder, newName) {
    try {
        var sourceFile = new File(sourcePath);
        if (!sourceFile.exists) {
            return "ERROR: Source file not found.";
        }

        var destFolder = new Folder(extensionPath + '/' + subfolder);
        if (!destFolder.exists) {
            destFolder.create();
        }

        var destFile = new File(destFolder.fsName + '/' + newName);
        
        if (destFile.exists) {
            destFile.remove(); 
        }

        if (sourceFile.copy(destFile)) {
            return subfolder + '/' + newName; 
        } else {
            return "ERROR: File copy failed.";
        }
    } catch (e) {
        return "ERROR: " + e.toString();
    }
}