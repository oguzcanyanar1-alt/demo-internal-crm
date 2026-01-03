---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
inputDocuments:
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\product-brief-BMAD-METHOD-main-2025-12-29.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\prd.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\docs\brainstorming-session-2025-12-25.md'
date: 2026-01-02
author: Oguzc
projectName: Bauexperts CRM
workflowComplete: true
completionDate: 2026-01-03
---

# UX Design Specification Bauexperts CRM

**Author:** Oguzc
**Date:** 2026-01-02

---

## Executive Summary

### Project Vision

Bauexperts Internal CRM eliminates operational chaos in Energieausweis service delivery by replacing fragmented communication channels with a single, structured workflow.

**Core UX Principle:** *"One calm system, two perspectives"*

- **For customers**: Transparency about case status, clear guidance on requirements
- **For engineers**: Structured data presentation, simple decision flows
- **For experts**: Efficient field data collection, clean handoffs

The MVP proves one complete workflow works end-to-end: Energieausweis case management from purchase to final document delivery.

### Target Users

**Primary User: Internal Engineers (Stefan)**
- **Pain**: 60% of time spent coordinating across fragmented channels
- **Mental model**: "What cases need my attention? What's the data? Block or Complete?"
- **Device**: Desktop/laptop (1366x768 minimum, 1920x1080 optimal)

**Secondary User: Customers (Anna)**
- **Pain**: Uncertainty about requirements, confusion about case status
- **Mental model**: "What do you need from me? What's happening with my case?"
- **Device**: Desktop/laptop primarily, mobile for status checks

**Tertiary User: External Experts (Markus)**
- **Pain**: Messy handoffs, unclear data expectations
- **Mental model**: "What building data do I collect? Submit and move to next job"
- **Device**: Tablets for on-site inspections (iPad-sized, 1024px minimum, touch-friendly)

### Key Design Challenges

**1. Multi-Role Complexity**
- Three distinct user roles with different mental models
- Design role-appropriate interfaces while maintaining "single source of truth" architecture

**2. Widget State Management** ⭐ **CRITICAL**
- **Draft**: "I can edit anytime, data auto-saves"
- **Submitted**: "Widget is read-only, engineer is reviewing"
- **Blocked**: "Widget is editable again, engineer needs specific corrections"
- **Completed**: "Case is done, download final document"

**3. Tablet Usability for Field Work**
- Touch-friendly form controls and navigation
- Camera access for photo uploads
- One-handed operation when possible

### Design Opportunities

**1. Transparency as Competitive Advantage**
- Activity feed showing exactly what's happening builds unprecedented trust

**2. Structured Guidance Reduces Friction**
- 7-tab widget with clear instructions eliminates guesswork

**3. Shared Visibility Enables Instant Handoffs**
- Engineers working from shared case pool with complete data visibility means zero-friction colleague handoffs

## Core User Experience

### Defining Experience

The core experience centers on the **7-tab widget data collection**. This is the universal touchpoint where all three user types interact with the system.

**Core user action:** Fill, review, or submit the 7-tab Energieausweis widget with complete building data.

### Platform Strategy

**Multi-Device Responsive Design:**
- Desktop primary for engineers (1366x768 minimum)
- Mobile essential for customers (must work excellently)
- Tablet for field work (iPad-sized, 1024px+)
- Single responsive UI across all screen sizes

**Offline Capability (Critical for Experts):**
- Experts must fill complete 7-tab widget offline
- Draft auto-save works offline using local storage
- Clear visual indication of offline/online status
- Data syncs automatically when connectivity restored

### Effortless Interactions

1. **Auto-save is invisible** - Users never think about saving
2. **Clear progress feedback** - Always know position in 7-tab widget
3. **No surprises** - System explains why fields are required
4. **Minimal cognitive load** - No unnecessary fields, plain language
5. **One clear next action** - Always obvious what to do next
6. **Widget state transitions obvious** - Never wonder "Can I edit?"

### Critical Success Moments

**For Customers:**
- First widget load: "This is clear - I know what to do"
- Data persistence: If they lose data, trust is gone immediately
- Post-submission visibility: Can always view exactly what they entered

**For Engineers:**
- Case review: All data visible in organized structure
- Complete data on first submission: Critical - widget validation must prevent missing information
- First complete case end-to-end: "I didn't touch email once"

**For Experts:**
- On-site widget load (offline): Works perfectly without connectivity
- Offline reliability: Zero tolerance for data loss
- Photo upload performance: Must be fast and clear on-site

### Experience Principles

