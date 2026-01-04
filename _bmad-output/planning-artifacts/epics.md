---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\prd.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\architecture.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\ux-design-specification.md'
lastUpdated: 2026-01-03
workflowComplete: true
---

# Bauexperts CRM - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Bauexperts CRM, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

**Authentication & Access Control:**
- FR1: Users can log in to the system with credentials (email/password)
- FR2: System can authenticate users and assign role-based access (Customer, Engineer, Expert)
- FR3: Customers can only view and interact with their own cases
- FR4: Engineers can view and interact with all cases in the shared pool
- FR5: Experts can only view and interact with cases assigned to them
- FR6: System can maintain authenticated sessions across browser refreshes

**Case Management:**
- FR7: System can create a new case when a customer purchases an Energieausweis service
- FR8: System can assign a unique case ID to each case
- FR9: System can track case status through four states: Waiting for data, Data submitted, Blocked, Completed
- FR10: Engineers can view a shared pool dashboard showing all cases with current status
- FR11: Customers can view their cases with current status
- FR12: Experts can view cases assigned to them with current status
- FR13: System can filter and display cases by status
- FR14: Engineers can navigate to any case detail view from the shared pool
- FR15: System can record which actor (customer or expert) is responsible for data submission on each case

**Data Collection & Submission:**
- FR16: Customers can fill out a structured 7-tab widget for Energieausweis building data
- FR17: Experts can fill out the same structured 7-tab widget for assigned cases
- FR18: System can provide step-by-step guidance and field instructions within the widget
- FR19: System can validate required fields before allowing submission
- FR20: System can auto-save draft data periodically while users fill the widget
- FR21: Users can upload files (photos, documents) in Tab 7 of the widget
- FR22: Users can submit completed widget data to change case status to "Data submitted"
- FR23: System can lock the widget to read-only mode after submission
- FR24: System can unlock the widget for editing when case status changes to "Blocked"
- FR25: Users can re-submit corrected data after making changes to a blocked case
- FR26: System can record metadata showing which expert filled the widget (name and timestamp)

**Engineer Review & Decision:**
- FR27: Engineers can view all submitted case data organized in structured tabs
- FR28: Engineers can review customer/expert-provided files within the case detail view
- FR29: Engineers can mark a case as "Blocked" and provide a message explaining what needs correction
- FR30: Engineers can mark a case as "Completed" after successful review
- FR31: Engineers can upload a final Energieausweis PDF when completing a case
- FR32: System can unlock the data widget for customer/expert when engineer blocks a case
- FR33: System can record the engineer's blocking message and display it to the customer/expert

**File Management:**
- FR34: Users can upload files up to 10MB per file
- FR35: System can store uploaded files associated with each case
- FR36: Engineers can download all case files as a single bundle (zip)
- FR37: Engineers can download individual files from a case
- FR38: Customers can download the final Energieausweis PDF when case is completed
- FR39: System can prevent unauthorized users from accessing files for cases they don't have permission to view

**Notifications & Communication:**
- FR40: System can send notifications when case status changes
- FR41: Customers can receive notifications when an engineer blocks their case with a message
- FR42: Customers can receive notifications when their case is completed and document is ready
- FR43: Experts can receive notifications when an engineer requests changes to their submitted data
- FR44: Engineers can receive notifications when new data is submitted for review
- FR45: System can deliver notifications via the application (in-app) and/or email

**Activity Tracking & Audit:**
- FR46: System can record all case actions in an immutable activity feed
- FR47: System can display activity timeline showing all actions with timestamps for each case
- FR48: Customers can view activity feed to see case progress
- FR49: Engineers can view complete activity history including who performed each action
- FR50: Experts can view activity feed for cases assigned to them
- FR51: System can record: case creation, data submission, engineer blocking, engineer completion, file uploads, widget edits

**Expert Assignment:**
- FR52: System administrators can manually assign an expert to a case
- FR53: System can record the assigned expert's name and association with the case
- FR54: Experts can see which cases are assigned to them
- FR55: System can prevent experts from viewing or accessing cases not assigned to them

### Non-Functional Requirements

**Performance:**
- NFR1: Initial page load completes in < 3 seconds on standard broadband connection
- NFR2: SPA route transitions complete in < 500ms
- NFR3: Widget tab switching appears instant with no perceptible loading delay
- NFR4: Case list loads in < 2 seconds for typical dataset (50-100 cases)
- NFR5: Individual case data loads in < 1 second
- NFR6: Form submission completes in < 2 seconds with immediate user feedback
- NFR7: Form input responds instantly with no input lag
- NFR8: Button clicks provide immediate visual feedback
- NFR9: Notifications appear within 5 seconds of trigger event
- NFR10: File uploads show progress indicator for files > 1MB
- NFR11: Single file upload supports up to 10MB
- NFR12: Total case attachments support up to 50MB per case
- NFR13: Engineer file download bundle completes in < 5 seconds for typical case files

**Security:**
- NFR14: All system access requires authenticated login
- NFR15: System enforces role-based access control (Customer, Engineer, Expert)
- NFR16: Customers can only access their own case data
- NFR17: Experts can only access cases assigned to them
- NFR18: Engineers can access all cases in the system
- NFR19: Session management prevents unauthorized access after logout
- NFR20: Customer personally identifiable information (PII) is protected from unauthorized access
- NFR21: Building data submitted by customers/experts is accessible only to authorized engineers and case owners
- NFR22: File uploads are associated with specific cases and protected by same access controls
- NFR23: Engineer blocking messages are only visible to the customer/expert who submitted the case data
- NFR24: System prevents common web vulnerabilities (SQL injection, XSS, CSRF)
- NFR25: Passwords are stored using industry-standard hashing (not plain text)
- NFR26: HTTPS is used for all client-server communication

**Reliability & Data Integrity:**
- NFR27: System is stable enough for daily internal use without frequent crashes
- NFR28: Critical bugs (data loss, access control violations) are addressed immediately
- NFR29: Non-critical bugs (UI glitches, minor UX issues) are tolerable for MVP
- NFR30: Case data is reliably persisted to database and not lost
- NFR31: Uploaded files are reliably stored and retrievable
- NFR32: Activity feed records are immutable and accurately reflect all case actions
- NFR33: Widget draft data is auto-saved periodically (every 30-60 seconds) or per-tab
- NFR34: Loss of draft data due to browser crash is acceptable (user re-enters)
- NFR35: System downtime for deployments or maintenance is acceptable during off-hours
- NFR36: No uptime SLA required for MVP (internal tool, small user base)
- NFR37: Manual data backup and recovery processes are acceptable for MVP

**Accessibility:**
- NFR38: All form inputs have associated `<label>` elements for screen reader support
- NFR39: Buttons have descriptive text (not icon-only)
- NFR40: Images have `alt` attributes where meaningful content is conveyed
- NFR41: Keyboard navigation works with logical tab order
- NFR42: Enter/Space keys activate buttons and submit forms
- NFR43: Focus indicators are visible (browser defaults acceptable)
- NFR44: Color is not the sole means of conveying information (status includes text + color)

