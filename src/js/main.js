// =============================================================================
// --- 模块导入 (Module Imports) ---
// =============================================================================

// 核心库

// 共享模块
import { showToast, openModal, closeModal } from './shared/ui.js';

// 页面模块初始化函数
import { initializePage1 } from './modules/page1_home.js';
import { initializePage2 } from './modules/page2_library.js';
import { initializePage3 } from './modules/page3_scripts.js';
import { initializePage4 } from './modules/page4_effects.js';
import { initializePage6 } from './modules/page6_expressions.js';
import { initializePage7 } from './modules/page7_learning.js';


// =============================================================================
// --- 全局状态变量 (Global State) ---
// =============================================================================

let allScannedLayers = [];
let navigationHistory = [];


// =============================================================================
// --- 主程序入口 (Main Application Entry Point) ---
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化以确保所有元素加载完毕
    setTimeout(initializeExtension, 200);
});

/**
 * 扩展的总初始化函数
 */
function initializeExtension() {
    
    // --- 核心接口初始化 ---
    const csInterface = new CSInterface();
    
    // 监听来自 JSX 的错误事件
    csInterface.addEventListener("com.niuma.scripterror", function (event) {
        const errorMessage = event.data;
        showToast(`脚本执行出错: ${errorMessage}`, 'error');
        // 可以在这里添加更多错误处理逻辑，比如自动切换到脚本页面
        const aiPromptInput = document.getElementById('aiPromptInput');
        if (aiPromptInput) {
            aiPromptInput.value = `我的脚本运行出错了，请帮我看看是什么问题，并修复它。\n\n错误信息：\n${errorMessage}`;
            aiPromptInput.focus();
            document.querySelector('a[href="#page3"]').click();
        }
    });

    // 加载 ExtendScript (main.jsx) 文件
    const extensionRoot = csInterface.getSystemPath('extension');
    const mainJSXPath = extensionRoot + '/js/main.jsx'; // 路径与 package.json 中的 staticOutDir 对应
    const sanitizedPath = mainJSXPath.replace(/\\/g, '/');
    csInterface.evalScript('$.evalFile("' + sanitizedPath + '")');
    

    // --- 全局 DOM 元素获取 ---
    const allNavLinks = document.querySelectorAll('.nav-link');
    const allPages = document.querySelectorAll('.page');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle');

    // 图层扫描器相关 DOM
    const layerScannerBtn = document.getElementById('layerScannerBtn');
    const layerScannerFlyout = document.getElementById('layerScannerFlyout');
    const scanTextLayersBtn = document.getElementById('scanTextLayersBtn');
    const scanImageLayersBtn = document.getElementById('scanImageLayersBtn');
    const layerListPanel = document.getElementById('layerListPanel');
    const closeLayerListBtn = document.getElementById('closeLayerListBtn');
    const layerListTitle = document.getElementById('layerListTitle');
    const layerListContainer = document.getElementById('layerListContainer');
    const backToPrevCompBtn = document.getElementById('backToPrevCompBtn');


    // =============================================================================
    // --- 全局UI逻辑 (Global UI Logic) ---
    // =============================================================================

    // --- 1. 页面导航 ---
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 切换页面时，关闭可能打开的全局浮窗
            hideLayerListPanel();
            hideLayerScannerFlyout();
            
            allNavLinks.forEach(item => item.classList.remove('nav-item-active'));
            this.classList.add('nav-item-active');
            
            allPages.forEach(page => page.classList.add('hidden'));
            const targetPage = document.querySelector(this.getAttribute('href'));
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }
        });
    });

    // --- 2. 侧边栏折叠 ---
    sidebarToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-collapsed');
    });

    // --- 3. 图层扫描器 (快速选择按钮) ---

    function hideLayerScannerFlyout() {
        if (!layerScannerFlyout.classList.contains('hidden')) {
            layerScannerFlyout.classList.add('opacity-0', '-translate-x-4', 'pointer-events-none');
            setTimeout(() => {
                layerScannerFlyout.classList.add('hidden');
            }, 300);
        }
    }
    
    function toggleLayerScanner() {
        if (layerScannerFlyout.classList.contains('hidden')) {
            layerScannerFlyout.classList.remove('hidden', 'pointer-events-none');
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
        }, 300);
        document.querySelectorAll('.flyout-btn').forEach(b => b.classList.remove('flyout-btn-active'));
    }

    function showLayerListPanel(type) {
        layerListPanel.classList.remove('hidden', 'pointer-events-none');
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
                layerListTitle.textContent = `${data.compName} - ${type === 'text' ? '文本' : '图片'}图层`;
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
            layerListContainer.innerHTML = `<div class="text-gray-500 text-center p-8">在指定范围内未找到${type === 'text' ? '文本' : '图片'}图层。</div>`;
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
                const escapedContent = (layer.content || "").replace(/"/g, '&quot;');
                contentHTML += `<div class="layer-text-content" title="${escapedContent}">${layer.content}</div>`;
            }
            item.innerHTML = contentHTML;
            layerListContainer.appendChild(item);
        });
    }

    function handleLayerItemDblClick(e) {
        const listItem = e.target.closest('.layer-list-item');
        if (!listItem) return;

        const textContentElement = e.target.closest('.layer-text-content');
        if (textContentElement) { // 双击的是文本内容 -> 编辑
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

            const finishEditing = (shouldUpdate) => {
                const newText = input.value;
                if (shouldUpdate && newText !== originalText) {
                    csInterface.evalScript(`updateTextLayer(${compId}, ${layerId}, ${JSON.stringify(newText)})`, (res) => {
                        if (res === 'success') {
                            showToast('文本已更新', 'success');
                            textContentElement.textContent = newText;
                            textContentElement.title = newText;
                            // 更新数据源
                            const layerIndex = allScannedLayers.findIndex(l => l.id == layerId && l.compId == compId);
                            if (layerIndex > -1) allScannedLayers[layerIndex].content = newText;
                        } else {
                            showToast('文本更新失败', 'error');
                            console.error('Update text layer failed:', res);
                        }
                        parent.replaceChild(textContentElement, input);
                    });
                } else {
                    parent.replaceChild(textContentElement, input);
                }
            };

            input.addEventListener('blur', () => finishEditing(true));
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') input.blur();
                else if (event.key === 'Escape') finishEditing(false);
            });
        } else { // 双击的是图层项本身 -> 进入合成
            const compId = listItem.dataset.compId;
            const currentCompId = navigationHistory[navigationHistory.length - 1];
            if (compId != currentCompId) {
                navigationHistory.push(compId);
                backToPrevCompBtn.classList.remove('hidden');
            }
            csInterface.evalScript(`openCompInViewer(${compId})`);
        }
    }
    
    // 图层扫描器事件绑定
    layerScannerBtn.addEventListener('click', (e) => { e.preventDefault(); toggleLayerScanner(); });
    [scanTextLayersBtn, scanImageLayersBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            document.querySelectorAll('.flyout-btn-active').forEach(activeBtn => {
                if (activeBtn !== btn) activeBtn.classList.remove('flyout-btn-active');
            });
            btn.classList.toggle('flyout-btn-active');

            if (btn.classList.contains('flyout-btn-active')) {
                showLayerListPanel(type);
                setTimeout(hideLayerScannerFlyout, 200);
            } else {
                hideLayerListPanel();
            }
        });
    });
    closeLayerListBtn.addEventListener('click', hideLayerListPanel);
    layerListContainer.addEventListener('dblclick', handleLayerItemDblClick);
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

    // =============================================================================
    // --- 初始化所有页面模块 (Initialize All Page Modules) ---
    // =============================================================================

    initializePage1(csInterface);
    initializePage2(csInterface);
    initializePage3(csInterface);
    initializePage4(csInterface);
    // Page 5 is empty, no initializer needed.
    initializePage6(csInterface);
    initializePage7(csInterface);
}