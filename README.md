# Next.js Supabase Authentication

A simple login and registration system built with Next.js 14 and Supabase.

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

## Customization

- Modify styles in `app/globals.css`
- Add more protected routes by checking `user` state from `useAuth()`
- Extend user profile functionality in the dashboard
- Add password reset functionality
- Implement social login providers

## Deployment

1. Deploy to Vercel, Netlify, or your preferred platform
2. Update your Supabase site URL to your production domain
3. Set environment variables in your deployment platform