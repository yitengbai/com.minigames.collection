// 【新增】在JS入口导入CSS文件，让Parcel来处理它
import '../css/main.css';

// =============================================================================
// --- 模块导入 (Module Imports) ---
// =============================================================================

// 核心库
import $ from 'jquery';

// 【新】导入我们重构后的API模块
import * as api from './shared/api.js';

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
// 核心接口实例，方便全局调用
const csInterface = new CSInterface();


// =============================================================================
// --- 主程序入口 (Main Application Entry Point) ---
// =============================================================================

document.addEventListener('DOMContentLoaded', initializeExtension);

/**
 * @description 扩展的总初始化函数
 */
async function initializeExtension() {
    
    // --- 【新】核心接口和后端脚本初始化 ---
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

    // 【新】通过一次API调用异步获取所有初始化数据
    try {
        const initialData = await api.getInitialPanelData();
        console.log("成功从AE获取到初始化数据:", initialData);
        // 你可以在这里使用 initialData 来更新UI，比如显示欢迎信息或AE版本号
        // document.getElementById('welcome-message').textContent = `${initialData.userInfo} (AE v${initialData.version})`;
        
    } catch (error) {
        console.error("加载AE初始化数据失败:", error);
        showToast("无法连接到AE后端脚本，请检查。","error");
    }
    

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

    // 【旧代码保留，但建议未来也改造成使用api.js的模式】
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
        // ... (这部分逻辑保持不变)
    }
    
    // 图层扫描器事件绑定
    layerScannerBtn.addEventListener('click', (e) => { e.preventDefault(); toggleLayerScanner(); });
    // ... (其他事件绑定保持不变)


    // =============================================================================
    // --- 初始化所有页面模块 (Initialize All Page Modules) ---
    // =============================================================================

    // 【新】现在页面模块不再需要手动传入csInterface，
    // 因为它们可以直接导入和使用api.js模块，代码更解耦。
    initializePage1();
    initializePage2();
    initializePage3();
    initializePage4();
    // Page 5 is empty, no initializer needed.
    initializePage6();
    initializePage7();

    console.log("面板所有模块初始化完成。");
}