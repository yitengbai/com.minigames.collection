import { showToast } from '../shared/ui.js';
import { QUICK_ACCESS_FOLDERS_KEY, LIBRARY_FAVORITES_KEY } from '../shared/constants.js';

// 模块级别的状态变量
let libraryNavHistory = [];
let showOnlyLibraryFavorites = false;

/**
 * 初始化复用库 (Page 2) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage2(csInterface) {

    // --- DOM 元素获取 ---
    const collectCompBtn = document.getElementById('collectCompBtn');
    const libraryFavoriteToggle = document.getElementById('libraryFavoriteToggle');
    const folderDropZone = document.getElementById('folderDropZone');
    const quickAccessFolders = document.getElementById('quickAccessFolders');
    const libraryBackBtn = document.getElementById('libraryBackBtn');
    const currentPathInput = document.getElementById('currentPathInput');
    const addCurrentPathToQuickAccessBtn = document.getElementById('addCurrentPathToQuickAccessBtn');
    const openPathBtn = document.getElementById('openPathBtn');
    const folderGrid = document.getElementById('folderContentGrid');
    const zoomSlider = document.getElementById('zoomSlider');

    // --- 内部辅助函数 ---

    function getLibraryFavorites() {
        try {
            return JSON.parse(localStorage.getItem(LIBRARY_FAVORITES_KEY) || '[]');
        } catch (e) {
            return [];
        }
    }

    function saveLibraryFavorites(favorites) {
        localStorage.setItem(LIBRARY_FAVORITES_KEY, JSON.stringify(favorites));
    }

    function toggleLibraryFavorite(aepPath, buttonElement) {
        let favorites = getLibraryFavorites();
        const isFavorite = favorites.includes(aepPath);

        if (isFavorite) {
            favorites = favorites.filter(p => p !== aepPath);
            buttonElement.classList.remove('text-yellow-400');
            buttonElement.innerHTML = '<i class="fa fa-star-o"></i>';
        } else {
            favorites.push(aepPath);
            buttonElement.classList.add('text-yellow-400');
            buttonElement.innerHTML = '<i class="fa fa-star"></i>';
        }
        saveLibraryFavorites(favorites);
        
        if (showOnlyLibraryFavorites && isFavorite) {
            const itemToHide = buttonElement.closest('.asset-preview-item, .aep-only-item');
            if(itemToHide) {
                itemToHide.style.display = 'none';
            }
        }
    }

    function getQuickAccessFolders() {
        try {
            return JSON.parse(localStorage.getItem(QUICK_ACCESS_FOLDERS_KEY) || '[]');
        } catch(e) {
            return [];
        }
    }
    
    function saveQuickAccessFolders(folders) {
        localStorage.setItem(QUICK_ACCESS_FOLDERS_KEY, JSON.stringify(folders));
    }

    function addPathToQuickAccess(path) {
        if (!path || path === "请从左侧选择文件夹，或在此输入路径后按回车") {
            showToast('无效的文件夹路径', 'error');
            return;
        }
        csInterface.evalScript(`checkIfFolder(${JSON.stringify(path)})`, (isFolder) => {
            if(isFolder === 'true') {
                let folders = getQuickAccessFolders();
                if (!folders.includes(path)) {
                    folders.push(path);
                    saveQuickAccessFolders(folders);
                    renderQuickAccessFolders();
                    showToast('文件夹已添加至快速访问', 'success');
                } else {
                    showToast('该文件夹已在快速访问列表中', 'info');
                }
            } else {
                showToast('请拖放一个文件夹，而不是文件', 'error');
            }
       });
    }

    function renderQuickAccessFolders() {
        const folders = getQuickAccessFolders();
        quickAccessFolders.innerHTML = '';
        if (folders.length === 0) {
            quickAccessFolders.innerHTML = `<div class="text-center py-8 text-gray-500">
                <p>快速访问列表为空</p>
                <p class="text-xs mt-1">请拖放文件夹到上方区域</p>
            </div>`;
            return;
        }
        
        folders.forEach(folderPath => {
            const folderName = folderPath.split(/[\\/]/).pop();
            const item = document.createElement('div');
            item.className = 'folder-item p-2 justify-between';
            item.dataset.path = folderPath;
            
            const titleWrapper = document.createElement('div');
            titleWrapper.className = 'flex items-center overflow-hidden';
            titleWrapper.innerHTML = `<i class="fa fa-folder text-yellow-500/80"></i><span class="folder-name">${folderName}</span>`;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon w-6 h-6 text-gray-500 hover:text-red-500 flex-shrink-0';
            deleteBtn.innerHTML = '<i class="fa fa-trash-o text-xs"></i>';
            deleteBtn.title = '移除此快速访问文件夹';
            
            deleteBtn.onclick = function(e) {
                e.stopPropagation();
                let currentFolders = getQuickAccessFolders();
                currentFolders = currentFolders.filter(p => p !== folderPath);
                saveQuickAccessFolders(currentFolders);
                renderQuickAccessFolders();
            };

            item.appendChild(titleWrapper);
            item.appendChild(deleteBtn);

            item.onclick = function() {
                document.querySelectorAll('.folder-item.active').forEach(active => active.classList.remove('active'));
                item.classList.add('active');
                libraryNavHistory = [];
                displayFolderContents(folderPath);
            };

            quickAccessFolders.appendChild(item);
        });
    }
    
    function displayFolderContents(folderPath, isNewNavigation = true) {
        if (!folderPath || folderPath === "请从左侧选择文件夹，或在此输入路径后按回车") {
            return;
        }

        if (isNewNavigation) {
            if (libraryNavHistory[libraryNavHistory.length - 1] !== folderPath) {
                libraryNavHistory.push(folderPath);
            }
        }
        libraryBackBtn.classList.toggle('hidden', libraryNavHistory.length <= 1);

        currentPathInput.value = folderPath;
        currentPathInput.title = folderPath;

        folderGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500"><i class="fa fa-spinner fa-spin fa-2x"></i></div>';

        csInterface.evalScript(`scanFolderForAssets(${JSON.stringify(folderPath)})`, (result) => {
            if (!result || result.startsWith('ERROR:')) {
                showToast(`加载文件夹内容失败: ${result}`, 'error');
                folderGrid.innerHTML = `<div class="col-span-full text-center py-10 text-red-500">${result}</div>`;
                return;
            }
            try {
                const data = JSON.parse(result || '{}');
                folderGrid.innerHTML = '';

                let assetsToRender = Array.isArray(data.assets) ? data.assets : [];
                const favorites = getLibraryFavorites();

                if (showOnlyLibraryFavorites) {
                    assetsToRender = assetsToRender.filter(asset => favorites.includes(asset.aepPath));
                }

                if ((!data.subfolders || data.subfolders.length === 0) && assetsToRender.length === 0) {
                    folderGrid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500">此文件夹为空或无匹配项</div>';
                }

                (data.subfolders || []).forEach(folder => {
                    const folderEl = document.createElement('div');
                    folderEl.className = 'content-folder-item';
                    folderEl.innerHTML = `<i class="fa fa-folder"></i><span class="folder-name">${folder.name}</span>`;
                    folderEl.ondblclick = () => displayFolderContents(folder.path);
                    folderGrid.appendChild(folderEl);
                });

                assetsToRender.forEach(asset => {
                    let assetEl = null;

                    if (asset.type === 'paired' && asset.gifPath) {
                        assetEl = document.createElement('div');
                        assetEl.className = 'asset-preview-item group';
                        const imgEl = document.createElement('img');
                        imgEl.src = `file:///${asset.gifPath.replace(/\\/g, '/')}`;
                        imgEl.alt = asset.name || '';
                        imgEl.className = 'object-cover';
                        imgEl.onload = () => {
                            try {
                                if (imgEl.naturalHeight > imgEl.naturalWidth) {
                                    assetEl.classList.add('portrait');
                                }
                            } catch (e) {}
                        };

                        const nameEl = document.createElement('div');
                        nameEl.className = 'asset-name';
                        nameEl.textContent = asset.name || '';

                        const favoriteBtn = document.createElement('button');
                        favoriteBtn.className = 'asset-favorite-btn text-gray-300';
                        const isFav = favorites.includes(asset.aepPath);
                        if (isFav) {
                            favoriteBtn.classList.add('text-yellow-400');
                            favoriteBtn.innerHTML = `<i class="fa fa-star"></i>`;
                        } else {
                            favoriteBtn.innerHTML = `<i class="fa fa-star-o"></i>`;
                        }
                        favoriteBtn.title = '收藏/取消收藏';
                        favoriteBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            toggleLibraryFavorite(asset.aepPath, favoriteBtn);
                        });
                        
                        assetEl.appendChild(imgEl);
                        assetEl.appendChild(nameEl);
                        assetEl.appendChild(favoriteBtn);

                    } else if (asset.type === 'aep_only') {
                        assetEl = document.createElement('div');
                        assetEl.className = 'aep-only-item content-file-item group';
                    }

                    if (assetEl) {
                        assetEl.dataset.aepPath = asset.aepPath || '';
                        assetEl.ondblclick = () => {
                            const aepPathToImport = assetEl.dataset.aepPath;
                            showToast(`正在导入 ${asset.name || ''}...`, 'info');
                            csInterface.evalScript(`importAepToProjectPanel(${JSON.stringify(aepPathToImport)})`, (importResult) => {
                                if (importResult && importResult.startsWith('ERROR:')) {
                                    showToast(importResult, 'error');
                                } else {
                                    showToast('导入已触发', 'success');
                                }
                            });
                        };
                        folderGrid.appendChild(assetEl);
                    }
                });

            } catch (e) {
                showToast('解析文件夹数据失败', 'error');
                console.error(e, result);
            }
        });
    }

    // --- 事件监听器 ---

    if (zoomSlider && folderGrid) {
        const baseWidth = 180; 
        folderGrid.style.setProperty('--item-min-width', `${baseWidth}px`);
        
        zoomSlider.addEventListener('input', function () {
            const newMinWidth = baseWidth * (this.value / 100);
            folderGrid.style.setProperty('--item-min-width', `${newMinWidth}px`);
        });
    }

    folderDropZone.addEventListener('dragenter', (e) => { e.preventDefault(); e.stopPropagation(); folderDropZone.classList.add('dropzone-active'); });
    folderDropZone.addEventListener('dragover', (e) => { e.preventDefault(); e.stopPropagation(); });
    folderDropZone.addEventListener('dragleave', (e) => { e.preventDefault(); e.stopPropagation(); folderDropZone.classList.remove('dropzone-active'); });
    folderDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        folderDropZone.classList.remove('dropzone-active');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            addPathToQuickAccess(files[0].path);
        }
    });

    currentPathInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const path = currentPathInput.value.trim();
            if (path) {
                displayFolderContents(path);
            }
        }
    });

    openPathBtn.addEventListener('click', () => {
        const path = currentPathInput.value;
        if (path && path !== "请从左侧选择文件夹，或在此输入路径后按回车") {
            csInterface.evalScript(`openFolder(${JSON.stringify(path)})`);
        }
    });
    
    addCurrentPathToQuickAccessBtn.addEventListener('click', () => {
         const path = currentPathInput.value;
         addPathToQuickAccess(path);
    });
    
    collectCompBtn.addEventListener('click', () => {
        const extensionRoot = csInterface.getSystemPath('extension');
        const gifBatPath = extensionRoot + "/js/gif.bat";
        const safePath = gifBatPath.replace(/\\/g, '/');
        const script = 'collectActiveComp("' + safePath + '")';

        csInterface.evalScript(script, (result) => {
            try {
                const res = JSON.parse(result);
                if (res.success) {
                    showToast(res.message, 'success');
                } else {
                    showToast(res.message, 'error');
                }
            } catch (e) {
                console.error("解析 collectActiveComp 返回结果失败:", e, result);
                showToast('脚本执行失败，无法解析返回数据。', 'error');
            }
        });
    });

    libraryFavoriteToggle.addEventListener('click', () => {
        showOnlyLibraryFavorites = !showOnlyLibraryFavorites;
        libraryFavoriteToggle.innerHTML = showOnlyLibraryFavorites ?
            '<i class="fa fa-star mr-2"></i>显示全部' :
            '<i class="fa fa-star-o mr-2"></i>只看收藏';
        if(showOnlyLibraryFavorites) {
            libraryFavoriteToggle.classList.add('text-yellow-400');
        } else {
            libraryFavoriteToggle.classList.remove('text-yellow-400');
        }
        const currentPath = currentPathInput.value;
        if(currentPath && currentPath !== "请从左侧选择文件夹，或在此输入路径后按回车"){
            displayFolderContents(currentPath, false);
        }
    });

    libraryBackBtn.addEventListener('click', function() {
        if (libraryNavHistory.length > 1) {
            libraryNavHistory.pop();
            var parentPath = libraryNavHistory[libraryNavHistory.length - 1];
            displayFolderContents(parentPath, false);
        }
    });

    // --- 模块初始化调用 ---
    renderQuickAccessFolders();
}