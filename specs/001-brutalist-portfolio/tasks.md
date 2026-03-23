---

description: "全站復古粗獷主義風格替換任務清單"
---

# 任務：全站復古粗獷主義風格替換 (Brutalist Replacement)

**輸入**: 來自 `/specs/001-brutalist-portfolio/` 的設計文件
**先決條件**: 內容完整性 (FR-001), 粗獷主義視覺系統 (FR-002)

**組織**: 任務按原始元件遷移順序排列，確保每個區塊都能完美替換。

## 格式：`[ID] [P?] [故事] 描述`

## Phase 1: Setup & Foundational (已完成部分)

- [x] T001 [P] 在 src/components/ 下建立 brutalist/ 目錄
- [x] T002 [P] 移除任何現有的第三方區塊捲動相關 JavaScript 程式庫
- [x] T003 在 src/fonts.css 中引入 Google Fonts
- [x] T004 在 tailwind.config.js 中擴展 fontFamily
- [x] T005 [P] 實作 Typography 元件於 src/components/brutalist/Typography.tsx
- [x] T006 [P] 實作 SectionWrapper 元件於 src/components/brutalist/SectionWrapper.tsx
- [x] T007 在 src/index.css 中定義基礎粗獷主義樣式

---

## Phase 2: Hero (Header.tsx 遷移)

**目標**: 替換原本的 Header，實作具備訪客計數與社交連結的粗獷主義 Hero 區塊。

- [x] T008 [P] [Hero] 實作 Hero 元件於 src/components/brutalist/Hero.tsx (整合個人資訊、社交連結)
- [x] T008 [Hero] 重構 src/components/VisitorCounter.tsx，改為灰階配色 (Grayscale)、移除圓角 (Remove border-radius)，並整合至 Hero.tsx
- [ ] T010 [Hero] 為 Hero 元件編寫渲染測試

---

## Phase 3: Summary (ProfessionalSummary.tsx 遷移)

**目標**: 將專業總結與技術技能遷移至粗獷主義風格。

- [ ] T011 [P] [Summary] 實作 Summary 元件於 src/components/brutalist/Summary.tsx
- [ ] T012 [Summary] 使用粗大邊框與高對比排版呈現 Professional Summary 文字
- [ ] T013 [Summary] 以網格佈局呈現 Technical Skills 並強化關鍵字背景效果

---

## Phase 4: Experience (WorkExperience.tsx 遷移)

**目標**: 替換原本的 Timeline UI，改為粗獷主義區塊式經歷。

- [ ] T014 [P] [Experience] 實作 Experience 元件於 src/components/brutalist/Experience.tsx
- [ ] T015 [Experience] 提取 WorkExperience.tsx 中的資料，並以粗大邊框與 Hover 效果實作經歷條目
- [ ] T016 [Experience] 確保 Tech stack 標籤符合粗獷主義視覺

---

## Phase 5: Education (Education.tsx 遷移)

**目標**: 遷移教育背景資料至粗獷主義樣式。

- [ ] T017 [P] [Education] 實作 Education 元件於 src/components/brutalist/Education.tsx
- [ ] T018 [Education] 保持原始教育資料完整性，採用 100vh 區塊佈局

---

## Phase 6: Projects (Projects.tsx 遷移)

**目標**: 以粗獷主義網格系統替換原本的專案卡片。

- [ ] T019 [P] [Projects] 實作 Projects 元件於 src/components/brutalist/Projects.tsx
- [ ] T020 [Projects] 實作具有 border-8 效果的專案卡片，並整合 GitHub/Website 連結圖示

---

## Phase 7: Tech Stack (CloudResumeStack.tsx 遷移)

**目標**: 替換原本的網站技術棧介紹區塊。

- [ ] T021 [P] [TechStack] 實作 TechStack 元件於 src/components/brutalist/TechStack.tsx
- [ ] T022 [TechStack] 以表格或條目列表形式呈現 AWS, Frontend, Backend & DevOps 等資訊

---

## Phase 8: Final Integration & Cleanup

**目標**: 全站替換並清理舊程式碼。

- [ ] T023 更新 src/App.tsx，完全移除原始元件引用，改為引用 brutalist/* 旗下元件
- [ ] T024 [P] 執行最終視覺審計，確保 100% 內容正確遷移
- [ ] T025 [P] 執行行動端測試，驗證 Scroll Snap 停用邏輯
- [ ] T026 移除不再使用的舊元件檔案 (Header.tsx, ProfessionalSummary.tsx 等) 以保持專案整潔
- [ ] T027 補強所有新元件的 JSDoc

---

## 依賴關係與執行順序

1. **Foundational (Phase 1)** 已完成。
2. **Components Migration (Phase 2-7)** 可並行開發。
3. **App.tsx Switch (Phase 8)** 必須在所有元件遷移完成後執行。
