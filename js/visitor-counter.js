/**
 * 訪問者計數器 JavaScript
 * 這個腳本負責從 API 獲取訪問者計數並更新顯示
 */

// API 端點 URL (部署後更新)
const API_URL = 'https://YOUR_API_GATEWAY_ID.execute-api.YOUR_REGION.amazonaws.com/Prod/count';

// 訪問者計數元素
const visitorCountElement = document.getElementById('visitor-count');

/**
 * 從 API 獲取訪問者計數
 * @returns {Promise<number>} 訪問者計數
 */
async function getVisitorCount() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error('獲取訪問者計數時出錯:', error);
        return null;
    }
}

/**
 * 初始化訪問者計數器
 */
async function initVisitorCounter() {
    // 顯示訪問者計數
    const count = await getVisitorCount();
    
    if (count !== null) {
        visitorCountElement.textContent = count;
    } else {
        visitorCountElement.textContent = '無法加載';
    }
}

// 頁面加載後初始化訪問者計數器
document.addEventListener('DOMContentLoaded', initVisitorCounter); 