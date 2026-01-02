---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\docs\brainstorming-session-2025-12-25.md'
date: 2025-12-29
author: Oguzc
---

# Product Brief: Bauexperts Internal CRM

## Executive Summary

Bauexperts Internal CRM is a case management system designed to eliminate operational chaos in handling Energieausweis services. The system replaces fragmented communication channels (email, WhatsApp, PDFs, phone calls) with a single, structured workflow that provides transparency for customers and efficiency for internal engineers.

**The MVP focuses on proving one complete workflow works end-to-end**: Energieausweis case management from purchase to final document delivery. Success means engineers spend time on technical work instead of chasing information, and customers know exactly what to do at every step.

**Key Principle:** One calm system, two perspectives - customers get transparency, engineers get efficiency, both use the same single source of truth.

---

## Core Vision

### Problem Statement

Bauexperts faces operational chaos in managing Energieausweis cases. Customer data arrives through fragmented channels (email, WhatsApp, PDFs, phone calls), forcing engineers to manually track case status across disconnected tools. There is no single source of truth, leading to repeated requests for information, unclear responsibilities, and frustrated customers who don't understand what's happening with their cases.

### Problem Impact

**Internal Engineers:**
- Spend excessive time coordinating and chasing information instead of doing technical work
- High cognitive load from tracking cases across multiple systems
- Manual, error-prone processes that don't scale

**Business:**
- Cannot scale service offerings without scaling complexity linearly
- Adding new services (beyond Energieausweis) would multiply the chaos
- Growth constrained by operational inefficiency

**Customers:**
- Confused about case status and next steps
- Frustrated by repeated requests for the same information
- Lack of transparency creates uncertainty and support burden

### Why Existing Solutions Fall Short

Generic CRM and project management tools don't understand the case-driven, service-specific workflow required for Energieausweis and similar building certification services. They lack:
- Domain-specific data collection (structured building data widgets)
- Dual B2C/B2B workflows (customers + external experts filling same data)
- Case lifecycle management with clear status transitions
- The right balance of structure and simplicity for internal teams

