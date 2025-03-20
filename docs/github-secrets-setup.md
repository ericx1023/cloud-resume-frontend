# Setting up GitHub Secrets for CI/CD

To securely use your personal information in CI/CD workflows, follow these steps to set up Secrets in your GitHub repository:

## Steps

1. Go to your GitHub repository page
2. Click on the "Settings" tab
3. In the left sidebar, click on "Actions" under "Secrets and variables"
4. Click the "New repository secret" button
5. Set up the following Secrets for your personal information:

   - `PERSONAL_NAME` - Your name
   - `PERSONAL_TITLE` - Your job title
   - `PERSONAL_LOCATION` - Your location
   - `PERSONAL_EMAIL` - Your email address
   - `PERSONAL_PHONE` - Your phone number
   - `PERSONAL_GITHUB` - Your GitHub link
   - `PERSONAL_LINKEDIN` - Your LinkedIn link

6. For each Secret, enter the name and value, then click the "Add secret" button

## Verification

Once set up, when you push code to the `main` branch, the CI/CD workflow will use these Secrets to generate configuration files, then build and deploy your application.

## Security Tips

- Regularly rotate your personal information Secrets, especially if you suspect they might have been compromised
- Restrict access to repository settings to ensure only authorized personnel can view or modify Secrets
- Never print these sensitive values in logs or debug outputs 