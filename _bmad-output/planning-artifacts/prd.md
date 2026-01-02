---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\product-brief-BMAD-METHOD-main-2025-12-29.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\docs\brainstorming-session-2025-12-25.md'
workflowType: 'prd'
lastStep: 11
workflowStatus: 'complete'
completionDate: 2025-12-30
date: 2025-12-30
author: Oguzc
briefCount: 1
brainstormingCount: 1
researchCount: 0
projectDocsCount: 0
projectType: 'greenfield'
---

# Product Requirements Document - BMAD-METHOD-main

**Author:** Oguzc
**Date:** 2025-12-30

## Executive Summary

**Bauexperts Internal CRM** is a purpose-built case management system designed to eliminate operational chaos in handling Energieausweis services. The system replaces fragmented communication channels (email, WhatsApp, PDFs, phone calls) with a single, structured workflow that provides transparency for customers and efficiency for internal engineers.

**The MVP focuses on proving one complete workflow works end-to-end**: Energieausweis case management from purchase to final document delivery. Success means engineers spend time on technical work instead of chasing information, and customers know exactly what to do at every step.

**Key Principle:** One calm system, two perspectives - customers get transparency, engineers get efficiency, both use the same single source of truth.

### The Problem

Bauexperts faces operational chaos in managing Energieausweis cases. Customer data arrives through fragmented channels (email, WhatsApp, PDFs, phone calls), forcing engineers to manually track case status across disconnected tools. There is no single source of truth, leading to repeated requests for information, unclear responsibilities, and frustrated customers who don't understand what's happening with their cases.

**Impact on Internal Engineers:**
- Spend excessive time coordinating and chasing information instead of doing technical work
- High cognitive load from tracking cases across multiple systems
- Manual, error-prone processes that don't scale

**Impact on Business:**
- Cannot scale service offerings without scaling complexity linearly
- Adding new services (beyond Energieausweis) would multiply the chaos
- Growth constrained by operational inefficiency

**Impact on Customers:**
- Confused about case status and next steps
- Frustrated by repeated requests for the same information
- Lack of transparency creates uncertainty and support burden

### The Solution

A purpose-built internal CRM centered on **case-based workflow management**:

**For Customers:**
- One case per service purchase, with clear status visibility
- Structured 7-tab widget guides data collection step-by-step
- Transparent activity feed shows exactly what's happening
- Download final document when ready

**For Engineers:**
- Shared case pool with all cases visible (no artificial assignment complexity)
- Review submitted data, request corrections (Blocked status), or upload final PDF (Completed)
- Download customer-provided files in one click
- Focus on technical review, not coordination

**For External Experts (B2B):**
- Same widget, same workflow as customers
- Manual assignment for MVP (future: expert marketplace)
- Metadata tracking (who entered what data)
- Future-proof for B2B service expansion

**Architecture Philosophy:**
- **Single-service MVP:** Hardcoded Energieausweis workflow proves the system works
- **Single source of truth:** CORE manages everything, portals are views
- **Predictable over clever:** Boring, reliable, error-proof workflows
- **Execution > architecture purity:** Ship working system, refine later

### What Makes This Special

**Internal Advantage:**
Built for Bauexperts' exact workflow, not a generic compromise. Deep domain knowledge embedded in the widget structure and validation rules. Complete control over future evolution as business needs change.

**MVP-First Mindset:**
Prove one service works end-to-end before scaling to multiple services. 30-40% complexity reduction through strategic scope cuts. Designed for expansion, implemented for speed.

**Dual Workflow Support:**
Customers can self-serve OR request expert help. External experts fill data on-site using same structured widget. Metadata tracking ensures audit trail (who, when, what). Future B2B model: experts become platform customers (not just data collectors).

**Transparency as Core Principle:**
Customers see case activity timeline (builds trust). Engineers see everything (enables quick decisions). Experts see only their assigned cases (clear boundaries). Unified activity feed = one mental model, zero confusion.

**Scalable Foundation:**
Architecture designed to support multiple services (post-MVP). Data reusability planned (pre-fill from previous cases). No cross-case data sharing in MVP (each case = independent snapshot). Expansion path clear, but not prematurely implemented.

## Project Classification

**Technical Type:** Web Application
**Domain:** General Business Operations
**Complexity:** Low
**Project Context:** Greenfield - new project

This is a multi-portal web application with role-based access control. The system consists of three primary interfaces (Customer Portal, Engineer Dashboard, Expert Interface) all connected to a single CORE case management system. The application focuses on structured data collection, workflow orchestration, and transparency through activity feeds.

**Technical Characteristics:**
- Browser-based SPA with responsive design requirements
- Role-based authentication and authorization
- Structured form widgets with validation
- File upload and download capabilities
- Real-time status updates and notifications
- Activity feed/timeline functionality

**Domain Characteristics:**
- Standard business process automation
- Internal operational efficiency focus
- Case-driven workflow management
- No specialized regulatory or compliance requirements
- Focus on user experience and transparency

## Success Criteria

### User Success

**Primary Users - Internal Engineers (Stefan):**

**Efficiency Improvements:**
- Engineers spend significantly less time chasing missing information per case
- Noticeable reduction in email, WhatsApp, and ad-hoc communication volume per case
- Engineers process cases with fewer context switches (no jumping between tools/channels)
- All required customer data visible in one structured view (no email archaeology)
- Case handoffs require zero verbal explanation (shared visibility enables seamless transitions)

**Workflow Efficiency:**
- Engineers can confidently decide: Blocked or Completed without uncertainty
- Fast access to customer-provided files (single-click download)
- Clear visibility into what's missing or needs attention

**Success Moment:**
The first time an Energieausweis case is completed end-to-end without a single email thread or phone call.

**Adoption Signal:**
Engineers actively prefer using the CRM over emails and manual tracking (behavioral validation, not forced adoption).

---

**Secondary Users - Customers (Anna):**

**Transparency Improvements:**
- Customers always know current case status (no "What's happening with my case?" uncertainty)
- Customers know exactly what is missing and what to do next (clear, actionable guidance)
- Fewer support requests asking about case status
- Fewer repeated requests for the same information (structured widget eliminates ambiguity)

**Success Moment:**
Seeing case progress clearly in the activity feed instead of waiting in uncertainty.

---

### Business Success

**Scalability:**
- Engineers can handle more Energieausweis cases without proportional increase in coordination effort
- Adding new cases does not increase operational chaos (linear complexity, not exponential)
- System proves that structured workflows enable growth

**Foundation for Multi-Service Expansion:**
- Successful Energieausweis workflow validates case-based architecture
- Confidence to add additional services (post-MVP) without re-architecting
- Expansion path clear and proven through real usage

**Operational Efficiency:**
- Reduction in manual tracking and coordination overhead
- Engineers spend 80%+ of time on technical review instead of data gathering
- Internal process becomes predictable and repeatable

