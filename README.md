# Cloud Resume - AWS

This project is a complete implementation of the [Cloud Resume](https://cloudresumechallenge.dev/docs/the-challenge/aws/), which also demonstrates AWS cloud skills.

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

This is my Cloud Resume Challenge frontend project, built with React and Tailwind CSS.

## Features

- Responsive design personal resume website
- Integration with AWS API Gateway and Lambda backend
- Visitor counter functionality
- Automatic deployment to AWS S3 and CloudFront using GitHub Actions

## Local Development

### Prerequisites

- Node.js 18+ installed
- npm installed

### Installing Dependencies

```bash
cd frontend
npm install
```

### Running Locally

```bash
npm start
```

The application will start at http://localhost:3000.

### Building for Production

```bash
npm run build
```

The build files will be generated in the `build` directory.

## Deployment

This project uses GitHub Actions for automatic deployment. When code is pushed to the `main` or `master` branch, the CI/CD pipeline will:

1. Build the React application
2. Deploy the build files to an AWS S3 bucket
3. Update the S3 bucket policy to allow CloudFront access
4. Invalidate the CloudFront distribution to update the cache

### Required GitHub Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `AWS_ACCOUNT_ID`

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Lucide React (icons) 