#!/usr/bin/env node

/**
 * 這個腳本用於在 CI/CD 環境中自動生成 personalInfo.json 文件
 * 從環境變數中讀取信息，並寫入到配置文件中
 * 
 * 使用方法：
 * 1. 在 CI/CD 流程中設置所需的環境變數
 * 2. 執行此腳本
 */

const fs = require('fs');
const path = require('path');

// 定義配置文件路徑
const configPath = path.join(__dirname, '../src/config/personalInfo.json');

// 從環境變數中獲取個人信息
const personalInfo = {
  name: process.env.PERSONAL_NAME || 'Default Name',
  title: process.env.PERSONAL_TITLE || 'Default Title',
  location: process.env.PERSONAL_LOCATION || 'Default Location',
  email: process.env.PERSONAL_EMAIL || 'default@example.com',
  phone: process.env.PERSONAL_PHONE || '+1-XXX-XXX-XXXX',
  socialLinks: {
    github: process.env.PERSONAL_GITHUB || 'https://github.com/',
    linkedin: process.env.PERSONAL_LINKEDIN || 'https://linkedin.com/in/'
  }
};

// 創建配置目錄（如果不存在）
const configDir = path.dirname(configPath);
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// 寫入配置文件
fs.writeFileSync(configPath, JSON.stringify(personalInfo, null, 2));

console.log('personalInfo.json file has been created with environment variables.'); 