# Mentora

A real-time AI teaching platform that enables users to create personalized learning companions for voice-based educational conversations.

## Features

- **AI Learning Companions**: Create custom AI tutors with personalized names, subjects, voices, and personalities
- **Voice Conversations**: Engage in natural, real-time voice interactions for learning
- **Multiple Subjects**: Support for Math, Science, Language, History, Coding, and Economics
- **User Journey Tracking**: Monitor learning progress and session history
- **Authentication**: Secure user authentication and session management

## Tech Stack

- **Framework**: Next.js 15.5 with React 19
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: VAPI
- **Error Tracking**: Sentry
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Management**: React Hook Form with Zod validation

## Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Supabase account and project
- Clerk account
- VAPI account

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mentora
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# VAPI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

# Sentry (optional)
SENTRY_DSN=your_sentry_dsn
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
mentora/
├── app/                 # Next.js app router pages
│   ├── api/            # API routes
│   ├── companions/     # Companion pages
│   └── ...
├── components/          # React components
│   ├── ui/             # UI component library
│   └── ...
├── lib/                 # Utility functions and SDKs
│   ├── actions/        # Server actions
│   └── ...
├── types/               # TypeScript type definitions
└── constants/           # Application constants
```

## License

This project is licensed under the MIT License

