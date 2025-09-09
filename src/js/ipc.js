// 这是一个新创建的文件，用于集中管理与ExtendScript的通信

export const cs = new CSInterface();

/**
 * 封装evalScript，统一处理回调和JSON解析
 * @param {string} script 要执行的ExtendScript脚本
 * @param {function} callback 回调函数
 */
function evalScript(script, callback) {
    cs.evalScript(script, (result) => {
        if (callback) {
            try {
                // 尝试解析JSON，增强健壮性
                if (typeof result === 'string' && (result.startsWith('{') || result.startsWith('['))) {
                    callback(JSON.parse(result));
                } else {
                    callback(result);
                }
            } catch (e) {
                console.error("Failed to parse JSON from ExtendScript:", e);
                console.error("Original result:", result);
                callback(result); // 解析失败则返回原始结果
            }
        }
    });
}

/**
 * 优雅地调用ExtendScript函数 (RPC风格)
 * @param {string} funcName 要调用的JSX函数名
 * @param {...any} args 传递给JSX函数的参数
 * @returns {Promise<any>}
 */
export function invoke(funcName, ...args) {
    // 将所有参数转换为JSON字符串，确保特殊字符被正确转义
    const argsString = args.map(arg => JSON.stringify(arg)).join(',');
    const script = `main.${funcName}(${argsString})`;

    return new Promise((resolve, reject) => {
        evalScript(script, (result) => {
            if (result && typeof result === 'string' && result.toLowerCase().includes('error')) {
                console.error(`Error from ExtendScript function ${funcName}:`, result);
                reject(result);
            } else {
                resolve(result);
            }
        });
    });
}