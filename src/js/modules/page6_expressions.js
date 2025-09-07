import { showToast, generateId, showCustomPrompt, addMessageToLog } from '../shared/ui.js';
import { EXPRESSIONS_KEY, AI_EXPRESSION_API_KEY, AI_EXPRESSION_CONVERSATIONS_KEY } from '../shared/constants.js';
import { callDeepSeekAPI } from '../shared/api.js';

// 模块级别的状态变量
let showOnlyExpressionFavorites = false;
let expressionConversations = [];
let activeExpressionConversationId = null;

/**
 * 初始化表达式助手页面 (Page 6) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage6(csInterface) {

    // --- DOM 元素获取 ---
    // 表达式管理
    const expressionSearchInput = document.getElementById('expressionSearchInput');
    const addExpressionBtn = document.getElementById('addExpressionBtn');
    const expressionFavoriteToggle = document.getElementById('expressionFavoriteToggle');
    const expressionListContainer = document.getElementById('expressionListContainer');
    const expressionFavoritesBar = document.getElementById('expressionFavoritesBar');
    
    // AI 表达式助手
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
    

    // =============================================================================
    // --- 表达式管理模块 (Expression Management Module) ---
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
            expressions = expressions.filter(e => e.name.toLowerCase().includes(searchTerm) || (e.description && e.description.toLowerCase().includes(searchTerm)));
        }

        expressionListContainer.innerHTML = '';
        if (expressions.length === 0) {
            expressionListContainer.innerHTML = `<div class="text-center py-8 text-gray-500"><p>列表为空</p><p class="text-xs mt-1">点击右上角“添加表达式”来创建</p></div>`;
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


    // =============================================================================
    // --- AI 表达式助手模块 (AI Expression Helper Module) ---
    // =============================================================================

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
    
    function setActiveExpressionConversation(id) {
        activeExpressionConversationId = id;
        renderExpressionConversationList();
        renderExpressionChatLog();
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
                showCustomPrompt({
                    title: '确认删除对话',
                    body: `确定要删除对话 "${conv.title}" 吗？`,
                    confirmText: '删除',
                    confirmClass: 'btn-danger'
                }).then(() => {
                    expressionConversations = expressionConversations.filter(c => c.id !== conv.id);
                    saveExpressionConversations();
                    if(activeExpressionConversationId === conv.id) {
                        if (expressionConversations.length > 0) setActiveExpressionConversation(expressionConversations[0].id);
                        else createNewExpressionConversation();
                    } else {
                        renderExpressionConversationList();
                    }
                }).catch(()=>{});
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
        toggleAiExpressionView();
        loadExpressionConversations();
        if(expressionConversations.length === 0) {
            createNewExpressionConversation();
        } else {
            setActiveExpressionConversation(expressionConversations[0].id);
        }
    }

    /**
     * 主初始化函数，用于设置事件监听器和初始UI状态。
     */
    function initializeExpressionModule() {
        renderExpressionUI();
        initializeAiExpressionChat();
        
        expressionSearchInput.addEventListener('input', renderExpressionUI);
        
        expressionFavoriteToggle.addEventListener('click', () => {
            showOnlyExpressionFavorites = !showOnlyExpressionFavorites;
            expressionFavoriteToggle.innerHTML = showOnlyExpressionFavorites ?
                '<i class="fa fa-star mr-2"></i>显示全部' :
                '<i class="fa fa-star-o mr-2"></i>只看收藏';
            if(showOnlyExpressionFavorites) expressionFavoriteToggle.classList.add('text-yellow-400');
            else expressionFavoriteToggle.classList.remove('text-yellow-400');
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

        // AI 助手事件监听
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
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
        
        aiExpressionNewChatBtn.addEventListener('click', createNewExpressionConversation);
    }

    // --- 模块初始化调用 ---
    initializeExpressionModule();
}