**Browser Compatibility:**
- NFR45: System works on latest stable versions of Chrome, Firefox, Edge (Chromium), and Safari
- NFR46: Modern JavaScript/CSS features can be used without polyfills for legacy browsers
- NFR47: Internet Explorer is explicitly NOT supported (all versions)

**Responsive Design:**
- NFR48: System is functional on desktop (≥ 1024px) and tablet (768px - 1023px)
- NFR49: 7-tab widget is usable on tablets for expert field data entry
- NFR50: File upload controls work on touch devices (camera access on tablets)
- NFR51: Mobile phone screens (<768px) provide degraded but functional experience (no optimization required)

**Deployment & Operations:**
- NFR52: System deploys as single build artifact (static HTML/JS/CSS bundle + backend API)
- NFR53: System can be deployed to any standard web server or cloud hosting
- NFR54: Environment configuration uses build-time variables or runtime config files
- NFR55: Browser DevTools provide sufficient debugging capability
- NFR56: Manual testing during development is acceptable
- NFR57: Performance issues are investigated reactively based on user reports

### Additional Requirements

**Starter Template (CRITICAL for Epic 1 Story 1):**
- Selected: `create-next-app@latest` + `shadcn@latest init`
- Commands:
  ```bash
  npx create-next-app@latest energieausweis-crm --yes
  cd energieausweis-crm
  npx shadcn@latest init
  ```

**Technology Stack:**
- Database: PostgreSQL 15+ via Supabase
- Database Client: Supabase JS Client v2.x
- Authentication: Supabase Auth (email/password, Google OAuth, Facebook OAuth)
- Authorization: Separate profiles table with RLS policies
- State Management: Zustand v4 (client state) + React Context (auth) + TanStack Query v5 (server state)
- API Pattern: Hybrid - Server Actions (mutations) + API Routes (file streaming)
- Real-Time: Supabase Realtime v2 for activity feed
- Photo Storage: Supabase Storage with browser-image-compression v2
- Photo Compression: 1920px max, 85% JPEG quality, preserve EXIF
- PDF Generation: PDFKit v0.14+ via API Route
- Hosting: Vercel
- CI/CD: GitHub Actions (ESLint + TypeScript checks)
- Monitoring: Sentry + Vercel Analytics

**Offline Capabilities:**
- Service Worker + IndexedDB + Background Sync API
- 100% widget functionality offline for experts
- Auto-save every 2 seconds (debounced)
- Offline conflict resolution: Last-Write-Wins with optimistic locking
- Zero data loss tolerance

**Implementation Patterns (CRITICAL for AI Agent Consistency):**
- Database naming: `snake_case` (tables, columns, foreign keys)
- TypeScript naming: `PascalCase` (components, types), `camelCase` (functions, variables, hooks)
- File naming: `PascalCase.tsx` (components), `camelCase.ts` (utils, hooks)
- TanStack Query keys: `['entity', ...params]` format (e.g., `['cases', caseId]`)
- Server Actions: Return `{data?, error?}` shape
- Import aliases: Use `@/` for all imports

**Project Structure:**
- App Router: `app/(authenticated)/` and `app/(public)/` route groups
- Components: `components/ui/` (shadcn), `components/features/` (business logic)
- State: `lib/stores/` (Zustand), `lib/providers.tsx` (TanStack Query + Auth)
- Supabase: `lib/supabase/client.ts`, `lib/supabase/server.ts`, `lib/supabase/queries.ts`
- Types: `types/database.ts` (Supabase generated types)

**Accessibility (UX Requirement):**
- WCAG 2.1 Level AA compliance required
- Contrast ratios: 4.5:1 for text, 3:1 for UI components
- Touch targets: 44x44px minimum on tablet/mobile
- Keyboard navigation: All interactive elements accessible
- Screen readers: Semantic HTML + ARIA labels + live regions

**Responsive Breakpoints:**
- Desktop: 1366px+ (primary for engineers)
- Tablet: 1024px-1365px (touch-optimized for experts)
- Mobile: 375px-1023px (stacked layout for customers)

**Core Components (UX Requirement):**
1. Energieausweis Widget (7-Tab) - Critical component
2. Activity Feed (real-time timeline)
3. State-Aware Status Badge (4 states: Waiting, Submitted, Blocked, Completed)
4. Master-Detail Case View
5. Offline Indicator with sync queue visibility
6. Photo Upload with Camera Access
7. Block Reason Dialog

### FR Coverage Map

**Epic 1: Application Access & Authentication**
- FR1: Users can log in with credentials
- FR2: System authenticates and assigns roles
- FR3: Customers view only their cases
- FR4: Engineers view all cases
- FR5: Experts view only assigned cases
- FR6: Sessions maintained across refreshes

**Epic 2: Case Lifecycle Management**
- FR7: Create case on purchase
- FR8: Assign unique case ID
- FR9: Track 4 case states
- FR10: Engineers view shared pool
- FR11: Customers view their cases
- FR12: Experts view assigned cases
- FR13: Filter cases by status
- FR14: Navigate to case details
- FR15: Record actor responsibility

**Epic 3: Building Data Collection (7-Tab Widget)**
- FR16: Customers fill 7-tab widget
- FR17: Experts fill same widget
- FR18: Provide guidance/instructions
- FR19: Validate required fields
- FR20: Auto-save drafts
- FR21: Upload files in Tab 7
- FR22: Submit to change status
- FR23: Lock widget after submit
- FR24: Unlock when blocked
- FR25: Re-submit corrections
- FR26: Record expert metadata

**Epic 4: Engineer Review & Decision Workflow**
- FR27: View submitted data in tabs
- FR28: Review provided files
- FR29: Block with message
- FR30: Mark as completed
- FR31: Upload final PDF
- FR32: Unlock widget when blocked
- FR33: Display blocking message

**Epic 5: File Upload & PDF Generation**
- FR34: Upload files up to 10MB
- FR35: Store files per case
- FR36: Download all files (zip)
- FR37: Download individual files
- FR38: Download final PDF
- FR39: Prevent unauthorized access

**Epic 6: Activity Tracking & Notifications**
- FR40: Send status change notifications
- FR41: Notify customers when blocked
- FR42: Notify when completed
- FR43: Notify experts of changes
- FR44: Notify engineers of submissions
- FR45: Deliver in-app and email
- FR46: Record all actions immutably
- FR47: Display activity timeline
- FR48: Customers view activity
- FR49: Engineers view full history
- FR50: Experts view their activity
- FR51: Record all event types

**Epic 7: Expert Assignment (Manual MVP)**
- FR52: Manually assign experts
- FR53: Record expert association
- FR54: Experts see assigned cases
- FR55: Prevent unauthorized access

## Epic List

### Epic 1: Application Access & Authentication
Users can access and authenticate to the application with role-based permissions. Initialize Next.js project with infrastructure (Supabase, Vercel, CI/CD), implement secure authentication (email/password + OAuth), configure user profiles with roles (Customer, Engineer, Expert), enforce role-based access control with protected routes and RLS policies.

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6

