---
stepsCompleted: [1, 2, 3, 'complete']
inputDocuments: []
session_topic: 'Multi-service internal CRM for Bauexperts - MVP-first approach for managing services (starting with Energieausweis), dual workflows (B2C customers + B2B experts), and end-to-end case management'
session_goals: 'Generate practical, implementable ideas for MVP development - exploring phased approaches to clients, services, projects/cases, energy workflows, documents, and internal notes management'
selected_approach: 'Progressive Technique Flow'
techniques_used: ['What If Scenarios', 'Mind Mapping', 'SCAMPER Method']
phases_completed: ['Phase 1 - Expansive Exploration', 'Phase 2 - Pattern Recognition', 'Phase 3 - Idea Development (SCAMPER)']
components_generated: 7
refinements_applied: 18
major_scope_cuts: 5
session_status: 'Complete - Phases 1-3 finished, architecture refined and locked'
context_file: ''
---

# Brainstorming Session Results

**Facilitator:** Oguzc
**Date:** 2025-12-25

## Session Overview

**Topic:** Multi-service internal CRM for Bauexperts - MVP-first approach for managing services (starting with Energieausweis), dual workflows (B2C customers + B2B experts), and end-to-end case management

**Goals:** Generate practical, implementable ideas for MVP development - exploring phased approaches to clients, services, projects/cases, energy workflows, documents, and internal notes management

### MVP Success Criteria
- Online service purchase → automatic case creation
- Customer/expert data submission via widgets/forms
- Internal engineer review and case management
- Final document/result delivery

### Scope Boundaries
- Start with 1-2 services (Energieausweis) before scaling to 5-6
- No AI/advanced automation initially
- Basic billing (per-case, not subscription)
- Internal efficiency over visual polish
- Internal tool first, not public SaaS

### Business Model
- Per-case/order service sales
- B2C (end customers) + B2B (external experts) dual support
- Built for internal scalability and reliability

### Session Setup

**Selected Approach:** Progressive Technique Flow - Starting with broad divergent thinking, then systematically narrowing to practical, implementable solutions for the CRM system.

## Technique Selection

**Approach:** Progressive Technique Flow
**Journey Design:** Systematic development from exploration to action

**Progressive Techniques:**

- **Phase 1 - Expansive Exploration:** What If Scenarios for maximum idea generation by questioning all constraints
- **Phase 2 - Pattern Recognition:** Mind Mapping for visually organizing CRM components and discovering system connections
- **Phase 3 - Idea Development:** SCAMPER Method for systematic refinement through 7 creative lenses
- **Phase 4 - Action Planning:** Resource Constraints for MVP-first prioritization with realistic limitations

**Journey Rationale:** This progressive flow perfectly matches Bauexperts' MVP-first philosophy - starting with unconstrained exploration of CRM possibilities, organizing ideas into coherent system architecture, refining features with practical details, and finally applying realistic constraints to define a phased implementation roadmap. Each technique builds naturally upon the previous phase's outputs.

---

## Phase 1: Expansive Exploration (What If Scenarios)

**Technique:** What If Scenarios - Exploring possibilities by questioning all constraints

### Phase 1 Results

✅ Core system architecture concepts explored
✅ Widget editability state machine defined
✅ Single source of truth principle established
✅ Dual workflow approach validated (B2C + B2B)

---

## Phase 2: Pattern Recognition (Mind Mapping)

**Technique:** Mind Mapping - Visually organizing CRM components and discovering system connections

### Complete System Architecture Map

**BAUEXPERTS INTERNAL CRM** (Multi-Service Case Management)

#### 7 Main System Components:

1. **CUSTOMER PORTAL** (Read-focused, transparency)
2. **SMART WIDGET SYSTEM** (Universal data collection)
3. **CASE & SERVICE MANAGEMENT** (CORE - The Heart)
4. **INTERNAL ENGINEER DASHBOARD** (Action-focused, decisions)
5. **EXTERNAL EXPERT INTERFACE** (B2B, expert mode)
6. **COMMUNICATION & NOTIFICATION SYSTEM** (Portal-only, status-driven)
7. **BUILDING DATA REPOSITORY** (Per-case storage, future reusability)

---

### Key System Refinements Locked:

✅ **Core = Single Source of Truth** (no duplicated logic, both portals are views)
✅ **Widget lock rules** (read-only after submit, unlocks ONLY blocked tabs when needed)
✅ **Messaging = text-only** (attachments via widget, not chat)
✅ **Document delivery = manual upload** (triggers completion, no draft previews)
✅ **Visibility boundaries** (customer sees safe events, engineer sees everything)
✅ **Expert role** (same widget, same lock rules, metadata tracks who entered what)
✅ **UI constraints** (oldest-first default, basic filtering, no advanced search)