Off-the-shelf solutions are either too complex (enterprise CRM overkill) or too simple (generic ticketing systems that don't capture the workflow).

### Proposed Solution

A purpose-built internal CRM centered on **case-based workflow management**:

**For Customers:**
- One case per service purchase, with clear status visibility
- Structured widget guides data collection step-by-step (7-tab Energieausweis form)
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

### Key Differentiators

**Internal Advantage:**
- Built for Bauexperts' exact workflow, not a generic compromise
- Deep domain knowledge embedded in the widget structure and validation rules
- Control over future evolution as business needs change

**MVP-First Mindset:**
- Prove one service works end-to-end before scaling to multiple services
- 30-40% complexity reduction through strategic scope cuts
- Designed for expansion, implemented for speed

**Dual Workflow Support:**
- Customers can self-serve OR request expert help
- External experts fill data on-site using same structured widget
- Metadata tracking ensures audit trail (who, when, what)
- Future B2B model: experts become platform customers (not just data collectors)

**Transparency as Core Principle:**
- Customers see case activity timeline (builds trust)
- Engineers see everything (enables quick decisions)
- Experts see only their assigned cases (clear boundaries)
- Unified activity feed = one mental model, zero confusion

**Scalable Foundation:**
- Architecture designed to support multiple services (post-MVP)
- Data reusability planned (pre-fill from previous cases)
- No cross-case data sharing in MVP (each case = independent snapshot)
- Expansion path clear, but not prematurely implemented

---

## Target Users

### Primary Users: Internal Engineers

**Persona: Stefan, Internal Energieausweis Engineer**

**Context:**
Stefan is one of several engineers at Bauexperts responsible for processing Energieausweis cases. He has technical expertise in building energy assessments but spends too much time on coordination instead of analysis.

**Current Problem Experience:**
- Receives customer data through fragmented channels (email, WhatsApp, PDFs, phone calls)
- Manually tracks which cases need attention across disconnected tools
- Spends significant time chasing missing information from customers
- High cognitive load from context-switching between cases and communication channels
- Cannot easily hand off cases to colleagues (no shared visibility)
- Frustration from repetitive, low-value coordination work

**Success Vision with Bauexperts CRM:**
- Opens dashboard → sees all cases with clear status (Waiting for data, Data submitted, Blocked, Completed)
- Reviews submitted widget data → all building information in one structured view
- Requests corrections by marking case as "Blocked" with specific message
- Downloads customer photos/documents in one click (zip export)
- Uploads final Energieausweis PDF → case automatically marked Completed
- Focuses 80%+ of time on technical review, not coordination

**Key Needs:**
- Shared case pool (any engineer can work any case)
- Structured data presentation (no digging through emails)
- Simple status management (Blocked or Completed, no complexity)
- Fast access to customer-provided files
- Clear visibility into what's missing or needs attention

---

### Secondary Users: Customers

**Persona: Anna, Building Owner Purchasing Energieausweis**

**Context:**
Anna owns a residential building and needs an Energieausweis for a sale or rental. She is not a technical expert and wants a straightforward process with clear guidance.

**Current Problem Experience:**
- Unclear what information is needed upfront
- Receives follow-up requests for "missing data" after initial submission
- No visibility into case status ("Is someone working on this?")
- Communication scattered across email threads, making it hard to track
- Frustration from feeling like the process is opaque and slow

**Success Vision with Bauexperts CRM:**
- Purchases Energieausweis online → case created automatically
- Logs into customer portal → sees case status clearly
- Fills 7-tab widget → knows exactly what's required, step-by-step
- Submits data → receives confirmation and estimated timeline
- If engineer requests changes → sees clear message about what's needed
- Downloads final Energieausweis PDF when ready
- Transparent activity feed shows progress ("Engineer started review," "Document ready")

**Key Needs:**
- Clear guidance on what data to provide
- Transparency about case status and next steps
- Simple, structured data entry (not free-form emails)
- Ability to track progress without contacting support

---

### Tertiary Users: External Experts (B2B)

**Persona: Markus, External Building Expert**

**Context:**
Markus is an independent building expert who performs on-site inspections and data collection for customers who prefer professional help. He is technically proficient and needs efficient tools for field work.

**Current Problem Experience:**
- Receives case assignments via phone/email (manual coordination)
- Collects building data on-site but has no structured system to submit it
- Sends data back via email/photos/PDFs (unstructured handoff to internal team)
- No visibility into whether his submission was complete or if follow-up is needed
- Time wasted on back-and-forth clarifications

**Success Vision with Bauexperts CRM:**
- Receives notification of assigned case
- Logs into expert portal → sees assigned cases only
- Fills same 7-tab widget on-site (streamlined for professional use)
- Submits data → metadata tracks "Filled by Expert Markus"
- Engineer reviews → if changes needed, Markus can edit and re-submit
- Handoff complete → Markus moves to next case, customer receives final result

**Key Needs:**
- Clear case assignments (manual in MVP)
- Same structured widget as customers (no custom expert UI in MVP)
- Metadata tracking (engineer knows data source)
- Limited visibility (only assigned cases, no access to final documents)

---

### User Journey: End-to-End Case Flow

**1. Case Creation (Customer or Customer + Expert)**
- Customer purchases Energieausweis online
- Case automatically created in system
- Customer receives portal access credentials
- (Optional) Customer chooses "I want an expert to help" → internal team assigns expert

**2. Data Collection**
- Customer/Expert logs in → opens 7-tab widget
- Fills building data step-by-step (auto-save drafts)
- Uploads photos/documents to Tab 7
- Submits → widget becomes read-only, status changes to "Data submitted"

**3. Engineer Review**
- Engineer sees case in shared pool with "Data submitted" status
- Reviews structured widget data + downloads customer files
- Decision point:
  - **Complete:** Uploads final Energieausweis PDF → status "Completed"
  - **Needs corrections:** Marks case "Blocked" with message → customer/expert notified

**4. Corrections (If Needed)**
- Customer/Expert receives notification ("Engineer requested changes")
- Widget unlocks for editing
- Makes corrections → re-submits → status back to "Data submitted"
- Engineer reviews again

**5. Completion & Delivery**
- Engineer uploads final PDF → case marked "Completed"
- Customer receives notification ("Your Energieausweis is ready")
- Customer downloads PDF from portal
- Case archived with full audit trail (who did what, when)

**Key Journey Principles:**
- **Single source of truth:** All activity visible in case timeline
- **Clear handoffs:** Status changes drive notifications and next actions
- **Transparency:** Customer always knows what's happening
- **Efficiency:** Engineer focuses on review, not coordination

---

## Success Metrics

### User Success Metrics

**Primary User Success: Internal Engineers**

**Time & Efficiency Improvements:**
- Engineers spend significantly less time chasing missing information per case
- Noticeable reduction in email, WhatsApp, and ad-hoc communication volume per case
- Engineers process cases with fewer context switches (no jumping between tools/channels)

**Workflow Efficiency Indicators:**
- All required customer data visible in one structured view (no email archaeology)
- Engineers can confidently decide: Blocked or Completed without uncertainty
- Case handoffs require zero verbal explanation (shared visibility enables seamless transitions)

**Success Moment for Engineers:**
The first time an Energieausweis case is completed end-to-end without a single email thread or phone call.

**Adoption Signal:**
Engineers actively prefer using the CRM over emails and manual tracking (behavioral validation, not forced adoption).

---

**Secondary User Success: Customers**

**Transparency Improvements:**
- Customers always know current case status (no "What's happening with my case?" uncertainty)
- Customers know exactly what is missing and what to do next (clear, actionable guidance)

**Friction Reduction Indicators:**
- Fewer support requests asking about case status
- Fewer repeated requests for the same information (structured widget eliminates ambiguity)

**Success Moment for Customers:**
Seeing case progress clearly in the activity feed instead of waiting in uncertainty.

---

### Business Objectives

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

### Key Performance Indicators (MVP)

**Engineer Efficiency KPIs:**
- **Coordination Time Reduction:** Measure time spent per case on coordination (emails, calls, chasing data) - target: significant reduction from baseline
- **Context Switch Reduction:** Track number of tools/channels used per case - target: CRM becomes single source of truth
- **Case Handoff Time:** Measure time required to hand off case to another engineer - target: near-zero explanation time

**Customer Experience KPIs:**
- **Status Inquiry Reduction:** Track support requests about "case status" - target: measurable decrease
- **Data Re-submission Reduction:** Track cases requiring repeat data requests - target: decrease due to structured widget validation
- **Portal Usage:** Track customer logins and activity feed views - indicator of transparency value

**System Adoption KPIs:**
- **Engineer CRM Usage:** Percentage of cases managed entirely within CRM vs. email fallback - target: >90%
- **End-to-End Workflow Completion:** Number of cases completed without external communication channels - target: validate MVP workflow
- **Time to Complete Case:** Average time from "Data submitted" to "Completed" - baseline and improvement tracking

**Business Impact KPIs:**
- **Cases Handled Per Engineer:** Track average monthly cases per engineer - indicator of scalability
- **Operational Overhead:** Measure overall coordination time as percentage of total engineer time - target: reduction

---

### MVP Success Definition

**The MVP is successful if:**

1. **Engineer Adoption:** Engineers actively prefer using the CRM over emails and manual tracking (validated through usage data and qualitative feedback)

2. **Workflow Validation:** A full Energieausweis workflow can be completed reliably inside the system from purchase to final PDF delivery

3. **Efficiency Gains:** Measurable reduction in coordination time and support requests (baseline comparison)

4. **Scalability Proof:** Engineers can handle increasing case volume without proportional increase in chaos or coordination overhead

**MVP Failure Signals:**
- Engineers continue defaulting to email despite CRM availability
- Cases still require significant external coordination (WhatsApp, phone calls)
- Customers continue asking "What's the status?" at the same rate as before
- System adds complexity instead of reducing it

---

## MVP Scope

### Core Features (What We're Building)

The MVP delivers **one complete Energieausweis workflow, end-to-end**, proving that structured case management eliminates operational chaos:

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

### Out of Scope for MVP

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

### MVP Success Criteria

**The MVP is successful if:**

1. **Workflow Validation:** 10-20 Energieausweis cases completed fully inside the CRM without relying on email, WhatsApp, or phone calls for core coordination

2. **Engineer Adoption:** Engineers voluntarily choose the CRM as their primary tool instead of falling back to manual tracking

3. **Cognitive Load Reduction:** Engineers report that the system reduces cognitive load instead of adding it

4. **Customer Transparency:** Customers can submit data and receive final documents without asking "What is the status of my case?" via external channels

**Strongest Success Signal:**
Engineers say: **"I don't want to go back to the old way."**

---

**The MVP is NOT successful if:**

1. **Email Fallback:** Engineers still default to email or WhatsApp for most cases despite CRM availability

2. **Out-of-Band Coordination:** Cases cannot be completed without significant external communication

3. **Added Friction:** System adds extra steps or complexity compared to current process

4. **Avoidance Behavior:** Engineers avoid using the system unless forced

---

**Evaluation Timeframe:**

- **Initial evaluation:** After 10 completed cases
- **Go/No-Go decision:** After ~20 completed cases or 4-6 weeks of usage (whichever comes first)

**Decision Path:**
- ✅ **If successful:** Proceed to stabilization, then add additional services and optimizations
- ❌ **If unsuccessful:** Revisit workflow and assumptions before adding scope; do not expand until core value is proven

---

### Future Vision (Post-MVP)

**2-3 Year Vision:**

If the MVP succeeds, Bauexperts Internal CRM becomes the **central case management system for all Bauexperts services**, not just Energieausweis.

**Expanded Capabilities:**
- Multiple service types (Energieausweis, Brandschutz, Statik, Schallschutz, etc.)
- Each service with its own structured, domain-specific data collection workflow
- Unified case model and activity feed across all services
- System remains **case-centric**, not customer-centric (customers may have multiple cases over time)

**Incremental Post-MVP Additions:**
- **Multi-service support:** Service-specific widgets and workflows
- **Data reusability:** Pre-fill from previous cases, building profile templates
- **Smarter automation:** Status triggers, reminders, basic SLA tracking
- **Better expert management:** Availability tracking, workload visibility
- **Expert marketplace:** Possible long-term option, not a near-term goal

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

---
