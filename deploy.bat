@echo off
echo 🚀 Starting deployment process...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
    git branch -M main
)

REM Add all files
echo 📝 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Deploy: Next.js Supabase Auth App
git commit -m "%commit_msg%"

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push -u origin main

echo ✅ Code pushed to GitHub!
echo.
echo 🌐 Next steps:
echo 1. Go to https://vercel.com
echo 2. Click 'New Project'
echo 3. Import your GitHub repository
echo 4. Add environment variables:
echo    - NEXT_PUBLIC_SUPABASE_URL
echo    - NEXT_PUBLIC_SUPABASE_ANON_KEY
echo 5. Deploy!
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions

pause