1. **Invisible Infrastructure** - Users focus on task, not tool
2. **Zero Cognitive Load** - One clear next action always visible
3. **Trust Through Transparency** - Users always know case status
4. **Faster Than Email** - Every interaction faster than email/WhatsApp chaos
5. **Mobile-First Reliability** - Data never lost, offline works flawlessly
6. **Approachable Immediately** - First 2-3 minutes determine success

## Desired Emotional Response

### Primary Emotional Goals

**Core Emotional Goal: Calm Confidence**

The system creates the opposite of today's email/WhatsApp chaos - predictable, reassuring, and boringly reliable.

**By User Role:**
- **Engineers**: Relief → Quiet confidence ("This finally makes sense")
- **Customers**: Calm certainty ("I know what I need to do")
- **Experts**: Professional confidence and trust ("Safe collecting data offline")

### Emotional Journey Mapping

**First Discovery:**
- Engineers: Skeptical optimism → Immediate relief (within first case view)
- Customers: Apprehensive → Reassured within 2-3 minutes
- Experts: Professional skepticism → Trust (first offline data collection)

**During Core Experience:**
- Engineers: Calm focus - "Faster than email archaeology"
- Customers: Guided certainty - "I know exactly what's needed"
- Experts: Efficient flow - "Clean data collection, no mental overhead"

### Design Implications

**Emotion-to-UX Connections:**

1. **Calm Confidence → Invisible Infrastructure**
   - Auto-save never shown unless it fails
   - Widget state visually obvious (color, icons, text)
   - Progress indicator always visible

2. **Immediate Reassurance → First-Screen Clarity**
   - Widget opens with clear instructions
   - All 7 tabs immediately visible

3. **Trust Through Reliability → Zero Data Loss**
   - Offline indicator always visible when offline
   - Never hide system state

4. **Neutral Corrections → Factual Language**
   - Blocked case message: "Please confirm heating type - Tab 2 shows Gas but photo appears to show oil tank"
   - NOT: "Error: Invalid data submission"

## UX Pattern Analysis & Inspiration

### Inspiring Products

**For Engineers:**
- **Jira**: Clear state transitions, consistent structure
- **GitHub Issues/PRs**: Complete context in one view, timeline-based history

**For Customers:**
- **Amazon Order Tracking**: Always know where things stand
- **DHL/UPS**: Timeline-based progress, clear current status + next step

**For Experts:**
- **Google Maps**: Best-in-class offline handling
- **Apple Notes**: Extremely reliable offline, auto-save invisible

### Transferable UX Patterns

**Navigation:**
- State-based filtering (Jira) - "What needs my attention?"
- Timeline-based progress (DHL/Amazon) - Past → Current → Next

**Interaction:**
- Read-only vs editable clarity (GitHub)
- Silent auto-save (Apple Notes)
- Offline-first with visible sync (Google Maps)
- Progress always visible (Survey apps)

**Visual:**
- Status badges (color + icon + text)
- Chronological activity timeline
- Minimal, consistent layout

## Design System Foundation

### Design System Choice

**Selected: shadcn/ui + Tailwind CSS**

**Rationale:**
- Aligns with "Boringly Reliable" philosophy (battle-tested Radix UI primitives)
- Supports offline-first architecture (no runtime CSS-in-JS dependencies)
- Accessibility built-in (zero effort)
- Minimal bundle size
- Fits Next.js ecosystem perfectly

### Visual Design Foundation

**Design Philosophy:** "Color as Signal, Not Decoration"

**Color System:**
- **Base**: Neutral grays, soft white backgrounds
- **State Colors**: Waiting (Slate), Submitted (Blue), Blocked (Amber), Completed (Green)
- **Semantic**: Primary Action (Blue), Error (Red), Success (Green), Warning (Amber)

**Typography:**
- System font stack with Inter fallback
- 16px base minimum (readability + accessibility)
- Generous line-height (1.6) for comfortable scanning

**Spacing:**
- Base unit: 8px
- Touch targets: Minimum 44x44px (mobile/tablet)
- Form field height: 48px (comfortable touch)

**Accessibility:**
- WCAG AA contrast ratios minimum (4.5:1 for text)
- Never rely on color alone (icon + text always present)
- All transitions respect `prefers-reduced-motion`

## Layout & Information Architecture

### Core Layout Pattern

**Master-Detail Pattern**
- Immediate context switching (case list → case detail)
- All data visible without clicking through multiple pages
- Optimizes for engineer efficiency while remaining simple for customers/experts

**Desktop Layout (1366px+):**
- Split view: Case list (30%) + Case detail (70%)
- 7-tab widget embedded inline
- Activity feed as right sidebar or below

**Mobile/Tablet Layout:**
- Stacked, linear navigation
- Full-width components
- Touch-optimized targets (44px minimum)

