# 🗣️ Converso - AI Voice Companion SaaS

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-4.0-cyan?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
</div>

<div align="center">
  <h3>🎯 An AI-powered voice companion platform built with modern web technologies</h3>
  <p>Create, customize, and chat with AI companions using voice interactions</p>
</div>

---

## 🌟 Features

### 🎤 **Voice Interactions**
- Real-time voice conversations with AI companions
- Speech-to-text and text-to-speech capabilities
- Microphone controls with mute/unmute functionality
- Live transcript display during conversations

### 🤖 **AI Companions**
- Create custom AI companions with different personalities
- Subject-based companions (Math, Science, Literature, etc.)
- Customizable voice styles and speaking patterns
- Personal companion library management

### 👥 **User Management**
- Secure authentication with Clerk
- User profiles and session history
- Bookmark favorite companions
- Personal dashboard with usage analytics

### 📱 **Modern UI/UX**
- Responsive design for all devices
- Beautiful animations with Lottie
- Real-time visual feedback during conversations
- Clean, intuitive interface

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.3.4** - React framework with App Router
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lottie React** - Animations and micro-interactions

### **Backend & Database**
- **Supabase** - PostgreSQL database and real-time subscriptions
- **Clerk** - Authentication and user management
- **Vapi AI** - Voice AI integration for conversations

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Sentry** - Error tracking and monitoring
- **Turbopack** - Fast bundler for development

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Clerk account
- Vapi AI account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/converso.git
   cd converso
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Supabase Database
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Vapi AI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   VAPI_PRIVATE_KEY=your_vapi_private_key
   
   # Sentry (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the database migrations (see `/database` folder)
   - Set up Row Level Security (RLS) policies

5. **Configure Clerk**
   - Create a Clerk application
   - Set up authentication providers
   - Configure webhooks for user management

6. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
converso/
├── app/                         # Next.js 15 App Router
│   ├── api/                    # API routes and endpoints
│   ├── companions/             # Companion management pages
│   │   ├── [id]/              # Dynamic companion detail page
│   │   │   └── page.tsx       # Individual companion view
│   │   ├── new/               # Create new companion
│   │   │   └── page.tsx       # Companion creation form
│   │   └── page.tsx           # Companions listing page
│   ├── my-journey/            # User dashboard and analytics
│   │   └── page.tsx           # Personal journey tracking
│   ├── sentry-example-page/   # Error monitoring demo
│   ├── sign-in/               # Authentication pages
│   ├── subscription/          # Subscription management
│   ├── favicon.ico            # App favicon
│   ├── global-error.tsx       # Global error boundary
│   ├── globals.css            # Global styles and Tailwind
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Homepage
├── components/                # Reusable UI components
├── constants/                 # App constants and static data
│   ├── index.ts              # Main constants export
│   └── soundwaves.json       # Lottie animation data
├── lib/                      # Utility functions and configurations
│   ├── actions/              # Server actions
│   │   └── companion.action.ts # Companion CRUD operations
│   ├── supabase.ts           # Supabase client configuration
│   ├── utils.ts              # Helper functions and utilities
│   └── vapi.sdk.ts           # Vapi AI SDK integration
├── public/                   # Static assets (images, icons, etc.)
├── types/                    # TypeScript type definitions
├── node_modules/             # Dependencies
├── .env.local                # Environment variables (local)
├── .env.sentry-build-plugin  # Sentry configuration
├── .gitignore                # Git ignore rules
├── components.json           # shadcn/ui components config
├── eslint.config.mjs         # ESLint configuration
├── instrumentation-client.ts # Client-side instrumentation
├── instrumentation.ts        # Server-side instrumentation
├── middleware.ts             # Next.js middleware (auth, etc.)
├── next-env.d.ts             # Next.js TypeScript definitions
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── sentry.edge.config.ts     # Sentry edge runtime config
├── sentry.server.config.ts   # Sentry server config
└── tsconfig.json             # TypeScript configuration
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:migrate   # Run Supabase migrations
npm run db:seed      # Seed database with sample data
```

---

## 📊 Key Application Pages

### **Core Pages**
- **Homepage** (`/`) - Landing page and app introduction
- **Companions Listing** (`/companions`) - Browse all available AI companions
- **Companion Detail** (`/companions/[id]`) - Individual companion interaction page
- **Create Companion** (`/companions/new`) - Build custom AI companions
- **My Journey** (`/my-journey`) - Personal dashboard and usage analytics
- **Authentication** (`/sign-in`) - User login and registration
- **Subscription** (`/subscription`) - Billing and plan management

### **API Routes**
- Companion management endpoints
- User authentication handlers
- Voice AI integration endpoints
- Subscription and billing webhooks

---

## 🎨 UI Components

### **Custom Components**
- `CompanionComponent` - Main voice interaction interface
- `CompanionCard` - Companion display cards
- `TranscriptDisplay` - Real-time conversation transcripts
- `VoiceControls` - Microphone and call controls

### **UI Library**
Built with **Radix UI** primitives and **shadcn/ui** components for:
- Accessible form controls
- Modal dialogs and overlays
- Navigation and layout components

---

## 🔐 Authentication & Security

### **Clerk Integration**
- Email/password authentication
- Social login providers (Google, GitHub, etc.)
- Session management and middleware
- User profile management

### **Security Features**
- Row Level Security (RLS) with Supabase
- API route protection
- Client-side route guards
- Secure environment variable handling

---

## 🚀 Deployment

### **Recommended Platforms**
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

### **Deployment Steps**
1. Push code to GitHub repository
2. Connect repository to deployment platform
3. Configure environment variables
4. Deploy with automatic builds

### **Environment Variables for Production**
Make sure to set all required environment variables in your deployment platform.

---

## 📈 Features Roadmap

- [ ] 🎥 Video call support
- [ ] 🌍 Multi-language support
- [ ] 📝 Conversation summaries
- [ ] 🔊 Voice cloning capabilities
- [ ] 📱 Mobile app (React Native)
- [ ] 🤝 Team collaboration features
- [ ] 📊 Advanced analytics dashboard
- [ ] 🎨 Custom companion avatars

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Vapi AI** for voice AI capabilities
- **Supabase** for the amazing backend-as-a-service
- **Clerk** for seamless authentication
- **Vercel** for hosting and deployment
- **shadcn/ui** for beautiful UI components

---

## 📞 Support

- 📧 **Email**: kondurudurgaprasad.2@gmail.com
- 📖 **Documentation**: [docs.converso.com](https://docs.converso.com)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/Durga1534/converso/issues)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