---

### Technical Success

**MVP-Level Technical Requirements:**

**Stability:**
- System is stable enough for daily internal use
- No frequent crashes or data loss
- Reliable case data persistence

**Performance:**
- Basic performance is acceptable (pages load within a few seconds)
- No blocking delays that disrupt workflow
- Responsive UI for common operations (form filling, status updates)

**Data Integrity:**
- Case data is preserved accurately
- No lost or overwritten case information
- Audit trail integrity maintained

**Security:**
- Authenticated access control
- Role-based visibility (customer, engineer, expert boundaries)
- Basic protection of customer PII and building data

**Note:** No strict SLAs or enterprise-level performance targets are required for MVP. Focus is on proving the workflow works reliably for internal use.

---

### Measurable Outcomes

**MVP Success is Achieved When:**

1. **Engineer Adoption:** Engineers actively prefer using the CRM over emails and manual tracking (validated through usage data and qualitative feedback)

2. **Workflow Validation:** A full Energieausweis workflow can be completed reliably inside the system from purchase to final PDF delivery

3. **Efficiency Gains:** Measurable reduction in coordination time and support requests (baseline comparison)

4. **Scalability Proof:** Engineers can handle increasing case volume without proportional increase in chaos or coordination overhead

**Strongest Success Signal:**
Engineers say: **"I don't want to go back to the old way."**

---

**Evaluation Timeframe:**

- **Initial evaluation:** After 10 completed cases
- **Go/No-Go decision:** After ~20 completed cases or 4-6 weeks of usage (whichever comes first)

**Decision Path:**
- ✅ **If successful:** Proceed to stabilization, then add additional services and optimizations
- ❌ **If unsuccessful:** Revisit workflow and assumptions before adding scope; do not expand until core value is proven

---

**MVP Failure Signals:**
- Engineers continue defaulting to email despite CRM availability
- Cases still require significant external coordination (WhatsApp, phone calls)
- Customers continue asking "What's the status?" at the same rate as before
- System adds complexity instead of reducing it

---

## Product Scope

### MVP - Minimum Viable Product

The MVP delivers **one complete Energieausweis workflow, end-to-end**, proving that structured case management eliminates operational chaos.