### Epic 2: Case Lifecycle Management
Engineers can view and manage all cases in a shared pool, customers can view their cases, experts can view assigned cases. Case database schema with 4-state machine (Waiting → Submitted → Blocked → Completed), case list views with filtering, master-detail layout.

**FRs covered:** FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15

### Epic 3: Building Data Collection (7-Tab Widget)
Customers and experts can fill out and submit complete building data through a guided 7-tab widget. Widget component with validation, auto-save (2-second debounce), offline support (Service Worker + IndexedDB), read-only/editable state management, photo upload in Tab 7.

**FRs covered:** FR16, FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26

### Epic 4: Engineer Review & Decision Workflow
Engineers can review submitted data and either block cases (with feedback) or complete cases (with PDF upload). Structured data presentation, block/complete actions via Server Actions, blocking message system, state transition enforcement.

**FRs covered:** FR27, FR28, FR29, FR30, FR31, FR32, FR33

### Epic 5: File Upload & PDF Generation
Users can upload photos/documents, engineers can download all files, customers can download final PDF certificates. Supabase Storage, client-side photo compression (1920px max, 85% JPEG), camera access on mobile/tablet, PDFKit API route for certificate generation.

**FRs covered:** FR34, FR35, FR36, FR37, FR38, FR39

### Epic 6: Activity Tracking & Notifications
All users have complete transparency into case progress through real-time activity feeds and notifications. Supabase Realtime subscriptions, immutable audit log table, notification system (in-app toasts + email), activity timeline component.

**FRs covered:** FR40, FR41, FR42, FR43, FR44, FR45, FR46, FR47, FR48, FR49, FR50, FR51

### Epic 7: Expert Assignment (Manual MVP)
Administrators can manually assign external experts to cases, experts see only their assigned cases. Manual assignment workflow (admin function), RLS policies for expert visibility, metadata tracking (assigned expert name, timestamp).

**FRs covered:** FR52, FR53, FR54, FR55

---

## Epic 1: Application Access & Authentication

Users can access and authenticate to the application with role-based permissions. Initialize Next.js project with infrastructure (Supabase, Vercel, CI/CD), implement secure authentication (email/password + OAuth), configure user profiles with roles (Customer, Engineer, Expert), enforce role-based access control with protected routes and RLS policies.

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6

---

### Infrastructure Setup Stories (1.1-1.5)

### Story 1.1: Initialize Next.js Project with shadcn/ui

As a developer,
I want a Next.js 16+ project initialized with shadcn/ui components,
So that I have a production-ready foundation with accessible UI components.

**Acceptance Criteria:**

**Given** I am starting the project
**When** I run the initialization commands
**Then** Next.js 16+ project is created with TypeScript, Tailwind CSS, and App Router
**And** shadcn/ui is configured with initial components (button, form, input, card, tabs)
**And** Project structure follows architecture decisions (`app/`, `components/`, `lib/`, `types/`)
**And** Import alias `@/` is configured and working

### Story 1.2: Configure Supabase Integration

As a developer,
I want Supabase configured for database, auth, and storage,
So that I have a complete backend infrastructure ready for features.

**Acceptance Criteria:**