### Navigation Strategy

**State-First Navigation**
- Filter tabs: All / Waiting / Submitted / Blocked / Completed
- Default view: "Submitted" (most common for engineers)
- No dashboard (intentional) - direct landing on case list

## User Journey Flows

### Journey 1: Customer Submits Building Data

1. Customer receives email with case link → Logs in
2. Sees case with "Waiting for data" status
3. Opens 7-tab widget with clear instructions
4. Fills fields tab-by-tab (auto-save silent)
5. Progress visible: "Tab 3 of 7", completed tabs show ✓
6. Validation prevents incomplete submission
7. Submits when all tabs complete
8. Widget becomes read-only, case status → "Submitted"
9. Activity feed confirms: "You submitted building data"

**Critical Points:**
- Auto-save completely silent (unless network interruption)
- All 7 tabs visible from start (no progressive disclosure)
- Submit button disabled until validation passes
- Read-only widget stays fully visible after submission

### Journey 2: Expert Collects Field Data

1. Expert opens app on tablet at property (potentially offline)
2. Offline indicator visible if no connection
3. Selects assigned case → Opens 7-tab widget
4. Fills fields and captures photos (camera integration)
5. All data saves to local storage automatically
6. Completes all 7 tabs → Submits
7. If offline: Submission queued for sync
8. If online: Submission processes immediately
9. Widget locks, activity feed logs submission
10. When back online: Queued submission syncs automatically

**Critical Points:**
- Offline mode must work flawlessly
- Photo capture via native camera
- Zero data loss tolerance
- Clear sync queue visibility

### Journey 3: Engineer Reviews and Decides

1. Engineer lands on Cases page (default: "Submitted" filter)
2. Sees case in list → Clicks to view details
3. Case header + 7-tab widget + activity feed all visible
4. Reviews all 7 tabs for completeness and quality
5. Decision: Block (needs corrections) or Complete (ready)
6. **If Block**: Types specific feedback, case status → "Blocked", widget becomes editable for customer
7. **If Complete**: Confirms, case status → "Completed", document generation triggered
8. Next case immediately accessible in list

**Critical Points:**
- Zero-click context (all data visible on case selection)
- Read-only widget clearly distinguished
- Specific feedback required for blocking
- Fast scan → decide → act workflow

## Component Strategy

### Critical Components

**1. Energieausweis Widget (7-Tab)** ⭐ **CRITICAL**
- Heart of the system - universal touchpoint for all users
- States: Draft (editable) / Submitted (read-only) / Blocked (partially editable) / Completed (read-only + download)
- Auto-save: Debounced 2-second delay, saves to local storage + server simultaneously
- Offline-first: Service worker + IndexedDB persistence
- Responsive: Desktop (horizontal tabs), Tablet (touch-optimized), Mobile (swipe gestures)

**2. Activity Feed (Timeline)**
- Single source of truth for all case events
- Chronological feed (newest at bottom)
- Combines system events + user messages
- Real-time updates (WebSocket or polling)

**3. State-Aware Status Badge**
- Redundant signals: Icon + Text + Background color
- 4 states only: Waiting (yellow) / Submitted (blue) / Blocked (orange) / Completed (green)
- WCAG AA contrast compliant

**4. Master-Detail Case View**
- Engineers: Side-by-side split (desktop), collapsible (tablet), full replacement (mobile)
- Fast case navigation without page changes

**5. Offline Indicator**
- Network status: Online ✓ / Offline ⚠
- Sync queue count visible
- Auto-retry every 30 seconds
- Background sync via service worker

**6. Photo Upload with Camera Access**
- Desktop: Drag-drop + file picker
- Mobile/Tablet: Camera button (native camera) + gallery picker
- Client-side compression (1920px max width)
- Offline storage in IndexedDB

## UX Consistency Patterns

### Button Hierarchy

- **Primary**: Blue/green solid, prominent (Submit Widget, Complete Case)
- **Secondary**: Outline or muted (Previous/Next, Save Draft)
- **Destructive**: Red, always confirm (Block Case - requires reason)
- **Tertiary**: Text link, low priority (Help links, filters)

### State Indication

**4 States Only:**
1. **Waiting for Data**: 🟡 Yellow + "Waiting for data" + editable widget
2. **Data Submitted**: 🔵 Blue + "Submitted" + read-only widget + engineer actions visible
3. **Blocked**: 🟠 Orange + "Blocked" + editable widget (yellow highlights on flagged fields)
4. **Completed**: 🟢 Green + "Completed" + read-only widget + download button

**Visual Redundancy:** Icon + Text + Background color (never color alone)

### Feedback Patterns

