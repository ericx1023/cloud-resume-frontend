# Cloud Resume - AWS

This project is a complete implementation of the [Cloud Resume](https://cloudresumechallenge.dev/docs/the-challenge/aws/), which also demonstrate AWS cloud skills.

## Project Architecture

The project is divided into the following main components:

### Frontend
- Personal resume website created using HTML, CSS, and JavaScript
- Hosted as a static website on Amazon S3
- HTTPS enabled through CloudFront
- Accessible via a custom domain name through Route 53

### Backend
- Serverless API using API Gateway and Lambda functions
- Python Lambda function to handle visitor count
- DynamoDB database to store visitor count
- Includes appropriate unit tests

### Infrastructure as Code
- All resources defined using AWS SAM (Serverless Application Model)
- Complete CI/CD pipeline implemented through GitHub Actions for automatic deployment

## Deployment Instructions

For detailed deployment guides, please refer to the [deployment.md](deployment.md) file.

## Learning Notes

Experience and learning notes from this project can be found on [my blog](https://example.com/blog-post).

# Cloud Resume Challenge - React Frontend

這是我的 Cloud Resume Challenge 前端專案，使用 React 和 Tailwind CSS 構建。

## 功能

- 響應式設計的個人履歷網站
- 與 AWS API Gateway 和 Lambda 後端整合
- 訪問者計數功能
- 使用 GitHub Actions 自動部署到 AWS S3 和 CloudFront

## 本地開發

### 前提條件

- Node.js 18+ 已安裝
- npm 已安裝

### 安裝依賴

```bash
cd frontend
npm install
```

### 本地運行

```bash
npm start
```

應用將在 http://localhost:3000 啟動。

### 構建生產版本

```bash
npm run build
```

構建文件將生成在 `build` 目錄中。

## 部署

本項目使用 GitHub Actions 進行自動部署。當代碼推送到 `main` 或 `master` 分支時，CI/CD 流水線將：

1. 構建 React 應用
2. 將構建文件部署到 AWS S3 存儲桶
3. 更新 S3 存儲桶策略以允許 CloudFront 訪問
4. 使 CloudFront 分發失效以更新緩存

### 所需的 GitHub Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `AWS_ACCOUNT_ID`

## 技術堆棧

- React
- TypeScript
- Tailwind CSS
- Lucide React (圖標) 