---

### A) EXTERNAL EXPERT INTERFACE (B2B)

**EXTERNAL EXPERT INTERFACE** 🔧👤

#### Expert Role & Permissions
- Expert is a user type (separate from customer and engineer)
- Expert can be assigned to specific cases
- Expert does NOT own the case (customer owns it, engineer manages it)
- Expert is a DATA COLLECTOR role (fills widget on behalf of customer)

#### Expert Portal Access
**Dashboard shows:**
- Cases assigned to me (as expert)
- Case ID + Customer name + Service type
- Status (Waiting for data, Data submitted)
- Last activity timestamp
- Action: "Fill building data" (opens widget in Expert mode)

**Expert cannot see:**
- Other experts' cases
- Internal engineer notes
- Final documents (only customer can download)
- Full case timeline (expert sees only data collection events)

**Expert CAN see:**
- Assigned cases only
- Widget data they've entered
- Completion status of their data collection task

#### Expert Widget Mode
- Same 7-tab widget structure (universal widget)
- **Expert mode differences:**
  - Streamlined UI (less guidance text, assumes knowledge)
  - Faster field navigation (keyboard shortcuts, tab flow)
  - Professional terminology (not simplified for consumers)
  - Batch photo upload (on-site efficiency)
  - Same validation rules (hard + soft)
- Expert can save draft anytime (while status = "Waiting for data")
- Expert clicks "Submit" → status changes to "Data submitted"
- Widget becomes READ-ONLY after submit (same as customer)
- If engineer requests changes (Blocked):
  - Expert can edit ONLY relevant tabs, then re-submit
- Metadata tracked: "Filled by Expert [Name] - [timestamp]"

#### Case Assignment Flow
**MVP approach (manual assignment):**
- Customer purchases service → case created
- Customer chooses "I want an expert to help"
- Internal team assigns specific expert to case
- Expert receives notification: "New case assigned"
- Expert sees case in their dashboard
- (Future: expert marketplace, self-service booking - NOT MVP)

**One case can have:**
- Customer filling data themselves, OR
- Expert filling data, OR
- Hybrid (expert starts, customer finishes)

#### Expert Completion & Handoff
- Expert submits widget data
- Status → "Data submitted"
- Engineer reviews (same process as customer-submitted data)
- Expert role ends (no access to final result)
- Customer receives notification: "Expert completed data collection"
- Customer can download final result when ready

#### Metadata & Traceability
**Engineer sees in case detail:**
- "Data entered by: Expert [Name]" (per tab/section)
- Timestamp of expert submission
- Expert contact info (if follow-up needed)
- Clear distinction: Customer data vs Expert data

**Activity log shows:**
- "Expert [Name] submitted building data - [timestamp]"
- Quality/audit trail (who touched what)

#### Expert Permissions Summary
**CAN:**
- Fill widget in Expert mode (assigned cases only)
- Save draft, submit data
- Edit when Blocked (same rules as customer)
- See their assigned cases list

**CANNOT:**
- See final documents or results
- Change case status manually
- Communicate with engineer (expert → internal team → customer)
- Assign themselves to cases
- Access other experts' or customers' cases

**Key Expert Interface Principles:**
✅ Same widget, different mode (streamlined for professionals)
✅ Same lock rules (read-only after submit, unlocks when blocked)
✅ Clear role boundary (data collector, not case owner)
✅ Metadata tracking (engineer knows who entered what)
✅ MVP assignment (manual, not marketplace)

---

### B) COMMUNICATION & NOTIFICATION SYSTEM

**COMMUNICATION & NOTIFICATION SYSTEM** 📬

#### In-Portal Messaging (Per Case)
- One message thread per case
- **Participants:**
  - Customer (case owner)
  - Assigned engineer
  - (NOT expert in MVP - expert communicates via internal team)

**Message content:**
- Text only (MVP - no rich text, no attachments)
- Max length: 1000 characters (prevent essays)
- Timestamp + sender name

**Thread visibility:**
- Customer sees all messages in their case
- Engineer sees all messages in cases they're assigned to
- Messages persist in case timeline/audit log
- No read receipts in MVP (future: "seen by engineer")
- No typing indicators (keep it simple)

