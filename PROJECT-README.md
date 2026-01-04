# Bauexperts CRM

Internal CRM system for managing Energieausweis (energy certificate) case workflow.

## Features

### ✅ Complete Feature Set (All 7 Epics)

1. **Authentication & Access Control**
   - Email/password authentication via Supabase Auth
   - Role-based access: Customer, Engineer, Expert
   - Protected routes with middleware
   - Session persistence

2. **Case Lifecycle Management**
   - 4-state workflow: Waiting → Submitted → Blocked → Completed
   - Shared pool dashboard for engineers
   - Personal dashboard for customers
   - Assigned cases dashboard for experts
   - Real-time status filtering

3. **Building Data Collection**
   - 7-tab guided widget for building information
   - Form validation and error handling
   - Read-only mode after submission
   - Re-editable when case is blocked
   - Auto-tracks which actor filled data

4. **Engineer Review Workflow**
   - Review submitted building data
   - Block cases with feedback message
   - Complete cases successfully
   - View all uploaded files
   - Download individual files

5. **File Upload & Management**
   - Upload photos and documents (10MB max per file)
   - Supported formats: JPEG, PNG, WebP, PDF, DOC/DOCX
   - Secure storage via Supabase Storage
   - Files locked after submission
   - Files editable when blocked

6. **Activity Tracking**
   - Immutable audit log of all case actions
   - Real-time activity timeline
   - Track: creation, submission, blocking, completion, file uploads
   - Actor attribution (who did what)
   - In-app toast notifications

7. **Expert Assignment**
   - Manual expert assignment by engineers
   - Experts see only assigned cases
   - Reassignment capability
   - RLS enforcement for data access

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript
- **UI:** shadcn/ui, Tailwind CSS, Radix UI
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **State:** TanStack Query, Zustand
- **Deployment:** Vercel

## Project Structure

```
demo-internal-crm/
├── app/
│   ├── (authenticated)/          # Protected routes
│   │   ├── admin/
│   │   │   └── cases/new/        # Create case (engineers)
│   │   ├── cases/[id]/           # Case detail page
│   │   └── dashboard/            # Role-based dashboard
│   ├── (public)/                 # Public routes
│   │   ├── login/
│   │   └── register/
│   ├── actions/                  # Server Actions
│   │   ├── cases.ts              # Case management
│   │   └── files.ts              # File operations
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── features/                 # Business components
│   │   ├── ActivityTimeline.tsx
│   │   ├── BuildingDataWidget.tsx
│   │   └── StatusBadge.tsx
│   └── ui/                       # shadcn components
├── lib/
│   ├── hooks/
│   │   └── useCases.ts           # TanStack Query hooks
│   ├── supabase/
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── auth.ts               # Auth helpers
│   ├── auth-context.tsx          # Auth provider
│   └── providers.tsx             # Query provider
├── supabase/
│   └── migrations/               # Database migrations
│       ├── 20260103000001_create_profiles_table.sql
│       ├── 20260103000002_create_rls_policies.sql
│       ├── 20260103000003_create_cases_table.sql
│       ├── 20260104000001_create_case_data_table.sql
│       └── 20260104000002_create_activity_tracking.sql
├── types/
│   └── database.ts               # TypeScript types
├── middleware.ts                 # Auth middleware
├── DEPLOYMENT.md                 # Deployment guide
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/bauexperts-crm.git
cd bauexperts-crm
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_PROJECT_ID=your-project-id
```

4. Run database migrations (via Supabase CLI or dashboard)

5. Start development server:
```bash
npm run next:dev
```

6. Open http://localhost:3000

### Test Users

**Engineer:**
- Email: engineer@test.com
- Password: password123

**Customers:**
- alice@customer.com / password123
- bob@customer.com / password123
- carol@customer.com / password123

**Experts:**
- expert1@bauexperts.com / password123
- expert2@bauexperts.com / password123

## Database Schema

### Tables

1. **profiles** - User accounts with roles
2. **cases** - Main case records with status tracking
3. **case_data** - Building data from 7-tab widget
4. **case_activities** - Immutable audit log

### Storage Buckets

- **case-files** - Photos and documents (10MB max, RLS protected)

## User Workflows

### Customer Workflow
1. Login → View "My Cases"
2. Click case → Fill 7-tab building data widget
3. Upload photos in Tab 7
4. Click "Submit for Review"
5. Wait for engineer review
6. If blocked: View feedback, make corrections, resubmit
7. When completed: Case is done

### Expert Workflow
1. Login → View "My Assigned Cases"
2. Click assigned case → Fill building data on behalf of customer
3. Upload documentation
4. Submit for review
5. Handle blocking feedback if needed

### Engineer Workflow
1. Login → View all cases in shared pool
2. Create new cases for customers
3. Assign experts to cases (if expert-filled)
4. Review submitted data and files
5. Decision:
   - **Block:** Provide feedback message → Customer/expert fixes
   - **Complete:** Mark case done

## API Routes

All operations use Next.js Server Actions:

- `createCase()` - Create new case
- `submitBuildingData()` - Submit widget data
- `blockCase()` - Block case with message
- `completeCase()` - Mark case complete
- `assignExpert()` - Assign expert to case
- `uploadCaseFiles()` - Upload files
- `deleteCaseFile()` - Delete file
- `getCaseFileUrls()` - Get signed URLs

## Development

### Build for Production
```bash
npm run next:build
```

### Run Production Build
```bash
npm run next:start
```

### Generate TypeScript Types from Supabase
```bash
npm run supabase:types
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide.

**Quick Deploy to Vercel:**
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Security

- ✅ Row Level Security (RLS) on all tables
- ✅ Storage bucket access controls
- ✅ Server-side validation with Server Actions
- ✅ Service role key only used server-side
- ✅ Environment variables protected
- ✅ Auth middleware on protected routes

## License

Proprietary - Bauexperts GmbH

## Support

For issues or questions, contact the development team.

---

**Version:** 1.0.0
**Last Updated:** 2026-01-04
**Status:** Production Ready ✅
