#!/usr/bin/env node

/**
 * 這個腳本用於在 CI/CD 環境中自動生成 personalInfo.json 文件
 * 從環境變數中讀取信息，並寫入到配置文件中
 * 
 * 使用方法：
 * 1. 在 CI/CD 流程中設置所需的環境變數
 * 2. 執行此腳本
 * 
 * 在本地開發環境中：
 * - 如果配置文件已存在，則保留原有配置
 * - 只有在文件不存在時才使用默認值創建
 */

const fs = require('fs');
const path = require('path');

// 定義配置文件路徑
const configPath = path.join(__dirname, '../src/config/personalInfo.json');
const exampleConfigPath = path.join(__dirname, '../src/config/personalInfo.example.json');

// 檢查是否是 CI 環境
const isCI = process.env.CI === 'true' || Boolean(process.env.GITHUB_ACTIONS);

// 檢查配置文件是否已存在
const configExists = fs.existsSync(configPath);

// 如果在本地開發環境且配置文件已存在，則不做任何操作
if (!isCI && configExists) {
  console.log('personalInfo.json file already exists. Keeping existing configuration for local development.');
  process.exit(0);
}

// 添加調試信息以便於排查問題
console.log('Environment: ' + (isCI ? 'CI/CD' : 'Local Development'));
console.log('Environment variables:', {
  PERSONAL_NAME: process.env.PERSONAL_NAME ? '***' : 'NOT SET',
  PERSONAL_TITLE: process.env.PERSONAL_TITLE ? '***' : 'NOT SET',
  PERSONAL_LOCATION: process.env.PERSONAL_LOCATION ? '***' : 'NOT SET',
  PERSONAL_EMAIL: process.env.PERSONAL_EMAIL ? '***' : 'NOT SET',
  PERSONAL_PHONE: process.env.PERSONAL_PHONE ? '***' : 'NOT SET',
  PERSONAL_GITHUB: process.env.PERSONAL_GITHUB ? '***' : 'NOT SET',
  PERSONAL_LINKEDIN: process.env.PERSONAL_LINKEDIN ? '***' : 'NOT SET',
});

// 嘗試從示例文件讀取默認值（如果存在）
let defaultValues = {
  name: 'Default Name',
  title: 'Default Title',
  location: 'Default Location',
  email: 'default@example.com',
  phone: '+1-XXX-XXX-XXXX',
  socialLinks: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/'
  }
};

// 如果示例配置文件存在，使用它作為默認值
if (fs.existsSync(exampleConfigPath)) {
  try {
    const exampleConfig = JSON.parse(fs.readFileSync(exampleConfigPath, 'utf8'));
    defaultValues = exampleConfig;
    console.log('Using values from personalInfo.example.json as defaults');
  } catch (error) {
    console.warn('Error reading example config:', error.message);
  }
}

// 從環境變數中獲取個人信息
const personalInfo = {
  name: process.env.PERSONAL_NAME || defaultValues.name,
  title: process.env.PERSONAL_TITLE || defaultValues.title,
  location: process.env.PERSONAL_LOCATION || defaultValues.location,
  email: process.env.PERSONAL_EMAIL || defaultValues.email,
  phone: process.env.PERSONAL_PHONE || defaultValues.phone,
  socialLinks: {
    github: process.env.PERSONAL_GITHUB || defaultValues.socialLinks.github,
    linkedin: process.env.PERSONAL_LINKEDIN || defaultValues.socialLinks.linkedin
  }
};

// 檢查是否在CI環境中但缺少關鍵環境變數
if (isCI) {
  const missingVars = [];
  if (!process.env.PERSONAL_NAME) missingVars.push('PERSONAL_NAME');
  if (!process.env.PERSONAL_TITLE) missingVars.push('PERSONAL_TITLE');
  if (!process.env.PERSONAL_LOCATION) missingVars.push('PERSONAL_LOCATION');
  if (!process.env.PERSONAL_EMAIL) missingVars.push('PERSONAL_EMAIL');
  if (!process.env.PERSONAL_PHONE) missingVars.push('PERSONAL_PHONE');
  if (!process.env.PERSONAL_GITHUB) missingVars.push('PERSONAL_GITHUB');
  if (!process.env.PERSONAL_LINKEDIN) missingVars.push('PERSONAL_LINKEDIN');
  
  if (missingVars.length > 0) {
    console.warn(`WARNING: Running in CI environment but missing these environment variables: ${missingVars.join(', ')}`);
    console.warn('Will use default values from example config which may expose placeholder text in your deployed app!');
  } else {
    console.log('All personal info environment variables are set correctly.');
  }
}

// 創建配置目錄（如果不存在）
const configDir = path.dirname(configPath);
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// 寫入配置文件
fs.writeFileSync(configPath, JSON.stringify(personalInfo, null, 2));

console.log('personalInfo.json file has been created with environment variables.'); 