**Core Features (What We're Building):**

**Case Management:**
- One case created per Energieausweis service purchase
- Case status tracking: Waiting for data → Data submitted → Blocked → Completed
- Activity feed showing all case actions with timestamps
- Shared case pool (any engineer can work any case, no assignment logic)

**Data Collection:**
- Single 7-tab structured widget hardcoded for Energieausweis building data
- Dual input path: Customer OR external expert fills the same widget
- Draft auto-save during data entry
- Widget becomes read-only after submission
- File upload capability (photos, documents) in Tab 7

**Engineer Workflow:**
- All submitted case data visible in one structured view
- Download customer-provided files in one click
- Simple decision flow: **Blocked** (needs correction) or **Completed**
- Blocked cases unlock widget for customer/expert corrections
- Upload final Energieausweis PDF when case is completed

**Customer Portal:**
- View case status and activity timeline
- Fill and submit 7-tab widget
- Receive notifications when engineer requests changes
- Download final Energieausweis PDF when ready

**Expert Portal (B2B):**
- Manual expert assignment for MVP
- Same 7-tab widget as customers (no custom expert UI)
- Metadata tracking: system records "Filled by Expert [Name]"
- Limited visibility: experts see only assigned cases

**Core Value Delivered:**
- Eliminates email, WhatsApp, and phone call coordination chaos
- Creates single source of truth for all case data
- Proves structured workflow enables scalability
- Engineers focus on technical review instead of data gathering

---

**Out of Scope for MVP:**

The MVP explicitly defers the following to post-MVP versions to maintain ruthless focus:

**Service Scope:**
- ❌ Multi-service support (only Energieausweis; no Brandschutz, Statik, Schallschutz, etc.)
- ❌ Service configuration or customization screens

**Advanced Features:**
- ❌ Data reusability across cases (each case is an independent snapshot)
- ❌ Customer building profiles or pre-fill from previous cases
- ❌ Automated workflows, rules engines, or status triggers
- ❌ Advanced analytics, dashboards, or reporting beyond basic case lists
- ❌ SLA management and time tracking
- ❌ Performance optimization beyond "works reliably"

**Role & Assignment:**
- ❌ Advanced role management (only basic customer, expert, engineer roles)
- ❌ Case assignment logic, ownership, or queues (shared pool only)
- ❌ Expert marketplace or self-selection (manual expert assignment only)
- ❌ Admin or support roles

**Payments & Notifications:**
- ❌ Payment automation (manual or simulated purchase acceptable for MVP)
- ❌ Notification optimization or tuning (basic notifications only)

**MVP Principle:**
**One service, one workflow, one decision loop, one document output.**

Everything else is intentionally deferred to validate the core concept first.

---

### Growth Features (Post-MVP)

**After MVP validation, incremental additions include:**

**Multi-Service Support:**
- Add additional services (Brandschutz, Statik, Schallschutz, etc.)
- Each service with its own structured, domain-specific data collection workflow
- Unified case model and activity feed across all services

**Data Reusability:**
- Pre-fill widget from previous cases
- Building profile templates
- Customer building history

**Smarter Automation:**
- Status triggers and automated notifications
- Reminder systems
- Basic SLA tracking

**Better Expert Management:**
- Availability tracking
- Workload visibility
- Expert performance metrics

**Expert Marketplace (Possible Long-Term):**
- Self-service expert selection
- Expert bidding on cases
- Expert ratings and reviews

---

### Vision (Future)

**2-3 Year Vision:**

If the MVP succeeds, Bauexperts Internal CRM becomes the **central case management system for all Bauexperts services**, not just Energieausweis.

**Expanded Capabilities:**
- Multiple service types with unified case management
- Each service with domain-specific workflows
- System remains **case-centric**, not customer-centric (customers may have multiple cases over time)

**Architectural Foundation:**

The MVP is intentionally designed to support expansion:
- **Single case-based core** as the source of truth
- **Services as pluggable workflows** (even if MVP is hardcoded)
- **Portals as views**, not business logic holders

This architecture allows future services to be added by **extending, not rewriting**, the system.

**Expansion Boundaries:**

Initial expansion stays within **Bauexperts and similar consulting workflows**:
- ✅ Operational excellence and engineer efficiency
- ✅ Predictable, calm workflows for internal teams
- ❌ White-label or external platform expansion (explicitly NOT a short-term goal)

**Guiding Principle:**
**Growth follows validated internal value, not speculation.**

## User Journeys

### Journey 1: Stefan - From Coordination Chaos to Technical Focus

**Stefan's Current Reality:**

It's Monday morning at 9 AM, and Stefan already has 23 unread emails about Energieausweis cases. He opens his laptop to find WhatsApp messages from three customers asking "What's the status?", a PDF attachment from a customer that he needs to manually save and organize, and a voicemail from an external expert asking which building address they're supposed to visit today.

Stefan is a skilled building energy assessment engineer who loves the technical challenge of analyzing building data and creating accurate Energieausweis certificates. But he spends 60% of his time playing detective - digging through email threads to find that one photo a customer sent two weeks ago, manually tracking which cases need his attention in a spreadsheet, and repeatedly asking customers for the same missing information because there's no structured way to collect it the first time.

When a colleague asks him to take over a case, Stefan needs a 15-minute verbal handoff to understand the current state. There's no shared visibility - every case lives in individual email inboxes, scattered WhatsApp conversations, and personal note-taking systems. The chaos is exhausting, and it's getting worse as case volume grows.

**The Breaking Point:**

One particularly frustrating day, Stefan realizes he's processed only 2 Energieausweis cases but sent 47 emails. A customer calls, angry because their case has been "waiting for weeks" - but Stefan discovers the customer never submitted the basement photos he'd requested. The request was buried in an email thread, and the customer simply missed it. Both Stefan and the customer are frustrated, and neither is at fault. The system is broken.

**Discovery and First Steps:**

The next week, Bauexperts launches the new Internal CRM. Stefan is skeptical - "another tool to learn" - but his manager encourages him to try it for just one case. He logs into the Engineer Dashboard and sees a clean, simple interface: a shared pool of all Energieausweis cases with clear status indicators.

He clicks on a case marked "Data submitted" and suddenly, for the first time ever, *everything is in one place*. The customer's building data is displayed in a structured 7-tab view - building type, construction year, heating system, insulation details, all filled out completely. Photos and documents are organized by section, downloadable in one click. There are no email threads to search through, no "where did they send that photo?" moments.

**The Transformation:**

Stefan reviews the data carefully. He notices an inconsistency in Tab 2 (the customer entered "Gas heating" but uploaded a photo of an oil tank). Instead of composing an email, he simply clicks "Block case" and types a clear message: "Please confirm heating type - your photo shows an oil tank but form says gas." The customer receives a notification, the widget unlocks for editing, and the case status changes to "Blocked" with Stefan's message clearly visible.

Two days later, the case returns to "Data submitted" with a corrected answer and a note from the customer: "Sorry, my mistake - it's oil heating, updated now!" Stefan reviews the correction, sees everything is now accurate, uploads the final Energieausweis PDF, and clicks "Complete." The customer immediately receives a notification that their document is ready to download.

**The New Reality:**

Six weeks later, Stefan has processed 40 cases entirely within the CRM - no email threads, no WhatsApp coordination, no phone calls chasing missing data. When a colleague needs to take over one of his cases (Stefan is going on vacation), it takes 30 seconds: "Just check case #847 in the dashboard - all the data and history is there."

His manager asks how it's going. Stefan's response is immediate and heartfelt: **"I don't want to go back to the old way."** He now spends 80% of his time doing actual technical review - the work he's trained for, the work he loves. The coordination chaos is gone. Cases flow smoothly. Customers submit complete data the first time because the structured widget makes requirements crystal clear.

For the first time in years, Stefan feels like an engineer again, not a project coordinator.

---

### Journey 2: Anna - From Uncertainty to Clarity

**Anna's Current Situation:**

Anna owns a charming 1950s apartment building in Munich that she's preparing to sell. German law requires an Energieausweis (energy performance certificate) before listing the property. She's not a building expert - she's a marketing director with a busy schedule and a property sale that's already stressful enough.

She purchases the Energieausweis service from Bauexperts' website on a Tuesday evening. The next morning, she receives a confirmation email with login credentials to the "customer portal." She's immediately anxious: "What do they need from me? How long will this take? What if I don't know the technical details about my building?"

**The Struggle Begins:**

Anna logs into the portal and sees her case with status "Waiting for data." She clicks to open the 7-tab Energieausweis widget and her heart sinks - it looks complicated. But as she starts filling it out, she realizes the widget is actually guiding her step-by-step:

- **Tab 1: Building Basic Info** - Simple questions: address, year built, number of floors. She knows all this.
- **Tab 2: Heating System** - Asks for heating type with a dropdown menu (Gas, Oil, Electric, District heating). There's a small info icon explaining "This is usually written on your heater or boiler." She goes to her basement, finds "Erdgas" (natural gas) on the boiler, and selects "Gas."
- **Tab 3-6:** Each tab has clear instructions and optional fields are marked. She fills in what she knows and skips what she doesn't.

When she reaches **Tab 7: Photos & Documents**, she's asked to upload photos of specific things: the heater label, exterior walls, windows, roof insulation access. Each requirement has a small example photo showing exactly what's needed. She takes photos with her phone and uploads them directly.

**The Moment of Doubt:**

After 40 minutes of work, Anna has filled out all seven tabs. She hesitates before clicking "Submit" - "What if I got something wrong? What if they need more information and I have to start over?" But the widget shows a green checkmark on each completed tab, and hard validation has already prevented her from submitting incomplete data. She takes a breath and clicks **"Submit."**

The widget becomes read-only, the case status changes to "Data submitted," and she sees a clear confirmation message: "Your data has been submitted successfully. Our engineer will review it and contact you if anything needs clarification. Estimated completion: 3-5 business days."

**The Relief:**

For the first time in this process, Anna feels confident. She didn't have to guess what information was needed. She wasn't asked to "send any relevant documents via email." The structured widget told her *exactly* what to provide, and now it's done.

Three days later, she logs into the portal and sees a notification: **"Engineer Stefan has requested changes to your case."** Her heart sinks for a moment, but when she opens the case, Stefan's message is clear and specific: "Hi Anna, please confirm your heating type - Tab 2 shows Gas but your photo appears to show an oil tank. Can you double-check?"

Anna immediately realizes her mistake (she confused the oil tank in the basement with the newer gas heater installed last year). Tab 2 unlocks for editing while the rest of the widget stays read-only. She corrects the answer, adds a quick note explaining the confusion, and re-submits. **No phone calls, no email chains, no frustration.**

**The Happy Ending:**

Two days later, Anna logs in to see a beautiful green status: **"Completed - Your Energieausweis is ready for download."** She clicks the download button and receives a professional PDF certificate. The entire journey took 7 days from purchase to delivery.

What stands out to Anna isn't just getting the document - it's the **transparency**. At every step, she knew exactly what was happening:
- Activity feed showed "Engineer Stefan started review"
- She saw when Stefan requested changes and exactly what needed fixing
- She received a notification the moment her document was ready

She tells her real estate agent: "That was actually painless. I always knew what was happening." For a non-expert navigating a technical requirement, that clarity was everything.

---

### Journey 3: Markus - From Fragmented Coordination to Streamlined Data Collection

**Markus's Current Work Life:**

Markus is an independent building energy consultant who specializes in on-site inspections for Energieausweis services. Building owners like Anna often hire him because they don't have the technical knowledge or time to collect the detailed building data themselves. Markus visits the property, performs a thorough inspection, takes measurements and photos, and submits the data to companies like Bauexperts who complete the official certification.

His current workflow is chaotic: he receives case assignments via phone or email ("Can you inspect the building at Müllerstraße 42 next Tuesday?"), collects data using a mix of paper forms and his phone's camera, then sends everything back as a pile of unstructured photos and a Word document summary. Often, days later, the internal team calls him back: "We can't read this measurement," or "Which photo was the basement insulation?"

He's technically proficient and fast at his job, but the handoff to internal teams is messy. He has no idea if his data submission was complete until someone calls him with follow-up questions. It's inefficient, and it makes him look less professional than he actually is.

**The New Assignment:**

One morning, Markus receives an email from Bauexperts: "You've been assigned to Case #1047 - Customer requested expert assistance for on-site data collection." The email includes a link to log into the new "Expert Portal."

Markus is skeptical - "Great, another system" - but he clicks the link and logs in. He sees a simple dashboard showing only his assigned cases. Case #1047 is listed with the customer name (Anna Hoffmann), service type (Energieausweis), building address, and status: "Waiting for data - Expert assigned."

He clicks on the case and sees the exact same 7-tab widget that customers use, but it's empty and ready for him to fill out professionally. There's a small indicator showing "Assigned Expert: Markus Becker" and the customer's note: "I'm not sure about technical details - hired expert for on-site inspection."

**On-Site Efficiency:**

The next Tuesday, Markus arrives at Anna's building with his tablet. He opens the Expert Portal, navigates to Case #1047, and starts filling the widget on-site:

- **Tab 1:** Building basics from property records
- **Tab 2:** He inspects the basement and accurately identifies the gas heating system, noting the exact model and installation year
- **Tab 3-6:** He measures wall insulation, window types, roof access, and records everything directly into the structured form
- **Tab 7:** He uploads high-quality photos of every component, each clearly labeled by section

The entire inspection takes 90 minutes. Instead of returning to his office to compile a Word document and email it, Markus simply clicks **"Submit"** right there on his tablet. The widget locks, the case status changes to "Data submitted," and a metadata tag appears: **"Data entered by Expert: Markus Becker - [timestamp]."**

**The Clean Handoff:**

Markus drives to his next appointment knowing the job is done. No follow-up emails to send, no documents to compile, no wondering if he forgot to mention something important. Everything is in the system, structured and complete.

Two days later, he receives a notification: **"Engineer has requested changes to Case #1047."** He logs in and sees Stefan's message: "Can you confirm the basement insulation type? Photo is slightly unclear." Tab 5 unlocks, Markus uploads a clearer photo and adds a clarifying note, then re-submits. **The correction takes 3 minutes.**

**The Professional Impact:**

Over the next two months, Markus completes 15 cases through the new Expert Portal. Not a single phone call from internal teams asking "where's that photo?" or "what did this measurement mean?" The structured widget ensures he captures everything the first time, in a format engineers can immediately use.

When Bauexperts' operations manager calls to check in, Markus's feedback is enthusiastic: "This is how it should have always worked. I look more professional, the internal team doesn't waste time chasing me for clarifications, and I can move to my next job immediately after the inspection. Keep this system."

For Markus, the Expert Portal transformed him from a "data collector sending messy handoffs" to a "professional field expert seamlessly integrated into Bauexperts' workflow." The metadata tracking even gives him credit - engineers know exactly which data came from him, building his reputation for quality work.

---

### Journey Requirements Summary

These three journeys reveal the following core capabilities needed for Bauexperts Internal CRM:

**From Stefan's Journey (Internal Engineer):**
- Shared case pool dashboard with status visibility (Waiting for data, Data submitted, Blocked, Completed)
- Structured data presentation (all customer input visible in organized tabs, no email archaeology)
- One-click file download (all customer photos/documents as zip)
- Simple case decision flow (Block with message, or Complete with PDF upload)
- Case handoff capability (shared visibility enables instant colleague handoff)
- Activity feed showing all case actions and timeline

**From Anna's Journey (Customer):**
- Customer portal with case status visibility
- 7-tab Energieausweis widget with step-by-step guidance
- Clear field instructions and validation (hard blocks for required, soft warnings for recommended)
- Photo upload with example guidance
- Submit/re-submit workflow (widget locks after submit, unlocks when Blocked)
- Notification system (status changes, engineer messages, document ready)
- Final document download capability
- Transparent activity feed showing progress

**From Markus's Journey (External Expert):**
- Expert portal with assigned cases dashboard
- Same 7-tab widget structure as customers (no custom UI)
- Mobile/tablet-friendly data entry for on-site work
- Metadata tracking (system records "Filled by Expert Markus Becker")
- Submit and edit workflow (same rules as customer widget)
- Notification system for engineer feedback
- Limited visibility (only assigned cases, no access to final documents)

**Cross-Journey Capabilities:**
- Role-based authentication and authorization
- Case status state machine (Waiting for data → Data submitted → Blocked/Completed)
- Widget editability rules (read-only after submit, unlock specific functionality when Blocked)
- Activity feed/timeline (immutable audit trail of all actions)
- Notification delivery for status changes and messages
- File upload and download infrastructure

## Web Application Specific Requirements

### Project-Type Overview

Bauexperts Internal CRM is architected as a **Single Page Application (SPA)** with three distinct portal interfaces (Customer Portal, Engineer Dashboard, Expert Interface) all connecting to a single CORE case management backend. The SPA architecture enables a responsive, app-like experience with client-side routing while maintaining simplicity appropriate for an internal tool.

**Architecture Decision: SPA with Client-Side Routing**

The SPA approach provides:
- Fast navigation between portal views without full page reloads
- Shared state management across the application
- Simplified deployment (single build artifact)
- Reduced server load (client-side rendering)

**Scope Alignment:**
For MVP, the SPA is intentionally simple - no complex state management libraries required, no offline capabilities, no service workers. Focus on reliable client-side routing and clear UI state transitions.

---

### Browser Support Matrix

**Supported Browsers (Modern Evergreen Only):**

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| **Chrome** | Latest stable | Primary development target |
| **Firefox** | Latest stable | Full support |
| **Edge** | Latest stable (Chromium) | Full support |
| **Safari** | Latest stable | Full support for macOS/iOS |

**Explicitly NOT Supported:**
- ❌ Internet Explorer (all versions)
- ❌ Legacy Edge (pre-Chromium)
- ❌ Older browser versions requiring polyfills

**Rationale:**
This is an internal tool for a small team of engineers and a limited customer base. Modern browser-only support:
- Reduces development complexity and testing burden
- Enables use of modern JavaScript/CSS features without transpilation overhead
- Aligns with MVP principle: ship working system, not maximum compatibility

**Browser Testing Strategy:**
- Primary testing in Chrome (most common internal browser)
- Smoke testing in Firefox, Edge, Safari before releases
- No cross-browser compatibility testing matrix required for MVP

---

### Responsive Design Requirements

**Target Devices:**

**Desktop (Primary):**
- Engineers primarily work on desktop/laptop computers
- Minimum resolution: 1366x768 (standard laptop)
- Optimal resolution: 1920x1080 (common desktop monitor)
- Layout: Multi-column layouts, side-by-side data views

**Tablet (Secondary - Expert Use Case):**
- External experts (Markus) use tablets for on-site inspections
- Minimum: iPad-sized tablets (1024px width)
- Widget must be usable on tablet for data entry in the field
- Touch-friendly form controls and file upload

**Mobile (Out of Scope for MVP):**
- ❌ No mobile phone optimization required
- ❌ Small screens (<768px) not a priority
- If accessed on mobile, basic functionality should work but no optimization needed

**Responsive Breakpoints:**
- Desktop: ≥ 1024px (primary target)
- Tablet: 768px - 1023px (expert field use)
- Mobile: < 768px (degraded experience acceptable)

**Key Responsive Considerations:**
- 7-tab widget must be navigable on tablets (tab switching, scrolling)
- File upload controls work on touch devices (camera access on tablets)
- Engineer dashboard optimized for desktop multi-tasking
- Activity feeds readable on all supported sizes

---

### Performance Targets

**MVP Performance Goals (Good Enough, Not Perfect):**

**Page Load Performance:**
- Initial page load: < 3 seconds on standard broadband
- Route transitions (SPA navigation): < 500ms
- Widget tab switching: Instant (no loading delay)

**Data Operations:**
- Case list load: < 2 seconds for typical dataset (50-100 cases)
- Individual case data load: < 1 second
- Form submission (widget submit): < 2 seconds with user feedback
- File upload: Progress indicator for uploads > 1MB

**Interaction Responsiveness:**
- Form input response: Instant (no lag)
- Button clicks: Immediate visual feedback
- Notifications: Appear within 5 seconds of trigger event

**File Handling:**
- Single file upload: Up to 10MB (photos from phones/tablets)
- Total case attachments: Up to 50MB per case
- Download bundle (engineer): < 5 seconds for typical case files

**Performance Philosophy for MVP:**
- **No strict SLAs required** - these are targets, not guarantees
- **Basic performance acceptable** - pages load within a few seconds, no blocking delays
- **No advanced optimization needed** - no lazy loading, code splitting, or CDN required for MVP
- **User perception focus** - show loading indicators, prevent double-clicks, provide feedback

**Performance Monitoring:**
- Manual testing during development (Chrome DevTools)
- No performance monitoring/analytics infrastructure required for MVP
- If users report slowness, investigate reactively (not proactive monitoring)

---

### SEO Strategy

**SEO Requirements: NONE**

**Rationale:**
Bauexperts Internal CRM is an authenticated, internal business tool. All content is behind login walls and is not intended for public discovery.

**Search Strategy:**
- ❌ No public search engine indexing
- ❌ No sitemap.xml required
- ❌ No meta descriptions or Open Graph tags
- ❌ No server-side rendering for SEO purposes

**Implementation:**
- `robots.txt` disallows all crawlers (optional but recommended)
- Meta tags: `<meta name="robots" content="noindex, nofollow">`
- No public URLs accessible without authentication

**Internal Search:**
If case search is needed within the application, implement basic client-side filtering or simple server-side search - not web search engine optimization.

---

### Accessibility Level

**MVP Accessibility: Basic (Functional, Not Compliant)**

**Accessibility Goals:**
- **Functional accessibility:** All features usable via keyboard and screen readers
- **No formal WCAG compliance** required for MVP
- **Common-sense accessibility:** proper form labels, alt text for images, logical tab order

**Basic Accessibility Checklist:**
- ✅ Form inputs have associated `<label>` elements
- ✅ Buttons have descriptive text (not just icons)
- ✅ Images have `alt` attributes where meaningful
- ✅ Keyboard navigation works (tab order logical, Enter/Space activate buttons)
- ✅ Focus indicators visible (browser defaults acceptable)
- ✅ Color not sole means of conveying information (status uses text + color)

**NOT Required for MVP:**
- ❌ WCAG 2.1 AA/AAA compliance testing
- ❌ Formal accessibility audit
- ❌ ARIA attributes beyond basic semantic HTML
- ❌ Screen reader optimization
- ❌ High contrast mode
- ❌ Magnification/zoom optimization

**Rationale:**
This is an internal tool for a small, known user base. If specific accessibility needs arise (e.g., an engineer requires screen reader support), address them reactively as feature requests, not proactively as requirements.

**Future Consideration:**
Post-MVP, if the system expands to public-facing customer use or regulatory requirements change, accessibility can be incrementally improved.

---

### Technical Architecture Considerations

**SPA Architecture Components:**

**Frontend Stack:**
- Modern JavaScript framework (React, Vue, Svelte, or similar)
- Client-side routing library (React Router, Vue Router, etc.)
- Standard HTTP client for API calls (fetch or axios)
- Form handling and validation

**State Management:**
- MVP: Keep it simple - local component state + URL state
- No complex global state management needed (Redux/Vuex overkill for MVP)
- Case data fetched fresh on navigation (no aggressive client-side caching)

**Backend API:**
- RESTful API or GraphQL endpoint(s)
- JSON request/response format
- Session-based or token-based authentication
- CORS configured for SPA-API communication

**File Handling:**
- Direct file uploads to backend (or cloud storage with signed URLs)
- Presigned download URLs for engineer file access
- Frontend: standard HTML file input with progress feedback

**Routing Strategy:**
- Hash-based routing (`#/cases/123`) OR history-based routing (`/cases/123`)
- Deep linking support: engineers can share case URLs with colleagues
- Auth-protected routes redirect to login if unauthenticated

**Build & Deployment:**
- Single build artifact (static HTML/JS/CSS bundle)
- Deployable to any static host or web server
- Environment configuration via build-time variables or runtime config

---

### Implementation Considerations

**SPA-Specific Challenges and Solutions:**

**Challenge: Initial Load Time**
- Solution: Keep bundle size reasonable, lazy load non-critical assets if needed post-MVP
- MVP: Single bundle is acceptable for small team usage

**Challenge: Browser Back/Forward Behavior**
- Solution: Use proper routing library that manages browser history
- MVP: Ensure basic navigation (back to case list, back to dashboard) works intuitively

**Challenge: Widget State Persistence**
- Solution: Auto-save draft data to backend as user fills tabs
- MVP: Periodic auto-save (every 30-60 seconds) or per-tab save (simpler)

**Challenge: Concurrent Edits (Multiple Engineers)**
- Solution: Last-write-wins for MVP (no conflict resolution required)
- Engineers see case state at time of load; refresh to see updates
- MVP: No real-time collaboration or locking needed

**Challenge: Tablet Touch Interaction**
- Solution: Use touch-friendly form controls (larger tap targets, mobile-friendly date pickers)
- Test file upload on tablets (ensure camera access works for photo capture)

**Challenge: Offline Capability**
- Solution: NOT REQUIRED for MVP
- If expert loses connection mid-inspection, they must reconnect to submit
- Post-MVP: Consider service workers / offline support if field connectivity is unreliable

**Development Workflow:**
- Use browser DevTools for debugging (no special tooling needed)
- Hot reload during development for fast iteration
- Simple build script for production deployment

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach: Problem-Solving MVP**

Bauexperts Internal CRM follows a **ruthlessly focused problem-solving MVP** strategy. The MVP is designed to:

1. **Solve the Core Problem:** Eliminate operational chaos in Energieausweis case management
2. **Prove the Concept:** Validate that structured workflows enable growth (one service end-to-end)
3. **Achieve Behavioral Validation:** Engineers voluntarily prefer the CRM over fragmented tools
4. **Enable Fast Learning:** 10-20 cases or 4-6 weeks to clear go/no-go decision

**Strategic Principle:**
**"One service, one workflow, one decision loop, one document output."**

Everything beyond this core is intentionally deferred until the MVP proves engineers say "I don't want to go back to the old way."

---

**Resource Requirements:**

**Team Composition (Estimated):**
- 1-2 Full-stack developers (SPA frontend + backend API)
- 1 Product owner / business analyst (part-time coordination)
- Engineers as product stakeholders (testing, feedback, iteration)

**Technology Stack:**
- Modern JavaScript framework for SPA (React/Vue/Svelte)
- Backend API (Node.js, Python, or similar)
- Database for case data persistence
- File storage for uploads/downloads
- Basic authentication system

**Timeline Expectation:**
- MVP development: Timeframe determined by team availability (not pre-committed)
- Launch with internal engineers first
- Iterate based on real case processing feedback

---

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**

All three documented user journeys are **essential** for MVP:

1. **Stefan's Journey (Internal Engineer):**
   - Shared case pool dashboard with status visibility
   - Structured data presentation (7-tab view, no email archaeology)
   - Simple decision flow: Block (with message) or Complete (with PDF upload)
   - One-click file download
   - Case handoff via shared visibility

2. **Anna's Journey (Customer):**
   - Customer portal with case status visibility
   - 7-tab Energieausweis widget with step-by-step guidance
   - Submit/re-submit workflow (widget locks/unlocks based on status)
   - Notification system (status changes, engineer messages)
   - Final document download

3. **Markus's Journey (External Expert):**
   - Expert portal with assigned cases dashboard
   - Same 7-tab widget (no custom expert UI)
   - Mobile/tablet-friendly data entry for on-site work
   - Metadata tracking ("Filled by Expert Markus Becker")
   - Limited visibility (only assigned cases)

**Cross-Journey Infrastructure:**
- Role-based authentication (customer, engineer, expert)
- Case status state machine (Waiting for data → Data submitted → Blocked → Completed)
- Activity feed/timeline (immutable audit trail)
- Notification delivery system
- File upload and download infrastructure

---

**Must-Have Capabilities (Hardcoded for MVP):**

**Case Management:**
- One case per Energieausweis service purchase
- Four case statuses (Waiting for data, Data submitted, Blocked, Completed)
- Activity feed showing all actions with timestamps
- Shared case pool (no assignment logic)

**Data Collection Widget:**
- Hardcoded 7-tab Energieausweis structure
- Draft auto-save during data entry
- Read-only after submission (unlocks when Blocked)
- File upload in Tab 7 (photos, documents)

**Engineer Workflow:**
- View all submitted case data in structured tabs
- Download customer files (zip bundle)
- Block case (with message to customer/expert)
- Complete case (upload final Energieausweis PDF)

**Customer Portal:**
- View case status and activity timeline
- Fill and submit widget
- Receive notifications
- Download final PDF when ready

**Expert Portal:**
- Manual expert assignment (via backend/admin action)
- Same widget as customers
- Metadata: "Filled by Expert [Name]" recorded
- Limited visibility (assigned cases only)

---

**Explicitly OUT of Scope for MVP:**

*(Comprehensive list already documented in "Product Scope" section)*

**Service Scope:**
- ❌ Multi-service support (Brandschutz, Statik, Schallschutz)
- ❌ Service configuration or customization

**Advanced Features:**
- ❌ Data reusability across cases
- ❌ Customer building profiles or pre-fill
- ❌ Automated workflows or rules engines
- ❌ Advanced analytics or reporting
- ❌ SLA management and time tracking
- ❌ Performance optimization beyond "works reliably"

**Role & Assignment:**
- ❌ Advanced role management
- ❌ Case assignment logic, ownership, or queues
- ❌ Expert marketplace or self-selection
- ❌ Admin or support roles

**Payments & Notifications:**
- ❌ Payment automation
- ❌ Notification optimization

---

### Post-MVP Features

**Phase 2: Growth (After MVP Validation)**

**Trigger for Phase 2:** MVP success criteria met (engineers don't want to go back, 10-20 cases completed successfully)

**Incremental Additions:**

**Multi-Service Support:**
- Add Brandschutz service with domain-specific widget
- Add Statik service with domain-specific widget
- Add Schallschutz service with domain-specific widget
- Unified case model across all services
- Service-agnostic activity feed

**Data Reusability:**
- Pre-fill widget from previous cases (same customer, same building)
- Building profile templates
- Customer building history view

**Smarter Automation:**
- Status triggers (auto-notify when status changes)
- Reminder systems (case idle for X days)
- Basic SLA tracking (time in each status)

**Better Expert Management:**
- Availability tracking (expert capacity management)
- Workload visibility (cases per expert)
- Expert performance metrics (average completion time, revision rate)

**Enhanced User Experience:**
- Case search and filtering
- Bulk operations (engineer assigns multiple cases)
- Email integration (sync notifications to email)

---

**Phase 3: Expansion (Long-Term Vision)**

**2-3 Year Vision:**

Bauexperts Internal CRM becomes the **central case management system for all Bauexperts services**, not just Energieausweis.

**Expanded Capabilities:**
- Multiple service types with unified case management
- System remains **case-centric** (not customer-centric)
- Data reusability across services (customer submits building data once, reused for multiple service types)

**Possible Advanced Features:**
- **Expert Marketplace:** Self-service expert selection, expert bidding, ratings/reviews
- **Advanced Analytics:** Case processing metrics, engineer productivity dashboards, customer satisfaction tracking
- **API for Partners:** External integrations for building certification workflows
- **Mobile Apps:** Native apps for customer/expert use (beyond responsive web)

**Expansion Boundaries:**

Initial expansion stays within **Bauexperts and similar consulting workflows**:
- ✅ Operational excellence and engineer efficiency
- ✅ Predictable, calm workflows for internal teams
- ❌ White-label or external platform expansion (explicitly NOT a short-term goal)

**Guiding Principle:**
**Growth follows validated internal value, not speculation.**

---

### Risk Mitigation Strategy

**Technical Risks:**

**Risk:** SPA architecture complexity slows MVP development
- **Mitigation:** Use familiar technology stack (team experience matters), keep state management simple (no Redux/Vuex for MVP), focus on shipping working system over architectural purity

**Risk:** File upload/download handling becomes complex
- **Mitigation:** Use standard HTML file inputs, direct backend uploads (or cloud storage with signed URLs), accept browser default file handling for MVP

**Risk:** Tablet compatibility for expert field use fails
- **Mitigation:** Test early on target devices (iPad-sized tablets), use touch-friendly form controls, ensure camera access works for photo uploads

**Risk:** Widget state persistence (draft auto-save) adds complexity
- **Mitigation:** Simplest approach: per-tab save on blur or periodic auto-save (every 30-60 seconds), acceptable to lose some draft data if browser crashes (user re-enters)

---

**Market Risks:**

**Risk:** Engineers resist adopting new system despite clear benefits
- **Validation:** Launch with enthusiastic early adopter engineer first, iterate based on real feedback, ensure system is faster/easier than email (not just "different")

**Risk:** Customers find 7-tab widget too complex or intimidating
- **Validation:** Test widget with 2-3 real customers during development, simplify language/instructions based on feedback, provide example photos for guidance

**Risk:** External experts (Markus) prefer manual coordination over structured system
- **Validation:** Involve at least one external expert in beta testing, ensure tablet workflow works seamlessly on-site, highlight professional benefits (no follow-up calls, clean handoffs)

**Risk:** MVP doesn't reduce coordination overhead as expected
- **Validation:** Track baseline metrics before MVP launch (emails per case, support requests per case, time to completion), compare against MVP metrics after 10-20 cases

---

**Resource Risks:**

**Risk:** Development takes longer than expected
- **Contingency:** Reduce MVP scope further if needed - start with customer-only workflow (no expert portal initially), simplify widget (fewer tabs or fields), defer non-critical features (notifications can be basic email at first)

**Risk:** Team size smaller than planned (1 developer instead of 2)
- **Contingency:** Extend timeline, use simpler technology stack (monolithic backend instead of microservices), reduce testing burden (manual QA instead of automated tests for MVP)

**Risk:** Engineers unavailable for testing/feedback during development
- **Contingency:** Build with assumptions, launch to single engineer first, iterate heavily based on first 5 cases instead of waiting for 10-20

**Minimum Viable Team:**
- 1 full-stack developer
- 1 product owner (can be part-time or founder)
- 1 engineer willing to beta test

**Absolute Minimum Feature Set (Emergency Scope Reduction):**
- Customer portal + Engineer dashboard only (no expert portal - manual expert coordination continues for MVP)
- Simplified widget (5 tabs instead of 7, fewer fields)
- No auto-save (submit all at once)
- Basic notifications (email only, no in-app)
- No file download bundle (engineers download files individually)

This emergency scope still proves the core concept: structured data collection eliminates email chaos.

## Functional Requirements

### Authentication & Access Control

- **FR1:** Users can log in to the system with credentials (email/password)
- **FR2:** System can authenticate users and assign role-based access (Customer, Engineer, Expert)
- **FR3:** Customers can only view and interact with their own cases
- **FR4:** Engineers can view and interact with all cases in the shared pool
- **FR5:** Experts can only view and interact with cases assigned to them
- **FR6:** System can maintain authenticated sessions across browser refreshes

---

### Case Management

- **FR7:** System can create a new case when a customer purchases an Energieausweis service
- **FR8:** System can assign a unique case ID to each case
- **FR9:** System can track case status through four states: Waiting for data, Data submitted, Blocked, Completed
- **FR10:** Engineers can view a shared pool dashboard showing all cases with current status
- **FR11:** Customers can view their cases with current status
- **FR12:** Experts can view cases assigned to them with current status
- **FR13:** System can filter and display cases by status
- **FR14:** Engineers can navigate to any case detail view from the shared pool
- **FR15:** System can record which actor (customer or expert) is responsible for data submission on each case

---

### Data Collection & Submission

- **FR16:** Customers can fill out a structured 7-tab widget for Energieausweis building data
- **FR17:** Experts can fill out the same structured 7-tab widget for assigned cases
- **FR18:** System can provide step-by-step guidance and field instructions within the widget
- **FR19:** System can validate required fields before allowing submission
- **FR20:** System can auto-save draft data periodically while users fill the widget
- **FR21:** Users can upload files (photos, documents) in Tab 7 of the widget
- **FR22:** Users can submit completed widget data to change case status to "Data submitted"
- **FR23:** System can lock the widget to read-only mode after submission
- **FR24:** System can unlock the widget for editing when case status changes to "Blocked"
- **FR25:** Users can re-submit corrected data after making changes to a blocked case
- **FR26:** System can record metadata showing which expert filled the widget (name and timestamp)

---

### Engineer Review & Decision

- **FR27:** Engineers can view all submitted case data organized in structured tabs
- **FR28:** Engineers can review customer/expert-provided files within the case detail view
- **FR29:** Engineers can mark a case as "Blocked" and provide a message explaining what needs correction
- **FR30:** Engineers can mark a case as "Completed" after successful review
- **FR31:** Engineers can upload a final Energieausweis PDF when completing a case
- **FR32:** System can unlock the data widget for customer/expert when engineer blocks a case
- **FR33:** System can record the engineer's blocking message and display it to the customer/expert

---

### File Management

- **FR34:** Users can upload files up to 10MB per file
- **FR35:** System can store uploaded files associated with each case
- **FR36:** Engineers can download all case files as a single bundle (zip)
- **FR37:** Engineers can download individual files from a case
- **FR38:** Customers can download the final Energieausweis PDF when case is completed
- **FR39:** System can prevent unauthorized users from accessing files for cases they don't have permission to view

---

### Notifications & Communication

- **FR40:** System can send notifications when case status changes
- **FR41:** Customers can receive notifications when an engineer blocks their case with a message
- **FR42:** Customers can receive notifications when their case is completed and document is ready
- **FR43:** Experts can receive notifications when an engineer requests changes to their submitted data
- **FR44:** Engineers can receive notifications when new data is submitted for review
- **FR45:** System can deliver notifications via the application (in-app) and/or email

---

### Activity Tracking & Audit

- **FR46:** System can record all case actions in an immutable activity feed
- **FR47:** System can display activity timeline showing all actions with timestamps for each case
- **FR48:** Customers can view activity feed to see case progress
- **FR49:** Engineers can view complete activity history including who performed each action
- **FR50:** Experts can view activity feed for cases assigned to them
- **FR51:** System can record: case creation, data submission, engineer blocking, engineer completion, file uploads, widget edits

---

### Expert Assignment (MVP Manual Process)

- **FR52:** System administrators can manually assign an expert to a case
- **FR53:** System can record the assigned expert's name and association with the case
- **FR54:** Experts can see which cases are assigned to them
- **FR55:** System can prevent experts from viewing or accessing cases not assigned to them

## Non-Functional Requirements

### Performance

**Page Load & Navigation:**
- **NFR1:** Initial page load completes in < 3 seconds on standard broadband connection
- **NFR2:** SPA route transitions (navigating between views) complete in < 500ms
- **NFR3:** Widget tab switching appears instant with no perceptible loading delay

**Data Operations:**
- **NFR4:** Case list loads in < 2 seconds for typical dataset (50-100 cases)
- **NFR5:** Individual case data loads in < 1 second
- **NFR6:** Form submission (widget submit) completes in < 2 seconds with immediate user feedback

**User Interaction Responsiveness:**
- **NFR7:** Form input responds instantly with no input lag
- **NFR8:** Button clicks provide immediate visual feedback (disabled state, loading indicator)
- **NFR9:** Notifications appear within 5 seconds of trigger event

**File Handling:**
- **NFR10:** File uploads show progress indicator for files > 1MB
- **NFR11:** Single file upload supports up to 10MB
- **NFR12:** Total case attachments support up to 50MB per case
- **NFR13:** Engineer file download bundle completes in < 5 seconds for typical case files

**Performance Philosophy:**
- No strict SLAs required for MVP - these are targets, not guarantees
- Basic performance acceptable - pages load within a few seconds, no blocking delays
- User perception focus: show loading indicators, prevent double-clicks, provide feedback

---

### Security

**Authentication & Authorization:**
- **NFR14:** All system access requires authenticated login
- **NFR15:** System enforces role-based access control (Customer, Engineer, Expert)
- **NFR16:** Customers can only access their own case data
- **NFR17:** Experts can only access cases assigned to them
- **NFR18:** Engineers can access all cases in the system
- **NFR19:** Session management prevents unauthorized access after logout

**Data Protection:**
- **NFR20:** Customer personally identifiable information (PII) is protected from unauthorized access
- **NFR21:** Building data submitted by customers/experts is accessible only to authorized engineers and case owners
- **NFR22:** File uploads are associated with specific cases and protected by same access controls
- **NFR23:** Engineer blocking messages are only visible to the customer/expert who submitted the case data

**Basic Security Posture:**
- **NFR24:** System prevents common web vulnerabilities (SQL injection, XSS, CSRF)
- **NFR25:** Passwords are stored using industry-standard hashing (not plain text)
- **NFR26:** HTTPS is used for all client-server communication (if deployed to production)

**MVP Security Note:**
- No advanced threat modeling or penetration testing required for MVP
- Focus on basic security hygiene and access control
- Advanced security audits deferred to post-MVP if system handles more sensitive data

---

### Reliability & Data Integrity

**System Stability:**
- **NFR27:** System is stable enough for daily internal use without frequent crashes
- **NFR28:** Critical bugs (data loss, access control violations) are addressed immediately
- **NFR29:** Non-critical bugs (UI glitches, minor UX issues) are tolerable for MVP

**Data Persistence:**
- **NFR30:** Case data is reliably persisted to database and not lost
- **NFR31:** Uploaded files are reliably stored and retrievable
- **NFR32:** Activity feed records are immutable and accurately reflect all case actions

**Draft Auto-Save:**
- **NFR33:** Widget draft data is auto-saved periodically (every 30-60 seconds) or per-tab
- **NFR34:** Loss of draft data due to browser crash is acceptable (user re-enters)

**Acceptable Downtime:**
- **NFR35:** System downtime for deployments or maintenance is acceptable during off-hours
- **NFR36:** No uptime SLA required for MVP (internal tool, small user base)
- **NFR37:** Manual data backup and recovery processes are acceptable for MVP

---

### Accessibility

**Basic Accessibility (Functional, Not Compliant):**

- **NFR38:** All form inputs have associated `<label>` elements for screen reader support
- **NFR39:** Buttons have descriptive text (not icon-only)
- **NFR40:** Images have `alt` attributes where meaningful content is conveyed
- **NFR41:** Keyboard navigation works with logical tab order
- **NFR42:** Enter/Space keys activate buttons and submit forms
- **NFR43:** Focus indicators are visible (browser defaults acceptable)
- **NFR44:** Color is not the sole means of conveying information (status includes text + color)

**NOT Required for MVP:**
- ❌ WCAG 2.1 AA/AAA compliance testing
- ❌ Formal accessibility audit
- ❌ Advanced ARIA attributes
- ❌ Screen reader optimization
- ❌ High contrast mode
- ❌ Magnification/zoom optimization

**Accessibility Philosophy:**
- Basic functional accessibility ensures all features are usable via keyboard and screen readers
- If specific accessibility needs arise (e.g., engineer requires screen reader support), address reactively as feature requests
- Post-MVP: incrementally improve if system expands to public-facing use

---

### Browser Compatibility

**Supported Browsers:**
- **NFR45:** System works on latest stable versions of Chrome, Firefox, Edge (Chromium), and Safari
- **NFR46:** Modern JavaScript/CSS features can be used without polyfills for legacy browsers
- **NFR47:** Internet Explorer is explicitly NOT supported (all versions)

**Responsive Design:**
- **NFR48:** System is functional on desktop (≥ 1024px) and tablet (768px - 1023px)
- **NFR49:** 7-tab widget is usable on tablets for expert field data entry
- **NFR50:** File upload controls work on touch devices (camera access on tablets)
- **NFR51:** Mobile phone screens (<768px) provide degraded but functional experience (no optimization required)

---

### Deployment & Operations

**Deployment Simplicity:**
- **NFR52:** System deploys as single build artifact (static HTML/JS/CSS bundle + backend API)
- **NFR53:** System can be deployed to any standard web server or cloud hosting
- **NFR54:** Environment configuration uses build-time variables or runtime config files

**Monitoring & Debugging:**
- **NFR55:** Browser DevTools provide sufficient debugging capability (no advanced monitoring required for MVP)
- **NFR56:** Manual testing during development is acceptable (no CI/CD pipeline required for MVP)
- **NFR57:** Performance issues are investigated reactively based on user reports (no proactive monitoring)
