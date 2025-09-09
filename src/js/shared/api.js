// =============================================================================
// 与 After Effects (ExtendScript) 的通信模块
// =============================================================================

// 这一行是必须的，用于获取 CEP 的核心通信接口
const csInterface = new CSInterface();

/**
 * @description 【核心辅助函数】执行一个JSX脚本并返回一个Promise。
 * 这是所有AE通信的基础，它将老旧的回调方式转换为了现代的Promise方式。
 * @param {string} script - 要执行的JSX脚本内容 (例如 "myFunction('param1')")
 * @returns {Promise<any>} 返回一个Promise，成功时resolve结果，失败时reject错误信息。
 */
function evalScriptAsPromise(script) {
    return new Promise((resolve, reject) => {
        csInterface.evalScript(script, (result) => {
            // ExtendScript发生错误时，通常会返回一个以"EvalScript error:"开头的字符串
            if (typeof result === 'string' && result.startsWith("EvalScript error:")) {
                reject(result);
            } else {
                resolve(result);
            }
        });
    });
}

/**
 * @description 通过一次调用获取面板所需的所有初始化数据。
 * @returns {Promise<object>} 返回一个Promise，它最终会解析为一个包含所有初始化数据的对象。
 */
export function getInitialPanelData() {
    return evalScriptAsPromise('getInitialPanelData()')
        .then(jsonString => {
            try {
                // 安全地解析从JSX返回的JSON字符串
                const data = JSON.parse(jsonString);
                if (data.error) {
                    // 如果JSX脚本内部捕获了错误并返回，我们也把它当作失败处理
                    return Promise.reject(data.error);
                }
                return data;
            } catch (e) {
                // 如果返回的不是一个有效的JSON，也当作失败处理
                return Promise.reject("解析JSX返回的JSON数据失败: " + e);
            }
        });
}

// --- 以下是你其他JSX函数的Promise封装示例 ---

/**
 * @description [示例] 整理项目
 * @param {string} excludeNamesJson - 需要排除的文件名JSON字符串
 * @returns {Promise<string>}
 */
export function organizeProjectItems(excludeNamesJson) {
    // 为了安全，我们需要对传入的字符串进行转义，防止引号等字符破坏脚本
    const escapedJson = JSON.stringify(excludeNamesJson);
    return evalScriptAsPromise(`organizeProjectItems(${escapedJson})`);
}

/**
 * @description [示例] 创建项目文件夹
 * @param {string} folderNamesJson - 包含文件夹名称的JSON字符串
 * @returns {Promise<string>}
 */
export function createProjectFolders(folderNamesJson) {
    const escapedJson = JSON.stringify(folderNamesJson);
    return evalScriptAsPromise(`createProjectFolders(${escapedJson})`);
}


// =============================================================================
// 与外部 API (如 DeepSeek) 的通信模块
// =============================================================================

/**
 * 【你原有的函数，完整保留】
 * 调用 DeepSeek API 发送聊天请求。
 * @param {string} apiKey -用户的 DeepSeek API Key。
 * @param {Array<object>} messages - 对话历史消息数组。
 * @returns {Promise<object>} - 返回 API 响应的 JSON 对象。
 */
export async function callDeepSeekAPI(apiKey, messages) {
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