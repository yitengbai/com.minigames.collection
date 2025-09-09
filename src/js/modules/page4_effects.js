import { showToast, generateId, openModal, closeModal, showCustomPrompt } from '../shared/ui.js';
import { EFFECTS_KEY, PROJECT_FOLDER_KEY } from '../shared/constants.js';

// 模块级别的状态变量
let currentEffectId = null;
let showOnlyFavorites = false;

/**
 * 初始化预设页面 (Page 4) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage4(csInterface) {

    // --- DOM 元素获取 ---
    const effectsContainer = document.getElementById('effectsContainer');
    const effectSearchInput = document.getElementById('effectSearchInput');
    const favoriteToggle = document.getElementById('favoriteToggle');
    const previewContainer = document.getElementById('previewContainer');
    const preRenderBtn = document.getElementById('preRenderBtn');
    const openProjectBtn = document.getElementById('openProjectBtn');
    const importFfxBtnBottom = document.getElementById('importFfxBtnBottom');
    const saveFfxBtnBottom = document.getElementById('saveFfxBtnBottom');

    // 设置面板的 DOM 元素
    const effectSettingsModal = document.getElementById('effectSettingsModal');
    const effectSettingsModalContent = document.getElementById('effectSettingsModalContent');
    const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
    const effectNameInput = document.getElementById('effectNameInput');
    const effectDescInput = document.getElementById('effectDescInput');
    const iconSelection = document.getElementById('iconSelection');
    const customIconDropzone = document.getElementById('customIconDropzone');
    const saveEffectSettingsBtn = document.getElementById('saveEffectSettingsBtn');

    // --- 内部辅助函数 ---

    function getEffects() {
        return JSON.parse(localStorage.getItem(EFFECTS_KEY) || '[]');
    }

    function saveEffects(effects) {
        localStorage.setItem(EFFECTS_KEY, JSON.stringify(effects));
    }

    function renderEffectList() {
        const allEffects = getEffects();
        const searchTerm = effectSearchInput.value.toLowerCase();
        let filteredEffects = allEffects;

        if (showOnlyFavorites) {
            filteredEffects = filteredEffects.filter(effect => effect.isFavorite);
        }

        if (searchTerm) {
            filteredEffects = filteredEffects.filter(effect =>
                effect.name.toLowerCase().includes(searchTerm) ||
                (effect.description && effect.description.toLowerCase().includes(searchTerm))
            );
        }

        effectsContainer.innerHTML = '';
        if (filteredEffects.length === 0) {
            effectsContainer.innerHTML = '<div class="text-center py-4 text-gray-500">未找到匹配的效果</div>';
            return;
        }

        filteredEffects.forEach(effect => {
            const effectBar = document.createElement('div');
            const isSelected = currentEffectId === effect.id;
            effectBar.className = `effect-item ${isSelected ? 'effect-item-selected' : ''}`;
            effectBar.dataset.id = effect.id;

            const iconContainer = document.createElement('div');
            iconContainer.className = 'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-dark-300';
            iconContainer.dataset.action = 'show-settings';

            if (effect.customIcon && effect.customIcon.startsWith('ICON')) {
                const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
                const iconPath = `file:///${extensionPath}/${effect.customIcon}`;
                iconContainer.innerHTML = `<img src="${iconPath}" class="w-8 h-8 object-cover rounded pointer-events-none">`;
            } else {
                const icons = ['fa-bolt', 'fa-lightbulb-o', 'fa-refresh', 'fa-paint-brush', 'fa-magic', 'fa-star'];
                const iconClass = icons[effect.iconIndex || 0];
                iconContainer.innerHTML = `<i class="fa ${iconClass} text-primary text-xl pointer-events-none"></i>`;
            }

            const infoContainer = document.createElement('div');
            infoContainer.className = 'flex-1 ml-3 mr-2 overflow-hidden';
            infoContainer.innerHTML = `
                <div class="font-medium text-white truncate">${effect.name}</div>
                <div class="text-sm text-gray-400 truncate">${effect.description || '无描述'}</div>
            `;

            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'flex items-center flex-shrink-0';
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = `btn-icon ${effect.isFavorite ? 'text-yellow-500 bg-yellow-500/10' : 'text-gray-400 hover:bg-dark-300'}`;
            favoriteBtn.innerHTML = `<i class="fa ${effect.isFavorite ? 'fa-star' : 'fa-star-o'}"></i>`;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon text-gray-400 hover:bg-dark-300';
            deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

            actionsContainer.appendChild(favoriteBtn);
            actionsContainer.appendChild(deleteBtn);
            effectBar.appendChild(iconContainer);
            effectBar.appendChild(infoContainer);
            effectBar.appendChild(actionsContainer);

            // 事件绑定
            favoriteBtn.onclick = (e) => { e.stopPropagation(); toggleFavorite(effect.id); };
            deleteBtn.onclick = (e) => { e.stopPropagation(); showDeleteConfirm(effect.id); };
            effectBar.addEventListener('click', (e) => {
                if (e.target.dataset.action === 'show-settings' || e.target.parentElement.dataset.action === 'show-settings') {
                    e.stopPropagation();
                    showSettingsPanel(effect.id);
                } else {
                    selectEffect(effect.id);
                }
            });
            effectBar.addEventListener('dblclick', () => applyEffectToLayer(effect.id));

            effectsContainer.appendChild(effectBar);
        });
    }

    function selectEffect(id) {
        const effect = getEffects().find(e => e.id === id);
        if (!effect) return;

        currentEffectId = id;
        if (effect.previewGifPath) {
            const gifPath = effect.previewGifPath.replace(/\\/g, '/');
            previewContainer.className = 'bg-dark-500 rounded-lg h-64 p-0';
            previewContainer.innerHTML = `<img src="file:///${gifPath}?t=${new Date().getTime()}" class="w-full h-full object-contain rounded-lg" alt="GIF Preview">`;
        } else {
            previewContainer.className = 'bg-dark-500 rounded-lg p-6 h-64 flex items-center justify-center';
            previewContainer.innerHTML = `<p class="text-white font-bold text-xl">预览元素</p>`;
        }
        renderEffectList();
    }

    function showSettingsPanel(id) {
        selectEffect(id); // 确保当前选中项正确
        const effect = getEffects().find(e => e.id === id);
        if (!effect) return;

        effectNameInput.value = effect.name;
        effectDescInput.value = effect.description || '';
        document.querySelectorAll('#iconSelection > div').forEach(div => div.classList.remove('icon-selected'));
        const selectedIcon = document.querySelectorAll('#iconSelection > div')[effect.iconIndex || 0];
        if (selectedIcon) selectedIcon.classList.add('icon-selected');
        
        if (effect.customIcon && effect.customIcon.startsWith('ICON')) {
            const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
            const iconPath = `file:///${extensionPath}/${effect.customIcon}`;
            customIconDropzone.innerHTML = `<img src="${iconPath}" class="w-full h-full object-cover rounded-lg">`;
        } else {
            customIconDropzone.innerHTML = '<i class="fa fa-upload text-gray-400 mb-2 text-xl"></i><p class="text-xs text-gray-400 leading-tight">点击或拖放</p>';
        }
        openModal(effectSettingsModal, effectSettingsModalContent);
    }
    
    function preRenderCurrentComposition() {
        const effect = getEffects().find(e => e.id === currentEffectId);
        if (!effect) return;

        const previewFileName = `${effect.name}_预览`;
        let projectFolder = localStorage.getItem(PROJECT_FOLDER_KEY);

        function startProcess(folderPath) {
            showToast('开始渲染并转换为GIF...', 'info');
            const gifBatPath = csInterface.getSystemPath('extension') + '/js/gif.bat';
            const sanitizedFolderPath = folderPath.replace(/\\/g, '/');
            const sanitizedBatPath = gifBatPath.replace(/\\/g, '/');
            const script = `renderCompAndMakeGIF(${JSON.stringify(sanitizedFolderPath)}, ${JSON.stringify(sanitizedBatPath)}, ${JSON.stringify(previewFileName)})`;
            
            csInterface.evalScript(script, (result) => {
                try {
                    const res = JSON.parse(result);
                    if (res.success) {
                        showToast(res.message, 'success');
                        const gifPath = res.path.replace(/\\/g, '/');
                        previewContainer.className = 'bg-dark-500 rounded-lg h-64 p-0';
                        previewContainer.innerHTML = `<img src="file:///${gifPath}?t=${new Date().getTime()}" class="w-full h-full object-contain rounded-lg" alt="GIF Preview">`;
                        
                        let allEffects = getEffects();
                        const effectIndex = allEffects.findIndex(e => e.id === currentEffectId);
                        if (effectIndex !== -1) {
                            allEffects[effectIndex].previewGifPath = res.path;
                            saveEffects(allEffects);
                            showToast('预览已与效果关联!', 'success');
                        }
                    } else {
                        showToast(res.message || '预渲染失败，请检查日志。', 'error');
                    }
                } catch (e) {
                    showToast('GIF转换脚本执行失败: ' + result, 'error');
                }
            });
        }

        if (!projectFolder) {
            csInterface.evalScript('selectProjectFolder()', (selectedFolder) => {
                if (selectedFolder && selectedFolder !== 'canceled') {
                    localStorage.setItem(PROJECT_FOLDER_KEY, selectedFolder);
                    startProcess(selectedFolder);
                } else {
                    showToast('您取消了选择，操作中止。', 'info');
                }
            });
        } else {
            startProcess(projectFolder);
        }
    }

    function saveEffectSettings() {
        if (!currentEffectId) return;
        const effects = getEffects();
        const index = effects.findIndex(e => e.id === currentEffectId);
        if (index === -1) return;

        effects[index].name = effectNameInput.value.trim() || '未命名效果';
        effects[index].description = effectDescInput.value.trim();
        saveEffects(effects);
        renderEffectList();
        showToast('效果设置已更新', 'success');
        closeModal(effectSettingsModal, effectSettingsModalContent);
    }
    
    function toggleFavorite(id) {
        const effects = getEffects();
        const index = effects.findIndex(e => e.id === id);
        if (index !== -1) {
            effects[index].isFavorite = !effects[index].isFavorite;
            saveEffects(effects);
            renderEffectList();
            showToast(effects[index].isFavorite ? '已添加到收藏' : '已取消收藏', 'info');
        }
    }

    function showDeleteConfirm(id) {
        showCustomPrompt({
            title: '确认删除效果',
            body: '<p>你确定要删除这个效果吗？此操作无法撤销。</p>',
            confirmText: '删除',
            confirmClass: 'btn-danger'
        }).then(() => {
            let effects = getEffects().filter(e => e.id !== id);
            saveEffects(effects);
            if (currentEffectId === id) {
                currentEffectId = null;
                previewContainer.className = 'bg-dark-500 rounded-lg p-6 h-64 flex items-center justify-center';
                previewContainer.innerHTML = `<p class="text-white font-bold text-xl">预览元素</p>`;
            }
            renderEffectList();
            showToast('效果已删除', 'info');
        }).catch(() => {});
    }
    
    function importFfxFile() {
        csInterface.evalScript('importFFXFile()', (result) => {
            if (result && result !== 'canceled' && result.trim().startsWith('[')) {
                try {
                    const ffxDataArray = JSON.parse(result);
                    if (ffxDataArray.length === 0) return;
                    const effects = getEffects();
                    ffxDataArray.forEach(ffxData => {
                        effects.push({
                            id: generateId(),
                            name: ffxData.name || '导入的FFX效果',
                            description: '',
                            iconIndex: 0,
                            customIcon: null,
                            ffxPath: ffxData.path,
                            isFavorite: false,
                            previewGifPath: null
                        });
                    });
                    saveEffects(effects);
                    renderEffectList();
                    showToast(`${ffxDataArray.length} 个FFX文件导入成功`, 'success');
                } catch (e) {
                    showToast('FFX文件列表解析失败', 'error');
                }
            } else if (result && result !== 'canceled') {
                showToast('导入失败: ' + result, 'error');
            }
        });
    }

    function saveCurrentEffectAsFfx() {
        csInterface.evalScript('saveCurrentEffectAsFfx()', (result) => {
            if (result && result !== 'canceled' && result.indexOf('{') === 0) {
                try {
                    const ffxData = JSON.parse(result);
                    const effects = getEffects();
                    const newEffectId = generateId();
                    effects.push({
                        id: newEffectId,
                        name: ffxData.name || '新保存的效果',
                        description: '',
                        iconIndex: 0,
                        customIcon: null,
                        ffxPath: ffxData.path,
                        isFavorite: false,
                        previewGifPath: null
                    });
                    saveEffects(effects);
                    renderEffectList();
                    selectEffect(newEffectId);
                    showToast('效果已保存并添加到列表', 'success');
                } catch (e) {
                    showToast('保存FFX后添加至列表失败', 'error');
                }
            } else if (result && result !== 'canceled') {
                showToast(result, 'error');
            }
        });
    }

    function applyEffectToLayer(effectId) {
        const effect = getEffects().find(e => e.id === effectId);
        if (!effect || !effect.ffxPath) {
            showToast('效果数据或路径无效', 'error');
            return;
        }
        const sanitizedPath = effect.ffxPath.replace(/\\/g, '/');
        csInterface.evalScript('checkSelectedLayers()', (hasSelected) => {
            if (hasSelected === 'true') {
                const script = `applyFFXEffect(${JSON.stringify(sanitizedPath)})`;
                csInterface.evalScript(script, (applyResult) => {
                    if (applyResult && applyResult.includes('成功')) {
                        showToast('效果已应用到选中图层', 'success');
                    } else {
                        showToast('应用效果失败: ' + applyResult, 'error');
                    }
                });
            } else {
                showToast('请先选择一个图层', 'error');
            }
        });
    }

    function handleCustomIconUpload(file) {
        if (!currentEffectId) {
            showToast('请先在左侧列表中选择一个要设置图标的效果', 'error');
            return;
        }
        if (!file.type.match('image.*')) {
            showToast('请上传图片文件', 'error');
            return;
        }
        const sourcePath = file.path;
        if (!sourcePath) {
            showToast('无法获取文件路径，浏览器可能不支持', 'error');
            return;
        }
        const extensionPath = csInterface.getSystemPath('extension');
        const newFileName = `custom_icon_${currentEffectId}.${file.name.split('.').pop()}`;
        const script = `copyFileToExtensionAssetFolder(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)}, "ICON", ${JSON.stringify(newFileName)})`;
        
        csInterface.evalScript(script, (newRelativePath) => {
            if (newRelativePath && !newRelativePath.startsWith('ERROR')) {
                const effects = getEffects();
                const index = effects.findIndex(e => e.id === currentEffectId);
                if (index !== -1) {
                    effects[index].customIcon = newRelativePath;
                    saveEffects(effects);
                    showSettingsPanel(currentEffectId);
                    renderEffectList();
                    showToast('自定义图标已保存', 'success');
                }
            } else {
                showToast('保存自定义图标失败: ' + newRelativePath, 'error');
            }
        });
    }

    function initIconSelection() {
        const iconElements = document.querySelectorAll('#iconSelection > div');
        iconElements.forEach((el, index) => {
            el.addEventListener('click', () => {
                if (!currentEffectId) {
                    showToast('请先选择一个效果', 'error');
                    return;
                };
                iconElements.forEach(e => e.classList.remove('icon-selected'));
                el.classList.add('icon-selected');
                
                const effects = getEffects();
                const effectIndex = effects.findIndex(e => e.id === currentEffectId);
                if (effectIndex !== -1) {
                    effects[effectIndex].iconIndex = index;
                    effects[effectIndex].customIcon = null; // 清除自定义图标
                    saveEffects(effects);
                    showSettingsPanel(currentEffectId);
                    renderEffectList();
                }
            });
        });
    }

    function openProjectFolder(isAlt) {
        if (isAlt) {
            csInterface.evalScript('selectProjectFolder()', (selectedFolder) => {
                if (selectedFolder && selectedFolder !== 'canceled') {
                    localStorage.setItem(PROJECT_FOLDER_KEY, selectedFolder);
                    showToast('工程文件夹位置已更新！', 'success');
                }
            });
        } else {
            const projectFolder = localStorage.getItem(PROJECT_FOLDER_KEY);
            if (projectFolder) {
                csInterface.evalScript(`openFolder(${JSON.stringify(projectFolder)})`, (result) => {
                    if (!result || result.includes('失败')) {
                        showToast('打开文件夹失败。', 'error');
                    }
                });
            } else {
                showToast('请先点击一次“预渲染”来设置工程文件夹。', 'error');
            }
        }
    }


    // --- 事件监听器 ---
    importFfxBtnBottom.addEventListener('click', importFfxFile);
    saveFfxBtnBottom.addEventListener('click', saveCurrentEffectAsFfx);
    favoriteToggle.addEventListener('click', () => {
        showOnlyFavorites = !showOnlyFavorites;
        favoriteToggle.innerHTML = showOnlyFavorites ?
            '<i class="fa fa-star mr-2"></i>显示全部' :
            '<i class="fa fa-star-o mr-2"></i>只看收藏';
        if(showOnlyFavorites) favoriteToggle.classList.add('text-yellow-400');
        else favoriteToggle.classList.remove('text-yellow-400');
        renderEffectList();
    });
    effectSearchInput.addEventListener('input', renderEffectList);
    saveEffectSettingsBtn.addEventListener('click', saveEffectSettings);
    preRenderBtn.addEventListener('click', () => {
        if (!currentEffectId) {
            showToast('请先在左侧选择一个效果来为其创建预览', 'error');
            return;
        }
        preRenderCurrentComposition();
    });
    openProjectBtn.addEventListener('click', (e) => openProjectFolder(e.altKey));
    closeSettingsModalBtn.addEventListener('click', () => closeModal(effectSettingsModal, effectSettingsModalContent));
    effectSettingsModal.addEventListener('click', e => {
        if (e.target === effectSettingsModal) closeModal(effectSettingsModal, effectSettingsModalContent);
    });

    // 自定义图标拖放事件
    customIconDropzone.addEventListener('click', () => {
        if (!currentEffectId) {
            showToast('请先选择一个效果', 'error');
            return;
        }
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            if (e.target.files && e.target.files[0]) handleCustomIconUpload(e.target.files[0]);
        };
        fileInput.click();
    });
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        customIconDropzone.addEventListener(eventName, e => { e.preventDefault(); e.stopPropagation(); }, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        customIconDropzone.addEventListener(eventName, () => customIconDropzone.classList.add('border-primary'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        customIconDropzone.addEventListener(eventName, () => customIconDropzone.classList.remove('border-primary'), false);
    });
    customIconDropzone.addEventListener('drop', (e) => {
        if (!currentEffectId) {
            showToast('请先选择一个效果', 'error');
            return;
        }
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleCustomIconUpload(e.dataTransfer.files[0]);
        }
    }, false);


    // --- 模块初始化调用 ---
    renderEffectList();
    initIconSelection();
}