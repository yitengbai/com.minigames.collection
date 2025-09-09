import { showToast, generateId, showCustomPrompt, addMessageToLog, openModal, closeModal } from '../shared/ui.js';
import { SCRIPT_CONFIG_KEY, SCRIPT_FOLDER_KEY, CUSTOM_SCRIPT_SAVE_DIR_KEY, AI_API_KEY, AI_CONVERSATIONS_KEY } from '../shared/constants.js';
import { callDeepSeekAPI } from '../shared/api.js';

// 模块级别的状态变量
let showOnlyScriptFavorites = false;
let allAvailableScripts = [];
let conversations = [];
let activeConversationId = null;

/**
 * 初始化脚本页面 (Page 3) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage3(csInterface) {

    // --- DOM 元素获取 ---
    // 脚本管理
    const scriptSearchInput = document.getElementById('scriptSearchInput');
    const addScriptGroupBtn = document.getElementById('addScriptGroupBtn');
    const scriptListContainer = document.getElementById('scriptListContainer');
    const scriptFavoritesBar = document.getElementById('scriptFavoritesBar');
    const scriptFavoriteToggle = document.getElementById('scriptFavoriteToggle');
    const loadScriptsBtn = document.getElementById('loadScriptsBtn');

    // AI 脚本助手
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
    const apiKeyError = document.getElementById('apiKeyError');

    // 自定义脚本弹窗
    const aiRunCustomScriptBtn = document.getElementById('aiRunCustomScriptBtn');
    const customScriptModal = document.getElementById('customScriptModal');
    const customScriptModalContent = document.getElementById('customScriptModalContent');
    const closeCustomScriptModalBtn = document.getElementById('closeCustomScriptModalBtn');
    const customScriptInput = document.getElementById('customScriptInput');
    const runCustomScriptBtn = document.getElementById('runCustomScriptBtn');
    const saveCustomScriptBtn = document.getElementById('saveCustomScriptBtn');


    // =============================================================================
    // --- 脚本管理模块 (Script Management Module) ---
    // =============================================================================

    function getScriptConfig() {
        try {
            const configStr = localStorage.getItem(SCRIPT_CONFIG_KEY);
            if (configStr) {
                const config = JSON.parse(configStr);
                // 确保数据结构的兼容性
                if (config && Array.isArray(config.groups)) {
                    return config;
                }
            }
        } catch (e) {
            console.error("解析脚本配置失败:", e);
        }
        // 返回一个默认的、安全的结构
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

    function runScript(path) {
        if (!path) return;
        const sanitizedPath = path.replace(/\\/g, '/');
        const scriptToRun = '$.evalFile("' + sanitizedPath + '")';
        csInterface.evalScript('runScriptAndReportErrors(' + JSON.stringify(scriptToRun) + ')', function(result){
            if(result === "success") { 
                showToast("脚本执行完毕", "success");
            }
            // 错误情况由全局的 com.niuma.scripterror 事件监听器处理
        });
    }

    function createScriptListItemElement(scriptData) {
        const item = document.createElement('div');
        item.className = 'script-list-item';
        item.dataset.path = scriptData.path;
        item.title = scriptData.path;
        item.innerHTML = `
            <span class="script-name">${scriptData.path.split(/[\\/]/).pop().replace(/\.(jsx|jsxbin)$/,'')}</span>
            <div class="action-buttons">
                <button class="action-btn favorite-btn" title="收藏">
                    <i class="fa ${scriptData.isFavorite?'fa-star text-yellow-400':'fa-star-o'}"></i>
                </button>
                <button class="action-btn delete-btn" title="从硬盘删除脚本">
                    <i class="fa fa-trash-o"></i>
                </button>
            </div>`;
        item.addEventListener('click', (e) => {
            if (!e.target.closest('button')) runScript(scriptData.path);
        });
        return item;
    }

    function createScriptGroupElement(group, isInitiallyExpanded = false) {
        const groupEl = document.createElement('div');
        groupEl.className = 'mb-2 group/script-group';
        groupEl.dataset.groupId = group.id;

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
        (group.scripts || []).forEach(scriptData => {
            list.appendChild(createScriptListItemElement(scriptData));
        });

        groupEl.appendChild(header);
        groupEl.appendChild(list);

        // 事件绑定
        header.onclick = () => {
            list.classList.toggle('hidden');
            expandIcon.classList.toggle('fa-chevron-right');
            expandIcon.classList.toggle('fa-chevron-down');
        };
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            showCustomPrompt({
                title: '确认删除分组',
                body: `<p>您确定要删除分组 "${group.name}" 吗？</p><p class="text-yellow-400 text-xs mt-2">该分组下的所有脚本将被安全地移至“默认分组”。</p>`,
                confirmText: '删除',
                confirmClass: 'btn-danger'
            }).then(() => {
                deleteScriptGroup(group.id);
            }).catch(() => {});
        };

        return groupEl;
    }
    
    function addScriptUIEventListeners() {
        document.querySelectorAll('.script-list-item .favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                toggleScriptFavorite(path);
            });
        });
        document.querySelectorAll('.script-list-item .delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const path = e.target.closest('.script-list-item').dataset.path;
                const fileName = path.split(/[\\/]/).pop();
                
                showCustomPrompt({
                    title: '确认删除脚本',
                    body: `<p>您确定要删除脚本文件 "${fileName}" 吗？</p><p class="text-red-500 text-xs mt-2">此操作将从您的硬盘上永久删除该文件，无法撤销。</p>`,
                    confirmText: '永久删除',
                    confirmClass: 'btn-danger'
                }).then(() => {
                    const sanitizedPath = path.replace(/\\/g, '/');
                    const script = `(function() {
                        var fileToDelete = new File(${JSON.stringify(sanitizedPath)});
                        if (fileToDelete.exists) { return fileToDelete.remove() ? "success" : "错误: 文件可能被占用或权限不足。"; }
                        else { return "错误: 文件路径不存在。"; }
                    })()`;

                    csInterface.evalScript(script, (result) => {
                        if (result === 'success') {
                            const config = getScriptConfig();
                            config.groups.forEach(group => {
                                group.scripts = (group.scripts || []).filter(s => s.path !== path);
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            showToast(`脚本 "${fileName}" 已从硬盘删除`, 'success');
                        } else {
                            showToast(`删除失败: ${result}`, 'error');
                        }
                    });
                }).catch(() => {});
            });
        });
    }

    function renderScriptsUI() {
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
            groupsToRender = groupsToRender.map(group => {
                const favoriteScripts = (group.scripts || []).filter(script => script.isFavorite);
                return { ...group, scripts: favoriteScripts };
            }).filter(group => group.scripts.length > 0);
        }

        if (searchTerm) {
            groupsToRender = groupsToRender.map(group => {
                const searchedScripts = (group.scripts || []).filter(script => 
                    script.path.split(/[\\/]/).pop().toLowerCase().replace(/\.(jsx|jsxbin)$/, '').includes(searchTerm)
                );
                return { ...group, scripts: searchedScripts };
            }).filter(group => group.scripts.length > 0);
        }

        scriptListContainer.innerHTML = '';
        if (groupsToRender.length === 0) {
            scriptListContainer.innerHTML = `<div class="text-center py-8 text-gray-500"><i class="fa fa-folder-open-o fa-2x mb-3"></i><p>没有找到脚本</p><p class="text-xs mt-1">请检查筛选条件或加载脚本</p></div>`;
        } else {
            groupsToRender.forEach(group => {
                const isExpanded = expansionStates[group.id] === undefined ? true : expansionStates[group.id];
                scriptListContainer.appendChild(createScriptGroupElement(group, isExpanded));
            });
        }

        scriptFavoritesBar.innerHTML = '';
        const favorites = [];
        (config.groups || []).forEach(g => {
            (g.scripts || []).forEach(s => {
                if (s.isFavorite) favorites.push(s);
            });
        });

        if (favorites.length > 0) {
            favorites.forEach(script => {
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
                    if (!e.target.closest('.remove-favorite-btn')) runScript(script.path);
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
    
    function mergeScriptsWithConfig() {
        const config = getScriptConfig();
        const allKnownPaths = new Set();
        config.groups.forEach(group => {
            (group.scripts || []).forEach(script => { allKnownPaths.add(script.path); });
        });
        
        const newScripts = allAvailableScripts.filter(script => !allKnownPaths.has(script.path));
        
        if (newScripts.length > 0) {
            let defaultGroup = config.groups.find(g => g.name === "默认分组");
            if (!defaultGroup) {
                defaultGroup = { id: generateId(), name: "默认分组", scripts: [] };
                config.groups.unshift(defaultGroup);
            }
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            
            newScripts.forEach(script => {
                defaultGroup.scripts.push({ path: script.path, isFavorite: false });
            });
            saveScriptConfig(config);
        }
    }
    
    function loadDefaultAeScripts() {
        return new Promise(resolve => {
            csInterface.evalScript('scanAeScripts()', (result) => {
                try {
                    if (result && result !== 'null') {
                        const defaultScripts = JSON.parse(result);
                        const existingPaths = new Set(allAvailableScripts.map(s => s.path));
                        defaultScripts.forEach(script => {
                            if (!existingPaths.has(script.path)) {
                                allAvailableScripts.push(script);
                                existingPaths.add(script.path);
                            }
                        });
                    }
                } catch(e) { showToast('解析AE默认脚本列表失败', 'error'); }
                resolve();
            });
        });
    }

    async function initializeScriptModule() {
        await loadDefaultAeScripts(); 
        mergeScriptsWithConfig();
        renderScriptsUI();
    }
    
    function deleteScriptGroup(groupId) {
        let config = getScriptConfig();
        const groupToDelete = config.groups.find(g => g.id === groupId);
        if (!groupToDelete || groupToDelete.name === '默认分组') return;

        let defaultGroup = config.groups.find(g => g.name === '默认分组');
        if (!defaultGroup) {
                defaultGroup = { id: generateId(), name: "默认分组", scripts: [] };
                config.groups.unshift(defaultGroup);
        }
        if (groupToDelete.scripts && groupToDelete.scripts.length > 0) {
            if (!defaultGroup.scripts) defaultGroup.scripts = [];
            defaultGroup.scripts.push(...groupToDelete.scripts);
        }
        config.groups = config.groups.filter(g => g.id !== groupId);
        saveScriptConfig(config);
        renderScriptsUI();
        showToast(`分组 "${groupToDelete.name}" 已删除`, 'success');
    }
    
    function toggleScriptFavorite(path) {
        const config = getScriptConfig();
        for (const group of config.groups) {
            const script = (group.scripts || []).find(s => s.path === path);
            if (script) {
                script.isFavorite = !script.isFavorite;
                break;
            }
        }
        saveScriptConfig(config);
        renderScriptsUI();
    }

    function loadScriptFiles() {
        csInterface.evalScript('selectScriptFiles()', (result) => {
            if (!result || result === 'null' || result === 'canceled') return;
            try {
                const data = JSON.parse(result);
                const selectedScripts = data.scripts || [];
                if (selectedScripts.length === 0) return;

                const config = getScriptConfig();
                const allKnownPaths = new Set(config.groups.flatMap(g => (g.scripts || []).map(s => s.path)));
                const newScripts = selectedScripts.filter(script => !allKnownPaths.has(script.path));

                if (newScripts.length > 0) {
                    const groupOptions = (config.groups || []).map(g => `<option value="${g.id}">${g.name}</option>`).join('');
                    showCustomPrompt({
                        title: '加载新脚本',
                        body: `<div class="space-y-2"><p class="text-sm text-gray-300">检测到 ${newScripts.length} 个新脚本。请选择要将它们添加到的分组：</p><select id="promptInput" class="input-field w-full mt-2">${groupOptions}</select></div>`,
                        confirmText: '添加'
                    }).then(selectedGroupId => {
                        const targetGroup = config.groups.find(g => g.id === selectedGroupId);
                        if (targetGroup) {
                            if (!targetGroup.scripts) targetGroup.scripts = [];
                            newScripts.forEach(script => {
                                targetGroup.scripts.push({ path: script.path, isFavorite: false });
                            });
                            saveScriptConfig(config);
                            renderScriptsUI();
                            showToast(`${newScripts.length}个新脚本已添加到 "${targetGroup.name}" 分组`, 'success');
                        }
                    }).catch(() => {});
                } else {
                    showToast('所选脚本已存在于列表中', 'info');
                }
            } catch (e) {
                showToast('解析脚本文件列表失败', 'error');
                console.error(e, result);
            }
        });
    }


    // =============================================================================
    // --- AI 脚本助手模块 (AI Script Assistant Module) ---
    // =============================================================================
    
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

    function setActiveConversation(id) {
        activeConversationId = id;
        renderConversationList();
        renderChatLog();
    }

    function createNewConversation() {
        const newId = generateId();
        const newConversation = {
            id: newId,
            title: `对话 ${conversations.length + 1}`,
            history: [{ "role": "system", "content": "You are a helpful AI assistant specializing in Adobe After Effects ExtendScript (ES3). Your primary goal is to assist users by providing clear, well-explained solutions. When a user asks for a script, first provide a concise explanation of how the script works, using markdown for formatting. Then, present the complete, executable ExtendScript code inside a formatted javascript markdown block. Always be friendly and encouraging." }]
        };
        conversations.unshift(newConversation);
        setActiveConversation(newId);
        saveConversations();
    }

    function renderChatLog() {
        aiChatLog.innerHTML = '';
        const activeConv = conversations.find(c => c.id === activeConversationId);
        if (activeConv) {
            activeConv.history.forEach(message => {
                if (message.role !== 'system') {
                    addMessageToLog(aiChatLog, message.content, message.role);
                }
            });
        }
    }
    
    function renderConversationList() {
        aiConversationList.innerHTML = '';
        conversations.forEach(conv => {
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
            item.appendChild(deleteBtn);
            
            item.addEventListener('click', () => setActiveConversation(conv.id));
            deleteBtn.onclick = (e) => {
                e.stopPropagation();
                showCustomPrompt({
                    title: '确认删除对话',
                    body: `<p>确定要删除对话 "${conv.title}" 吗？</p>`,
                    confirmText: '删除',
                    confirmClass: 'btn-danger'
                }).then(() => {
                    conversations = conversations.filter(c => c.id !== conv.id);
                    saveConversations();
                    if (activeConversationId === conv.id) {
                        if (conversations.length > 0) setActiveConversation(conversations[0].id);
                        else createNewConversation();
                    } else {
                        renderConversationList();
                    }
                }).catch(() => {});
            };

            aiConversationList.appendChild(item);
        });
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

    function initializeAiChat() {
        toggleAiGeneratorView();
        loadConversations();
        if(conversations.length === 0) {
            createNewConversation();
        } else {
            setActiveConversation(conversations[0].id);
        }
    }


    // =============================================================================
    // --- 事件监听器 (Event Listeners) ---
    // =============================================================================

    // --- 脚本管理事件 ---
    scriptSearchInput.addEventListener('input', renderScriptsUI);
    scriptFavoriteToggle.addEventListener('click', () => {
        showOnlyScriptFavorites = !showOnlyScriptFavorites;
        scriptFavoriteToggle.innerHTML = showOnlyScriptFavorites ?
            '<i class="fa fa-star mr-2"></i>显示全部' :
            '<i class="fa fa-star-o mr-2"></i>只看收藏';
        if(showOnlyScriptFavorites) scriptFavoriteToggle.classList.add('text-yellow-400');
        else scriptFavoriteToggle.classList.remove('text-yellow-400');
        renderScriptsUI();
    });
    addScriptGroupBtn.addEventListener('click', () => {
        showCustomPrompt({
            title: '新建分组',
            body: '<input type="text" id="promptInput" class="input-field w-full" placeholder="输入新分组的名称">',
            confirmText: '创建'
        }).then(groupName => {
            if (groupName && groupName.trim()) {
                let config = getScriptConfig();
                if (!config.groups) config.groups = [];
                config.groups.push({ id: generateId(), name: groupName.trim(), scripts: [] });
                saveScriptConfig(config);
                renderScriptsUI();
            }
        }).catch(()=>{});
    });
    loadScriptsBtn.addEventListener('click', loadScriptFiles);

    // --- AI 助手事件 ---
    aiSendBtn.addEventListener('click', async () => {
        const prompt = aiPromptInput.value.trim();
        if (!prompt) return;
        const apiKey = localStorage.getItem(AI_API_KEY);
        if (!apiKey) {
            showToast('请先设置API Key', 'error');
            toggleAiGeneratorView();
            return;
        }
        
        const activeConv = conversations.find(c => c.id === activeConversationId);
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
        if (apiKey) aiApiKeyInput.value = apiKey;
        toggleAiGeneratorView();
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
    aiNewChatBtn.addEventListener('click', createNewConversation);

    // --- 自定义脚本弹窗事件 ---
    aiRunCustomScriptBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        openModal(customScriptModal, customScriptModalContent);
    });
    closeCustomScriptModalBtn.addEventListener('click', () => closeModal(customScriptModal, customScriptModalContent));
    runCustomScriptBtn.addEventListener('click', () => {
        const scriptToRun = customScriptInput.value;
        if (!scriptToRun.trim()) {
            showToast('脚本内容不能为空', 'error');
            return;
        }
        runScript(scriptToRun); // Re-use the runScript function
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
        
        const groupOptions = groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
        
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
            if (!fileName || !fileName.trim()) { showToast('文件名不能为空', 'error'); return; }
            if (!savePath || !savePath.trim()) { showToast('请选择一个保存位置', 'error'); return; }

            localStorage.setItem(CUSTOM_SCRIPT_SAVE_DIR_KEY, savePath);

            const finalFileName = fileName.trim().endsWith('.jsx') ? fileName.trim() : fileName.trim() + '.jsx';
            const sanitizedSavePath = savePath.replace(/\\/g, '/');
            const fullPath = sanitizedSavePath + '/' + finalFileName;

            csInterface.evalScript(`saveScriptToFile(${JSON.stringify(scriptContent)}, ${JSON.stringify(fullPath)})`, (saveResult) => {
                if (saveResult === 'success') {
                    const targetGroup = groups.find(g => g.id === groupId);
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

        } catch(err) { /* 用户取消了弹窗 */ }
    });
    
    // --- 模块初始化调用 ---
    initializeScriptModule();
    initializeAiChat();
}