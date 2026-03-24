---
description: "將粗獷主義風格轉換為純黑白風格的執行任務清單"
---

# 任務：黑白粗獷主義風格轉換 (Black & White Brutalist Refinement)

**輸入**: 來自 `/specs/001-brutalist-portfolio/` 的設計文件與使用者要求
**目標**: 移除所有彩色元素（如紅色陰影、黃色背景等），統一為純黑白與灰階風格。

## 格式：`- [ ] [ID] [P?] [故事] 描述`

## Phase 1: 全域樣式與基礎組件黑白化 (B&W Core)

**目標**: 確保基礎樣式與字體系統不包含任何彩色定義。

- [x] T001 [P] 檢查並更新 src/index.css，確保所有全域變數與 Utility Classes 僅使用黑白/灰階
- [x] T002 [P] 更新 src/components/brutalist/Typography.tsx，移除任何預設的彩色屬性，確保支援純黑白對比
- [x] T003 [P] 檢查 tailwind.config.js，確保自定義顏色（如 accent）已移除或改為灰階

---

## Phase 2: [US1] 元件黑白化重構 (B&W Component Refactoring)

**目標**: 逐一檢查並移除 `brutalist/` 下所有元件的彩色樣式。

- [x] T004 [P] [US1] 重構 src/components/brutalist/Hero.tsx，移除所有彩色邊框或陰影，確保使用純黑白
- [x] T005 [P] [US1] 重構 src/components/brutalist/Summary.tsx，移除紅色陰影 (rgba(255,0,0,1))、紅色底線與黃色背景 (bg-yellow-300)
- [x] T006 [P] [US1] 重構 src/components/brutalist/Experience.tsx，移除所有紅色背景 (bg-red-600) 與紅色文字 (text-red-600)，統一改為黑白反白效果
- [x] T007 [P] [US1] 重構 src/components/brutalist/Education.tsx，確保所有裝飾元素與文字均為黑白
- [x] T008 [P] [US1] 重構 src/components/brutalist/Projects.tsx，移除任何彩色 Hover 效果或卡片裝飾
- [x] T009 [P] [US1] 重構 src/components/brutalist/TechStack.tsx，確保技術棧圖示與列表採用黑白配色
- [x] T010 [P] [US1] 驗證 src/components/VisitorCounter.tsx 的灰階邏輯，確保在黑白主題下清晰可見

---

## Phase 3: [US2] 內容驗證與最終拋光 (Content Verification & Polish)

**目標**: 確保在風格更動後，內容完整性不受影響，且在各裝置上表現一致。

- [x] T011 [US2] 執行內容比對測試，確認 Hero 到 TechStack 的所有文字內容與原站一致
- [x] T012 [P] 執行跨瀏覽器視覺審計，特別是 CSS Scroll Snap 在黑白高對比下的表現
- [x] T013 [P] 驗證行動端 (<768px) 的響應式設計，確保黑白文字在小螢幕上具備足夠的可讀性
- [x] T014 執行最終整合測試，並在 App.tsx 中確認所有元件已正確渲染為黑白風格

---

## 依賴關係與執行順序

1. **Phase 1** 為基礎，必須先行完成以確保全域樣式統一。
2. **Phase 2** 中的元件重構可並行執行。
3. **Phase 3** 在所有元件黑白化後進行最終驗證。

## 實作策略

- **MVP 第一**: 優先完成 Hero 與 Summary 的黑白化，這兩者構成了網站的第一印象。
- **漸進式交付**: 每個元件重構後應立即進行視覺檢查，確保黑白對比度符合無障礙標準。
