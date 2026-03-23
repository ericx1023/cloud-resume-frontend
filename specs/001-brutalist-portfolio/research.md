# 研究與決策報告 (Phase 0)

## 1. CSS Scroll Snap 實作方案

**決策**: 使用原生 `scroll-snap-type: y mandatory` 套用在容器元素，並在每個區塊（section）設定 `scroll-snap-align: start`。

**理論依據**: 
- 原生 CSS 效能最佳，不會造成 JS 主執行緒負擔。
- `mandatory` 保證頁面始終對齊區塊，避免懸停在兩個區塊之間。
- 支援標準滑鼠滾輪、鍵盤導航與觸控手勢。

**待驗證**: 在 Safari 中的相容性細節。

## 2. 實驗性排版與復古字體

**決策**:
- **標題**: 選用具備強烈性格的復古襯線體（Vintage Serif），如透過 Google Fonts 引入的 *Playfair Display* 或自定義的 *Chivo*。
- **內文/技術細節**: 選用像素化等寬字體（Pixel Monospace），如 *VT323* 或 *Press Start 2P*。

**視覺風格**: 
- 粗體、超大字級（如 `clamp(4rem, 15vw, 10rem)`）。
- 緊密的字母間距（Letter-spacing）。

## 3. 像素化與粗獷視覺效果

**決策**:
- **像素化效果**: 透過 CSS 的 `font-smooth: never` (非標準但部分支援) 或更穩定的 SVG 濾鏡（Filter）達成。亦可使用 `text-shadow` 模擬低解析度陰影。
- **粗獷主義色調**: 高對比度單色調（如 `#000000` 底色配 `#FFFFFF` 文字），並選用一種鮮豔的強調色（如 `#FF0000` 或 `#FFFF00`）。

## 4. 行動裝置響應式策略

**決策**:
- 使用 Media Query 監控螢幕寬度（例如 `max-width: 768px`）。
- 當寬度低於閾值時，將容器的 `scroll-snap-type` 設為 `none`。
- 重置區塊高度從 `100vh` 為 `auto`，以便標準捲動瀏覽較長內容。

**Rationale**: 行動端螢幕空間有限，強制吸附會造成使用者無法微調檢視位置，犧牲可讀性。
