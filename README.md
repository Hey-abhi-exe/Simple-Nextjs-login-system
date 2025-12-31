# Next.js Supabase Authentication

A complete authentication system built with Next.js 14 and Supabase with social login, password reset, and user profile management.

## 🚀 Live Demo

**Live URL:** [https://simple-nextjs-login-system.vercel.app](https://simple-nextjs-login-system.vercel.app)

## Features

- User registration with email confirmation
- User login/logout
- **Password reset functionality**
- **Social login (Google & GitHub)**
- **User profile management**
- **Protected routes with navigation**
- Dashboard with user information
- TypeScript support
- Responsive design

## 🚀 Live Demo

**Live URL:** [https://simple-nextjs-login-system.vercel.app](https://simple-nextjs-login-system.vercel.app)

### Test the App:
1. Visit the live demo
2. Register with your email
3. Check email for confirmation
4. Login and explore features

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to Settings > API
3. Copy your project URL and anon key

### 3. Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Configure Supabase Authentication

In your Supabase dashboard:

1. Go to Authentication > Settings
2. Set your site URL to `http://localhost:3000` for development
3. Add `http://localhost:3000/auth/callback` to redirect URLs
4. Configure email templates if needed
5. Enable email confirmations (optional)

**For Social Login (Optional):**

1. Go to Authentication > Providers
2. Enable Google and/or GitHub providers
3. Add your OAuth app credentials:
   - **Google**: Get credentials from [Google Cloud Console](https://console.cloud.google.com/)
   - **GitHub**: Get credentials from [GitHub Developer Settings](https://github.com/settings/developers)

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts        # OAuth callback handler
│   ├── dashboard/
│   │   └── page.tsx            # Protected dashboard page
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── profile/
│   │   └── page.tsx            # User profile page
│   ├── reset-password/
│   │   └── page.tsx            # Password reset page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with AuthProvider
│   └── page.tsx                # Home page (redirects)
├── components/
│   ├── Dashboard.tsx           # Dashboard component
│   ├── LoginForm.tsx           # Login/registration form with social login
│   └── UserProfile.tsx         # User profile management
├── contexts/
│   └── AuthContext.tsx         # Authentication context
├── lib/
│   └── supabase.ts             # Supabase client configuration
├── middleware.ts               # Route protection middleware
└── README.md
```

## How It Works

1. **AuthContext**: Manages user authentication state and provides auth methods
2. **LoginForm**: Handles both login and registration with form validation
3. **Dashboard**: Protected component shown to authenticated users
4. **Supabase Integration**: Uses Supabase Auth for user management

## Authentication Flow

1. User visits the app and gets redirected to `/login`
2. User can:
   - Register with email (requires confirmation)
   - Login with email/password
   - Login with Google or GitHub (if configured)
   - Reset password via email
3. Once authenticated, user can access:
   - `/dashboard` - Main dashboard
   - `/profile` - Profile management and password change
4. Protected routes automatically redirect unauthenticated users to login
5. User can logout from any protected page

## New Features Added

### Password Reset
- "Forgot password?" link on login form
- Email-based password reset flow
- Secure password update page

### Social Login
- Google OAuth integration
- GitHub OAuth integration
- Seamless social authentication flow

### User Profile Management
- View account information
- Change password
- See authentication providers
- Account creation and last login dates

### Protected Routes
- Automatic redirection for unauthenticated users
- Navigation between dashboard and profile
- Consistent user experience across pages

## 🌐 Deployment

This app is deployed on Vercel. To deploy your own version:

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Hey-abhi-exe/Simple-Nextjs-login-system)

### Manual Deployment

1. **Fork this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Add Environment Variables in Vercel:**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Update Supabase Settings:**
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/auth/callback`

5. **Deploy!**

### Alternative Deployment Options
- **Netlify**: Connect GitHub repo and add environment variables
- **Railway**: Auto-deploy from GitHub with environment variables
- **Custom Server**: Traditional hosting with Node.js

## Customization

- Modify styles in `app/globals.css`
- Add more protected routes by checking `user` state from `useAuth()`
- Extend user profile functionality in the dashboard
- Add password reset functionality
- Implement social login providers

## 📱 Screenshots

### Login Page
- Clean, responsive design
- Email/password authentication
- Social login buttons (Google, GitHub)
- Password reset functionality

### Dashboard
- Protected route with user information
- Navigation between pages
- Quick actions and user stats

### Profile Management
- View account details
- Change password securely
- See authentication providers
- Account activity information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Backend**: Supabase (Authentication, Database)
- **Styling**: Custom CSS with responsive design
- **Deployment**: Vercel
- **Authentication**: Supabase Auth with social providers

## 📋 Features Breakdown

### Authentication Features
- ✅ Email registration with confirmation
- ✅ Email/password login
- ✅ Password reset via email
- ✅ Social login (Google, GitHub)
- ✅ Secure logout functionality

### User Management
- ✅ User profile dashboard
- ✅ Password change functionality
- ✅ Account information display
- ✅ Authentication provider tracking

### Security & UX
- ✅ Protected routes with automatic redirects
- ✅ Form validation and error handling
- ✅ Loading states and user feedback
- ✅ Responsive design for all devices

## 🔧 Configuration

### Supabase Setup
1. Create project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Configure authentication settings
4. Set up email templates (optional)

### Social Login Setup (Optional)
- **Google**: [Google Cloud Console](https://console.cloud.google.com/)
- **GitHub**: [GitHub Developer Settings](https://github.com/settings/developers)

## 🐛 Troubleshooting

### Common Issues
- **Build errors**: Check environment variables are set
- **Social login not working**: Verify OAuth redirect URIs
- **Email not sending**: Check Supabase email settings
- **Authentication errors**: Verify Supabase URL and keys

### Support
- Check the [Issues](https://github.com/Hey-abhi-exe/Simple-Nextjs-login-system/issues) page
- Review Supabase documentation
- Verify environment variables are correct

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

**Built with ❤️ using Next.js and Supabase**