#### Message Triggers & Use Cases
**Customer to Engineer:**
- "I have a question about Tab 3"
- "When will my result be ready?"
- "I uploaded the wrong photo, please ignore"

**Engineer to Customer:**
- "Please provide a clearer photo of the heating label"
- "Your Energieausweis will be ready tomorrow"
- "I found an inconsistency in Tab 2, can you confirm?"

Messages supplement status changes (not replace them)

#### Notification Channels (MVP Scope)
**In-portal notifications:**
- Notification bell icon (top-right of portal)
- Badge count (unread notifications)
- Dropdown list:
  - Notification text
  - Timestamp
  - Link to case or action
- Mark as read (manual or auto when clicked)

**Email notifications (optional, user preference):**
- User can enable/disable email notifications
- Email contains:
  - Subject: "Update on your [Service] case"
  - Body: Notification text + link to portal
  - No sensitive data in email (just summary + link)
- Delivery: immediate (no batching in MVP)
- (Future: SMS, push notifications - NOT MVP)

#### Notification Events (Status-Driven)
**Customer receives notification when:**
- Case created (purchase confirmed)
- Engineer started review
- Engineer requested missing info (Blocked)
- Engineer sent a message
- Case completed (result ready for download)
- Case approaching deadline (optional, future)

**Engineer receives notification when:**
- New case assigned
- Customer submitted data (Data submitted)
- Customer provided missing info (Blocked → Data submitted)
- Customer sent a message
- Case approaching SLA deadline
- (Future: quality check requested - NOT MVP)

#### Notification Frequency & Throttling
- MVP: No throttling (immediate notifications)
- No digest/batching (each event = one notification)
- (Future: user preferences, quiet hours - NOT MVP)

#### Communication Boundaries (What is NOT Supported)
- No WhatsApp integration (portal only)
- No email replies to notifications (must use portal)
- No phone call tracking (out of scope)
- No file attachments in messages (use widget Photos & Documents tab)
- No group messaging (1:1 customer-engineer only)
- No expert-customer direct messaging (expert → internal team)

#### Data Storage & Audit
- All messages stored in case record
- Messages appear in activity log timeline
- Messages are immutable (cannot be edited or deleted after send)
- Retention: messages persist as long as case exists
- Privacy: messages visible only to case participants (customer + assigned engineer)

**Key Communication Principles:**
✅ Portal-only (no WhatsApp/email chaos)
✅ Text-only messaging (attachments via widget)
✅ Status-driven notifications (not manual triggers)
✅ 1:1 customer-engineer (no group chats)
✅ Immutable audit trail (all communication recorded)

---

### C) BUILDING DATA REPOSITORY

**BUILDING DATA REPOSITORY** 🏗️📊

#### Purpose & Scope
- Store building data submitted via widget (per case)
- Enable data reusability across multiple services (future)
- Maintain audit trail (who entered what, when)
- Support data versioning (if building changes over time)
- NOT a separate "building database" - data lives with CASES

#### Data Storage Model (MVP)
- Building data is stored PER CASE (not centralized)
- **Each case contains:**
  - Widget data (7 tabs, all fields)
  - Uploaded photos/documents
  - **Metadata:**
    - Who entered data (customer, expert name)
    - Submission timestamp
    - Data source (customer mode vs expert mode)
    - Validation status (hard validation passed, soft warnings)
  - Widget state (draft vs submitted)
- Data is JSON-structured (matches widget tab/field structure)
- Photos/documents stored as files (linked to case + tab/section)
- No cross-case data sharing in MVP (future optimization)

#### Data Lifecycle (Per Case)
1. Case created → empty building data placeholder
2. Customer/Expert fills widget → draft state (auto-save)
3. Customer/Expert submits → data locked (read-only)
4. Engineer reviews → data visible in engineer dashboard
5. If Blocked → specific tabs unlock for editing
6. Re-submit → updated data locked again
7. Case completed → building data archived with case
8. Case retention: data persists indefinitely (or per retention policy)

#### Data Reusability (Future, NOT MVP)
**When customer purchases 2nd service:**
- System looks up previous case(s) for same customer + building
- Pre-fills widget with last known data
- Customer confirms or updates
- New case stores updated data independently

**Data versioning:**
- Each case snapshot is independent (no shared mutable state)

**Building profile concept (future):**
- "One building, multiple cases, one master profile"
- NOT MVP - too complex

#### Data Access & Visibility
**Customer can see:**
- Their own submitted data (read-only after submit)
- Only for cases they own

**Engineer can see:**
- All widget data for assigned cases
- Metadata (who entered, when, validation status)
- Download/export data (for offline calculation work)

