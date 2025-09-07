/**
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