- **Success**: Green toast, auto-dismiss 4 seconds
- **Error**: Red toast, manual dismiss, + inline next to field
- **Warning**: Yellow toast, auto-dismiss 6 seconds
- **Auto-save**: Completely silent unless network interruption
- **Validation**: Hard (blocks, red) vs Soft (warns, yellow)

### Form Patterns

**Structure:**
- Labels above fields (never placeholder-only)
- Required fields marked clearly
- Help text below ("Example: 1980")
- All 7 tabs visible from start

**Validation:**
- Hard: Required fields missing → Submit disabled
- Soft: Unusual values → Yellow warning (doesn't block)
- Auto-save: Debounced 2 seconds, saves to IndexedDB + server

**Accessibility:**
- Every field has visible `<label>` with `for` attribute
- `aria-required`, `aria-invalid`, `aria-describedby` on fields
- Tab order logical (top-bottom, left-right)

### Read-Only vs Editable

- **Editable**: White background, blue focus borders, cursor visible
- **Read-only**: Light gray background, `disabled` attribute, no cursor
- **Partial (Blocked)**: Editable fields white + yellow highlight, others gray

## Responsive Design & Accessibility

### Responsive Strategy

**Mobile-First with Desktop Optimization**

**Breakpoints:**
- Mobile: `< 640px` (default)
- Tablet: `md: 768px+`
- Desktop: `lg: 1024px+`, `xl: 1280px+`

**Device-Specific:**
- **Desktop (1366px+)**: Master-detail split, multi-column forms, keyboard shortcuts
- **Tablet (1024-1365px)**: Touch-first, 44x44px tap targets, camera integration, offline-first
- **Mobile (375-1023px)**: Stacked layout, full-width components, bottom navigation

**Critical Decisions:**
- 7-tab widget stays single-column on all devices
- Master-detail split activates at `xl: 1280px`
- Touch targets remain 44x44px on tablet
- Forms never exceed 2 columns

### Accessibility Strategy

**WCAG 2.1 Level AA Compliance**

**Core Requirements:**

1. **Color & Contrast**: 4.5:1 minimum for text, 3:1 for UI components, never rely on color alone
2. **Keyboard Navigation**: All interactive elements accessible via Tab, Enter, Escape, Arrow keys
3. **Screen Readers**: Semantic HTML, ARIA labels, live regions for dynamic content
4. **Touch Targets**: 44x44px minimum on mobile/tablet
5. **Form Accessibility**: Visible labels, error messages linked via `aria-describedby`

**Testing:**
- Automated: axe-core, Lighthouse CI, ESLint jsx-a11y
- Manual: NVDA, JAWS, VoiceOver (desktop), VoiceOver/TalkBack (mobile)
- Color blindness: Colorblind Web Page Filter
- Keyboard: Tab order verification, focus trap validation

---

## Implementation Priorities

**Phase 1 - Core Components (MVP):**
1. Energieausweis Widget (7-Tab) - 3-5 days
2. State-Aware Status Badge - 0.5 days
3. Case List with Filtering - 2-3 days
4. Master-Detail Case View - 2-3 days

**Phase 2 - Supporting Components:**
5. Activity Feed (Timeline) - 2-3 days
6. Photo Upload with Camera Access - 2-3 days
7. Block Reason Dialog - 1 day

**Phase 3 - Enhancement Components:**
8. Offline Indicator - 2-3 days
9. Advanced Search/Filters - 2-3 days
10. Keyboard Shortcuts - 1-2 days

**Total:** ~18-27 days

---

## Critical Success Metrics

**Customer:**
- "I always knew what was happening"
- First 2-3 minutes determine success (immediate clarity)
- Zero data loss (trust killer if violated)

**Engineer:**
- "I don't want to go back to the old way"
- Review cases in minutes, not hours
- Complete data on first submission (validation critical)

**Expert:**
- "This is how it should have always worked"
- Offline reliability with zero data loss
- Professional credibility through structured submissions

---

## Design Principles Summary

1. **Invisible Infrastructure** - Auto-save, state management, offline sync all invisible
2. **Boring Reliability** - Predictable over novel, consistency over cleverness
3. **State Must Be Explicit** - Never infer editability or status
4. **Error Prevention Over Handling** - Disabled buttons, confirmations, validation before submission
5. **Transparency Builds Trust** - Activity feed, read-only widget access, clear state communication
6. **Mobile-First Reliability** - Offline works perfectly, touch-optimized, zero data loss
7. **Approachable Immediately** - No learning curve, familiar patterns from Jira/GitHub/Amazon

**Guiding North Star:** "If users ever feel 'email would be easier', the experience has failed."