**Expert can see:**
- Widget data they entered (for assigned cases)
- Only while assigned (no access after completion)

**Admin (future):**
- Can see all data (for support, quality audits)

#### Data Quality & Validation
**Hard validation (enforced at submit):**
- Critical fields must be filled
- Photo/document requirements met
- Data types correct (numbers, dates, selections)

**Soft validation (warnings only):**
- Optional fields incomplete
- Unusual values (flagged for engineer review)
- Missing context (Additional Notes empty)

**Engineer validation:**
- Engineer reviews data, can request changes (Blocked)

**Audit trail:**
- All validation events logged (field X failed validation, re-submitted)

#### Photos & Documents Storage
- Files stored separately (cloud storage, linked to case)
- **Per file metadata:**
  - Case ID + Tab/Section reference
  - Uploaded by (customer, expert)
  - Upload timestamp
  - File type (JPEG, PDF, PNG)
  - File size (enforce limits: max 10MB per file)
- Customer/Expert can upload multiple files per section
- Files are immutable (cannot delete after submit, only add)
- Engineer can download all files (zip export option)

#### Data Security & Privacy
- Building data contains PII (customer address, building details)
- Access control: role-based (customer, engineer, expert)
- Encryption at rest (database + file storage)
- Encryption in transit (HTTPS only)
- Audit log: all data access logged (who viewed what, when)
- Retention policy: data persists as long as case exists (GDPR compliance)

#### Integration Points
- **Receives data from** → Smart Widget System
- **Provides data to** → Engineer Dashboard (case review)
- **Provides data to** → Customer Portal (read-only view)
- **Links to** → Case & Service Management (case record)
- **(Future) Pre-fills** → Widget for 2nd+ service purchases

**Key Building Data Principles:**
✅ Data lives with CASES (not centralized building database in MVP)
✅ Immutable after submit (locked, versioned per case)
✅ Metadata-rich (who, when, validation status)
✅ Security & privacy (role-based access, encryption, audit trail)
✅ Future-ready (designed for reusability, but not implemented in MVP)

---

## Session Summary

### What We Achieved:
✅ 7 main system components identified and detailed
✅ Clear relationships and dependencies mapped
✅ MVP scope locked (no feature creep)
✅ Role-based architecture (customer, engineer, expert - all using same core)
✅ "One calm system, two perspectives" vision realized
✅ Single source of truth (Core manages everything)

### Widget Editability State Machine:
**Waiting for data** → (customer fills) → **Submit** → **Data submitted (READ-ONLY)**
↓
Engineer reviews → **Blocked** (with missing items)
↓
Customer edits ONLY relevant tabs → **Re-submit**
↓
**Data submitted (READ-ONLY again)**

Clean, predictable, no confusion.

---

## Phase 3: Idea Development (SCAMPER Method)

**Technique:** SCAMPER - Systematic creativity through seven lenses for methodical product improvement

### SCAMPER Lenses Applied

**Completed:**
- **S - Substitute:** Explored data reuse alternatives
- **C - Combine:** Unified interface components
- **E - Eliminate:** Strategic MVP scope cuts

**Skipped (Sufficient Refinement Achieved):**
- A - Adapt
- M - Modify
- P - Put to other uses
- R - Reverse

---

### S - SUBSTITUTE Refinements

**Exploration:** Replace "no data reuse" with lightweight pre-fill

**Decision:** Post-MVP Enhancement (NOT in MVP)

**MVP Approach:**
- ✅ Fill from scratch (safest, clearest flow)
- ✅ Each case = independent data snapshot
- ✅ No cross-case data sharing

**Post-MVP Design (Future):**
- Optional pre-fill from previous cases
- Transparency required: Show source case, date, data age
- Customer confirms before submit
- Architecture designed to support without restructuring

**Key Principle:** Single source of truth maintained (copy ≠ share, each case owns its data)

---

### C - COMBINE Refinements

**Major Architectural Combination:**

#### ✅ Unified Activity Feed
**Before:** Separate Communication System + Notification System
**After:** Single Case Activity Feed (interface unified, logic distinct)

**What Changed:**
- ❌ Removed: Separate notification bell + message thread UI
- ✅ Added: Single chronological timeline per case
- Shows both system notifications AND human messages interleaved
- Visual distinction maintained (system events vs human messages)

**What Stayed the Same:**
- Messages = user-initiated, two-way, deliberate action
- Notifications = system-generated, status-driven, auto-posted
- Both persist in immutable audit trail
- Both distinguish visually

