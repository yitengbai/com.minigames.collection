import { showToast, openModal, closeModal } from '../shared/ui.js';
import { generateId } from '../shared/ui.js'; // Page 7 specific logic needs generateId

/**
 * 初始化学习参考页面 (Page 7) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage7(csInterface) {

    const page7Node = document.getElementById('page7');
    if (!page7Node) return;
    
    // --- DOM 元素获取 ---
    const p7Wrap = page7Node.querySelector('.p7-wrap');
    const p7ImageGrid = document.getElementById('p7ImageGrid');
    const p7VideoGrid = document.getElementById('p7VideoGrid');
    const p7Zoom = document.getElementById('p7Zoom');
    const p7Btn = document.getElementById('p7Btn');
    const p7Menu = document.getElementById('p7Menu');
    const p7File = document.getElementById('p7File');
    const p7Modal = document.getElementById('p7Modal');
    const p7ModalContent = document.getElementById('p7ModalContent');
    const p7Close = document.getElementById('p7Close');
    const p7Count = document.getElementById('p7Count');
    const p7Apply = document.getElementById('p7Apply');
    const p7InputModal = document.getElementById('p7InputModal');
    const p7InputModalContent = document.getElementById('p7InputModalContent');
    const p7InputModalField = document.getElementById('p7InputModalField');
    const p7GetLinkBtn = document.getElementById('p7GetLinkBtn');
    const p7InputModalOk = document.getElementById('p7InputModalOk');
    const p7InputModalCancel = document.getElementById('p7InputModalCancel');

    if (!p7ImageGrid || !p7VideoGrid || !p7Wrap) {
        console.error("Page 7 UI elements could not be initialized.");
        return;
    }
    
    // --- 状态管理 ---
    const LS_KEY = 'p7_state_v6';
    let state = { items: [], zoom: 180 };

    try { 
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); 
        if (saved) { 
            state = Object.assign(state, saved); 
            state.items.forEach(it => {
                if (typeof it.view === 'undefined') {
                    it.view = 'image';
                }
            });
        } 
    } catch(e) { console.error("无法解析Page 7 state", e); }
    
    if (!Array.isArray(state.items) || state.items.length === 0) { 
        state.items = new Array(20).fill(0).map(() => ({ 
            type: 'empty', 
            imagePath: null, 
            videoUrl: null,
            view: 'image'
        })); 
    }

    function saveState() { 
        localStorage.setItem(LS_KEY, JSON.stringify(state)); 
    }

    // --- 渲染与UI更新 ---

    function renderGrids() {
        p7ImageGrid.innerHTML = '';
        p7VideoGrid.innerHTML = '';
        
        const sizeStyle = state.zoom + 'px';
        p7ImageGrid.style.setProperty('--p7-size', sizeStyle);
        p7VideoGrid.style.setProperty('--p7-size', sizeStyle);

        state.items.forEach((it, idx) => {
            // 1. 创建上层 (Image) 网格单元
            const imageCell = document.createElement('div');
            imageCell.className = 'p7-cell';
            imageCell.dataset.index = idx;
            imageCell.style.opacity = (it.view === 'image') ? '1' : '0';
            imageCell.style.pointerEvents = (it.view === 'image') ? 'auto' : 'none';

            const cover = document.createElement('div');
            cover.className = 'p7-cover';

            if (it.imagePath) {
                const imgElement = document.createElement('img');
                const extensionPath = csInterface.getSystemPath('extension').replace(/\\/g, '/');
                imgElement.src = 'file:///' + extensionPath + '/' + it.imagePath + '?t=' + new Date().getTime();
                cover.innerHTML = ''; 
                cover.appendChild(imgElement);
            } else {
                cover.textContent = '伪装图片';
            }
            imageCell.appendChild(cover);
            
            if (it.type !== 'empty') {
                const overlay = document.createElement('div');
                overlay.className = 'p7-cell-overlay';
                overlay.innerHTML = `
                    <button class="p7-cell-btn" data-action="reset" title="重置"><i class="fa fa-undo pointer-events-none"></i></button>
                    <button class="p7-cell-btn" data-action="settings" title="设置"><i class="fa fa-cog pointer-events-none"></i></button>
                `;
                imageCell.appendChild(overlay);
            }
            p7ImageGrid.appendChild(imageCell);

            // 2. 创建下层 (Video) 网格单元
            const videoCell = document.createElement('div');
            videoCell.className = 'p7-cell';
            videoCell.dataset.index = idx;
            
            if (it.videoUrl) {
                const mediaElement = document.createElement('iframe');
                mediaElement.className = 'p7-media';
                mediaElement.setAttribute('allow', 'fullscreen; autoplay; encrypted-media; picture-in-picture');
                mediaElement.setAttribute('allowfullscreen', '');
                mediaElement.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-modals');
                mediaElement.src = it.videoUrl;
                videoCell.appendChild(mediaElement);
            }
            p7VideoGrid.appendChild(videoCell);
        });
    }
    
    function updateGridViews() {
        const imageCells = p7ImageGrid.querySelectorAll('.p7-cell');
        imageCells.forEach(cell => {
            const idx = parseInt(cell.dataset.index, 10);
            const item = state.items[idx];
            if (item) {
                cell.style.opacity = (item.view === 'image') ? '1' : '0';
                cell.style.pointerEvents = (item.view === 'image') ? 'auto' : 'none';
            }
        });
    }
            
    function showMenuForCell(e, cell, idx) {
        p7Menu.style.display = 'block';
        const page7Rect = page7Node.getBoundingClientRect();
        const top = e.clientY - page7Rect.top;
        const left = e.clientX - page7Rect.left;

        p7Menu.style.top = top + 'px';
        p7Menu.style.left = left + 'px';
        p7Menu.dataset.target = idx;
    }

    function openInputModal(index) {
        return new Promise((resolve, reject) => {
            const item = state.items[index] || {};
            p7InputModalField.value = item.videoUrl || '';
            
            openModal(p7InputModal, p7InputModalContent);
            p7InputModalField.focus();

            const handleOk = () => { cleanup(); resolve(p7InputModalField.value); };
            const handleCancel = () => { cleanup(); reject(); };
            const handleKeydown = (e) => {
                if (e.key === 'Enter') { e.preventDefault(); handleOk(); }
                if (e.key === 'Escape') handleCancel();
            };
            const handleGetLink = () => { csInterface.openURLInDefaultBrowser('https://xbeibeix.com/api/bilibili/'); }
            const modalBgClick = (e) => { if (e.target === p7InputModal) handleCancel(); };

            function cleanup() {
                p7InputModalOk.removeEventListener('click', handleOk);
                p7InputModalCancel.removeEventListener('click', handleCancel);
                p7GetLinkBtn.removeEventListener('click', handleGetLink);
                p7InputModal.removeEventListener('click', modalBgClick);
                p7InputModalField.removeEventListener('keydown', handleKeydown);
                closeModal(p7InputModal, p7InputModalContent);
            }
            
            p7InputModalOk.addEventListener('click', handleOk, { once: true });
            p7InputModalCancel.addEventListener('click', handleCancel, { once: true });
            p7GetLinkBtn.addEventListener('click', handleGetLink, { once: true });
            p7InputModal.addEventListener('click', modalBgClick, { once: true });
            p7InputModalField.addEventListener('keydown', handleKeydown);
        });
    }

    // --- 事件监听器 ---
    
    p7Wrap.addEventListener('mousedown', (e) => {
        if (e.ctrlKey && e.button === 0) {
            if (e.target.closest('.p7-toolbar, .p7-zoombox, #p7Menu, #p7Modal, #p7InputModal')) return;
            e.preventDefault();
            e.stopPropagation();

            state.items.forEach(it => {
                if (it.imagePath && it.videoUrl) {
                    it.view = (it.view === 'image') ? 'video' : 'image';
                }
            });

            saveState();
            updateGridViews();
        }
    }, true); 

    p7ImageGrid.addEventListener('click', (e) => {
        if (e.ctrlKey) { e.preventDefault(); e.stopPropagation(); return; }

        const cell = e.target.closest('.p7-cell');
        if (!cell) return;
        
        const idx = parseInt(cell.dataset.index, 10);
        const actionBtn = e.target.closest('[data-action]');

        if (actionBtn) {
            e.stopPropagation(); 
            const action = actionBtn.dataset.action;
            if (action === 'reset') {
                state.items[idx] = { type: 'empty', imagePath: null, videoUrl: null, view: 'image' };
                saveState();
                renderGrids();
            } else if (action === 'settings') {
                showMenuForCell(e, cell, idx);
            }
        } else if (state.items[idx]) {
            showMenuForCell(e, cell, idx);
        }
    });

    p7Zoom.addEventListener('input', () => { 
        state.zoom = parseInt(p7Zoom.value, 10); 
        const sizeStyle = state.zoom + 'px';
        p7ImageGrid.style.setProperty('--p7-size', sizeStyle);
        p7VideoGrid.style.setProperty('--p7-size', sizeStyle);
    });
    p7Zoom.addEventListener('change', saveState);
    p7Zoom.value = state.zoom;

    document.addEventListener('click', (e) => {
        if (p7Menu && !p7Menu.contains(e.target) && !e.target.closest('.p7-cell')) {
                p7Menu.style.display = 'none';
        }
    });
    
    p7Menu.addEventListener('click', async (e) => {
        const cmdBtn = e.target.closest('button[data-cmd]');
        if (!cmdBtn) return;
        
        const idx = parseInt(p7Menu.dataset.target, 10);
        const cmd = cmdBtn.getAttribute('data-cmd');
        p7Menu.style.display = 'none';
        
        if (state.items[idx].type === 'empty') { state.items[idx].type = 'media'; }
        
        if (cmd === 'url') {
            try {
                const url = await openInputModal(idx);
                if (url && url.trim()) {
                    state.items[idx].videoUrl = url.trim();
                    saveState();
                    renderGrids();
                    showToast('视频链接已更新', 'success');
                }
            } catch(err) { /* 用户取消 */ }

        } else if (cmd === 'img') {
            p7File.onchange = () => {
                const file = p7File.files[0];
                if (!file) return;
                const sourcePath = file.path;
                if (!sourcePath) { showToast('无法获取文件路径', 'error'); return; }
                
                const newName = "伪图片_" + generateId() + "_" + file.name;
                const extensionPath = csInterface.getSystemPath('extension');
                const script = `copyFileToExtensionAssetFolder(${JSON.stringify(sourcePath)}, ${JSON.stringify(extensionPath)}, "ICON", ${JSON.stringify(newName)})`;
                
                csInterface.evalScript(script, (result) => {
                    if (result && !result.startsWith('ERROR:')) {
                        state.items[idx].imagePath = result;
                        saveState();
                        renderGrids();
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
    p7Modal.addEventListener('click', (e) => { if (e.target === p7Modal) closeModal(p7Modal, p7ModalContent); });
    p7Apply.addEventListener('click', () => {
        const n = Math.max(1, Math.min(60, parseInt(p7Count.value, 10) || state.items.length));
        const cur = state.items.length;
        if (n > cur) {
            for (let i = 0; i < n - cur; i++) {
                state.items.push({ type: 'empty', imagePath: null, videoUrl: null, view: 'image' });
            }
        } else if (n < cur) {
            state.items.splice(n);
        }
        saveState();
        renderGrids();
        closeModal(p7Modal, p7ModalContent);
    });
    
    // --- 模块初始化调用 ---
    renderGrids();
}