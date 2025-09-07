import { openModal, closeModal, showToast } from '../shared/ui.js';
import { DEFAULT_PRESET_KEY, CUSTOM_PRESETS_KEY, initialFolders } from '../shared/constants.js';

/**
 * 初始化欢迎页 (Page 1) 的所有功能和事件监听。
 * @param {CSInterface} csInterface - CSInterface 的实例，用于与 AE 通信。
 */
export function initializePage1(csInterface) {

    // --- DOM 元素获取 ---
    const createDefaultFoldersBtn = document.getElementById('createDefaultFoldersBtn');
    const openFolderPanelBtn = document.getElementById('openFolderPanelBtn');
    const organizeProjectBtn = document.getElementById('organizeProjectBtn');
    const organizeExcludeInput = document.getElementById('organizeExcludeInput');
    
    // 自定义文件夹面板的 DOM 元素
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

    // --- 内部辅助函数 ---

    function executeCreateFolders(folderArray) {
        const validFolders = folderArray.filter(name => name && name.trim() !== '');
        if (validFolders.length === 0) {
            showToast("没有要创建的文件夹。", 'info');
            return;
        }
        const folderNamesJson = JSON.stringify(validFolders);
        // 注意：evalScript 的第二个参数（JSON.stringify）是为了将整个字符串正确传递给 JSX
        const script = `createProjectFolders(${JSON.stringify(folderNamesJson)})`;
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

    // --- 事件监听器 ---

    createDefaultFoldersBtn.addEventListener('click', () => {
        const defaultPreset = JSON.parse(localStorage.getItem(DEFAULT_PRESET_KEY));
        executeCreateFolders(defaultPreset || initialFolders);
    });

    openFolderPanelBtn.addEventListener('click', () => openModal(folderPanelModal, folderPanelModalContent));

    if (organizeProjectBtn) {
        organizeProjectBtn.addEventListener('click', () => {
            const excludeText = organizeExcludeInput.value.trim();
            const excludeNames = excludeText.split(/,|，|\s+/).filter(name => name);
            // 注意：这里需要两次 stringify，一次转为JSON字符串，第二次是为了让这个字符串本身能被 evalScript 安全地传递
            const script = `organizeProjectItems(${JSON.stringify(JSON.stringify(excludeNames))})`;
            csInterface.evalScript(script, (result) => {
                showToast(result, result.includes('失败') ? 'error' : 'success');
            });
        });
    }

    // 自定义文件夹面板的事件监听
    closeFolderPanelBtn.addEventListener('click', () => closeModal(folderPanelModal, folderPanelModalContent));
    folderPanelModal.addEventListener('click', e => {
        if (e.target === folderPanelModal) closeModal(folderPanelModal, folderPanelModalContent);
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

    // --- 模块初始化调用 ---
    const defaultPreset = JSON.parse(localStorage.getItem(DEFAULT_PRESET_KEY));
    populateFolderInputs(defaultPreset || initialFolders);
    loadPresetsToSelector();
}