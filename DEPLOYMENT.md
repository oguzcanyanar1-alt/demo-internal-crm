# Bauexperts CRM - Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Supabase project (already configured)
- Git repository initialized

## Deployment Status

✅ **Database:** All migrations applied to Supabase production instance
✅ **Storage:** case-files bucket created with RLS policies
✅ **Build:** Application builds successfully
✅ **Environment:** Local environment variables configured

## Step 1: Prepare Git Repository

### 1.1 Check Git Status
```bash
git status
```

### 1.2 Commit All Changes
```bash
git add .
git commit -m "Prepare for production deployment - All 7 epics complete"
```

### 1.3 Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `bauexperts-crm`)
3. Do NOT initialize with README (we already have code)
4. Copy the repository URL

### 1.4 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/bauexperts-crm.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Sign Up / Login to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub account
3. Authorize Vercel to access your repositories

### 2.2 Import Project
1. Click "Add New..." → "Project"
2. Import your `bauexperts-crm` repository
3. Vercel will auto-detect Next.js

### 2.3 Configure Project Settings

**Framework Preset:** Next.js
**Root Directory:** ./
**Build Command:** `npm run next:build` (or leave default)
**Output Directory:** `.next` (default)
**Install Command:** `npm install` (default)

### 2.4 Add Environment Variables

Click "Environment Variables" and add the following:

```
NEXT_PUBLIC_SUPABASE_URL=https://dojolxiiyfdojwfrejox.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvam9seGlpeWZkb2p3ZnJlam94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDU3MzcsImV4cCI6MjA4MjkyMTczN30.2UDK9mhzHVYiPQ8my2w1QkdASqHynxSuGnYK88_mSx4
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvam9seGlpeWZkb2p3ZnJlam94Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzM0NTczNywiZXhwIjoyMDgyOTIxNzM3fQ.LaP39QuIi7-z8AEu95d6hrMJWkzxXYgr8IWGZ6TqSFo
SUPABASE_PROJECT_ID=dojolxiiyfdojwfrejox
```

**Important:** Set these for all environments (Production, Preview, Development)

### 2.5 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://bauexperts-crm.vercel.app`

## Step 3: Configure Supabase Authentication

### 3.1 Add Vercel URL to Supabase
1. Go to Supabase Dashboard: https://supabase.com/dashboard/project/dojolxiiyfdojwfrejox
2. Navigate to **Authentication → URL Configuration**
3. Add your Vercel URL to **Site URL**: `https://bauexperts-crm.vercel.app`
4. Add to **Redirect URLs**:
   - `https://bauexperts-crm.vercel.app/auth/callback`
   - `https://bauexperts-crm.vercel.app/**` (wildcard for all auth routes)

### 3.2 Update CORS Settings (if needed)
1. Go to **Settings → API**
2. Check that CORS is configured to allow your Vercel domain

## Step 4: Test Deployment

### 4.1 Test Authentication
1. Visit your Vercel URL
2. Try logging in with test accounts:
   - Engineer: engineer@test.com / password123
   - Customer: alice@customer.com / password123
   - Expert: expert1@bauexperts.com / password123

### 4.2 Test Core Features
- ✅ Login/Logout works
- ✅ Dashboard loads with cases
- ✅ Create new case (engineer)
- ✅ Fill building data widget
- ✅ Upload files
- ✅ Submit data
- ✅ Block/Complete case (engineer)
- ✅ Assign expert (engineer)
- ✅ Activity timeline shows events

### 4.3 Check for Errors
1. Open browser DevTools (F12)
2. Check Console for errors
3. Check Network tab for failed requests
4. Review Vercel deployment logs if issues occur

## Step 5: Production Checklist

### Security
- ✅ .env.local is in .gitignore
- ✅ Service role key only used server-side
- ✅ RLS policies enabled on all tables
- ✅ Storage bucket has proper access controls

### Performance
- ✅ Next.js production build optimized
- ✅ TanStack Query caching configured
- ✅ Images optimized (if any)

### Database
- ✅ All 6 migrations applied
- ✅ Test users created
- ✅ Storage bucket configured

### Features
- ✅ Epic 1: Authentication ✓
- ✅ Epic 2: Case Management ✓
- ✅ Epic 3: 7-Tab Widget ✓
- ✅ Epic 4: Engineer Review ✓
- ✅ Epic 5: File Upload ✓
- ✅ Epic 6: Activity Tracking ✓
- ✅ Epic 7: Expert Assignment ✓

## Step 6: Optional Enhancements

### Custom Domain
1. In Vercel project settings → Domains
2. Add your custom domain (e.g., crm.bauexperts.com)
3. Update Supabase redirect URLs accordingly

### Monitoring
1. Enable Vercel Analytics (Settings → Analytics)
2. Set up Vercel Logs for debugging
3. Consider adding Sentry for error tracking

### CI/CD
- ✅ Auto-deploy from main branch enabled by default
- Any push to main will trigger new deployment

## Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Try building locally: `npm run next:build`

### Login Doesn't Work
- Verify Supabase redirect URLs include Vercel domain
- Check that environment variables match Supabase project
- Clear browser cookies and try again

### Database Connection Issues
- Verify NEXT_PUBLIC_SUPABASE_URL is correct
- Check Supabase project is not paused (free tier)
- Review RLS policies if specific queries fail

### Files Won't Upload
- Check storage bucket exists: `case-files`
- Verify RLS policies on storage.objects
- Check file size limits (10MB max)

## Support

For issues:
1. Check Vercel deployment logs
2. Check Supabase logs (Dashboard → Logs)
3. Review browser console errors
4. Check Network tab for failed API calls

## Deployment URLs

- **Production:** https://YOUR-APP.vercel.app
- **Supabase Dashboard:** https://supabase.com/dashboard/project/dojolxiiyfdojwfrejox
- **GitHub Repository:** https://github.com/YOUR_USERNAME/bauexperts-crm

---

**Deployment completed:** 2026-01-04
**Version:** 1.0.0 - All 7 Epics Complete
