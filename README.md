# PUC-Rio SAU System Rebuild

This project aims to recreate the PUC-Rio University system as a modern web application.

## Overview

The goal is to reproduce core student and academic flows while improving maintainability, usability, and performance.

## Tech Stack

- Next.js 15 (App Router) and React 19
- TypeScript
- Tailwind CSS
- Prisma ORM with PostgreSQL
- Zod for API validation
- Swiper (login carousel), Lucide React and React Icons
- ESLint

## Project Structure

- `src/app`: Next.js app router pages and API routes
- `src/components`: shared UI components
- `src/types`: shared TypeScript types
- `prisma`: database schema and Prisma client

## Main Screens

- Home dashboard (schedule, attendance, stats) in `src/app/page.tsx`
- Login with responsive layout and carousel in `src/app/login/page.tsx`
- Academic progress and planning in `src/app/academic/page.tsx`
- Disciplines catalog and filters in `src/app/disciplines/page.tsx`
- Grades and evaluation criteria in `src/app/grades/page.tsx`
- Notifications, more services, and settings in `src/app/notifications/page.tsx`, `src/app/more/page.tsx`, `src/app/settings/page.tsx`

## API Routes

- `GET/POST /api/subject` for subjects with validation
- `GET/POST /api/course` and course-subject relations
- `GET/POST/DELETE /api/domain` and `GET/POST/DELETE /api/domain-subject`
- `GET/POST /api/enrollment` for enrollments

## Database Model

Core entities include `User`, `Subject`, `Course`, `Group`, `Enrollment`, `Assessment`, `Grade`, `Absence`, and `Domain`.
See `prisma/schema.prisma` for relationships and enums.

## Development

```bash
npm run dev
```

Then open http://localhost:3000.
