# 資料模型與實體 (Phase 1)

## 1. `ResumeProfile`
描述作者的核心資訊。

- `name`: 姓名 (String)
- `title`: 職稱/身份 (String)
- `location`: 地點 (String)
- `email`: 電子郵件 (String)
- `socialLinks`: 社交媒體連結 (Object: { github, linkedin, etc. })

## 2. `ExperienceItem`
單一工作/專案經歷。

- `id`: 唯一識別碼 (String)
- `company`: 公司名稱 (String)
- `period`: 期間 (String, e.g., "2020 - Present")
- `role`: 職位 (String)
- `summary`: 描述文字 (String, 繁體中文)
- `tags`: 技術標籤 (Array<String>)

## 3. `SkillSet`
技能分類與明細。

- `category`: 分類名稱 (String, e.g., "Frontend")
- `skills`: 技能名稱列表 (Array<String>)

## 4. `Section` (UI 實體)
代表一個 100vh 的顯示區塊。

- `id`: 區塊 ID (String, e.g., "hero", "experience")
- `title`: 區塊標題 (String)
- `type`: 渲染類型 (Enum: Hero | List | Grid)