**Given** Next.js project is initialized
**When** I configure Supabase clients
**Then** Supabase browser client is configured in `lib/supabase/client.ts`
**And** Supabase server client is configured in `lib/supabase/server.ts`
**And** Environment variables are set (`.env.local` with `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
**And** TypeScript types can be generated from Supabase schema
**And** Connection to Supabase project is verified

### Story 1.3: Set Up TanStack Query and State Management Providers

As a developer,
I want TanStack Query and Zustand configured globally,
So that I have consistent state management patterns across the app.

**Acceptance Criteria:**

**Given** Supabase is configured
**When** I set up state management providers
**Then** TanStack Query provider is configured in `lib/providers.tsx` with proper defaults (stale time: 30s, retry: 3)
**And** Auth Context provider is created for user session management
**And** Root layout wraps app with all providers
**And** DevTools are enabled in development mode
**And** Example query hook demonstrates the pattern

### Story 1.4: Deploy to Vercel with CI/CD

As a developer,
I want the project deployed to Vercel with automated CI/CD,
So that every commit triggers builds and deployments.

**Acceptance Criteria:**

**Given** Project is ready for deployment
**When** I connect to Vercel and set up CI/CD
**Then** Project is deployed to Vercel (`energieausweis-crm.vercel.app`)
**And** GitHub Actions workflow is configured for ESLint and TypeScript checks
**And** Environment variables are set in Vercel dashboard
**And** Preview deployments are created for all branches
**And** `main` branch deploys automatically to production

### Story 1.5: Configure Monitoring and Error Tracking

As a developer,
I want Sentry integrated for error tracking,
So that production errors are captured and debuggable.

**Acceptance Criteria:**

**Given** Vercel deployment is working
**When** I configure Sentry
**Then** @sentry/nextjs is installed and configured
**And** Sentry DSN is set in environment variables
**And** Error boundaries catch and report errors
**And** Source maps are uploaded for debugging
**And** Test error demonstrates Sentry integration works

---

### Authentication & Access Control Stories (1.6-1.10)

### Story 1.6: Supabase Auth Setup with Email/Password

As a developer,
I want Supabase Auth configured for email/password authentication,
So that users can register and log in to the system.

**Acceptance Criteria:**

**Given** Supabase is configured (from Story 1.2)
**When** I implement email/password authentication
**Then** Supabase Auth is enabled in the Supabase dashboard
**And** Auth helpers are created in `lib/supabase/auth.ts` (signUp, signIn, signOut)
**And** Login page exists at `/login` with email and password fields
**And** Registration page exists at `/register` with email, password, and confirm password fields
**And** Password validation enforces minimum 8 characters
**And** Users can successfully register with email/password and receive confirmation email
**And** Users can log in with registered credentials
**And** Failed login shows appropriate error messages
**And** Successful login redirects to `/dashboard`
**And** Auth state is managed via Auth Context (from Story 1.3)

### Story 1.7: User Profiles Table with Role Management

As a system administrator,
I want a profiles table that stores user roles,
So that I can assign users as Customer, Engineer, or Expert.

**Acceptance Criteria:**

**Given** Supabase Auth is configured (Story 2.1)
**When** I create the user profiles system
**Then** `profiles` table exists with schema:
  - `id` (uuid, primary key, references auth.users)
  - `email` (text, unique, not null)
  - `role` (text, not null, check constraint: 'customer' | 'engineer' | 'expert')
  - `full_name` (text)
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())
**And** Database trigger automatically creates profile record when new user registers
**And** Profile includes user's role (defaults to 'customer' for new registrations)
**And** TypeScript types are generated for profiles table in `types/database.ts`
**And** Auth Context exposes current user's role (`useAuth().role`)
**And** Profile creation is tested with all three roles

### Story 1.8: OAuth Integration (Google & Facebook)

As a user,
I want to log in with Google or Facebook,
So that I can access the system without creating a new password.

**Acceptance Criteria:**

**Given** Email/password auth is working (Story 2.1)
**When** I implement OAuth providers
**Then** Google OAuth is configured in Supabase dashboard with valid client ID and secret
**And** Facebook OAuth is configured in Supabase dashboard with valid app ID and secret
**And** Login page displays "Continue with Google" and "Continue with Facebook" buttons
**And** OAuth buttons use shadcn/ui button component with provider icons
**And** Clicking Google button initiates Google OAuth flow
**And** Clicking Facebook button initiates Facebook OAuth flow
**And** Successful OAuth login creates profile record with 'customer' role (default)
**And** OAuth users are redirected to `/dashboard` after authentication
**And** OAuth callback handles errors gracefully with user-friendly messages
**And** Users can link multiple OAuth providers to same account (Supabase handles this)

### Story 1.9: Protected Routes and Session Management

As a developer,
I want authenticated routes that redirect unauthenticated users,
So that only logged-in users can access the application.

**Acceptance Criteria:**

**Given** Authentication is working (Story 2.1)
**When** I implement route protection
**Then** Route groups are created: `app/(authenticated)/` and `app/(public)/`
**And** Public routes include: `/login`, `/register`, `/` (landing page)
**And** Authenticated routes include: `/dashboard`, `/cases/*`
**And** Middleware checks auth state for all `/(authenticated)/*` routes
**And** Unauthenticated users accessing protected routes are redirected to `/login`
**And** Authenticated users accessing `/login` or `/register` are redirected to `/dashboard`
**And** Session persists across browser refresh (Supabase handles this)
**And** Session expiration redirects to `/login` with "Session expired" message
**And** Logout clears session and redirects to `/login`
**And** Auth state is checked on initial page load

### Story 1.10: Role-Based Access Control (RLS Policies)

As a system architect,
I want Row Level Security policies on the profiles table,
So that users can only access their own profile data.

**Acceptance Criteria:**

**Given** Profiles table exists (Story 2.2)
**When** I implement RLS policies
**Then** RLS is enabled on `profiles` table
**And** Policy "Users can view own profile" allows SELECT where `auth.uid() = id`
**And** Policy "Users can update own profile" allows UPDATE where `auth.uid() = id`
**And** Policy "System can insert profiles" allows INSERT (for trigger on user creation)
**And** Engineers cannot view other users' profiles (verified by test)
**And** Customers cannot view other customers' profiles (verified by test)
**And** Experts cannot view profiles of other experts (verified by test)
**And** Attempting to query another user's profile returns empty result (not error)
**And** RLS policies are tested with all three roles
**And** Service role key bypasses RLS (for admin operations)

---

## Epic 2: Case Lifecycle Management

Engineers can view and manage all cases in a shared pool, customers can view their cases, experts can view assigned cases. Case database schema with 4-state machine (Waiting → Submitted → Blocked → Completed), case list views with filtering, master-detail layout.

**FRs covered:** FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15

### Story 2.1: Cases Table and State Machine Schema

As a developer,
I want a cases table with 4-state lifecycle tracking,
So that the system can manage case progression from creation to completion.

**Acceptance Criteria:**

**Given** Profiles table exists (Story 2.2)
**When** I create the cases table
**Then** `cases` table exists with schema:
  - `id` (uuid, primary key, default uuid_generate_v4())
  - `case_number` (text, unique, not null, format: "CASE-YYYYMMDD-XXXX")
  - `status` (text, not null, check constraint: 'waiting_for_data' | 'data_submitted' | 'blocked' | 'completed')
  - `customer_id` (uuid, references profiles.id, not null)
  - `assigned_expert_id` (uuid, references profiles.id, nullable)
  - `responsible_actor` (text, not null, check constraint: 'customer' | 'expert')
  - `engineer_blocking_message` (text, nullable)
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())
  - `completed_at` (timestamptz, nullable)
**And** Database function generates unique case numbers with format CASE-YYYYMMDD-0001
**And** Index exists on `customer_id` for fast customer case lookups
**And** Index exists on `assigned_expert_id` for fast expert case lookups
**And** Index exists on `status` for filtered queries
**And** TypeScript types are generated in `types/database.ts`
**And** Default status is 'waiting_for_data' on case creation
**And** Trigger updates `updated_at` timestamp on any case modification

### Story 2.2: Case Creation Workflow

As an administrator,
I want to create a new case when a customer purchases Energieausweis service,
So that the case appears in the system for data collection.

**Acceptance Criteria:**

**Given** Cases table exists (Story 3.1)
**When** I implement case creation
**Then** Server Action `createCase` exists in `app/actions/cases.ts`
**And** Function accepts: `customerId` (uuid), `responsibleActor` ('customer' | 'expert')
**And** Function generates unique case_number using database function
**And** Function creates case record with status 'waiting_for_data'
**And** Function returns `{data: case, error: null}` on success
**And** Function returns `{data: null, error: message}` on failure
**And** TanStack Query mutation `useCreateCase` wraps the Server Action
**And** Creating a case invalidates the cases query cache
**And** Admin UI exists at `/admin/cases/new` to create cases manually
**And** Form validates customer_id exists and role is 'customer'
**And** Success creates case and redirects to case detail view
**And** Case appears immediately in engineer shared pool

### Story 2.3: Engineer Shared Pool Dashboard

As an engineer,
I want to view all cases in a shared pool with status filtering,
So that I can see what cases need review and take action.

**Acceptance Criteria:**

**Given** Cases exist in the database (Story 3.2)
**When** I access the engineer dashboard
**Then** Page exists at `/dashboard` (authenticated route)
**And** Page is only accessible to users with role 'engineer'
**And** Non-engineers accessing `/dashboard` see their role-specific view
**And** Engineers see table/list of ALL cases in the system
**And** Each case row displays: case_number, customer name, status badge, responsible_actor, created_at
**And** Status badges use color coding: Waiting (blue), Submitted (yellow), Blocked (red), Completed (green)
**And** Filter buttons exist for each status (All, Waiting, Submitted, Blocked, Completed)
**And** Clicking filter updates the displayed cases instantly
**And** TanStack Query hook `useCases` fetches cases with optional status filter
**And** Cases are sorted by `created_at` descending (newest first)
**And** Clicking a case row navigates to `/cases/[id]` detail view
**And** Empty state shows "No cases found" when filter returns no results
**And** Loading state shows skeleton placeholders while fetching

### Story 2.4: Customer Case List View

As a customer,
I want to view only my cases with current status,
So that I can track my Energieausweis requests.

**Acceptance Criteria:**

**Given** Customer is authenticated (Story 2.1)
**When** Customer accesses `/dashboard`
**Then** Page displays only cases where `customer_id = current_user.id`
**And** RLS policy on cases table enforces: Customers SELECT only their own cases
**And** Each case displays: case_number, status badge, created_at, completed_at (if completed)
**And** Status badges match engineer view (color-coded by state)
**And** Clicking a case navigates to `/cases/[id]` for detail view
**And** If case status is 'blocked', blocking message is visible in list preview
**And** Empty state shows "You have no cases yet" if customer has zero cases
**And** TanStack Query hook `useMyCases` fetches customer's cases only
**And** Cases are sorted by `created_at` descending
**And** Customer cannot see cases belonging to other customers (verified by RLS test)

### Story 2.5: Expert Assigned Cases View

As an expert,
I want to view only cases assigned to me,
So that I can focus on filling building data for my assignments.

**Acceptance Criteria:**

**Given** Expert is authenticated and cases have assigned_expert_id (Story 3.2)
**When** Expert accesses `/dashboard`
**Then** Page displays only cases where `assigned_expert_id = current_user.id`
**And** RLS policy enforces: Experts SELECT only assigned cases
**And** Each case displays: case_number, customer name, status badge, created_at
**And** Status badges are color-coded matching other views
**And** If case status is 'blocked', blocking message preview is visible
**And** Clicking a case navigates to `/cases/[id]` for detail/widget view
**And** Empty state shows "No cases assigned to you yet" if expert has zero assignments
**And** TanStack Query hook `useMyAssignedCases` fetches assigned cases only
**And** Cases are sorted by `created_at` descending
**And** Expert cannot access cases not assigned to them (verified by RLS test)

### Story 2.6: Case Detail View (Master-Detail Pattern)

As any authenticated user,
I want to view full case details based on my role,
So that I can see all case information relevant to me.

**Acceptance Criteria:**

**Given** User is authenticated and case exists (Story 3.1-3.2)
**When** User navigates to `/cases/[id]`
**Then** Page fetches case data using TanStack Query hook `useCase(caseId)`
**And** RLS policy enforces access control:
  - Customers can view only their own cases
  - Engineers can view all cases
  - Experts can view only assigned cases
**And** Unauthorized access returns 403 and redirects to `/dashboard`
**And** Case header displays: case_number, status badge, created_at, updated_at
**And** Customer information section shows: customer name, email
**And** If assigned_expert_id exists, expert information is displayed
**And** Responsible actor is clearly indicated ("Data to be filled by: Customer/Expert")
**And** If status is 'blocked', engineer blocking message is prominently displayed
**And** Page layout uses master-detail pattern (list on left, detail on right on desktop)
**And** Mobile view stacks detail above list
**And** Loading state shows skeleton while fetching case
**And** Error state shows "Case not found" if case doesn't exist or user lacks permission

---

## Epic 3: Building Data Collection (7-Tab Widget)

Customers and experts can fill out and submit complete building data through a guided 7-tab widget. Widget component with validation, auto-save (2-second debounce), offline support (Service Worker + IndexedDB), read-only/editable state management, photo upload in Tab 7.

**FRs covered:** FR16, FR17, FR18, FR19, FR20, FR21, FR22, FR23, FR24, FR25, FR26

### Story 3.1: Widget Data Schema and Database Table

As a developer,
I want a database table to store 7-tab widget data,
So that customer/expert submissions are persisted.

**Acceptance Criteria:**

**Given** Cases table exists (Story 3.1)
**When** I create the widget data schema
**Then** `case_data` table exists with schema:
  - `id` (uuid, primary key)
  - `case_id` (uuid, references cases.id, unique, not null)
  - `tab1_data` (jsonb, nullable) - General building info
  - `tab2_data` (jsonb, nullable) - Construction details
  - `tab3_data` (jsonb, nullable) - Heating system
  - `tab4_data` (jsonb, nullable) - Ventilation
  - `tab5_data` (jsonb, nullable) - Energy efficiency
  - `tab6_data` (jsonb, nullable) - Additional notes
  - `tab7_file_ids` (text[], nullable) - Array of Supabase Storage file IDs
  - `filled_by_expert_id` (uuid, references profiles.id, nullable)
  - `filled_by_expert_name` (text, nullable)
  - `submitted_at` (timestamptz, nullable)
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())
**And** RLS policy: Customers can view/edit their own case data
**And** RLS policy: Engineers can view all case data (read-only)
**And** RLS policy: Experts can view/edit case data for assigned cases
**And** Trigger updates `updated_at` on modification
**And** TypeScript types generated for all tab data structures
**And** Default empty object `{}` for all tab_data fields on creation

### Story 3.2: Basic 7-Tab Widget Component (Tabs 1-6)

As a customer or expert,
I want a guided 7-tab widget to enter building data,
So that I can provide all required information step by step.

**Acceptance Criteria:**

**Given** Case data schema exists (Story 4.1)
**When** I access `/cases/[id]` and case status is 'waiting_for_data'
**Then** Widget component renders with 7 tabs using shadcn/ui Tabs component
**And** Tab labels are: "1. General Info", "2. Construction", "3. Heating", "4. Ventilation", "5. Energy", "6. Notes", "7. Photos"
**And** Tabs 1-6 contain form fields matching UX design specification
**And** Each tab has field labels, helper text, and input validation hints
**And** Tab navigation works: clicking tab switches content instantly
**And** Keyboard navigation: Arrow keys move between tabs
**And** Current tab is visually highlighted
**And** Form inputs use shadcn/ui components (Input, Select, Textarea, Checkbox, RadioGroup)
**And** All fields have proper labels and placeholders
**And** Required fields are marked with asterisk (*)
**And** Widget state is managed with Zustand store (`useWidgetStore`)
**And** Tab data is loaded from `case_data` table on component mount
**And** Empty/new cases show blank widget ready for input

### Story 3.3: Tab 7 Photo Upload with Camera Access

As a customer or expert,
I want to upload photos and documents in Tab 7,
So that I can provide visual documentation of the building.

**Acceptance Criteria:**

**Given** Widget component exists (Story 4.2)
**When** I navigate to Tab 7
**Then** File upload component renders with drag-and-drop zone
**And** "Choose Files" button opens file picker for images/PDFs
**And** "Take Photo" button activates device camera (mobile/tablet only)
**And** Camera access uses browser MediaDevices API
**And** Selected files are compressed using browser-image-compression (1920px max, 85% JPEG quality)
**And** EXIF data is preserved during compression
**And** Upload progress indicator shows for files > 1MB
**And** Each file upload is limited to 10MB
**And** Total case files are limited to 50MB
**And** Uploaded files display as thumbnail grid with filename
**And** Each thumbnail has delete button (X icon)
**And** Files are uploaded to Supabase Storage bucket `case-files`
**And** Storage path structure: `cases/{case_id}/{timestamp}-{filename}`
**And** File IDs are stored in `case_data.tab7_file_ids` array
**And** Upload errors show user-friendly messages

### Story 3.4: Auto-Save with IndexedDB (Offline Draft Persistence)

As a customer or expert,
I want my widget data auto-saved every 2 seconds,
So that I don't lose progress if browser crashes or connectivity drops.

**Acceptance Criteria:**

**Given** Widget is open and user is editing (Story 4.2)
**When** User types or changes any field
**Then** Changes are debounced with 2-second delay
**And** After 2 seconds of inactivity, draft is saved to IndexedDB
**And** IndexedDB database name: `energieausweis_drafts`
**And** Draft data includes: case_id, all tab data, timestamp
**And** "Auto-saved" indicator appears briefly after save
**And** On component mount, check IndexedDB for existing draft
**And** If draft exists and is newer than server data, show "Restore draft?" prompt
**And** User can choose to restore draft or discard
**And** Draft is cleared from IndexedDB after successful submission
**And** Multiple drafts for different cases are stored independently
**And** IndexedDB quota errors handled gracefully

### Story 3.5: Offline Support with Service Worker and Background Sync

As an expert,
I want full widget functionality offline,
So that I can fill building data in the field without internet.

**Acceptance Criteria:**

**Given** Widget and auto-save are working (Stories 4.2, 4.4)
**When** User goes offline
**Then** Service Worker is registered and caches app shell (HTML, CSS, JS)
**And** Offline indicator appears in UI header ("You are offline")
**And** Widget remains fully functional for data entry
**And** All form inputs work normally
**And** Tab navigation works offline
**And** Auto-save to IndexedDB continues offline
**And** Submit button changes to "Save for Later (Offline)"
**And** Clicking submit while offline queues submission in Background Sync API
**And** Sync queue is persisted in IndexedDB
**And** When connectivity returns, queued submissions auto-sync
**And** User sees "Syncing..." notification during background sync
**And** Successful sync shows "Data submitted successfully" notification
**And** Sync conflicts use Last-Write-Wins with optimistic locking
**And** If case was modified on server since offline edit, show conflict warning
**And** Zero data loss: All offline changes are persisted

### Story 3.6: Widget State Management (Read-Only vs Editable)

As a system,
I want to lock the widget to read-only after submission and unlock when blocked,
So that data integrity is maintained during engineer review.

**Acceptance Criteria:**

**Given** Widget is rendered (Story 4.2)
**When** Case status is 'waiting_for_data'
**Then** All form fields are editable
**And** Submit button is enabled and shows "Submit Building Data"
**And** Auto-save is active
**When** Case status is 'data_submitted'
**Then** All form fields are disabled (read-only)
**And** Submit button is hidden
**And** Auto-save is disabled
**And** Read-only banner shows "Data submitted - awaiting engineer review"
**When** Case status is 'blocked'
**Then** All form fields are editable again
**And** Submit button is enabled and shows "Re-Submit Corrections"
**And** Engineer blocking message is displayed prominently at top
**And** Auto-save is active
**When** Case status is 'completed'
**Then** All form fields are read-only
**And** Submit button is hidden
**And** Completion banner shows "Case completed on {date}"
**And** Widget state updates automatically when case status changes (via Supabase Realtime)

### Story 3.7: Form Validation and Submission Workflow

As a customer or expert,
I want required fields validated before submission,
So that I receive clear feedback on what's missing.

**Acceptance Criteria:**

**Given** Widget is in editable state (Story 4.6)
**When** User clicks "Submit Building Data"
**Then** Client-side validation runs on all required fields
**And** Missing required fields are highlighted with red border
**And** Error messages appear below invalid fields
**And** Validation scrolls to first error and focuses field
**And** Tab with validation errors shows red dot indicator
**And** Validation prevents submission if any required field is empty
**And** Validation enforces field formats (email, phone, numeric, dates)
**When** All validations pass
**Then** Server Action `submitWidgetData` is called
**And** Function saves all tab data to `case_data` table
**And** Function updates case status to 'data_submitted'
**And** If current user is expert, `filled_by_expert_id` and `filled_by_expert_name` are recorded
**And** Function sets `submitted_at` timestamp
**And** Function returns `{data: case, error: null}` on success
**And** Success shows toast "Data submitted successfully"
**And** Widget switches to read-only mode immediately
**And** IndexedDB draft is cleared
**And** Case list is refreshed (cache invalidated)

---

## Epic 4: Engineer Review & Decision Workflow

Engineers can review submitted data and either block cases (with feedback) or complete cases (with PDF upload). Structured data presentation, block/complete actions via Server Actions, blocking message system, state transition enforcement.

**FRs covered:** FR27, FR28, FR29, FR30, FR31, FR32, FR33

### Story 4.1: Engineer Review UI (Structured Data Display)

As an engineer,
I want to view submitted widget data in organized tabs,
So that I can review all building information efficiently.

**Acceptance Criteria:**

**Given** Case has status 'data_submitted' (from Story 4.7)
**When** Engineer navigates to `/cases/[id]`
**Then** Widget is displayed in read-only mode
**And** All 7 tabs show submitted data
**And** Data is organized and formatted for readability (not raw JSON)
**And** Each field shows label and value in key-value pairs
**And** Empty fields show "Not provided" instead of blank
**And** Tab 7 displays uploaded files as downloadable thumbnails
**And** Clicking file thumbnail opens full-size preview in modal
**And** If filled by expert, metadata banner shows: "Filled by [Expert Name] on [Date]"
**And** Engineer action buttons are visible: "Block Case" and "Complete Case"
**And** Both buttons are enabled only for 'data_submitted' cases
**And** Action buttons are disabled for other statuses
**And** UI clearly indicates case is awaiting engineer decision

### Story 4.2: Block Case with Engineer Message

As an engineer,
I want to block a case and provide a correction message,
So that customers/experts know what data needs fixing.

**Acceptance Criteria:**

**Given** Case has status 'data_submitted' (Story 5.1)
**When** Engineer clicks "Block Case" button
**Then** Modal dialog opens: "Block Case - Provide Feedback"
**And** Modal contains textarea for engineer message (required, min 10 characters)
**And** Modal has "Cancel" and "Block Case" buttons
**And** Clicking "Cancel" closes modal without changes
**When** Engineer enters message and clicks "Block Case"
**Then** Server Action `blockCase` is called
**And** Function accepts: `caseId` (uuid), `blockingMessage` (string)
**And** Function validates case status is 'data_submitted'
**And** Function validates blocking message is not empty
**And** Function updates case: `status = 'blocked'`, `engineer_blocking_message = message`
**And** Function returns `{data: updatedCase, error: null}` on success
**And** Success shows toast: "Case blocked - customer/expert notified"
**And** Case status updates to 'blocked' in UI immediately
**And** Widget becomes editable for customer/expert
**And** Blocking message appears prominently at top of widget
**And** TanStack Query cache is invalidated for this case
**And** Case list reflects new status immediately

### Story 4.3: Complete Case with PDF Upload

As an engineer,
I want to mark a case as completed and upload the final Energieausweis PDF,
So that customers can download their certificate.

**Acceptance Criteria:**

**Given** Case has status 'data_submitted' (Story 5.1)
**When** Engineer clicks "Complete Case" button
**Then** Modal dialog opens: "Complete Case - Upload Energieausweis PDF"
**And** Modal contains file upload input (accepts .pdf only)
**And** Upload shows file preview after selection
**And** Modal has "Cancel" and "Complete Case" buttons
**And** "Complete Case" button is disabled until PDF is uploaded
**When** Engineer uploads PDF and clicks "Complete Case"
**Then** Server Action `completeCase` is called
**And** Function accepts: `caseId` (uuid), `pdfFile` (File object)
**And** Function validates case status is 'data_submitted'
**And** Function validates file is PDF and < 10MB
**And** PDF is uploaded to Supabase Storage: `certificates/{case_id}/energieausweis.pdf`
**And** Function creates `case_certificates` table record:
  - `id` (uuid, primary key)
  - `case_id` (uuid, references cases.id)
  - `file_path` (text, Supabase Storage path)
  - `uploaded_at` (timestamptz)
  - `uploaded_by_engineer_id` (uuid, references profiles.id)
**And** Function updates case: `status = 'completed'`, `completed_at = now()`
**And** Function returns `{data: updatedCase, error: null}` on success
**And** Success shows toast: "Case completed - customer notified"
**And** Case status updates to 'completed' in UI
**And** Widget becomes permanently read-only
**And** Certificate download link appears for customer
**And** TanStack Query cache is invalidated

### Story 4.4: Engineer File Management (Download All Files)

As an engineer,
I want to download all case files as a single zip bundle,
So that I can review documents offline efficiently.

**Acceptance Criteria:**

**Given** Case has uploaded files in Tab 7 (Story 4.3)
**When** Engineer views case detail page
**Then** "Download All Files (ZIP)" button appears in file section
**And** Button shows file count and total size estimate
**And** Clicking button triggers API route `/api/cases/[id]/files/download`
**And** API route validates user is engineer
**And** API route fetches all file IDs from `case_data.tab7_file_ids`
**And** API route downloads each file from Supabase Storage
**And** API route creates in-memory zip archive using JSZip library
**And** Zip filename format: `case-{case_number}-files-{YYYYMMDD}.zip`
**And** Zip download starts automatically via browser
**And** Loading indicator shows "Preparing download..." while processing
**And** Download completes within 5 seconds for typical case (50MB)
**And** Individual file download links also available (click thumbnail)
**And** Individual downloads use direct Supabase Storage signed URLs
**And** Error handling shows "Download failed" if any file is missing

---

## Epic 5: File Upload & PDF Generation

Users can upload photos/documents, engineers can download all files, customers can download final PDF certificates. Supabase Storage, client-side photo compression (1920px max, 85% JPEG), camera access on mobile/tablet, PDFKit API route for certificate generation.

**FRs covered:** FR34, FR35, FR36, FR37, FR38, FR39

### Story 5.1: Supabase Storage Buckets and RLS Policies

As a developer,
I want secure storage buckets with role-based access control,
So that only authorized users can access case files and certificates.

**Acceptance Criteria:**

**Given** Supabase is configured (Story 1.2)
**When** I set up storage buckets
**Then** Storage bucket `case-files` exists for user-uploaded documents
**And** Storage bucket `certificates` exists for engineer-uploaded PDFs
**And** Both buckets have RLS enabled
**And** RLS policy on `case-files`: Users can upload to `cases/{case_id}/*` if they own or are assigned to case
**And** RLS policy on `case-files`: Users can read from `cases/{case_id}/*` if they own, are assigned, or are engineer
**And** RLS policy on `certificates`: Only engineers can INSERT
**And** RLS policy on `certificates`: Customers can SELECT from `cases/{their_case_id}/*`
**And** RLS policy on `certificates`: Engineers can SELECT all
**And** RLS policy on `certificates`: Experts can SELECT from assigned cases
**And** Unauthorized access attempts return 403 Forbidden
**And** File paths follow structure: `cases/{case_id}/{timestamp}-{filename}`
**And** Signed URLs expire after 1 hour for security
**And** Storage policies are tested with all three roles

### Story 5.2: Customer Certificate Download

As a customer,
I want to download my final Energieausweis PDF when case is completed,
So that I have my energy certificate document.

**Acceptance Criteria:**

**Given** Case status is 'completed' and certificate exists (Story 5.3)
**When** Customer views `/cases/[id]`
**Then** Certificate download section is visible
**And** Download button shows: "Download Energieausweis Certificate (PDF)"
**And** Button displays file size estimate
**And** Clicking button downloads PDF from Supabase Storage
**And** Download uses signed URL with 1-hour expiration
**And** PDF filename format: `energieausweis-{case_number}.pdf`
**And** Download starts immediately (no preview modal)
**And** Success shows brief toast: "Certificate downloaded"
**And** Certificate can be downloaded multiple times (no limit)
**And** Expert viewing completed assigned case can also download certificate
**And** Engineer can download certificate from any case
**And** Non-completed cases show "Certificate not available yet"
**And** Unauthorized users cannot access certificate (verified by RLS test)

### Story 5.3: Automated PDF Generation with PDFKit (Optional)

As an engineer,
I want to auto-generate Energieausweis PDF from case data,
So that I don't have to manually create certificates.

**Acceptance Criteria:**

**Given** Case status is 'data_submitted' and all required data is present
**When** Engineer clicks "Generate Certificate" button
**Then** API route `/api/cases/[id]/generate-certificate` is called
**And** Route validates user is engineer
**And** Route fetches all case data and widget data
**And** Route uses PDFKit library to generate PDF document
**And** PDF includes: Case number, customer info, all building data from 7 tabs
**And** PDF follows official Energieausweis format/template
**And** PDF includes logo and branding
**And** Generated PDF is uploaded to Storage: `certificates/{case_id}/energieausweis.pdf`
**And** Generation completes within 5 seconds
**And** Success shows "Certificate generated successfully"
**And** Engineer can preview generated PDF before completing case
**And** "Complete Case" button (Story 5.3) can use generated PDF instead of manual upload
**And** If PDF generation fails, engineer can still manually upload PDF
**And** Loading indicator shows "Generating PDF..." during generation

---

## Epic 6: Activity Tracking & Notifications

All users have complete transparency into case progress through real-time activity feeds and notifications. Supabase Realtime subscriptions, immutable audit log table, notification system (in-app toasts + email), activity timeline component.

**FRs covered:** FR40, FR41, FR42, FR43, FR44, FR45, FR46, FR47, FR48, FR49, FR50, FR51

### Story 6.1: Activity Feed Table and Event Tracking

As a developer,
I want an immutable activity feed for all case events,
So that complete audit history is preserved.

**Acceptance Criteria:**

**Given** Cases exist in the system
**When** I create the activity tracking system
**Then** `case_activities` table exists with schema:
  - `id` (uuid, primary key)
  - `case_id` (uuid, references cases.id, not null)
  - `activity_type` (text, not null, check constraint: 'case_created' | 'data_submitted' | 'case_blocked' | 'case_completed' | 'file_uploaded' | 'widget_edited')
  - `actor_id` (uuid, references profiles.id, not null)
  - `actor_name` (text, not null)
  - `actor_role` (text, not null)
  - `description` (text, not null) - Human-readable description
  - `metadata` (jsonb, nullable) - Additional event data
  - `created_at` (timestamptz, default now(), not null)
**And** Table has no UPDATE or DELETE permissions (immutable audit log)
**And** Index exists on `case_id` for fast case activity lookups
**And** Index exists on `created_at` for chronological sorting
**And** RLS policy: Customers can view activities for their own cases
**And** RLS policy: Engineers can view all activities
**And** RLS policy: Experts can view activities for assigned cases
**And** Database triggers automatically create activity records for:
  - Case creation (activity_type: 'case_created')
  - Data submission (activity_type: 'data_submitted')
  - Case blocking (activity_type: 'case_blocked', metadata includes blocking message)
  - Case completion (activity_type: 'case_completed')
  - File uploads (activity_type: 'file_uploaded', metadata includes filename)
**And** Activity description is auto-generated based on type
**And** TypeScript types generated for all activity types

### Story 6.2: Real-Time Activity Timeline Component

As any user,
I want to see a live activity timeline on the case detail page,
So that I can track all actions in real-time.

**Acceptance Criteria:**

**Given** Activity feed exists (Story 7.1)
**When** User views `/cases/[id]`
**Then** Activity timeline component is visible in sidebar or below case header
**And** Timeline displays all activities for this case in reverse chronological order (newest first)
**And** Each activity item shows:
  - Activity icon (case, file, block, checkmark icons based on type)
  - Description (e.g., "Customer submitted building data")
  - Actor name and role (e.g., "John Doe (Engineer)")
  - Timestamp (relative: "2 hours ago" or absolute: "Jan 3, 2026 10:30 AM")
**And** Blocking activities show engineer message in expanded view
**And** File upload activities show filename
**And** Timeline uses Supabase Realtime subscription to case_activities table
**And** New activities appear automatically without page refresh
**And** New activity items animate in with subtle highlight
**And** Timeline scrolls automatically to newest item when activity added
**And** Loading state shows skeleton placeholders while fetching
**And** Empty state shows "No activity yet" for new cases
**And** Realtime subscription is cleaned up on component unmount
**And** Connection status indicator shows if realtime disconnects

### Story 6.3: In-App Notification System (Toast Notifications)

As any user,
I want to receive instant notifications for case status changes,
So that I'm immediately aware of important updates.

**Acceptance Criteria:**

**Given** User is authenticated and viewing the app
**When** A case they have access to changes status
**Then** Toast notification appears in top-right corner
**And** Toast uses shadcn/ui Toast component
**And** Notification includes: case number, status change, brief description
**And** Toast auto-dismisses after 5 seconds
**And** User can manually dismiss toast by clicking X
**And** Toast variants match event type:
  - Success (green): Case completed
  - Warning (yellow): Case blocked
  - Info (blue): Data submitted
**And** Notification triggers based on Supabase Realtime subscription to cases table
**And** Subscription filters: Only cases where user is customer, assigned expert, or engineer
**And** Multiple notifications stack vertically (max 3 visible)
**And** Clicking notification navigates to case detail page
**And** Notifications persist in browser notifications API (if permission granted)
**And** User can enable/disable notifications in settings
**And** Notification sound plays (optional, user preference)
**And** Notifications work across all tabs/windows (using BroadcastChannel API)

### Story 6.4: Email Notifications (Optional for MVP)

As a user,
I want email notifications for important case events,
So that I'm notified even when not using the app.

**Acceptance Criteria:**

**Given** Case status changes (Story 7.1)
**When** Activity is created in case_activities table
**Then** Database function checks if email notification is required
**And** Email is sent for these events:
  - Customer: Case blocked, Case completed
  - Expert: Case blocked (for their assigned cases)
  - Engineer: Data submitted (new or re-submitted)
**And** Email template includes: Case number, event description, link to case
**And** Email uses Supabase Auth email templates or third-party service (SendGrid/Resend)
**And** Email "from" address: `noreply@bauexperts.com` (configurable)
**And** Email subject format: `[Bauexperts] Case {case_number} - {event_type}`
**And** Email body is HTML formatted with branding
**And** Email includes "View Case" button linking to `/cases/[id]`
**And** Email delivery failures are logged but don't block case workflow
**And** User can opt-out of email notifications in profile settings
**And** Email rate limiting: Max 1 email per case per hour to prevent spam
**And** Email sending is async (doesn't delay UI response)

---

## Epic 7: Expert Assignment (Manual MVP)

Administrators can manually assign external experts to cases, experts see only their assigned cases. Manual assignment workflow (admin function), RLS policies for expert visibility, metadata tracking (assigned expert name, timestamp).

**FRs covered:** FR52, FR53, FR54, FR55

### Story 7.1: Admin Expert Assignment Interface

As an administrator,
I want to manually assign an expert to a case,
So that external experts can fill building data for customers.

**Acceptance Criteria:**

**Given** Case exists and user has admin or engineer role
**When** I access `/cases/[id]` or `/admin/cases/[id]/assign-expert`
**Then** "Assign Expert" button is visible to engineers
**And** Clicking button opens modal: "Assign Expert to Case"
**And** Modal contains dropdown/search to select expert
**And** Dropdown lists all users with role 'expert' (fetched from profiles table)
**And** Each expert option shows: full_name and email
**And** Search/filter works on expert name and email
**And** Modal has "Cancel" and "Assign Expert" buttons
**And** "Assign Expert" button is disabled until expert is selected
**When** Engineer selects expert and clicks "Assign Expert"
**Then** Server Action `assignExpert` is called
**And** Function accepts: `caseId` (uuid), `expertId` (uuid)
**And** Function validates expert role is 'expert'
**And** Function updates case: `assigned_expert_id = expertId`, `responsible_actor = 'expert'`
**And** Function creates activity record: 'expert_assigned'
**And** Function returns `{data: updatedCase, error: null}` on success
**And** Success shows toast: "Expert assigned successfully"
**And** Expert receives notification (in-app and email)
**And** Case detail page updates to show assigned expert name
**And** Case appears in expert's "My Assigned Cases" dashboard (Story 3.5)
**And** TanStack Query cache is invalidated

### Story 7.2: Expert Unassignment and Reassignment

As an engineer,
I want to unassign or reassign an expert from a case,
So that I can manage expert workload and availability.

**Acceptance Criteria:**

**Given** Case has assigned_expert_id (Story 8.1)
**When** Engineer views case detail page
**Then** Expert assignment section shows: "Assigned to: [Expert Name]"
**And** "Change Expert" button is visible next to assignment
**And** "Remove Expert" button is visible
**When** Engineer clicks "Remove Expert"
**Then** Confirmation modal appears: "Remove expert assignment?"
**And** Modal warns: "Case will revert to customer responsibility"
**And** Confirming updates case: `assigned_expert_id = null`, `responsible_actor = 'customer'`
**And** Activity record created: 'expert_unassigned'
**And** Expert receives notification (in-app)
**And** Case is removed from expert's dashboard
**And** Success shows toast: "Expert removed from case"
**When** Engineer clicks "Change Expert"
**Then** Assignment modal opens (same as Story 8.1)
**And** Current expert is pre-selected in dropdown
**And** Selecting different expert reassigns the case
**And** Reassignment creates two activity records: 'expert_unassigned', 'expert_assigned'
**And** Both old and new expert receive notifications
**And** Success shows toast: "Expert reassigned successfully"
