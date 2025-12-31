# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free)
- Your Supabase project credentials

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js Supabase Auth App"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**
   In Vercel dashboard > Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Update Supabase Settings**
   In your Supabase dashboard:
   - Go to Authentication > Settings
   - Update Site URL to: `https://your-app-name.vercel.app`
   - Add to redirect URLs: `https://your-app-name.vercel.app/auth/callback`

5. **Configure Social Login (if using)**
   Update OAuth redirect URIs in Google/GitHub:
   - Google: `https://your-app-name.vercel.app/auth/callback`
   - GitHub: `https://your-app-name.vercel.app/auth/callback`

## Option 2: Deploy to Netlify

### Steps

1. **Build Command Setup**
   ```bash
   npm run build
   ```

2. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your build folder, or connect GitHub repo
   - Add environment variables in Site Settings

## Option 3: Deploy to Railway

### Steps

1. **Connect GitHub**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Environment Variables**
   Add in Railway dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

3. **Deploy**
   Railway will automatically build and deploy

## Post-Deployment Checklist

✅ **Test Authentication**
- [ ] Email registration works
- [ ] Email login works
- [ ] Password reset works
- [ ] Social login works (if configured)
- [ ] Protected routes redirect properly

✅ **Update URLs**
- [ ] Supabase site URL updated
- [ ] OAuth redirect URIs updated
- [ ] Email templates updated (if customized)

✅ **Security**
- [ ] Environment variables are set
- [ ] No sensitive data in code
- [ ] HTTPS is enabled

## Troubleshooting

### Common Issues

1. **"Invalid login credentials"**
   - Check environment variables are set correctly
   - Verify Supabase URL and key

2. **Social login not working**
   - Update OAuth redirect URIs
   - Check provider credentials

3. **Email not sending**
   - Check Supabase email settings
   - Verify site URL is correct

4. **Build errors**
   - Run `npm run build` locally first
   - Check for TypeScript errors
   - Verify all dependencies are installed

### Environment Variables Template

Create this in your deployment platform:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Custom Domain (Optional)

1. **Vercel**: Project Settings > Domains
2. **Netlify**: Site Settings > Domain Management
3. **Railway**: Project Settings > Domains

Remember to update Supabase settings with your custom domain!

## Monitoring

- Check deployment logs for errors
- Monitor Supabase dashboard for auth metrics
- Set up error tracking (Sentry, LogRocket, etc.)

Your app is now live! 🚀