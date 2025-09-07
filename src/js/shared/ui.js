// =============================================================================
// 通用 UI 辅助函数 (General UI Helper Functions)
// =============================================================================

/**
 * 在界面右上角显示一个会自动消失的通知消息。
 * @param {string} message - 要显示的消息内容。
 * @param {'info' | 'success' | 'error'} type - 消息类型，会影响样式。
 */
export function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
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

/**
 * 生成一个基于时间和随机数的唯一字符串ID。
 * @returns {string} 一个唯一的ID。
 */
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

/**
 * 打开一个模态弹窗。
 * @param {HTMLElement} modal - 模态弹窗的背景遮罩元素。
 * @param {HTMLElement} modalContent - 模态弹窗的内容面板元素。
 */
export function openModal(modal, modalContent) {
    if (!modal || !modalContent) return;
    modal.classList.remove('pointer-events-none', 'opacity-0');
    modalContent.classList.remove('scale-95', 'opacity-0');
}

/**
 * 关闭一个模态弹窗。
 * @param {HTMLElement} modal - 模态弹窗的背景遮罩元素。
 * @param {HTMLElement} modalContent - 模态弹窗的内容面板元素。
 */
export function closeModal(modal, modalContent) {
    if (!modal || !modalContent) return;
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
    }, 300); // 必须匹配 CSS 中的 transition duration
}

/**
 * 在AI聊天日志中添加一条消息。
 * @param {HTMLElement} chatLogElement - 显示聊天记录的DOM元素。
 * @param {string} content - 消息内容。
 * @param {'user' | 'assistant'} role - 消息发送者的角色。
 */
export function addMessageToLog(chatLogElement, content, role) {
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
            
            // 确保 hljs 在 DOM 更新后执行
            if (window.hljs) {
                window.hljs.highlightElement(code);
            }
            
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


/**
 * 显示一个可高度自定义的确认/输入弹窗。
 * @param {object} options - 配置对象.
 * @returns {Promise<any>} - 用户点击确认时解析，点击取消时拒绝。
 */
export function showCustomPrompt(options) {
    return new Promise((resolve, reject) => {
        const genericModal = document.getElementById('genericModal');
        const genericModalContent = document.getElementById('genericModalContent');
        const genericModalTitle = document.getElementById('genericModalTitle');
        const genericModalBody = document.getElementById('genericModalBody');
        const genericModalConfirmBtn = document.getElementById('genericModalConfirmBtn');
        const genericModalCancelBtn = document.getElementById('genericModalCancelBtn');

        if(!genericModal || !genericModalContent || !genericModalTitle || !genericModalBody || !genericModalConfirmBtn || !genericModalCancelBtn) {
            return reject('通用弹窗的 DOM 元素未找到');
        }

        genericModalTitle.textContent = options.title;
        genericModalBody.innerHTML = options.body;
        genericModalConfirmBtn.textContent = options.confirmText || '确认';
        
        genericModalConfirmBtn.className = 'btn-primary px-4 py-2 rounded-lg';
        if (options.confirmClass) {
            genericModalConfirmBtn.classList.add(options.confirmClass);
        }
        
        const changePathBtn = genericModalBody.querySelector('#prompt_changePathBtn');
        if (changePathBtn && window.cep) {
            changePathBtn.addEventListener('click', () => {
                const pathInput = document.getElementById('promptInput_path');
                const initialPath = pathInput ? pathInput.value : '';
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
                 // 也处理添加表达式这种多输入框但非复杂对象返回的场景
                const promptInput = document.getElementById('promptInput');
                if(promptInput) {
                    value = promptInput.value;
                } else {
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