**MVP Rendering:**
- Chronological order (newest last)
- No filtering, no search
- Read/unread state preserved
- Message composition = explicit action

**Component Impact:**
- **Before:** 7 components (Communication + Notification separate)
- **After:** 6 components (unified as Case Activity Feed)

**Key Insight:** "Everything about this case happens here" = one mental model, zero confusion

---

### E - ELIMINATE Refinements (Strategic Scope Cuts)

#### **1. CORE - Single-Service Architecture** ⭐ BIGGEST CUT

**Eliminated:**
- ❌ Multi-service abstraction
- ❌ Service type field in cases
- ❌ Service configuration tables
- ❌ Service selection at purchase
- ❌ Widget-per-service mapping logic
- ❌ Conditional service-based workflows

**MVP Scope:**
- ✅ Energieausweis-ONLY (hardcoded workflow)
- ✅ One service, one workflow, one truth
- ✅ Every case = Energieausweis case

**Impact:**
- 30-40% development complexity reduction
- Simpler codebase, faster implementation
- Fewer edge cases, easier testing
- Clearer focus on proving core workflow

**Strategic Position:**
> "Prove one complete workflow works end-to-end = Prove the SYSTEM works"
> Multi-service becomes Phase 2, informed by real usage

**Refactoring Strategy:**
- Design with expansion in mind
- Do not implement multi-service now
- Add service abstraction later with real requirements

---

#### **2. Customer Portal Eliminations**

**Eliminated:**
- ❌ Advanced multi-case management (filtering, sorting, grouping)
- ❌ Draft-save UI confirmations ("Draft saved at X")
- ❌ Download history tracking

**Kept (Simplified):**
- ✅ Simple flat cases list (no advanced features)
- ✅ Case detail view
- ✅ Widget access
- ✅ Unified activity feed
- ✅ Final document download

**MVP Goal:** "Log in → See status → Do action → Download result"

**Silent Behaviors (No UI):**
- Auto-save exists (show errors only if fails)
- Backend tracking (no customer-facing history)

---

#### **3. Smart Widget System Eliminations**

**Eliminated:**
- ❌ Expert-specific UI variations (streamlined layout, keyboard shortcuts)
- ❌ Per-section photo uploads
- ❌ Tab-level unlocking when Blocked

**Kept:**
- ✅ Universal 7-tab Energieausweis widget structure
- ✅ Hybrid validation (hard blocks + soft warns engineer)
- ✅ Auto-save drafts (silent)
- ✅ Single Photos & Documents tab (Tab 7)
- ✅ Full widget unlock when Blocked

**Simplifications:**
- Expert mode = role + metadata, NOT different UI
- Same widget for customers and experts
- Blocked = entire widget editable (engineer message clarifies what needs fixing)
- Engineer interprets photos (no strict section binding required)

**MVP Goal:** "Predictable, boring, error-proof data collection"

---

#### **4. Internal Engineer Dashboard Eliminations**

**Eliminated:**
- ❌ Case assignment logic (no ownership by specific engineers)
- ❌ "Assigned to me" filtering
- ❌ "In Review" intermediate status
- ❌ Document versioning for final deliverable
- ❌ Preview/thumbnail generation
- ❌ Format conversion

**Kept:**
- ✅ Shared case pool (all engineers see all cases)
- ✅ Any engineer can work any case
- ✅ Simplified status flow: Data submitted → Blocked OR Completed
- ✅ Document upload (final PDF triggers Completed)
- ✅ Download customer input files (zip export)

**Two Document Flows (Both Kept):**
1. Customer/Expert uploads input docs → Engineer downloads (zip)
2. Engineer uploads final Energieausweis PDF → Customer downloads from portal

**Simplified Status Flow:**
- Data submitted → Engineer reviews → **Blocked** (needs fixes) OR **Completed** (PDF uploaded)
- No intermediate "In Review" state

---

#### **5. External Expert Interface Eliminations**

**Strategic Decision:** KEEP persistent expert role (minimal MVP)

**Rationale:**
> "Experts = system users now, platform customers later"
> Future B2B model: Experts will initiate services customers cannot access

**Eliminated:**
- ❌ Expert marketplace/self-selection
- ❌ Expert analytics or performance dashboards
- ❌ Expert-customer direct messaging
- ❌ Expert access to final documents
- ❌ Expert billing/payout logic
- ❌ Automated matching or availability

