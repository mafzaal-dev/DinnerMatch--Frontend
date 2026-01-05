# DinnersMatch Frontend

A modern, scalable Next.js application for social dining experiences.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin routes (protected)
│   ├── (user)/            # User routes (protected)
│   └── (public)/          # Public routes
├── components/
│   ├── admin/             # Admin-specific components
│   ├── common/            # Reusable components
│   ├── modals/            # Modal components
│   └── pages/             # Page components
├── constants/             # Application constants
├── hooks/                 # Custom React hooks
└── utils/                 # Utility functions
```

## Features

- ✅ User authentication and authorization
- ✅ Admin dashboard and management
- ✅ Quiz flow for user onboarding
- ✅ Dinner booking system
- ✅ Profile management
- ✅ Responsive design

## Getting Started

```bash
npm install
npm run dev
```

## Code Standards

- Use TypeScript-style JSDoc comments
- Follow React best practices
- Use custom hooks for reusable logic
- Centralize constants and utilities
- Implement proper error handling
- Use protected routes for authenticated pages

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```
