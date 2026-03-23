# 實作計畫：全站復古粗獷主義風格替換

**分支**: `001-brutalist-portfolio` | **日期**: 2026-03-19 | **規格**: [/specs/001-brutalist-portfolio/spec.md](/specs/001-brutalist-portfolio/spec.md)
**輸入**: "Replace original style with Brutalism while keeping content."

## 摘要

本計畫將原本現代/簡約風格的 React 履歷網站，完整遷移至「復古粗獷主義」視覺系統。我們將建立一組新的 `Brutalist` 元件庫，逐一將原始元件（Header, Summary, Experience, Education, Projects, TechStack）中的文字與邏輯內容提取並注入新樣式中，最後在 `App.tsx` 中進行全站替換。

## 技術上下文

**語言/版本**: TypeScript / React 18+  
**主要依賴**: Tailwind CSS, PostCSS, Lucide React  
**核心技術**: Native CSS Scroll Snap (`scroll-snap-type: y mandatory`)  
**字體系統**: Playfair Display (標題), VT323 (內文/像素效果)  
**遷移策略**: 建立平行元件集 -> 內容注入 -> App.tsx 切換 -> 舊元件清理

## 憲法檢查

- [x] **I. 程式碼品質**: 保持 TypeScript 嚴格類型，並為新元件編寫 JSDoc。
- [x] **II. 測試標準**: 必須包含新元件的渲染測試與行動端響應式驗證。
- [x] **III. UX 一致性**: 確保粗獷風格不影響資訊可讀性與無障礙性。
- [x] **IV. 效能要求**: 移除不必要的外部捲動庫，利用原生 CSS 提升 FPS。

## 專案結構 (遷移後)

```text
src/
├── components/
│   ├── brutalist/
│   │   ├── Hero.tsx             # 替代 Header.tsx (包含 VisitorCounter 樣式更新)
│   │   ├── Summary.tsx          # 替代 ProfessionalSummary.tsx
│   │   ├── Experience.tsx       # 替代 WorkExperience.tsx
│   │   ├── Education.tsx        # 替代 Education.tsx
│   │   ├── Projects.tsx         # 替代 Projects.tsx
│   │   ├── TechStack.tsx        # 替代 CloudResumeStack.tsx
│   │   ├── SectionWrapper.tsx   # 佈局容器 (100vh, Scroll Snap)
│   │   └── Typography.tsx       # 文字系統
├── App.tsx                      # 僅引用 brutalist/* 元件
└── index.css                    # 全域粗獷主義樣式
```

## 複雜度追蹤

| 違規行為 | 為什麼需要 | 拒絕更簡單替代方案的原因 |
|-----------|------------|-------------------------------------|
| 完全重寫 UI 元件 | 為了徹底改變視覺風格 | 修改現有元件會造成樣式衝突且難以測試 |