**Kept:**
- ✅ Expert as first-class user role (login, authentication, account lifecycle)
- ✅ Expert sees assigned cases
- ✅ Expert fills same Energieausweis widget
- ✅ Expert save draft / submit
- ✅ Metadata tracking (data source attribution)
- ✅ Manual assignment by internal team

**Why Keep Expert Role:**
- Avoids future re-architecture when experts become service initiators
- B2B core to business model (some cases REQUIRE on-site experts)
- Without it, forces offline coordination (breaks "one calm system")

---

#### **6. Activity Feed & Data Repository**

**Decision:** KEEP both as-is (already MVP-lean)

**Rationale:**
- Further cuts would harm transparency, auditability, compliance
- Read/unread state = valuable for action awareness
- Full timeline = customer transparency (core principle)
- Timestamps = time-sensitive, auditable domain requirement
- File metadata = audit trail (who, when, what)
- Soft validation persistence = engineer review signals

**No Eliminations Justified**

---

### Refined Architecture Summary

#### **Final 6-Component System:**

1. **Customer Portal** (Simplified)
   - Task-focused, no advanced features
   - Goal: "Log in → Status → Action → Download"

2. **Smart Widget System** (Hardcoded Energieausweis)
   - Fixed 7-tab structure
   - Same UI for all roles
   - Predictable, boring, reliable

3. **Case & Service Management (CORE)** (Single-Service)
   - Energieausweis-ONLY
   - No service abstraction
   - One workflow, one truth

4. **Internal Engineer Dashboard** (Shared Pool)
   - All engineers see all cases
   - Two-state workflow (Blocked/Completed)
   - Document upload triggers completion

5. **External Expert Interface** (Minimal Persistent)
   - Expert login preserved (future-proof)
   - Manual assignment only
   - No marketplace or advanced features

6. **Case Activity Feed** (Unified)
   - System notifications + messages combined
   - Chronological, immutable
   - One mental model per case

~~7. Building Data Repository~~ (Absorbed into CORE - per-case storage)

---

### Widget Editability State Machine (Refined):

**Simplified Flow:**
```
Waiting for data
  → (customer/expert fills)
  → Submit
  → Data submitted (READ-ONLY)
  ↓
Engineer reviews
  → Blocked (entire widget editable)
  ↓
Customer/Expert edits
  → Re-submit
  → Data submitted (READ-ONLY again)
  ↓
Engineer reviews
  → Completed (final PDF uploaded)
```

Clean, predictable, no confusion.

---

### Status Flow (Simplified):

**Before SCAMPER:**
- Waiting for data → Data submitted → In Review → Blocked/Completed

**After SCAMPER:**
- Waiting for data → Data submitted → **Blocked** OR **Completed**

One less state transition = simpler logic.

---

## Final Session Summary

### What We Achieved Across All 3 Phases:

**Phase 1 (What If Scenarios):**
- ✅ Core system concepts explored
- ✅ Widget state machine defined
- ✅ Single source of truth principle

**Phase 2 (Mind Mapping):**
- ✅ 7 main components identified
- ✅ Role-based architecture mapped
- ✅ "One calm system" vision realized

**Phase 3 (SCAMPER):**
- ✅ 18 refinements applied
- ✅ 5 major scope cuts (30-40% complexity reduction)
- ✅ Architecture simplified and locked

### Key Architectural Decisions Locked:

1. **Single-Service MVP** (Energieausweis-ONLY)
2. **Unified Activity Feed** (interface simplification)
3. **Shared Engineer Pool** (no case assignment)
4. **Same Widget for All Roles** (no UI variations)
5. **Two-State Workflow** (Blocked/Completed, no "In Review")
6. **Persistent Expert Role** (future-proof for B2B expansion)
7. **Per-Case Data Storage** (no cross-case sharing in MVP)

### MVP Complexity Reduction:

- **CORE:** 30-40% reduction (single-service vs multi-service)
- **Widget:** Hardcoded Energieausweis (no conditional rendering)
- **Engineer Dashboard:** Simplified permissions (shared pool)
- **Status Flow:** One less state (no "In Review")
- **Expert Interface:** Minimal but persistent (future-ready)

### Guiding Principles Validated:

✅ **One calm system, two perspectives**
✅ **Single source of truth** (CORE manages everything)
✅ **Execution > architecture purity** (prove workflow works first)
✅ **Predictable over clever** (boring = reliable)
✅ **Transparency = trust** (customers see everything)
✅ **MVP-first mindset** (no premature abstraction)

---

**Session Status:** Phases 1-3 Complete - Architecture refined, simplified, and locked for MVP implementation
