# 快速入門與整合指南 (Phase 1)

## 1. 專案初始化

確保環境已安裝 Node.js 18+，並執行：

```bash
cd frontend
npm install
```

## 2. 啟動開發伺服器

```bash
npm start
```

## 3. 實作復古粗獷風格

1.  **設定全域樣式**: 在 `src/index.css` 中加入 `scroll-snap-type: y mandatory` 套用至 `body` 或主容器。
2.  **建立區塊**: 使用 `BrutalistSection` 元件，並確保每個 `section` 設定為 `h-screen` (100vh)。
3.  **配置字體**: 在 `src/fonts.css` 中引入 Google Fonts 復古字體，並在 `tailwind.config.js` 中擴展 `fontFamily`。

## 4. 驗證步驟

- **捲動測試**: 確保在桌面端滾動滑鼠時，頁面會自動對齊到每個區塊。
- **行動端測試**: 縮小瀏覽器寬度至 768px 以下，確保 Scroll Snap 停用且頁面可自由捲動。
- **視覺檢查**: 確認文字佔據螢幕主導地位，且字體具有正確的像素化或襯線效果。
