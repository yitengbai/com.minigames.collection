document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeExtension, 200);
});

function initializeExtension() {
    
    const zoomSlider = document.getElementById('zoomSlider');
    const folderGrid = document.getElementById('folderContentGrid');
    if (zoomSlider && folderGrid) {
        const baseWidth = 180; 
        folderGrid.style.setProperty('--item-min-width', `${baseWidth}px`);
        
        zoomSlider.addEventListener('input', function () {
            const newMinWidth = baseWidth * (this.value / 100);
            folderGrid.style.setProperty('--item-min-width', `${newMinWidth}px`);
        });
    }

    'use strict';
    
    let csInterface;

    try {
        csInterface = new CSInterface();
        csInterface.addEventListener("com.niuma.scripterror", function (event) {
            const errorMessage = event.data;
            showToast(`脚本执行出错: ${errorMessage}`, 'error');
            aiPromptInput.value = `我的脚本运行出错了，请帮我看看是什么问题，并修复它。\n\n错误信息：\n${errorMessage}`;
            aiPromptInput.focus();
            document.querySelector('a[href="#page3"]').click();
        });

    } catch (e) {
        console.error("CSInterface初始化失败:", e);
        alert("关键组件CSInterface初始化失败，插件无法运行。");
        return; 
    }
    
    try {
        const extensionRoot = csInterface.getSystemPath('extension');
        const mainJSXPath = extensionRoot + '/JS/main.jsx';
        const sanitizedPath = mainJSXPath.replace(/\\/g, '/');
        csInterface.evalScript('$.evalFile("' + sanitizedPath + '")');
    } catch (e) {
        console.error("加载 main.jsx 失败:", e);
    }
    
    const allNavLinks = document.querySelectorAll('.nav-link');
    const allPages = document.querySelectorAll('.page');
    const toastContainer = document.getElementById('toastContainer');
    const createDefaultFoldersBtn = document.getElementById('createDefaultFoldersBtn');
    const openFolderPanelBtn = document.getElementById('openFolderPanelBtn');
    const organizeProjectBtn = document.getElementById('organizeProjectBtn');
    const organizeExcludeInput = document.getElementById('organizeExcludeInput');
    const scriptSearchInput = document.getElementById('scriptSearchInput');
    const addScriptGroupBtn = document.getElementById('addScriptGroupBtn');
    const scriptListContainer = document.getElementById('scriptListContainer');
    const scriptFavoritesBar = document.getElementById('scriptFavoritesBar');
    const scriptFavoriteToggle = document.getElementById('scriptFavoriteToggle');
    const effectsContainer = document.getElementById('effectsContainer');
    const importFfxBtnBottom = document.getElementById('importFfxBtnBottom');
    const saveFfxBtnBottom = document.getElementById('saveFfxBtnBottom');
    const favoriteToggle = document.getElementById('favoriteToggle');
    const preRenderBtn = document.getElementById('preRenderBtn');
    const openProjectBtn = document.getElementById('openProjectBtn');
    const previewContainer = document.getElementById('previewContainer');
    const effectSearchInput = document.getElementById('effectSearchInput');
    const effectSettingsModal = document.getElementById('effectSettingsModal');
    const effectSettingsModalContent = document.getElementById('effectSettingsModalContent');
    const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
    const effectNameInput = document.getElementById('effectNameInput');
    const effectDescInput = document.getElementById('effectDescInput');
    const iconSelection = document.getElementById('iconSelection');
    const customIconDropzone = document.getElementById('customIconDropzone');
    const saveEffectSettingsBtn = document.getElementById('saveEffectSettingsBtn');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');
    const layerScannerBtn = document.getElementById('layerScannerBtn');
    const layerScannerFlyout = document.getElementById('layerScannerFlyout');
    const scanTextLayersBtn = document.getElementById('scanTextLayersBtn');
    const scanImageLayersBtn = document.getElementById('scanImageLayersBtn');
    const layerListPanel = document.getElementById('layerListPanel');
    const closeLayerListBtn = document.getElementById('closeLayerListBtn');
    const layerListTitle = document.getElementById('layerListTitle');
    const layerListContainer = document.getElementById('layerListContainer');
    const backToPrevCompBtn = document.getElementById('backToPrevCompBtn');
    const folderPanelModal = document.getElementById('folderPanelModal');
    const folderPanelModalContent = document.getElementById('folderPanelModalContent');
    const closeFolderPanelBtn = document.getElementById('closeFolderPanelBtn');
    const folderInputsContainer = document.getElementById('folderInputsContainer');
    const addFolderInputBtn = document.getElementById('addFolderInputBtn');
    const createCustomFoldersBtn = document.getElementById('createCustomFoldersBtn');
    const saveAsDefaultBtn = document.getElementById('saveAsDefaultBtn');
    const restoreInitialBtn = document.getElementById('restoreInitialBtn');
    const presetSelector = document.getElementById('presetSelector');
    const deletePresetBtn = document.getElementById('deletePresetBtn');
    const newPresetNameInput = document.getElementById('newPresetName');
    const saveNewPresetBtn = document.getElementById('saveNewPresetBtn');
    const genericModal = document.getElementById('genericModal');
    const genericModalContent = document.getElementById('genericModalContent');
    const genericModalTitle = document.getElementById('genericModalTitle');
    const genericModalBody = document.getElementById('genericModalBody');
    const genericModalCancelBtn = document.getElementById('genericModalCancelBtn');
    const genericModalConfirmBtn = document.getElementById('genericModalConfirmBtn');
    const aiScriptGenerator = document.getElementById('aiScriptGenerator');
    const aiSettingsBtn = document.getElementById('aiSettingsBtn');
    const aiPromptInput = document.getElementById('aiPromptInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiGeneratorMainView = document.getElementById('aiGeneratorMainView');
    const aiGeneratorSetupView = document.getElementById('aiGeneratorSetupView');
    const aiApiKeyInput = document.getElementById('aiApiKeyInput');
    const aiSaveApiKeyBtn = document.getElementById('aiSaveApiKeyBtn');
    const toggleApiKeyVisibilityBtn = document.getElementById('toggleApiKeyVisibilityBtn');
    const aiChatLog = document.getElementById('aiChatLog');
    const aiNewChatBtn = document.getElementById('aiNewChatBtn');
    const aiConversationList = document.getElementById('aiConversationList');
    const aiRunCustomScriptBtn = document.getElementById('aiRunCustomScriptBtn');
    const customScriptModal = document.getElementById('customScriptModal');
    const customScriptModalContent = document.getElementById('customScriptModalContent');
    const closeCustomScriptModalBtn = document.getElementById('closeCustomScriptModalBtn');
    const customScriptInput = document.getElementById('customScriptInput');
    const runCustomScriptBtn = document.getElementById('runCustomScriptBtn');
    const saveCustomScriptBtn = document.getElementById('saveCustomScriptBtn');
    const loadScriptsBtn = document.getElementById('loadScriptsBtn');
    const apiKeyError = document.getElementById('apiKeyError');
    const folderDropZone = document.getElementById('folderDropZone');
    const quickAccessFolders = document.getElementById('quickAccessFolders');
    const currentPathInput = document.getElementById('currentPathInput');
    const openPathBtn = document.getElementById('openPathBtn');
    const addCurrentPathToQuickAccessBtn = document.getElementById('addCurrentPathToQuickAccessBtn');
    const collectCompBtn = document.getElementById('collectCompBtn');
    const libraryFavoriteToggle = document.getElementById('libraryFavoriteToggle');

    // ===== Page 6 - Expression Helper DOM Elements =====
    const expressionSearchInput = document.getElementById('expressionSearchInput');
    const addExpressionBtn = document.getElementById('addExpressionBtn');
    const expressionFavoriteToggle = document.getElementById('expressionFavoriteToggle');
    const expressionListContainer = document.getElementById('expressionListContainer');
    const expressionFavoritesBar = document.getElementById('expressionFavoritesBar');
    const aiExpressionSetupView = document.getElementById('aiExpressionSetupView');
    const aiExpressionMainView = document.getElementById('aiExpressionMainView');
    const aiExpressionApiKeyInput = document.getElementById('aiExpressionApiKeyInput');
    const toggleExpressionApiKeyVisibilityBtn = document.getElementById('toggleExpressionApiKeyVisibilityBtn');
    const expressionApiKeyError = document.getElementById('expressionApiKeyError');
    const aiSaveExpressionApiKeyBtn = document.getElementById('aiSaveExpressionApiKeyBtn');
    const aiExpressionNewChatBtn = document.getElementById('aiExpressionNewChatBtn');
    const aiExpressionSettingsBtn = document.getElementById('aiExpressionSettingsBtn');
    const aiExpressionConversationList = document.getElementById('aiExpressionConversationList');
    const aiExpressionChatLog = document.getElementById('aiExpressionChatLog');
    const aiExpressionPromptInput = document.getElementById('aiExpressionPromptInput');
    const aiExpressionSendBtn = document.getElementById('aiExpressionSendBtn');

    const initialFolders = ["01_视频", "02_音频", "03_图片", "04_合成", "05_固态层", "06_其他"];
    const DEFAULT_PRESET_KEY = 'niuma-accelerator-default-preset';
    const CUSTOM_PRESETS_KEY = 'niuma-accelerator-custom-presets';
    const EFFECTS_KEY = 'niuma-accelerator-effects-v2';
    const PROJECT_FOLDER_KEY = 'niuma-accelerator-project-folder';
    const SCRIPT_CONFIG_KEY = 'niuma-accelerator-script-config-v6';
    const SCRIPT_FOLDER_KEY = 'niuma-accelerator-script-folder';
    const CUSTOM_SCRIPT_SAVE_DIR_KEY = 'niuma-accelerator-custom-script-dir';
    const AI_API_KEY = 'niuma-accelerator-deepseek-api-key';
    const AI_CONVERSATIONS_KEY = 'niuma-accelerator-ai-conversations';
    const QUICK_ACCESS_FOLDERS_KEY = 'niuma-accelerator-quick-access-folders';
    const LIBRARY_FAVORITES_KEY = 'niuma-accelerator-library-favorites';
    // ===== Page 6 - Expression Helper Constants =====
    const EXPRESSIONS_KEY = 'niuma-accelerator-expressions-v1';
    const AI_EXPRESSION_API_KEY = 'niuma-accelerator-expression-deepseek-api-key';
    const AI_EXPRESSION_CONVERSATIONS_KEY = 'niuma-accelerator-ai-expression-conversations';
    
    let currentEffectId = null;
    let showOnlyFavorites = false;
    let showOnlyScriptFavorites = false;
    let allAvailableScripts = [];
    let allScannedLayers = [];
    let navigationHistory = [];
    let conversations = [];
    let activeConversationId = null;
    let libraryNavHistory = [];
    let showOnlyLibraryFavorites = false;
    // ===== Page 6 - Expression Helper State Variables =====
    let showOnlyExpressionFavorites = false;
    let expressionConversations = [];
    let activeExpressionConversationId = null;
    
    function showToast(message, type = 'info') {
        if (!toastContainer) {
            console.log(`Toast (${type}): ${message}`);
            return;
        }
        const toast = document.createElement('div');
        toast.className = 'transform transition-all duration-300 ease-out opacity-0 translate-x-full';
        const toastClasses = type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'bg-dark-200 text-white text-sm font-medium rounded-lg shadow-2xl p-4 max-w-sm';
        toast.innerHTML = `<div class="${toastClasses}">${message}</div>`;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.classList.remove('opacity-0', 'translate-x-full'), 10);
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-full');
            toast.addEventListener('transitionend', () => toast.remove());
        }, 6000);
    }
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    function openModal(modal, modalContent) {
        if (!modal || !modalContent) return;
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modalContent.classList.remove('scale-95', 'opacity-0');
    }

    function closeModal(modal, modalContent) {
        if (!modal || !modalContent) return;
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('pointer-events-none');
        }, 300); // Must match the transition duration
    }
    
    async function callDeepSeekAPI(apiKey, messages) {
        const API_URL = 'https://api.deepseek.com/v1/chat/completions';
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: messages,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || `HTTP error! status: ${response.status}`);
            }
            
            return await response.json();

        } catch (error) {
            console.error('API Call Error:', error);
            throw error;
        }
    }
    
    function addMessageToLog(chatLogElement, content, role) {
        const messageWrapper = document.createElement('div');
        
        if (role === 'user') {
            messageWrapper.className = 'w-full flex justify-end';
            const messageBubble = document.createElement('div');
            messageBubble.className = 'bg-primary/80 rounded-lg p-3 max-w-[80%]';
            const p = document.createElement('p');
            p.className = 'text-white text-sm whitespace-pre-wrap';
            p.textContent = content;
            messageBubble.appendChild(p);
            messageWrapper.appendChild(messageBubble);
        } else { // assistant
            messageWrapper.className = 'w-full flex justify-start';
            const messageBubble = document.createElement('div');
            messageBubble.className = 'bg-dark-300 rounded-lg p-3 max-w-[90%] space-y-2';
            
            const codeRegex = /```(?:javascript|jsx|js)?\s*([\s\S]+?)\s*```/g;
            let lastIndex = 0;
            let match;
            while((match = codeRegex.exec(content)) !== null) {
                if(match.index > lastIndex) {
                    const textPart = document.createElement('p');
                    textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
                    textPart.textContent = content.substring(lastIndex, match.index).trim();
                    if(textPart.textContent) messageBubble.appendChild(textPart);
                }
                
                const codeWrapper = document.createElement('div');
                codeWrapper.className = 'relative group';

                const pre = document.createElement('pre');
                const code = document.createElement('code');
                code.className = 'language-javascript';
                code.textContent = match[1].trim();
                pre.appendChild(code);
                
                const copyButton = document.createElement('button');
                copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                copyButton.className = 'absolute top-2 right-2 p-2 text-gray-400 bg-dark-400/50 rounded-lg hover:text-white hover:bg-dark-200 opacity-0 group-hover:opacity-100 transition-all duration-200';
                copyButton.title = '复制';
                
                copyButton.addEventListener('click', () => {
                    const codeToCopy = code.textContent;
                    const textArea = document.createElement('textarea');
                    textArea.value = codeToCopy;
                    textArea.style.position = 'fixed';
                    textArea.style.top = '-9999px';
                    textArea.style.left = '-9999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        if (document.execCommand('copy')) {
                            copyButton.innerHTML = '<i class="fa fa-check"></i>';
                            copyButton.title = '已复制';
                            setTimeout(() => {
                                copyButton.innerHTML = '<i class="fa fa-copy"></i>';
                                copyButton.title = '复制';
                            }, 2000);
                        } else {
                            showToast('复制失败', 'error');
                        }
                    } catch (err) {
                        showToast('复制失败', 'error');
                        console.error('无法复制', err);
                    }
                    document.body.removeChild(textArea);
                });
                
                codeWrapper.appendChild(pre);
                codeWrapper.appendChild(copyButton);
                messageBubble.appendChild(codeWrapper);
                hljs.highlightElement(code);
                
                lastIndex = match.index + match[0].length;
            }

            if(lastIndex < content.length) {
                const textPart = document.createElement('p');
                textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
                textPart.textContent = content.substring(lastIndex).trim();
                if(textPart.textContent) messageBubble.appendChild(textPart);
            }
            
            if(messageBubble.childNodes.length === 0){
                 const textPart = document.createElement('p');
                 textPart.className = 'text-gray-300 text-sm whitespace-pre-wrap';
                 textPart.textContent = content.trim();
                 messageBubble.appendChild(textPart);
            }
            
            messageWrapper.appendChild(messageBubble);
        }
        
        chatLogElement.appendChild(messageWrapper);
        chatLogElement.scrollTop = chatLogElement.scrollHeight;
    }

    function toggleAiGeneratorView() {
        const apiKey = localStorage.getItem(AI_API_KEY);
        if (apiKey) {
            aiGeneratorMainView.style.display = 'flex';
            aiGeneratorSetupView.style.display = 'none';
        } else {
            aiGeneratorMainView.style.display = 'none';
            aiGeneratorSetupView.style.display = 'flex';
        }
    }
    
    function hideLayerScannerFlyout() {
        if (!layerScannerFlyout.classList.contains('hidden')) {
            layerScannerFlyout.classList.add('opacity-0', '-translate-x-4', 'pointer-events-none');
            setTimeout(() => {
                layerScannerFlyout.classList.add('hidden');
                layerScannerFlyout.classList.remove('flex', 'flex-col');
            }, 300);
        }
    }
    
    function toggleLayerScanner() {
        const isHidden = layerScannerFlyout.classList.contains('hidden');
        if (isHidden) {
            layerScannerFlyout.classList.remove('hidden', 'pointer-events-none');
            layerScannerFlyout.classList.add('flex', 'flex-col');
            setTimeout(() => {
                layerScannerFlyout.classList.remove('opacity-0', '-translate-x-4');
            }, 10);
        } else {
            hideLayerScannerFlyout();
            hideLayerListPanel(); 
        }
    }
    
    function hideLayerListPanel() {
        if (layerListPanel.classList.contains('hidden')) return; 
        layerListPanel.classList.add('opacity-0', '-translate-x-4', 'pointer-events-none');
        setTimeout(() => {
            layerListPanel.classList.add('hidden');
            layerListPanel.classList.remove('flex');
        }, 300);
        document.querySelectorAll('.flyout-btn').forEach(b => b.classList.remove('flyout-btn-active'));
    }

    function showLayerListPanel(type) {
        layerListPanel.classList.remove('hidden', 'pointer-events-none');
        layerListPanel.classList.add('flex');
        setTimeout(() => {
            layerListPanel.classList.remove('opacity-0', '-translate-x-4');
        }, 10);
        showToast('正在扫描图层...', 'info');
        csInterface.evalScript('getLayersInContext()', (result) => {
            try {
                const data = JSON.parse(result);
                if (data.error) {
                    showToast(data.error, 'error');
                    hideLayerListPanel();
                    return;
                }
                allScannedLayers = data.layers || [];
                navigationHistory = [data.originCompId];
                backToPrevCompBtn.classList.add('hidden');
                layerListTitle.textContent = `${data.compName} - ${type==='text'?'文本':'图片'}图层`;
                renderLayerList(type);
            } catch (e) {
                showToast('解析图层数据失败。', 'error');
                console.error(e, result);
                hideLayerListPanel();
            }
        });
    }

    function renderLayerList(type) {
        layerListContainer.innerHTML = '';
        const filteredLayers = allScannedLayers.filter(l => l.type === type);
        if (filteredLayers.length === 0) {
            layerListContainer.innerHTML = `<div class="text-gray-500 text-center p-8">在指定范围内未找到${type==='text'?'文本':'图片'}图层。</div>`;
            return;
        }
        filteredLayers.forEach(layer => {
            const item = document.createElement('div');
            item.className = 'layer-list-item';
            item.dataset.id = layer.id;
            item.dataset.compId = layer.compId;
            item.dataset.type = layer.type;
            let contentHTML = `<div class="font-semibold text-white truncate pointer-events-none">${layer.name}</div>
                               <div class="text-xs text-gray-400 mt-1 pointer-events-none">位于: ${layer.compName}</div>`;
            if (type === 'text') {
                const escapedContent = layer.content.replace(/"/g, '&quot;');
                contentHTML += `<div class="layer-text-content" title="${escapedContent}">${layer.content}</div>`;
            }
            item.innerHTML = contentHTML;
            layerListContainer.appendChild(item);
        });
    }
    function handleLayerItemClick(e) {
        const item = e.target.closest('.layer-list-item');
        if (!item) return;
        const layerId = item.dataset.id;
        const compId = item.dataset.compId;
        if (e.ctrlKey || e.metaKey) {
            csInterface.evalScript(`revealLayer(${compId}, ${layerId})`);
        }
    }
    function handleLayerItemDblClick(e) {
        const listItem = e.target.closest('.layer-list-item');
        if (!listItem) return;
        const textContentElement = e.target.closest('.layer-text-content');
        if (textContentElement) {
            if (listItem.querySelector('input[type="text"]')) return;
            const originalText = textContentElement.textContent;
            const parent = textContentElement.parentNode;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = originalText;
            input.className = 'w-full bg-dark-100 border border-primary/50 rounded py-2 px-2 my-2 text-white text-sm';
            parent.replaceChild(input, textContentElement);
            input.focus();
            input.select();
            const layerId = listItem.dataset.id;
            const compId = listItem.dataset.compId;
            const finishEditing = function(shouldUpdate) {
                const newText = input.value;
                if (shouldUpdate && newText !== originalText) {
                    csInterface.evalScript(`updateTextLayer(${compId}, ${layerId}, ${JSON.stringify(newText)})`, (res) => {
                        if (res === 'success') {
                            showToast('文本已更新', 'success');
                            textContentElement.textContent = newText;
                            textContentElement.title = newText;
                            parent.replaceChild(textContentElement, input);
                            const layerIndex = allScannedLayers.findIndex(l => l.id == layerId && l.compId == compId);
                            if (layerIndex > -1) allScannedLayers[layerIndex].content = newText;
                        } else {
                            parent.replaceChild(textContentElement, input);
                            csInterface.evalScript(`debugLayerState(${compId}, ${layerId})`, (debugInfo) => {
                                alert("文本修改失败！\n\n" + (res || "未知错误") + "\n\n请将以下诊断信息提供给开发人员：\n" + debugInfo);
                            });
                        }
                    });
                } else {
                    parent.replaceChild(textContentElement, input);
                }
            };
            input.addEventListener('blur', function() {
                finishEditing(true);
            });
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    input.blur();
                } else if (event.key === 'Escape') {
                    finishEditing(false);
                }
            });
        } else {
            const compId = listItem.dataset.compId;
            const currentCompId = navigationHistory[navigationHistory.length - 1];
            if (compId != currentCompId) {
                navigationHistory.push(compId);
                backToPrevCompBtn.classList.remove('hidden');
                csInterface.evalScript(`openCompInViewer(${compId})`);
            } else {
                csInterface.evalScript(`openCompInViewer(${compId})`);
            }
        }
    }
    
    function executeCreateFolders(folderArray) {
        const validFolders = folderArray.filter(name => name && name.trim() !== '');
        if (validFolders.length === 0) {
            showToast("没有要创建的文件夹。", 'info');
            return;
        }
        const folderNamesJson = JSON.stringify(validFolders);
        const script = `createProjectFolders(${JSON.stringify(folderNamesJson)})`;
        if (!csInterface) {
            return;
        }
        csInterface.evalScript(script, (result) => {
            if (result) {
                showToast(result, result.includes('错误') ? 'error' : 'success');
            } else {
                showToast('脚本执行无响应。', 'error');
            }
        });
    }
    function populateFolderInputs(folderNames) {
        folderInputsContainer.innerHTML = '';
        folderNames.forEach(name => createFolderInputElement(name));
    }
    function createFolderInputElement(value = '') {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'flex items-center space-x-3';
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'input-field';
        input.value = value;
        input.placeholder = '输入文件夹名称';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-danger p-2 rounded-lg flex-shrink-0';
        deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
        deleteBtn.onclick = () => {
            inputDiv.remove();
        };
        inputDiv.appendChild(input);
        inputDiv.appendChild(deleteBtn);
        folderInputsContainer.appendChild(inputDiv);
    }
    function getCurrentFolderList() {
        const inputs = folderInputsContainer.querySelectorAll('input[type="text"]');
        return Array.from(inputs).map(input => input.value.trim()).filter(name => name);
    }
    function loadPresetsToSelector() {
        const customPresets = JSON.parse(localStorage.getItem(CUSTOM_PRESETS_KEY) || '{}');
        presetSelector.innerHTML = '<option value="">--选择预设--</option>';
        for (const presetName in customPresets) {
            const option = document.createElement('option');
            option.value = presetName;
            option.textContent = presetName;
            presetSelector.appendChild(option);
        }
    }
    
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
            buttonElement.closest('.asset-preview-item, .aep-only-item').classList.add('hidden');
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
        let folders = getQuickAccessFolders();
        if (!folders.includes(path)) {
            folders.push(path);
            saveQuickAccessFolders(folders);
            renderQuickAccessFolders();
            showToast('文件夹已添加至快速访问', 'success');
        } else {
            showToast('该文件夹已在快速访问列表中', 'info');
        }
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
    if (!csInterface) return;
    if (!folderPath || folderPath === "请从左侧选择文件夹，或在此输入路径后按回车") {
        return;
    }

    if (isNewNavigation) {
        if (libraryNavHistory[libraryNavHistory.length - 1] !== folderPath) {
            libraryNavHistory.push(folderPath);
        }
    }
    document.getElementById('libraryBackBtn').classList.toggle('hidden', libraryNavHistory.length <= 1);

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
                    assetEl.className = 'asset-preview-item group relative';
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
                    assetEl.className = 'aep-only-item content-file-item';
                    assetEl.innerHTML = `<i class="fa fa-archive"></i><span class="asset-name">${asset.name || ''}</span>`;
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


    function initializeLibraryModule() {
        renderQuickAccessFolders();
        
        folderDropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            e.stopPropagation();
            folderDropZone.classList.add('dropzone-active');
        });

        folderDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
        });

        folderDropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            folderDropZone.classList.remove('dropzone-active');
        });

        folderDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            folderDropZone.classList.remove('dropzone-active');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const path = files[0].path;
                csInterface.evalScript(`checkIfFolder(${JSON.stringify(path)})`, (isFolder) => {
                     if(isFolder === 'true') {
                        addPathToQuickAccess(path);
                     } else {
                         showToast('请拖放一个文件夹，而不是文件', 'error');
                     }
                });
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
        
        // =============================================================
        // ===== 【核心修改点】 collectCompBtn 的 Event Listener ======
        // =============================================================
        collectCompBtn.addEventListener('click', () => {
            // 新增步骤 1: 获取扩展的根目录
            var extensionRoot = csInterface.getSystemPath('extension');
            
            // 新增步骤 2: 拼接出 gif.bat 的绝对路径 (根据您的文件结构)
            var gifBatPath = extensionRoot + "/js/gif.bat";
            
            // 新增步骤 3: [重要] 为了跨平台兼容，将路径中的反斜杠 '\' 替换为正斜杠 '/'
            var safePath = gifBatPath.replace(/\\/g, '/');

            // 修改步骤 4: 构建要执行的脚本字符串，这次我们把 safePath 作为参数传进去
            var script = 'collectActiveComp("' + safePath + '")';

            // 步骤 5: 调用修改后的脚本
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

        document.getElementById('libraryBackBtn').addEventListener('click', function() {
            if (libraryNavHistory.length > 1) {
                libraryNavHistory.pop();
                var parentPath = libraryNavHistory[libraryNavHistory.length - 1];
                displayFolderContents(parentPath, false);
            }
        });
    }


    function getScriptConfig() {
        try {
            const configStr = localStorage.getItem(SCRIPT_CONFIG_KEY);
            if (configStr) {
                const config = JSON.parse(configStr);
                let needsSave = false;
                if (config && Array.isArray(config.groups)) {
                    config.groups.forEach(g => {
                        (g.scripts || []).forEach(s => {
                            if (s.hasOwnProperty('customIcon')) {
                                delete s.customIcon;
                                needsSave = true;
                            }
                        })
                    });
                    if (needsSave) saveScriptConfig(config);
                    return config;
                }
            }
        } catch (e) {
            console.error("解析脚本配置失败:", e);
        }
        return {
            groups: [{
                id: generateId(),
                name: "默认分组",
                scripts: []
            }]
        };
    }
    function saveScriptConfig(config) {
        localStorage.setItem(SCRIPT_CONFIG_KEY, JSON.stringify(config));
    }

    async function initializeScriptModule() {
        await loadDefaultAeScripts(); 
        
        const savedFolderPath = localStorage.getItem(SCRIPT_FOLDER_KEY);
        if (savedFolderPath) {
            await fetchScriptsFromAE(savedFolderPath);
        }
        
        mergeScriptsWithConfig();
        renderScriptsUI();
    }

    function loadDefaultAeScripts() {
        return new Promise(function(resolve) {
            if (!csInterface) return resolve();
            
            csInterface.evalScript('scanAeScripts()', (result) => {
                try {
                    if (result && result !== 'null') {
                        const defaultScripts = JSON.parse(result);
                        const existingPaths = new Set(allAvailableScripts.map(s => s.path));
                        defaultScripts.forEach(function(script) {
                            if (!existingPaths.has(script.path)) {
                                allAvailableScripts.push(script);
                                existingPaths.add(script.path);
                            }
                        });
                    }
                } catch(e) {
                    showToast('解析AE默认脚本列表失败', 'error');
                }
                resolve();
            });
        });
    }

    function fetchScriptsFromAE(folderPath) {
        return new Promise(function (resolve) {
            if (!csInterface) return resolve();
            
            var scriptToEval = folderPath ? 
                'scanScriptsInFolder(' + JSON.stringify(folderPath) + ')' : 
                'selectAndScanScripts()';

            csInterface.evalScript(scriptToEval, (result) => {
                try {
                    if (result && result !== 'null') {
                        const data = JSON.parse(result);
                        const newScripts = data.scripts || [];
                        const existingPaths = new Set(allAvailableScripts.map(s => s.path));
                        newScripts.forEach(function(script) {
                            if (!existingPaths.has(script.path)) {
                                allAvailableScripts.push(script);
                                existingPaths.add(script.path);
                            }
                        });
                        if (data.path) {
                            localStorage.setItem(SCRIPT_FOLDER_KEY, data.path);
                        }
                    }
                } catch (e) {
                    showToast('解析脚本列表失败', 'error');
                }
                resolve();
            });
        });
    }

    function mergeScriptsWithConfig() {
        const config = getScriptConfig();
        const allKnownPaths = new Set();
        config.groups.forEach(function (group) {
            (group.scripts || []).forEach(function (script) { allKnownPaths.add(script.path); });
        });
        
        const newScripts = allAvailableScripts.filter(function (script) { return !allKnownPaths.has(script.path); });
        
        if (newScripts.length > 0) {
            let defaultGroup = config.groups.find(function (g) { return g.name === "默认分组"; });
            if (!defaultGroup) {
                defaultGroup = {
                    id: generateId(),
                    name: "默认分组",
                    scripts: []
                };
                config.groups.unshift(defaultGroup);
            }
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            newScripts.forEach(function (script) {
                defaultGroup.scripts.push({
                    path: script.path,
                    isFavorite: false
                });
            });
            saveScriptConfig(config);
        }
    }
    function renderScriptsUI() {
        // 【修复】保存展开状态
        const expansionStates = {};
        scriptListContainer.querySelectorAll('.group\\/script-group').forEach(groupEl => {
            const groupId = groupEl.dataset.groupId;
            const listEl = groupEl.querySelector('div:last-child');
            if (groupId && listEl) {
                expansionStates[groupId] = !listEl.classList.contains('hidden');
            }
        });

        const config = getScriptConfig();
        const searchTerm = scriptSearchInput.value.toLowerCase();
        
        let groupsToRender = config.groups || [];

        if (showOnlyScriptFavorites) {
            const favoriteGroups = [];
            groupsToRender.forEach(function (group) {
                const favoriteScripts = (group.scripts || []).filter(function (script) { return script.isFavorite; });
                if (favoriteScripts.length > 0) {
                    favoriteGroups.push({ ...group, scripts: favoriteScripts });
                }
            });
            groupsToRender = favoriteGroups;
        }

        if (searchTerm) {
            const searchedGroups = [];
            groupsToRender.forEach(function (group) {
                const searchedScripts = (group.scripts || []).filter(function (script) {
                    return script.path.split(/[\\/]/).pop().toLowerCase().replace(/\.(jsx|jsxbin)$/, '').includes(searchTerm)
                });
                if (searchedScripts.length > 0) {
                   searchedGroups.push({ ...group, scripts: searchedScripts });
                }
            });
            groupsToRender = searchedGroups;
        }

        scriptListContainer.innerHTML = '';
        if (groupsToRender.length === 0) {
            scriptListContainer.innerHTML = `<div class="text-center py-8 text-gray-500">
                <i class="fa fa-folder-open-o fa-2x mb-3"></i>
                <p>没有找到脚本</p>
                <p class="text-xs mt-1">请检查筛选条件或加载脚本</p>
            </div>`;
        } else {
            groupsToRender.forEach(function (group) {
                const isExpanded = expansionStates[group.id] || showOnlyScriptFavorites;
                scriptListContainer.appendChild(createScriptGroupElement(group, isExpanded));
            });
        }

        scriptFavoritesBar.innerHTML = '';
        const favorites = [];
        (config.groups || []).forEach(function (g) {
            (g.scripts || []).forEach(function (s) {
                if (s.isFavorite) favorites.push(s);
            });
        });
        if (favorites.length > 0) {
            favorites.forEach(function (script) {
                const favEl = document.createElement('div');
                favEl.className = 'favorite-script-item';
                favEl.dataset.path = script.path;
                favEl.title = script.path;
                const nameSpan = document.createElement('span');
                nameSpan.textContent = script.path.split(/[\\/]/).pop().replace(/\.(jsx|jsxbin)$/, '');
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-favorite-btn';
                removeBtn.innerHTML = '<i class="fa fa-times"></i>';
                favEl.appendChild(nameSpan);
                favEl.appendChild(removeBtn);
                favEl.addEventListener('click', (e) => {
                    if (!e.target.closest('.remove-favorite-btn')) {
                        runScript(script.path);
                    }
                });
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleScriptFavorite(script.path);
                });
                scriptFavoritesBar.appendChild(favEl);
            });
        } else {
            scriptFavoritesBar.innerHTML = `<span class="text-gray-500 text-sm">点击左侧脚本旁的<i class="fa fa-star-o mx-1"></i>按钮可添加至此</span>`;
        }
        addScriptUIEventListeners();
    }
    function createScriptGroupElement(group, isInitiallyExpanded = false) {
        const groupEl = document.createElement('div');
        groupEl.className = 'mb-2 group/script-group';
        groupEl.dataset.groupId = group.id; // 添加ID用于状态恢复

        const header = document.createElement('div');
        header.className = "flex items-center justify-between p-1 cursor-pointer rounded-md hover:bg-dark-300/50";
        
        const titleContainer = document.createElement('div');
        titleContainer.className = 'flex items-center gap-2 flex-1 overflow-hidden';

        const titleSpan = document.createElement('span');
        titleSpan.className = 'font-semibold text-gray-300 text-sm truncate';
        titleSpan.textContent = group.name;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'text-gray-500 hover:text-red-500 opacity-0 group-hover/script-group:opacity-100 transition-opacity w-5 h-5 flex items-center justify-center';
        deleteBtn.innerHTML = '<i class="fa fa-trash-o text-xs"></i>';
        deleteBtn.title = '删除分组';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            if (confirm(`您确定要删除分组 "${group.name}" 吗？\n该分组下的所有脚本将被移至“默认分组”。`)) {
                deleteScriptGroup(group.id);
            }
        };

        titleContainer.appendChild(titleSpan);
        if (group.name !== '默认分组') {
            titleContainer.appendChild(deleteBtn);
        }
        
        const expandIcon = document.createElement('i');
        expandIcon.className = `fa ${isInitiallyExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} text-xs text-gray-400 transition-transform duration-200 flex-shrink-0`;

        header.appendChild(titleContainer);
        header.appendChild(expandIcon);
        
        const list = document.createElement('div');
        list.className = `pl-2 pt-1 ${isInitiallyExpanded ? '' : 'hidden'}`;
        (group.scripts || []).forEach(function (scriptData) {
            list.appendChild(createScriptListItemElement(scriptData));
        });

        groupEl.appendChild(header);
        groupEl.appendChild(list);

        header.onclick = () => {
            list.classList.toggle('hidden');
            expandIcon.classList.toggle('fa-chevron-right');
            expandIcon.classList.toggle('fa-chevron-down');
        };

        return groupEl;
    }
    function deleteScriptGroup(groupId) {
        let config = getScriptConfig();
        
        const groupToDelete = config.groups.find(function (g) { return g.id === groupId; });
        if (!groupToDelete || groupToDelete.name === '默认分组') {
            showToast('不能删除默认分组', 'error');
            return;
        }

        let defaultGroup = config.groups.find(function (g) { return g.name === '默认分组'; });
        if (!defaultGroup) {
             defaultGroup = { id: generateId(), name: "默认分组", scripts: [] };
             config.groups.unshift(defaultGroup);
        }

        if (groupToDelete.scripts && groupToDelete.scripts.length > 0) {
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            defaultGroup.scripts.push(...groupToDelete.scripts);
        }

        config.groups = config.groups.filter(function (g) { return g.id !== groupId; });
        
        saveScriptConfig(config);
        renderScriptsUI();
        showToast(`分组 "${groupToDelete.name}" 已删除`, 'success');
    }
    function createScriptListItemElement(scriptData) {
        const item = document.createElement('div');
        item.className = 'script-list-item';
        item.dataset.path = scriptData.path;
        item.title = scriptData.path;
        item.innerHTML = `
            <span class="script-name">${scriptData.path.split(/[\\/]/).pop().replace(/\.(jsx|jsxbin)$/,'')}</span>
            <div class="action-buttons">
                <button class="action-btn favorite-btn">
                    <i class="fa ${scriptData.isFavorite?'fa-star text-yellow-400':'fa-star-o'}"></i>
                </button>
                <button class="action-btn delete-btn" title="删除脚本">
                    <i class="fa fa-trash-o"></i>
                </button>
            </div>`;
        item.addEventListener('click', (e) => {
            if (!e.target.closest('button')) runScript(scriptData.path);
        });
        return item;
    }
    
    function loadScriptFiles() {
        if (!csInterface) return;

        csInterface.evalScript('selectScriptFiles()', function(result) {
            if (!result || result === 'null' || result === 'canceled') {
                return;
            }
            
            try {
                const data = JSON.parse(result);
                const selectedScripts = data.scripts || [];
                
                if (selectedScripts.length === 0) {
                    return;
                }

                const config = getScriptConfig();
                const allKnownPaths = new Set();
                config.groups.forEach(function(group) {
                    (group.scripts || []).forEach(function(script) {
                        allKnownPaths.add(script.path);
                    });
                });

                const newScripts = selectedScripts.filter(function(script) {
                    return !allKnownPaths.has(script.path);
                });

                if (newScripts.length > 0) {
                   const groups = config.groups || [];
                    
                    if (groups.length === 0) {
                        var newDefaultGroup = { id: generateId(), name: "默认分组", scripts: [] };
                        newScripts.forEach(function(script) {
                            newDefaultGroup.scripts.push({ path: script.path, isFavorite: false });
                        });
                        config.groups.push(newDefaultGroup);
                        saveScriptConfig(config);
                        renderScriptsUI();
                        showToast(newScripts.length + '个新脚本已添加到新创建的“默认分组”', 'success');
                        return;
                    }

                    const groupOptions = groups.map(function(g) {
                        return '<option value="' + g.id + '">' + g.name + '</option>';
                    }).join('');

                    showCustomPrompt({
                        title: '加载新脚本',
                        body: '<div class="space-y-2">' +
                              '<p class="text-sm text-gray-300">检测到 ' + newScripts.length + ' 个新脚本。请选择要将它们添加到的分组：</p>' +
                              '<select id="promptInput" class="input-field w-full mt-2">' + groupOptions + '</select>' +
                              '</div>',
                        confirmText: '添加'
                    }).then(function(selectedGroupId) {
                        const targetGroup = config.groups.find(function(g) {
                            return g.id === selectedGroupId;
                        });
                        
                        if (targetGroup) {
                            if (!targetGroup.scripts) {
                                targetGroup.scripts = [];
                            }
                            newScripts.forEach(function(script) {
                                targetGroup.scripts.push({
                                    path: script.path,
                                    isFavorite: false
                                });
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            showToast(newScripts.length + '个新脚本已添加到 "' + targetGroup.name + '" 分组', 'success');
                        }
                    }).catch(function() {
                        // User cancelled
                    });

                } else {
                    showToast('所选脚本已存在于列表中', 'info');
                }
            } catch (e) {
                showToast('解析脚本文件列表失败', 'error');
                console.error(e);
            }
        });
    }


    function toggleScriptFavorite(path) {
        const config = getScriptConfig();
        for (const group of config.groups) {
            const script = (group.scripts || []).find(function (s) { return s.path === path; });
            if (script) {
                script.isFavorite = !script.isFavorite;
                break;
            }
        }
        saveScriptConfig(config);
        renderScriptsUI();
    }

    function addScriptUIEventListeners() {
        document.querySelectorAll('.script-list-item .favorite-btn').forEach(function (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                toggleScriptFavorite(path);
            });
        });
        document.querySelectorAll('.script-list-item .delete-btn').forEach(function (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                const fileName = path.split(/[\\/]/).pop();
                
                showCustomPrompt({
                    title: '确认删除脚本',
                    body: `<p>您确定要删除脚本文件 "${fileName}" 吗？</p><p class="text-red-500 text-xs mt-2">此操作将从您的硬盘上永久删除该文件，无法撤销。</p>`,
                    confirmText: '删除',
                    confirmClass: 'btn-danger'
                }).then(() => {
                    const sanitizedPath = path.replace(/\\/g, '/');
                    const script = `(function() {
                        var fileToDelete = new File(${JSON.stringify(sanitizedPath)});
                        if (fileToDelete.exists) {
                            if (fileToDelete.remove()) {
                                return "success";
                            } else {
                                return "错误: 文件可能被占用或权限不足。";
                            }
                        } else {
                            return "错误: 文件路径不存在。";
                        }
                    })()`;

                    csInterface.evalScript(script, (result) => {
                        if (result === 'success') {
                            const config = getScriptConfig();
                            config.groups.forEach(function (group) {
                                group.scripts = (group.scripts || []).filter(function (s) { return s.path !== path; });
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            showToast(`脚本 "${fileName}" 已删除`, 'success');
                        } else {
                            showToast(`删除失败: ${result}`, 'error');
                        }
                    });
                }).catch(() => {});
            });
        });
    }
    function runScript(path) {
        if (!csInterface || !path) return;
        const sanitizedPath = path.replace(/\\/g, '/');
        const scriptToRun = '$.evalFile("' + sanitizedPath + '")';
        csInterface.evalScript('runScriptAndReportErrors(' + JSON.stringify(scriptToRun) + ')', function(result){
            if(result === "success") { 
                showToast("脚本执行完毕", "success");
            }
        });
    }

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
            filteredEffects = filteredEffects.filter(function (effect) { return effect.isFavorite; });
        }
        if (searchTerm) {
            filteredEffects = filteredEffects.filter(function (effect) {
                return effect.name.toLowerCase().includes(searchTerm) ||
                (effect.description && effect.description.toLowerCase().includes(searchTerm))
            });
        }
        effectsContainer.innerHTML = '';
        if (filteredEffects.length === 0) {
            effectsContainer.innerHTML = '<div class="text-center py-4 text-gray-500">未找到匹配的效果</div>';
            return;
        }
        filteredEffects.forEach(function (effect) {
            const effectBar = document.createElement('div');
            const isSelected = currentEffectId === effect.id;
            effectBar.className = `effect-item ${isSelected?'effect-item-selected':''}`;
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
                <div class="text-sm text-gray-400 truncate">${effect.description||'无描述'}</div>
            `;
            const actionsContainer = document.createElement('div');
            actionsContainer.className = 'flex items-center flex-shrink-0';
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = `btn-icon ${effect.isFavorite?'text-yellow-500 bg-yellow-500/10':'text-gray-400 hover:bg-dark-300'}`;
            favoriteBtn.innerHTML = `<i class="fa ${effect.isFavorite?'fa-star':'fa-star-o'}"></i>`;
            favoriteBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(effect.id);
            };
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon text-gray-400 hover:bg-dark-300';
            deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                showDeleteConfirm(effect.id);
            };
            actionsContainer.appendChild(favoriteBtn);
            actionsContainer.appendChild(deleteBtn);
            effectBar.appendChild(iconContainer);
            effectBar.appendChild(infoContainer);
            effectBar.appendChild(actionsContainer);
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
        const effect = getEffects().find(function (e) { return e.id === id; });
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
        selectEffect(id);
        const effect = getEffects().find(function (e) { return e.id === id; });
        if (!effect) return;
        effectNameInput.value = effect.name;
        effectDescInput.value = effect.description || '';
        document.querySelectorAll('#iconSelection > div').forEach(function (div) { return div.classList.remove('icon-selected'); });
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
    function hideSettingsPanel() {
        closeModal(effectSettingsModal, effectSettingsModalContent);
    }
    function preRenderCurrentComposition() {
        const effect = getEffects().find(function (e) { return e.id === currentEffectId; });
        if (!effect) {
            return;
        }
        const previewFileName = `${effect.name}_预览`;
        let projectFolder = localStorage.getItem(PROJECT_FOLDER_KEY);
        function startProcess(folderPath) {
            showToast('开始渲染并转换为GIF...', 'info');
            const gifBatPath = csInterface.getSystemPath('extension') + '/JS/gif.bat';
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
                        const effectIndex = allEffects.findIndex(function (e) { return e.id === currentEffectId; });
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
        const index = effects.findIndex(function (e) { return e.id === currentEffectId; });
        if (index === -1) return;
        effects[index].name = effectNameInput.value.trim() || '未命名效果';
        effects[index].description = effectDescInput.value.trim();
        saveEffects(effects);
        renderEffectList();
        showToast('效果设置已更新', 'success');
        hideSettingsPanel();
    }
    function toggleFavorite(id) {
        const effects = getEffects();
        const index = effects.findIndex(function (e) { return e.id === id; });
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
            confirmDeleteEffect(id);
        }).catch(()=>{});
    }
    function confirmDeleteEffect(id) {
        if (!id) return;
        let effects = getEffects();
        effects = effects.filter(function (e) { return e.id !== id; });
        saveEffects(effects);
        if (currentEffectId === id) {
            currentEffectId = null;
            previewContainer.className = 'bg-dark-500 rounded-lg p-6 h-64 flex items-center justify-center';
            previewContainer.innerHTML = `<p class="text-white font-bold text-xl">预览元素</p>`;
        }
        renderEffectList();
        showToast('效果已删除', 'info');
    }
    
    function importFfxFile() {
        if (!csInterface) {
            return;
        }
        csInterface.evalScript('importFFXFile()', (result) => {
            if (result && result !== 'canceled' && result.trim().startsWith('[')) {
                try {
                    const ffxDataArray = JSON.parse(result);
                    if (ffxDataArray.length === 0) return;

                    const effects = getEffects();
                    
                    ffxDataArray.forEach(function(ffxData) {
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
                    console.error("解析FFX列表时出错:", e, "收到的数据:", result);
                }
            } else if (result && result !== 'canceled') {
                showToast('导入失败: ' + result, 'error');
            }
        });
    }

    function saveCurrentEffectAsFfx() {
        if (!csInterface) {
            return;
        }
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
        if (!csInterface) {
            return;
        }
        const effect = getEffects().find(function (e) { return e.id === effectId; });
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
        if (!csInterface) return;
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
        const script = `saveIconFile(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)})`;
        csInterface.evalScript(script, (newRelativePath) => {
            if (newRelativePath && !newRelativePath.startsWith('ERROR')) {
                const effects = getEffects();
                const index = effects.findIndex(function (e) { return e.id === currentEffectId; });
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
        iconElements.forEach(function (el, index) {
            el.addEventListener('click', () => {
                if (!currentEffectId) {
                    showToast('请先选择一个图标', 'error');
                    return;
                };
                iconElements.forEach(function (e) { return e.classList.remove('icon-selected'); });
                el.classList.add('icon-selected');
                const effects = getEffects();
                const effectIndex = effects.findIndex(function (e) { return e.id === currentEffectId; });
                if (effectIndex !== -1) {
                    effects[effectIndex].iconIndex = index;
                    effects[effectIndex].customIcon = null;
                    saveEffects(effects);
                    showSettingsPanel(currentEffectId);
                    renderEffectList();
                }
            });
        });
    }
    function openProjectFolder(isAlt) {
        if (!csInterface) return;
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


    // =============================================================================
    // ===== Page 6 - Expression Helper Module ===============================
    // =============================================================================
    function getExpressions() {
        try {
            return JSON.parse(localStorage.getItem(EXPRESSIONS_KEY) || '[]');
        } catch (e) {
            return [];
        }
    }

    function saveExpressions(expressions) {
        localStorage.setItem(EXPRESSIONS_KEY, JSON.stringify(expressions));
    }

    function applyExpression(expressionText) {
        if (!expressionText) return;
        csInterface.evalScript(`applyExpressionToSelectedProperties(${JSON.stringify(expressionText)})`, (result) => {
            if (result === 'success') {
                showToast('表达式已成功应用', 'success');
            } else {
                showToast(result, 'error');
            }
        });
    }
    
    function toggleExpressionFavorite(id) {
        const expressions = getExpressions();
        const index = expressions.findIndex(e => e.id === id);
        if (index !== -1) {
            expressions[index].isFavorite = !expressions[index].isFavorite;
            saveExpressions(expressions);
            renderExpressionUI();
        }
    }
    
    function deleteExpression(id) {
        showCustomPrompt({
            title: '确认删除',
            body: '您确定要删除这个表达式吗？此操作无法撤销。',
            confirmText: '删除',
            confirmClass: 'btn-danger'
        }).then(() => {
            let expressions = getExpressions();
            expressions = expressions.filter(e => e.id !== id);
            saveExpressions(expressions);
            renderExpressionUI();
            showToast('表达式已删除', 'success');
        }).catch(() => {});
    }

    function renderExpressionUI() {
        let expressions = getExpressions();
        const searchTerm = expressionSearchInput.value.toLowerCase();
        
        if (showOnlyExpressionFavorites) {
            expressions = expressions.filter(e => e.isFavorite);
        }

        if (searchTerm) {
            expressions = expressions.filter(e => e.name.toLowerCase().includes(searchTerm) || e.description.toLowerCase().includes(searchTerm));
        }

        expressionListContainer.innerHTML = '';
        if (expressions.length === 0) {
            expressionListContainer.innerHTML = `<div class="text-center py-8 text-gray-500">
                <p>列表为空</p>
                <p class="text-xs mt-1">点击右上角“添加表达式”来创建</p>
            </div>`;
        } else {
            expressions.forEach(exp => {
                const item = document.createElement('div');
                item.className = 'expression-list-item';
                item.dataset.id = exp.id;
                item.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex-1 overflow-hidden">
                            <p class="font-semibold text-white truncate">${exp.name}</p>
                            <p class="text-xs text-gray-400 mt-1 truncate">${exp.description || '无描述'}</p>
                        </div>
                        <div class="flex items-center space-x-2 ml-2 flex-shrink-0">
                            <button class="action-btn favorite-btn ${exp.isFavorite ? 'text-yellow-400' : ''}" title="收藏">
                                <i class="fa ${exp.isFavorite ? 'fa-star' : 'fa-star-o'}"></i>
                            </button>
                            <button class="action-btn delete-btn" title="删除">
                                <i class="fa fa-trash-o"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                item.addEventListener('dblclick', () => applyExpression(exp.code));
                
                item.querySelector('.favorite-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleExpressionFavorite(exp.id);
                });
                
                item.querySelector('.delete-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    deleteExpression(exp.id);
                });

                expressionListContainer.appendChild(item);
            });
        }
        
        expressionFavoritesBar.innerHTML = '';
        const favorites = getExpressions().filter(e => e.isFavorite);
        if (favorites.length === 0) {
            expressionFavoritesBar.innerHTML = `<span class="text-gray-500 text-sm">点击左侧列表中的<i class="fa fa-star-o mx-1"></i>可添加至此</span>`;
        } else {
            favorites.forEach(exp => {
                const btn = document.createElement('button');
                btn.className = 'favorite-expression-item';
                btn.textContent = exp.name;
                btn.title = exp.description || exp.name;
                btn.onclick = () => applyExpression(exp.code);
                expressionFavoritesBar.appendChild(btn);
            });
        }
    }

    function initializeExpressionModule() {
        renderExpressionUI();
        toggleAiExpressionView();
        initializeAiExpressionChat();
        
        expressionSearchInput.addEventListener('input', renderExpressionUI);
        
        expressionFavoriteToggle.addEventListener('click', () => {
            showOnlyExpressionFavorites = !showOnlyExpressionFavorites;
            expressionFavoriteToggle.innerHTML = showOnlyExpressionFavorites ?
                '<i class="fa fa-star mr-2"></i>显示全部' :
                '<i class="fa fa-star-o mr-2"></i>只看收藏';
            if(showOnlyExpressionFavorites) {
                expressionFavoriteToggle.classList.add('text-yellow-400');
            } else {
                expressionFavoriteToggle.classList.remove('text-yellow-400');
            }
            renderExpressionUI();
        });
        
        addExpressionBtn.addEventListener('click', () => {
            showCustomPrompt({
                title: '添加新表达式',
                body: `
                    <div class="space-y-4 text-left">
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">名称</label>
                            <input id="prompt_exp_name" class="input-field w-full" placeholder="例如: 抖动效果">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">描述 (可选)</label>
                            <input id="prompt_exp_desc" class="input-field w-full" placeholder="例如: 应用于位置或旋转属性">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-300 mb-1.5">表达式代码</label>
                            <textarea id="prompt_exp_code" class="w-full bg-dark-500 text-gray-200 font-mono p-2 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary/50" rows="5" placeholder="wiggle(5, 10)"></textarea>
                        </div>
                    </div>
                `,
                confirmText: '保存'
            }).then(() => {
                const name = document.getElementById('prompt_exp_name').value.trim();
                const desc = document.getElementById('prompt_exp_desc').value.trim();
                const code = document.getElementById('prompt_exp_code').value.trim();

                if (!name || !code) {
                    showToast('名称和代码不能为空', 'error');
                    return;
                }

                const expressions = getExpressions();
                expressions.unshift({
                    id: generateId(),
                    name: name,
                    description: desc,
                    code: code,
                    isFavorite: false
                });
                saveExpressions(expressions);
                renderExpressionUI();
                showToast('表达式已保存', 'success');
            }).catch(()=>{});
        });
    }
    
    // --- AI Expression Helper Logic ---
    function toggleAiExpressionView() {
        const apiKey = localStorage.getItem(AI_EXPRESSION_API_KEY);
        if (apiKey) {
            aiExpressionMainView.style.display = 'flex';
            aiExpressionSetupView.style.display = 'none';
        } else {
            aiExpressionMainView.style.display = 'none';
            aiExpressionSetupView.style.display = 'flex';
        }
    }

    function loadExpressionConversations() {
        try {
            expressionConversations = JSON.parse(localStorage.getItem(AI_EXPRESSION_CONVERSATIONS_KEY)) || [];
        } catch(e) { expressionConversations = []; }
    }

    function saveExpressionConversations() {
        localStorage.setItem(AI_EXPRESSION_CONVERSATIONS_KEY, JSON.stringify(expressionConversations));
    }
    
    function createNewExpressionConversation() {
        const newId = generateId();
        const newConversation = {
            id: newId,
            title: `表达式对话 ${expressionConversations.length + 1}`,
            history: [
                { "role": "system", "content": "You are an expert AI assistant specializing in Adobe After Effects expressions. Your goal is to provide users with accurate, efficient, and well-explained expressions. When a user asks for an expression, first provide a concise explanation of how it works and what parameters can be adjusted. Then, present the complete, executable expression code inside a formatted javascript markdown block. Be friendly, helpful, and focus solely on After Effects expressions." }
            ]
        };
        expressionConversations.unshift(newConversation);
        setActiveExpressionConversation(newId);
        saveExpressionConversations();
    }

    function setActiveExpressionConversation(id) {
        activeExpressionConversationId = id;
        renderExpressionConversationList();
        renderExpressionChatLog();
    }
    
    function renderExpressionConversationList() {
        aiExpressionConversationList.innerHTML = '';
        expressionConversations.forEach(conv => {
            const item = document.createElement('div');
            item.className = `p-2 rounded-lg cursor-pointer text-sm truncate flex justify-between items-center group ${conv.id === activeExpressionConversationId ? 'bg-primary/20 text-white' : 'hover:bg-dark-300'}`;
            item.dataset.id = conv.id;
            item.title = conv.title;
            item.innerHTML = `
                <span class="flex-1 truncate">${conv.title}</span>
                <button class="w-5 h-5 items-center justify-center text-gray-500 hover:text-white hidden group-hover:flex flex-shrink-0 delete-conv-btn">
                    <i class="fa fa-trash-o"></i>
                </button>
            `;
            item.addEventListener('click', () => setActiveExpressionConversation(conv.id));
            item.querySelector('.delete-conv-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`确定要删除对话 "${conv.title}" 吗？`)) {
                    expressionConversations = expressionConversations.filter(c => c.id !== conv.id);
                    saveExpressionConversations();
                    if(activeExpressionConversationId === conv.id) {
                        if (expressionConversations.length > 0) {
                            setActiveExpressionConversation(expressionConversations[0].id);
                        } else {
                            createNewExpressionConversation();
                        }
                    } else {
                        renderExpressionConversationList();
                    }
                }
            });
            aiExpressionConversationList.appendChild(item);
        });
    }

    function renderExpressionChatLog() {
        aiExpressionChatLog.innerHTML = '';
        const activeConv = expressionConversations.find(c => c.id === activeExpressionConversationId);
        if (activeConv) {
            activeConv.history.forEach(message => {
                if (message.role !== 'system') {
                    addMessageToLog(aiExpressionChatLog, message.content, message.role);
                }
            });
        }
    }
    
    function initializeAiExpressionChat() {
        loadExpressionConversations();
        if(expressionConversations.length === 0) {
            createNewExpressionConversation();
        } else {
            setActiveExpressionConversation(expressionConversations[0].id);
        }
    }

    // =============================================================================
    // ===== [REFACTORED & FIXED] Page 7 Module ==================================
    // =============================================================================
    function initializePage7Module() {
        const page7Node = document.getElementById('page7');
        if (!page7Node) return;
        
        // --- DOM Elements ---
        const p7Grid = document.getElementById('p7Grid');
        const p7Zoom = document.getElementById('p7Zoom');
        const p7Btn = document.getElementById('p7Btn');
        const p7Menu = document.getElementById('p7Menu');
        const p7File = document.getElementById('p7File');
        const p7Modal = document.getElementById('p7Modal');
        const p7ModalContent = document.getElementById('p7ModalContent');
        const p7Close = document.getElementById('p7Close');
        const p7Count = document.getElementById('p7Count');
        const p7Apply = document.getElementById('p7Apply');

        if (!p7Grid || !p7Zoom || !p7Btn || !p7Menu || !p7File || !p7Modal || !p7ModalContent || !p7Close || !p7Count || !p7Apply) {
            console.error("Page 7 UI elements could not be initialized.");
            showToast("错误：页面7 UI初始化失败", "error");
            return;
        }
        
        // --- State Management ---
        const LS_KEY = 'p7_state_v4';
        let state = { items: [], zoom: 180 };

        try { 
            const saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); 
            if (saved) { state = Object.assign(state, saved); } 
        } catch(e) { console.error("Could not parse Page 7 state from localStorage", e); }
        
        if (!Array.isArray(state.items) || state.items.length === 0) { 
            state.items = new Array(20).fill(0).map(() => ({ type: 'empty' })); 
        }

        function saveState() { localStorage.setItem(LS_KEY, JSON.stringify(state)); }

        // --- Rendering ---
        function renderGrid() {
            p7Grid.innerHTML = '';
            p7Grid.style.setProperty('--p7-size', state.zoom + 'px');

            state.items.forEach((it, idx) => {
                const cell = document.createElement('div');
                cell.className = 'p7-cell';
                cell.dataset.index = idx;
                
                const cover = document.createElement('div');
                cover.className = 'p7-cover';
                
                const mediaElement = document.createElement('iframe');
                mediaElement.className = 'p7-media';
                mediaElement.setAttribute('allow', 'fullscreen; autoplay; encrypted-media; picture-in-picture');
                mediaElement.setAttribute('allowfullscreen', '');
                
                // --- 【关键修复】新增 sandbox 属性，防止 iframe breakout ---
                mediaElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-modals');
                
                cell.appendChild(cover);
                cell.appendChild(mediaElement);

                if (it.type === 'image' && it.path) {
                    cover.style.display = 'flex';
                    mediaElement.style.display = 'none';
                    const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
                    const fullPath = 'file:///' + extensionPath + '/' + it.path;
                    const img = document.createElement('img'); 
                    img.src = fullPath;
                    cover.innerHTML = '';
                    cover.appendChild(img);
                } else if (it.type === 'video' && it.url) {
                    mediaElement.src = it.url;
                    cover.style.display = 'none';
                    mediaElement.style.display = 'block';
                } else {
                    cover.textContent = '伪装图片';
                    cover.style.display = 'flex';
                    mediaElement.style.display = 'none';
                }
                
                cell.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    p7Menu.style.display = 'block';

                    const page7Rect = page7Node.getBoundingClientRect();
                    const cellRect = cell.getBoundingClientRect();
                    const top = cellRect.top - page7Rect.top + 8;
                    const left = cellRect.left - page7Rect.left + 8;
                    p7Menu.style.top = top + 'px';
                    p7Menu.style.left = left + 'px';
                    
                    p7Menu.dataset.target = idx;
                });
                
                p7Grid.appendChild(cell);
            });
        }

        // --- Event Listeners ---
        p7Zoom.addEventListener('input', () => { 
            state.zoom = parseInt(p7Zoom.value, 10); 
            p7Grid.style.setProperty('--p7-size', state.zoom + 'px');
            saveState(); 
        });
        p7Zoom.value = state.zoom;

        document.addEventListener('click', (e) => {
            if (p7Menu && !p7Menu.contains(e.target)) p7Menu.style.display = 'none';
        });
        
        p7Menu.addEventListener('click', async (e) => {
            const cmdBtn = e.target.closest('button[data-cmd]');
            if (!cmdBtn) return;
            
            const idx = parseInt(p7Menu.dataset.target, 10);
            const cmd = cmdBtn.getAttribute('data-cmd');
            p7Menu.style.display = 'none';
            
            if (cmd === 'url') {
                const userInput = prompt('请输入要嵌入的网页或视频分享链接:', state.items[idx] && state.items[idx].url ? state.items[idx].url : '');
                if (!userInput || !userInput.trim()) return;
                
                state.items[idx] = { type: 'video', url: userInput.trim() };
                saveState();
                renderGrid();
                showToast('链接已更新', 'success');

            } else if (cmd === 'img') {
                p7File.onchange = () => {
                    const file = p7File.files[0];
                    if (!file) return;
                    const sourcePath = file.path;
                    if (!sourcePath) {
                        showToast('无法获取文件路径', 'error');
                        return;
                    }
                    
                    const newName = "伪图片_" + file.name;
                    const extensionPath = csInterface.getSystemPath('extension');
                    const script = `copyFileToExtensionAssetFolder(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)}, "icon", ${JSON.stringify(newName)})`;
                    
                    csInterface.evalScript(script, (result) => {
                        if (result && !result.startsWith('ERROR:')) {
                            state.items[idx] = { type: 'image', path: result };
                            saveState();
                            renderGrid();
                            showToast('图片已保存', 'success');
                        } else {
                            showToast('保存图片失败: ' + result, 'error');
                        }
                        p7File.value = '';
                    });
                };
                p7File.click();
            }
        });

        p7Btn.addEventListener('click', () => {
            p7Count.value = state.items.length;
            openModal(p7Modal, p7ModalContent);
        });

        p7Close.addEventListener('click', () => closeModal(p7Modal, p7ModalContent));
        
        p7Modal.addEventListener('click', (e) => {
            if (e.target === p7Modal) closeModal(p7Modal, p7ModalContent);
        });

        p7Apply.addEventListener('click', () => {
            const n = Math.max(1, Math.min(60, parseInt(p7Count.value, 10) || state.items.length));
            const cur = state.items.length;
            if (n > cur) {
                for (let i = 0; i < n - cur; i++) {
                    state.items.push({type: 'empty'});
                }
            } else if (n < cur) {
                state.items.splice(n);
            }
            saveState();
            renderGrid();
            closeModal(p7Modal, p7ModalContent);
        });

        renderGrid();
    }

    function initializeEventListeners() {
        allNavLinks.forEach(function (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                hideLayerListPanel();
                hideLayerScannerFlyout();
                
                allNavLinks.forEach(function (item) { return item.classList.remove('nav-item-active'); });
                this.classList.add('nav-item-active');
                allPages.forEach(function (page) { return page.classList.add('hidden'); });
                const targetPage = document.querySelector(this.getAttribute('href'));
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                }
            });
        });
        createDefaultFoldersBtn.addEventListener('click', () => {
            const defaultPreset = JSON.parse(localStorage.getItem(DEFAULT_PRESET_KEY));
            executeCreateFolders(defaultPreset || initialFolders);
        });
        openFolderPanelBtn.addEventListener('click', () => openModal(folderPanelModal, folderPanelModalContent));
        if (organizeProjectBtn) {
            organizeProjectBtn.addEventListener('click', () => {
                const excludeText = organizeExcludeInput.value.trim();
                const excludeNames = excludeText.split(/,|，|\s+/).filter(function (name) { return name; });
                const script = `organizeProjectItems(${JSON.stringify(JSON.stringify(excludeNames))})`;
                csInterface.evalScript(script, (result) => {
                    showToast(result, result.includes('失败') ? 'error' : 'success');
                });
            });
        }
        
        if(scriptSearchInput) scriptSearchInput.addEventListener('input', renderScriptsUI);
        if (scriptFavoriteToggle) {
            scriptFavoriteToggle.addEventListener('click', () => {
                showOnlyScriptFavorites = !showOnlyScriptFavorites;
                scriptFavoriteToggle.innerHTML = showOnlyScriptFavorites ?
                    '<i class="fa fa-star mr-2"></i>显示全部' :
                    '<i class="fa fa-star-o mr-2"></i>只看收藏';
                renderScriptsUI();
            });
        }
        if (addScriptGroupBtn) {
            addScriptGroupBtn.addEventListener('click', () => {
                showCustomPrompt({
                    title: '新建分组',
                    body: '<input type="text" id="promptInput" class="input-field w-full" placeholder="输入新分组的名称">',
                    confirmText: '创建'
                }).then(groupName => {
                    if (groupName && groupName.trim()) {
                        let config = getScriptConfig();
                        if (!config.groups) config.groups = [];
                        config.groups.push({
                            id: generateId(),
                            name: groupName.trim(),
                            scripts: []
                        });
                        saveScriptConfig(config);
                        renderScriptsUI();
                    }
                }).catch(()=>{});
            });
        }
        if (loadScriptsBtn) {
            loadScriptsBtn.addEventListener('click', loadScriptFiles);
        }

        importFfxBtnBottom.addEventListener('click', importFfxFile);
        saveFfxBtnBottom.addEventListener('click', saveCurrentEffectAsFfx);
        favoriteToggle.addEventListener('click', () => {
            showOnlyFavorites = !showOnlyFavorites;
            favoriteToggle.innerHTML = showOnlyFavorites ?
                '<i class="fa fa-star mr-2"></i>显示全部' :
                '<i class="fa fa-star-o mr-2"></i>只看收藏';
            renderEffectList();
        });
        effectSearchInput.addEventListener('input', renderEffectList);
        saveEffectSettingsBtn.addEventListener('click', () => {
            if (!currentEffectId) {
                showToast('请先选择一个效果', 'error');
                return;
            }
            saveEffectSettings();
        });
        preRenderBtn.addEventListener('click', () => {
            if (!currentEffectId) {
                showToast('请先在左侧选择一个效果来为其创建预览', 'error');
                return;
            }
            preRenderCurrentComposition();
        });
        openProjectBtn.addEventListener('click', (e) => openProjectFolder(e.altKey));
        
        sidebarToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
        });
        if (layerScannerBtn) {
            layerScannerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleLayerScanner();
            });
        }
        [scanTextLayersBtn, scanImageLayersBtn].forEach(function (btn) {
            if(btn) {
                btn.addEventListener('click', () => {
                    const type = btn.dataset.type;
                    document.querySelectorAll('.flyout-btn-active').forEach(function (activeBtn) {
                        if(activeBtn !== btn) activeBtn.classList.remove('flyout-btn-active');
                    });
                    btn.classList.toggle('flyout-btn-active');

                    if (btn.classList.contains('flyout-btn-active')) {
                        showLayerListPanel(type);
                        setTimeout(hideLayerScannerFlyout, 200); 
                    } else {
                        hideLayerListPanel();
                    }
                });
            }
        });
        if (closeLayerListBtn) {
            closeLayerListBtn.addEventListener('click', () => {
                hideLayerScannerFlyout();
                hideLayerListPanel();
            });
        }
        if (layerListContainer) {
            layerListContainer.addEventListener('click', handleLayerItemClick);
            layerListContainer.addEventListener('dblclick', handleLayerItemDblClick);
        }
        if (backToPrevCompBtn) {
            backToPrevCompBtn.addEventListener('click', () => {
                if (navigationHistory.length > 1) {
                    navigationHistory.pop();
                    const prevCompId = navigationHistory[navigationHistory.length - 1];
                    csInterface.evalScript(`openCompInViewer(${prevCompId})`);
                    if (navigationHistory.length === 1) {
                        backToPrevCompBtn.classList.add('hidden');
                    }
                }
            });
        }
        
        initIconSelection();
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
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
            customIconDropzone.addEventListener(eventName, e => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            customIconDropzone.addEventListener(eventName, () => customIconDropzone.classList.add('border-primary'), false);
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            customIconDropzone.addEventListener(eventName, () => customIconDropzone.classList.remove('border-primary'), false);
        });
        customIconDropzone.addEventListener('drop', (e) => {
            if (!currentEffectId) {
                showToast('请先选择一个效果', 'error');
                return;
            }
            handleCustomIconUpload(e.dataTransfer.files[0]);
        }, false);
        closeFolderPanelBtn.addEventListener('click', () => closeModal(folderPanelModal, folderPanelModalContent));
        folderPanelModal.addEventListener('click', e => {
            if (e.target === folderPanelModal) closeModal(folderPanelModal, folderPanelModalContent);
        });
        closeSettingsModalBtn.addEventListener('click', hideSettingsPanel);
        effectSettingsModal.addEventListener('click', e => {
            if (e.target === effectSettingsModal) hideSettingsPanel();
        });
        addFolderInputBtn.addEventListener('click', () => createFolderInputElement());
        createCustomFoldersBtn.addEventListener('click', () => {
            executeCreateFolders(getCurrentFolderList());
            closeModal(folderPanelModal, folderPanelModalContent);
        });
        saveAsDefaultBtn.addEventListener('click', () => {
            const folders = getCurrentFolderList();
            if (folders.length > 0) {
                localStorage.setItem(DEFAULT_PRESET_KEY, JSON.stringify(folders));
                showToast('已设为默认', 'success');
            } else {
                showToast('配置为空', 'error');
            }
        });
        restoreInitialBtn.addEventListener('click', () => populateFolderInputs(initialFolders));
        saveNewPresetBtn.addEventListener('click', () => {
            const name = newPresetNameInput.value.trim();
            if (!name) return showToast('请输入预设名称', 'error');
            const folders = getCurrentFolderList();
            if (folders.length === 0) return showToast('文件夹列表为空', 'error');
            const presets = JSON.parse(localStorage.getItem(CUSTOM_PRESETS_KEY) || '{}');
            presets[name] = folders;
            localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(presets));
            newPresetNameInput.value = '';
            loadPresetsToSelector();
            presetSelector.value = name;
            showToast(`预设 "${name}" 已保存`, 'success');
        });
        presetSelector.addEventListener('change', () => {
            const name = presetSelector.value;
            if (name) {
                const presets = JSON.parse(localStorage.getItem(CUSTOM_PRESETS_KEY) || '{}');
                populateFolderInputs(presets[name]);
            }
        });
        deletePresetBtn.addEventListener('click', () => {
            const name = presetSelector.value;
            if (!name) return showToast('请选择要删除的预设', 'error');
            if (confirm(`确定删除预设 "${name}"?`)) {
                const presets = JSON.parse(localStorage.getItem(CUSTOM_PRESETS_KEY) || '{}');
                delete presets[name];
                localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(presets));
                loadPresetsToSelector();
                populateFolderInputs(initialFolders);
                showToast(`预设 "${name}" 已删除`, 'info');
            }
        });
        
        aiSendBtn.addEventListener('click', async () => {
            const prompt = aiPromptInput.value.trim();
            if (!prompt) return;
            const apiKey = localStorage.getItem(AI_API_KEY);
            if (!apiKey) {
                showToast('请先设置API Key', 'error');
                toggleAiGeneratorView();
                return;
            }
            
            const activeConv = conversations.find(function (c) { return c.id === activeConversationId; });
            if (!activeConv) return;

            addMessageToLog(aiChatLog, prompt, 'user');
            aiPromptInput.value = '';
            activeConv.history.push({ role: 'user', content: prompt });
            saveConversations();
            
            const thinkingBubble = document.createElement('div');
            thinkingBubble.className = 'w-full flex justify-start ai-thinking';
            thinkingBubble.innerHTML = `<div class="bg-dark-300 rounded-lg p-3 max-w-[90%]"><i class="fa fa-spinner fa-spin"></i></div>`;
            aiChatLog.appendChild(thinkingBubble);
            aiChatLog.scrollTop = aiChatLog.scrollHeight;
            aiSendBtn.disabled = true;
            
            try {
                const data = await callDeepSeekAPI(apiKey, activeConv.history);
                const responseContent = data.choices[0].message.content;
                activeConv.history.push({ role: 'assistant', content: responseContent });
                saveConversations();
                aiChatLog.removeChild(thinkingBubble);
                addMessageToLog(aiChatLog, responseContent, 'assistant');
            } catch (error) {
                aiChatLog.removeChild(thinkingBubble);
                const errorMessage = 'AI响应失败: ' + error.message;
                addMessageToLog(aiChatLog, errorMessage, 'assistant');
                showToast(errorMessage, 'error');
            } finally {
                 aiSendBtn.disabled = false;
            }
        });
        aiPromptInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                aiSendBtn.click();
            }
        });
        aiSettingsBtn.addEventListener('click', () => {
            const apiKey = localStorage.getItem(AI_API_KEY);
            if (apiKey) {
                aiApiKeyInput.value = apiKey;
            }
            aiGeneratorMainView.style.display = 'none';
            aiGeneratorSetupView.style.display = 'flex';
        });
        aiSaveApiKeyBtn.addEventListener('click', async () => {
            apiKeyError.textContent = ''; 
            const newApiKey = aiApiKeyInput.value.trim();
            if (!newApiKey) {
                apiKeyError.textContent = 'API Key 不能为空。';
                return;
            }

            const originalText = aiSaveApiKeyBtn.textContent;
            aiSaveApiKeyBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> 正在验证...';
            aiSaveApiKeyBtn.disabled = true;

            try {
                await callDeepSeekAPI(newApiKey, [{ role: 'user', content: 'Hi' }]);
                localStorage.setItem(AI_API_KEY, newApiKey);
                showToast('API Key 验证成功并已保存!', 'success');
                toggleAiGeneratorView();
                initializeAiChat();
            } catch (error) {
                apiKeyError.textContent = 'API Key 无效或网络连接失败。';
            } finally {
                aiSaveApiKeyBtn.innerHTML = originalText;
                aiSaveApiKeyBtn.disabled = false;
            }
        });
        toggleApiKeyVisibilityBtn.addEventListener('click', () => {
            const icon = toggleApiKeyVisibilityBtn.querySelector('i');
            if (aiApiKeyInput.type === 'password') {
                aiApiKeyInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                aiApiKeyInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
        aiNewChatBtn.addEventListener('click', () => {
            createNewConversation();
        });

        aiRunCustomScriptBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            openModal(customScriptModal, customScriptModalContent);
        });

        closeCustomScriptModalBtn.addEventListener('click', () => {
            closeModal(customScriptModal, customScriptModalContent);
        });
        runCustomScriptBtn.addEventListener('click', () => {
            const scriptToRun = customScriptInput.value;
            if (!scriptToRun.trim()) {
                showToast('脚本内容不能为空', 'error');
                return;
            }
            csInterface.evalScript('runScriptAndReportErrors(' + JSON.stringify(scriptToRun) + ')', function(result){
               if(result === "success") { 
                   showToast("脚本执行完毕", "success");
               }
            });
        });
        saveCustomScriptBtn.addEventListener('click', async () => {
            const scriptContent = customScriptInput.value.trim();
            if (!scriptContent) {
                showToast('脚本内容不能为空', 'error');
                return;
            }

            const config = getScriptConfig();
            const groups = config.groups || [];
            if (groups.length === 0) {
                showToast('请先创建一个脚本分组', 'error');
                return;
            }
            
            const groupOptions = groups.map(function (g) { return `<option value="${g.id}">${g.name}</option>`; }).join('');
            
            try {
                closeModal(customScriptModal, customScriptModalContent);
                
                const saveDir = localStorage.getItem(CUSTOM_SCRIPT_SAVE_DIR_KEY) || '';

                const result = await showCustomPrompt({
                    title: '保存新脚本',
                    body: `
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-1.5">选择分组</label>
                                <select id="promptInput_group" class="input-field w-full">${groupOptions}</select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-1.5">脚本文件名 (无需后缀)</label>
                                <input type="text" id="promptInput_name" class="input-field w-full" placeholder="例如: My Awesome Script">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-1.5">保存位置</label>
                                <div class="flex items-center gap-2">
                                    <input type="text" id="promptInput_path" class="input-field w-full bg-dark-200" value="${saveDir}" placeholder="点击右侧按钮选择..." readonly title="${saveDir}">
                                    <button type="button" id="prompt_changePathBtn" class="btn-secondary px-4 py-2 rounded-lg flex-shrink-0">选择</button>
                                </div>
                            </div>
                        </div>
                    `,
                    confirmText: '保存',
                    isComplex: true
                });

                const { groupId, fileName, savePath } = result;

                if (!fileName || !fileName.trim()) {
                    showToast('文件名不能为空', 'error');
                    return;
                }
                
                if (!savePath || !savePath.trim()) {
                    showToast('请选择一个保存位置', 'error');
                    return;
                }

                localStorage.setItem(CUSTOM_SCRIPT_SAVE_DIR_KEY, savePath);

                const finalFileName = fileName.trim().endsWith('.jsx') ? fileName.trim() : fileName.trim() + '.jsx';
                const sanitizedSavePath = savePath.replace(/\\/g, '/');
                const fullPath = sanitizedSavePath + '/' + finalFileName;

                csInterface.evalScript(`saveScriptToFile(${JSON.stringify(scriptContent)}, ${JSON.stringify(fullPath)})`, (saveResult) => {
                    if (saveResult === 'success') {
                        const targetGroup = groups.find(function (g) { return g.id === groupId; });
                        if(targetGroup) {
                            if(!targetGroup.scripts) targetGroup.scripts = [];
                            const existingScript = targetGroup.scripts.find(s => s.path === fullPath);
                            if (!existingScript) {
                                targetGroup.scripts.push({ path: fullPath, isFavorite: false });
                                saveScriptConfig(config);
                                renderScriptsUI();
                            }
                            showToast(`脚本已保存到 ${targetGroup.name}`, 'success');
                        }
                    } else {
                        showToast(`脚本保存失败: ${saveResult}`, 'error');
                    }
                });

            } catch(err) {
                // User cancelled prompt
            }
        });

        // ===== [NEW] Page 6 - Expression Helper Event Listeners =====
        aiExpressionSendBtn.addEventListener('click', async () => {
            const prompt = aiExpressionPromptInput.value.trim();
            if (!prompt) return;
            const apiKey = localStorage.getItem(AI_EXPRESSION_API_KEY);
            if (!apiKey) {
                showToast('请先为表达式助手设置API Key', 'error');
                toggleAiExpressionView();
                return;
            }
            const activeConv = expressionConversations.find(c => c.id === activeExpressionConversationId);
            if (!activeConv) return;
            addMessageToLog(aiExpressionChatLog, prompt, 'user');
            aiExpressionPromptInput.value = '';
            activeConv.history.push({ role: 'user', content: prompt });
            saveExpressionConversations();
            const thinkingBubble = document.createElement('div');
            thinkingBubble.className = 'w-full flex justify-start ai-thinking';
            thinkingBubble.innerHTML = `<div class="bg-dark-300 rounded-lg p-3 max-w-[90%]"><i class="fa fa-spinner fa-spin"></i></div>`;
            aiExpressionChatLog.appendChild(thinkingBubble);
            aiExpressionChatLog.scrollTop = aiExpressionChatLog.scrollHeight;
            aiExpressionSendBtn.disabled = true;
            try {
                const data = await callDeepSeekAPI(apiKey, activeConv.history);
                const responseContent = data.choices[0].message.content;
                activeConv.history.push({ role: 'assistant', content: responseContent });
                saveExpressionConversations();
                aiExpressionChatLog.removeChild(thinkingBubble);
                addMessageToLog(aiExpressionChatLog, responseContent, 'assistant');
            } catch (error) {
                aiExpressionChatLog.removeChild(thinkingBubble);
                const errorMessage = 'AI响应失败: ' + error.message;
                addMessageToLog(aiExpressionChatLog, errorMessage, 'assistant');
                showToast(errorMessage, 'error');
            } finally {
                aiExpressionSendBtn.disabled = false;
            }
        });
        aiExpressionPromptInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                aiExpressionSendBtn.click();
            }
        });
        aiExpressionSettingsBtn.addEventListener('click', () => {
            const apiKey = localStorage.getItem(AI_EXPRESSION_API_KEY);
            if (apiKey) aiExpressionApiKeyInput.value = apiKey;
            toggleAiExpressionView();
        });
        aiSaveExpressionApiKeyBtn.addEventListener('click', async () => {
            expressionApiKeyError.textContent = '';
            const newApiKey = aiExpressionApiKeyInput.value.trim();
            if (!newApiKey) {
                expressionApiKeyError.textContent = 'API Key 不能为空。';
                return;
            }
            const originalText = aiSaveExpressionApiKeyBtn.textContent;
            aiSaveExpressionApiKeyBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> 正在验证...';
            aiSaveExpressionApiKeyBtn.disabled = true;
            try {
                await callDeepSeekAPI(newApiKey, [{ role: 'user', content: 'Hi' }]);
                localStorage.setItem(AI_EXPRESSION_API_KEY, newApiKey);
                showToast('API Key 验证成功并已保存!', 'success');
                toggleAiExpressionView();
                initializeAiExpressionChat();
            } catch (error) {
                expressionApiKeyError.textContent = 'API Key 无效或网络连接失败。';
            } finally {
                aiSaveExpressionApiKeyBtn.innerHTML = originalText;
                aiSaveExpressionApiKeyBtn.disabled = false;
            }
        });
        toggleExpressionApiKeyVisibilityBtn.addEventListener('click', () => {
            const icon = toggleExpressionApiKeyVisibilityBtn.querySelector('i');
            if (aiExpressionApiKeyInput.type === 'password') {
                aiExpressionApiKeyInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                aiExpressionApiKeyInput.type = 'password';
                icon.classList.remove('fa fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
        aiExpressionNewChatBtn.addEventListener('click', createNewExpressionConversation);
    }

    function showCustomPrompt(options) {
        return new Promise((resolve, reject) => {
            genericModalTitle.textContent = options.title;
            genericModalBody.innerHTML = options.body;
            genericModalConfirmBtn.textContent = options.confirmText || '确认';
            
            genericModalConfirmBtn.className = 'btn-primary px-4 py-2 rounded-lg';
            if (options.confirmClass) {
                genericModalConfirmBtn.classList.add(options.confirmClass);
            }
            
            const changePathBtn = genericModalBody.querySelector('#prompt_changePathBtn');
            if (changePathBtn) {
                changePathBtn.addEventListener('click', () => {
                    const pathInput = document.getElementById('promptInput_path');
                    const initialPath = pathInput.value || '';
                    const result = window.cep.fs.showOpenDialogEx(false, true, "请选择脚本保存文件夹", initialPath);
                    if (result && result.data && result.data.length > 0) {
                        const newDir = result.data[0];
                        if (pathInput) {
                            pathInput.value = newDir;
                            pathInput.title = newDir;
                        }
                    }
                });
            }

            openModal(genericModal, genericModalContent);

            const confirmHandler = () => {
                let value;
                if (options.isComplex) {
                    const groupSelect = document.getElementById('promptInput_group');
                    const fileNameInput = document.getElementById('promptInput_name');
                    const pathInput = document.getElementById('promptInput_path');
                    value = {
                        groupId: groupSelect ? groupSelect.value : null,
                        fileName: fileNameInput ? fileNameInput.value : null,
                        savePath: pathInput ? pathInput.value : null
                    };
                } else {
                     // This handles the new expression prompt as well
                    const promptInput = document.getElementById('promptInput');
                    if(promptInput) {
                        value = promptInput.value;
                    } else {
                        // For simple confirm dialogs or complex prompts like add expression
                        value = true; 
                    }
                }
                
                cleanup();
                resolve(value);
            };

            const cancelHandler = () => {
                cleanup();
                reject();
            };

            const cleanup = () => {
                genericModalConfirmBtn.removeEventListener('click', confirmHandler);
                genericModalCancelBtn.removeEventListener('click', cancelHandler);
                closeModal(genericModal, genericModalContent);
            };

            genericModalConfirmBtn.addEventListener('click', confirmHandler, { once: true });
            genericModalCancelBtn.addEventListener('click', cancelHandler, { once: true });
        });
    }


    function loadConversations() {
        try {
            conversations = JSON.parse(localStorage.getItem(AI_CONVERSATIONS_KEY)) || [];
        } catch(e) {
            console.error("无法解析对话历史: ", e);
            conversations = [];
        }
    }
    function saveConversations() {
        localStorage.setItem(AI_CONVERSATIONS_KEY, JSON.stringify(conversations));
    }
    function createNewConversation() {
        const newId = generateId();
        const newConversation = {
            id: newId,
            title: `对话 ${conversations.length + 1}`,
            history: [
                { "role": "system", "content": "You are a helpful AI assistant specializing in Adobe After Effects ExtendScript (ES3). Your primary goal is to assist users by providing clear, well-explained solutions. When a user asks for a script, first provide a concise explanation of how the script works, using markdown for formatting. Then, present the complete, executable ExtendScript code inside a formatted javascript markdown block. Always be friendly and encouraging." }
            ]
        };
        conversations.unshift(newConversation);
        setActiveConversation(newId);
        saveConversations();
        renderConversationList();
    }
    function deleteConversation(id) {
        conversations = conversations.filter(function (c) { return c.id !== id; });
        saveConversations();
        if (activeConversationId === id) {
            if (conversations.length > 0) {
                setActiveConversation(conversations[0].id);
            } else {
                createNewConversation();
            }
        } else {
            renderConversationList();
        }
    }
    function getActiveConversation() {
        return conversations.find(function (c) { return c.id === activeConversationId; });
    }
    function setActiveConversation(id) {
        activeConversationId = id;
        renderConversationList();
        renderChatLog();
    }
    function renderConversationList() {
        aiConversationList.innerHTML = '';
        conversations.forEach(function (conv) {
            const item = document.createElement('div');
            item.className = `p-2 rounded-lg cursor-pointer text-sm truncate flex justify-between items-center group ${conv.id === activeConversationId ? 'bg-primary/20 text-white' : 'hover:bg-dark-300'}`;
            item.dataset.id = conv.id;
            item.title = conv.title;

            const titleSpan = document.createElement('span');
            titleSpan.className = 'flex-1 truncate';
            titleSpan.textContent = conv.title;
            item.appendChild(titleSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'w-5 h-5 items-center justify-center text-gray-500 hover:text-white hidden group-hover:flex flex-shrink-0';
            deleteBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                if(confirm(`确定要删除对话 "${conv.title}" 吗？`)) {
                    deleteConversation(conv.id);
                }
            };
            item.appendChild(deleteBtn);
            
            item.addEventListener('click', () => setActiveConversation(conv.id));
            
            item.addEventListener('dblclick', () => {
                titleSpan.style.display = 'none';
                if(deleteBtn) deleteBtn.style.display = 'none';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.value = conv.title;
                input.className = 'bg-dark-100 border border-primary/50 rounded py-0 px-1 text-white text-sm w-full focus:outline-none';
                
                const finishEditing = (save) => {
                    if (save) {
                        const newTitle = input.value.trim();
                        if (newTitle && newTitle !== conv.title) {
                            conv.title = newTitle;
                            saveConversations();
                        }
                    }
                    renderConversationList();
                };

                input.addEventListener('blur', () => finishEditing(true));
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') finishEditing(true);
                    if (e.key === 'Escape') finishEditing(false);
                });
                
                item.prepend(input);
                input.focus();
                input.select();
            });

            aiConversationList.appendChild(item);
        });
    }
    function renderChatLog() {
        aiChatLog.innerHTML = '';
        const activeConv = getActiveConversation();
        if (activeConv) {
            activeConv.history.forEach(function (message) {
                if (message.role !== 'system') {
                    addMessageToLog(aiChatLog, message.content, message.role);
                }
            });
        }
    }
    function initializeAiChat() {
        loadConversations();
        if(conversations.length === 0) {
            createNewConversation();
        } else {
            setActiveConversation(conversations[0].id);
        }
    }

    function initializeUI() {
        const defaultPreset = JSON.parse(localStorage.getItem(DEFAULT_PRESET_KEY));
        populateFolderInputs(defaultPreset || initialFolders);
        loadPresetsToSelector();

        initializeLibraryModule();
        renderEffectList();
        initializeScriptModule();
        
        // 【重构】将所有模块初始化放在主初始化函数中
        initializeEventListeners();
        toggleAiGeneratorView();
        initializeAiChat();
        initializeExpressionModule();
        initializePage7Module(); // <-- 新增的 Page 7 初始化调用
    }
    initializeUI();
}