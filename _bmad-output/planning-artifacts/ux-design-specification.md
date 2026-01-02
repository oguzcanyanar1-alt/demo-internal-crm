---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments:
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\product-brief-BMAD-METHOD-main-2025-12-29.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\_bmad-output\planning-artifacts\prd.md'
  - 'C:\Users\oguzc\Desktop\demo-internal-crm\docs\brainstorming-session-2025-12-25.md'
date: 2026-01-02
author: Oguzc
projectName: Bauexperts CRM
---

# UX Design Specification Bauexperts CRM

**Author:** Oguzc
**Date:** 2026-01-02

---

## Executive Summary

### Project Vision

Bauexperts Internal CRM is a purpose-built case management system designed to eliminate operational chaos in Energieausweis service delivery. The system replaces fragmented communication channels (email, WhatsApp, PDFs, phone calls) with a single, structured workflow that provides transparency for customers and efficiency for internal engineers.

**Core UX Principle:** *"One calm system, two perspectives"*

- **For customers**: Transparency about case status, clear guidance on what's needed, confidence that nothing is lost or forgotten
- **For engineers**: Structured data presentation, simple decision flows, focus on technical work instead of coordination
- **For experts**: Efficient field data collection, clean handoffs, professional credibility through structured submissions

The MVP proves one complete workflow works end-to-end: Energieausweis case management from purchase to final document delivery. Success means engineers spend time on technical work instead of chasing information, and customers know exactly what to do at every step.

### Target Users

**Primary User: Internal Engineers (Stefan)**
- **Current pain**: 60% of time spent coordinating and chasing information across fragmented channels
- **Mental model**: Action-focused - "What cases need my attention? What's the data? Block or Complete?"
- **Success metric**: "I don't want to go back to the old way"
- **Device context**: Desktop/laptop (1366x768 minimum, 1920x1080 optimal)
- **Tech proficiency**: High - comfortable with technical interfaces

**Secondary User: Customers (Anna)**
- **Current pain**: Uncertainty about requirements, confusion about case status, frustration from repeated information requests
- **Mental model**: Transparency-focused - "What do you need from me? What's happening with my case? When will it be ready?"
- **Success metric**: "I always knew what was happening"
- **Device context**: Desktop/laptop primarily
- **Tech proficiency**: Variable - needs clear guidance and step-by-step instructions

**Tertiary User: External Experts (Markus)**
- **Current pain**: Messy handoffs, unclear data expectations, follow-up calls asking for missing information
- **Mental model**: Efficiency-focused - "What building data do I collect? Submit and move to next job"
- **Success metric**: "This is how it should have always worked"
- **Device context**: Tablets for on-site inspections (iPad-sized, 1024px minimum, touch-friendly)
- **Tech proficiency**: High - professionals needing field-efficient tools

### Key Design Challenges

**1. Multi-Role Complexity with Unified Architecture**

Three distinct user roles must interact with the same core system, each with different mental models and workflows:
- Engineers need action-focused dashboards with complete data visibility
- Customers need transparency and step-by-step guidance
- Experts need field-efficient data entry on tablets

**Challenge**: Design role-appropriate interfaces while maintaining "single source of truth" architecture where portals are views, not separate systems.

**2. Widget State Management and Editability** ⭐ **CRITICAL**

The 7-tab Energieausweis widget is the heart of the system. Users must clearly understand:
- **Draft state**: "I can edit anytime, data auto-saves"
- **Submitted state**: "Widget is read-only, engineer is reviewing"
- **Blocked state**: "Widget is editable again, engineer needs specific corrections"
- **Completed state**: "Case is done, download final document"

**Challenge**: Visual communication of state transitions must be immediately obvious. Customers and experts must never be confused about whether they can edit or what's required next.

**3. Tablet Usability for Field Work**

Experts like Markus need the 7-tab widget to work seamlessly during on-site building inspections:
- Touch-friendly form controls and navigation
- Camera access for photo uploads
- Efficient tab switching without desktop-specific interactions
- One-handed operation when possible (holding tablet while inspecting)

**Challenge**: Same widget must work excellently on both desktop (engineers, customers) and tablets (experts) without creating separate UIs.

### Design Opportunities

**1. Transparency as Competitive Advantage**

The activity feed showing exactly what's happening at every step can build unprecedented trust:
- Customers see "Engineer Stefan started review" instead of radio silence
- Clear messages about what corrections are needed instead of vague "we need more information" emails
- Download final document the moment it's ready instead of waiting for email notification

**Opportunity**: Transform a typically opaque technical process (getting an Energieausweis) into a surprisingly calm and confident experience. "I always knew what was happening" becomes the defining customer sentiment.

**2. Structured Guidance Reduces Friction**

The 7-tab widget with clear instructions, example photos, and validation can eliminate the guesswork:
- Tab-by-tab progression shows exactly what's required
- Example photos demonstrate "This is what we need to see"
- Hard validation prevents submission of incomplete data
- Soft warnings flag potential issues for engineer review

**Opportunity**: First-time completion rate becomes exceptional because customers know exactly what to provide. Repeated requests for "missing information" become rare exceptions, not the norm.

**3. Shared Visibility Enables Instant Handoffs**

Engineers working from a shared case pool with complete data visibility means zero-friction colleague handoffs:
- "Just check case #847 in the dashboard - all the data and history is there" replaces 15-minute verbal explanations
- Any engineer can pick up any case without ramp-up time
- Vacation coverage becomes trivial instead of complex knowledge transfer

**Opportunity**: Engineer scalability becomes linear, not exponential. Adding cases doesn't add coordination chaos because the system holds all context.

## Core User Experience

### Defining Experience

The core experience of Bauexperts CRM centers on the **7-tab widget data collection**. This is the universal touchpoint where all three user types interact with the system:

- **Engineers** review submitted widget data to make decisions
- **Customers** fill the widget to provide building information
- **Experts** collect data on-site via the widget on tablets

The widget is the primary value delivery mechanism - it transforms email chaos into structured data. When the widget is clear and frictionless, cases flow smoothly. When it confuses users, the entire system breaks down.

**Core user action:** Fill, review, or submit the 7-tab Energieausweis widget with complete building data.

### Platform Strategy

**Multi-Device Responsive Design:**
- **Desktop primary** for engineers (1366x768 minimum, 1920x1080 optimal)
- **Mobile essential** for customers (must work excellently, not degraded)
- **Tablet for field work** for experts (iPad-sized, 1024px+)
- **Single responsive UI** that adapts gracefully across all screen sizes - no separate experiences

**Interaction Modes:**
- Mouse/keyboard primary for desktop (engineers, customers on desktop)
- Touch-based for mobile/tablet (customers on mobile, experts in field)
- Same widget must work excellently on both without creating separate UIs

**Offline Capability (Critical):**
- **Offline data collection required** for experts doing on-site work without reliable internet
- Experts must fill the complete 7-tab widget offline
- Draft auto-save works offline using local storage
- Clear visual indication of offline/online status
- Data syncs automatically when connectivity is restored
- Queued submissions when offline, auto-sync when back online

**Browser & Platform:**
- Web-based SPA (Single Page Application) with client-side routing
- Modern evergreen browsers only (Chrome, Firefox, Edge Chromium, Safari)
- Service worker implementation for offline capability
- Camera access for photo uploads (mobile/tablet)

### Effortless Interactions

The system is designed so users focus on their task (providing or reviewing data), not on the tool itself:

1. **Auto-save is invisible** - Users never think about saving; data persists automatically (especially critical offline)
2. **Clear progress feedback** - Always know position in 7-tab widget and what's remaining
3. **No surprises** - System explains why fields are required or why cases are blocked
4. **Minimal cognitive load** - No unnecessary fields, plain language for customers (not technical jargon)
5. **One clear next action** - Always obvious what to do next, zero guessing
6. **Widget state transitions obvious** - Never wonder "Can I edit?" or "Did it save?"
7. **Tab progression feels guided** - Like a conversation, not a bureaucratic form
8. **Photo uploads friction-free** - Seamless camera access on mobile/tablet
9. **Offline/online seamless** - System handles connectivity, experts don't worry about it
10. **Validation immediate and helpful** - Instant feedback with clear fix guidance

**Guiding principle:** Users focus on their task, not on the tool itself.

### Critical Success Moments

**Make-or-break interactions that determine success or failure:**

**For Customers (Anna):**
- **First widget load**: "Oh, this is clear - I know what to do" (not "This looks complicated")
- **First 2-3 minutes**: If widget feels too technical, they abandon it - MUST be approachable immediately
- **Data persistence**: If they lose data (especially on mobile), trust is gone immediately - UNRECOVERABLE
- **Submission moment**: Confidence that data is complete and accepted (not anxiety about missing something)
- **Post-submission visibility**: Can always view exactly what they entered in read-only mode (people forget details, need reference)
- **Blocked case notification**: Clear understanding of exactly what needs fixing (not vague "we need more information")
- **Final document ready**: Immediate awareness and easy download

**For Engineers (Stefan):**
- **Case review**: All data visible in organized structure - no hunting through emails
- **Complete data on first submission**: If ANY required information is missing after submission, the system has failed (widget validation is critical)
- **Review speed**: If reviewing a case takes longer than email + attachments, adoption fails - MUST be faster than current chaos
- **Decision clarity**: Obvious whether to Block or Complete based on data quality
- **First complete case end-to-end**: "I didn't touch email once" moment
- **Colleague handoff**: Zero verbal explanation needed - "Check case #847, it's all there"

**For Experts (Markus):**
- **On-site widget load (offline)**: Works perfectly without connectivity, no anxiety
- **Offline reliability**: If offline data is lost or sync is unreliable, system becomes unusable - ZERO tolerance for data loss
- **Photo upload performance**: If uploads are slow or confusing on-site, they revert to old habits (email/WhatsApp)
- **Data submission after inspection**: Clean handoff, no wondering if anything was missed
- **Sync when back online**: Automatic, no lost work, professional credibility maintained

**Critical Workflow Rule:**
- **Submitted state**: Widget is FULLY READABLE (not hidden) but LOCKED - customers/experts can review what they entered anytime
- **Blocked state**: Only then do relevant fields become editable again
- **Visual clarity**: State must be instantly obvious (can I edit or not?)

**Overall Red Line:**
**"If users ever feel 'email would be easier', the experience has failed."**

### Experience Principles

These principles guide all UX decisions for Bauexperts CRM:

1. **Invisible Infrastructure** - Users focus on their task (providing or reviewing data), not on the tool itself. Auto-save, state management, offline sync - all invisible.

2. **Zero Cognitive Load** - One clear next action always visible. No unnecessary fields. Plain language for customers. Progress always visible.

3. **Trust Through Transparency** - Users always know: What's happening with my case? Can I edit this? Did my data save? What do you need from me? No surprises, no uncertainty.

4. **Faster Than Email** - Every interaction must be faster and easier than the fragmented email/WhatsApp chaos it replaces, or adoption fails.

5. **Mobile-First Reliability** - Data never lost, especially on mobile. Offline works flawlessly. Photo uploads are instant. Technical failures = trust failures.

6. **Approachable Immediately** - First 2-3 minutes determine success. Widget must feel clear and manageable, not technical or overwhelming.

7. **Read-Only Reassurance** - After submission, users can always review exactly what they entered. Memory aid + confidence builder.

## Desired Emotional Response

### Primary Emotional Goals

**Core Emotional Goal: Calm Confidence**

The system creates the opposite of today's email/WhatsApp chaos - which generates anxiety, uncertainty, and frustration. Instead, users experience calm confidence: predictable, reassuring, and boringly reliable.

**Guiding Principle:**
**The system must never require emotional energy from the user.**

If users need to be careful, double-check whether something saved, wonder if they're allowed to click something, or worry about breaking something - the design has failed, even if the feature works technically.

**By User Role:**

**Engineers (Stefan):**
- **Primary emotion**: Relief → Quiet confidence
- **Not**: "This is impressive" but "This finally makes sense"
- **Key feeling**: Control without mental effort
- **Success**: "Review, decide, move on" (calm focus, no learning curve anxiety)

**Customers (Anna):**
- **Primary emotion**: Calm certainty
- **Not**: Anxious, rushed, or unsure what happens next
- **Key feeling**: "I know what I need to do, and I know where my case stands"
- **Success**: Reassurance within first 2-3 minutes (immediate, not gradually built)

**Experts (Markus):**
- **Primary emotion**: Professional confidence and trust
- **Not**: Anxiety about data loss or unreliable sync
- **Key feeling**: Safe collecting data offline, confident in clean professional handoff
- **Success**: Trust earned on first offline use (one failure = permanent damage)

### Emotional Journey Mapping

**First Discovery:**

**Engineers:**
- Skeptical optimism → Immediate relief (within first case view)
- Key moment: "Oh. All the data is... just here. In one view."
- Transition happens in first case, not over time
- From that point: calm focus, no excitement needed

**Customers:**
- Apprehensive → Reassured within 2-3 minutes
- Key moment: Opening widget - "This is clear. I can do this."
- Confidence must be immediate, not slowly built
- Within first few minutes: "I understand this, and I won't break anything"

**Experts:**
- Professional skepticism → Trust
- Key moment: First offline data collection - "It just... works. Even without internet."
- Trust earned once = permanent (but one failure = permanent damage)

**During Core Experience:**

- **Engineers**: Calm focus - "This is faster than email archaeology"
- **Customers**: Guided certainty - "I know exactly what's needed, step by step"
- **Experts**: Efficient flow - "Clean data collection, no mental overhead"

**After Completing Task:**

- **Engineers**: Quiet satisfaction - "Done. Next case." (not "Wow, that was amazing")
- **Customers**: Relieved certainty - "Submitted. I know they have everything."
- **Experts**: Professional pride - "Clean handoff delivered."

**When Something Goes Wrong (Blocked Case):**

- **Customers/Experts**: Understanding, not frustration - "Oh, I see exactly what needs fixing"
- **Key emotion**: Clarity about the problem + confidence it's fixable
- **Feeling**: Neutral, factual correction (not error, not blame)
- **Avoid**: Anxiety, confusion, or feeling criticized

**Returning to Use Again:**

- **All users**: Predictable comfort - "I know how this works"
- **Feeling**: Muscle memory - "I don't need to relearn this"
- **Not**: "I hope I remember how to do this"

### Micro-Emotions

**Critical emotional states that determine success or failure:**

**Confidence vs. Confusion:**
- **Target**: Immediate confidence from first interaction
- **Red line**: If users pause to think "Can I click this?" we've failed
- **Design test**: Widget state instantly obvious, no learning curve for basic actions

**Trust vs. Skepticism:**
- **Target**: Trust earned in first offline sync (experts), first complete case (engineers), first 3 minutes (customers)
- **Red line**: One reliability failure = permanent trust damage
- **Design test**: Zero data loss tolerance. System always tells the truth about state.

**Calm Focus vs. Anxiety:**
- **Target**: Boringly predictable = anxiety-free operation
- **Red line**: If users feel they need to "be careful" or "watch out", we've added unnecessary anxiety
- **Design test**: No surprises. System behaves exactly as expected every time.

**Clarity vs. Confusion:**
- **Target**: One clear next action always visible
- **Red line**: Vague feedback ("something went wrong") creates confusion and stress
- **Design test**: Blocked cases show exact correction needed (neutral, factual - not "error" language)

**Muscle Memory vs. Relearning:**
- **Target**: Returning users operate on autopilot
- **Red line**: If returning users need to reorient themselves, consistency has failed
- **Design test**: Consistent patterns, no interface changes for novelty's sake, predictable locations

**Neutral Correction vs. Blame:**
- **Target**: Blocked cases feel like collaborative clarification, not user error
- **Red line**: Users feeling criticized or incompetent
- **Design test**: Language like "Please confirm heating type" not "Error: Invalid data"

### Design Implications

**Emotion-to-UX connections that guide design decisions:**

**1. Calm Confidence → Invisible Infrastructure**
- Auto-save never shown unless it fails
- Widget state visually obvious (color, icons, text - all redundant)
- Progress indicator always visible (Tab 3 of 7)
- No loading spinners unless absolutely necessary

**2. Immediate Reassurance → First-Screen Clarity**
- Widget opens with clear instructions: "We'll guide you through 7 sections. You can save and return anytime."
- Tab navigation shows all 7 tabs immediately (not progressive disclosure)
- Current tab highlighted, completed tabs marked, remaining tabs visible
- No overwhelming "feature tour" or tooltips on first use

**3. Trust Through Reliability → Zero Data Loss**
- Offline indicator always visible when offline
- "Draft saved" only shown after network interruption or error recovery
- Sync queue visible when pending (transparent, not hidden)
- Never hide system state - always show truth

**4. Neutral Corrections → Factual Language**
- Blocked case message: "Engineer Stefan: Please confirm heating type - Tab 2 shows Gas but photo appears to show oil tank"
- NOT: "Error: Invalid data submission"
- NOT: "Your submission was rejected"
- Tone: Collaborative clarification, never blame

**5. Muscle Memory → Predictable Patterns**
- Case list always shows same columns in same order
- Widget tabs always in same sequence
- Engineer dashboard actions always in same location
- No UI reorganization, no "smart" layouts that change

**6. Calm Focus → Minimal Cognitive Load**
- No unnecessary notifications
- No "tips" or "did you know?" interruptions
- No gamification (no badges, streaks, or celebrations)
- System stays out of the way

### Emotional Design Principles

**Core Rule:**
**The system must never require emotional energy from the user.**

**Guiding Principles:**

1. **Disappearing Tool** - Success = users stop thinking about the system and just do their job. Not "impressive software" but "nothing to worry about."

2. **Immediate Certainty** - Confidence within 2-3 minutes, not gradually built over time. Reassurance must come very early.

3. **Boringly Reliable** - Predictability > novelty. If it feels exciting, we've overdesigned it. Consistency enables muscle memory and calm focus.

4. **Trust Through Truth** - Always show system state honestly. Never hide reality to seem "polished." Transparency builds trust.

5. **Neutral Collaboration** - Corrections are factual clarifications, never errors or blame. Blocked cases feel like normal workflow states, not failures.

6. **Muscle Memory Respect** - Returning users operate on autopilot. No interface changes for novelty. Familiarity over cleverness.

7. **Nothing to Worry About** - Anxiety-free operation. Users never feel they need to "be careful." System prevents errors, not just reacts to them.

**Design Trade-off Hierarchy:**

**Reliability > Clarity > Speed**

If something has to be slower to be more reliable or clearer, that is always the right trade-off.

**Silence is Success:**

If the system does not demand attention, confirmation, or reassurance, that means it's doing its job. Notifications, indicators, and messages should exist only when something actually requires action.

**State Must Be Explicit, Never Inferred:**

Users should not "figure out" whether something is editable, saved, syncing, or blocked. The system should state it plainly and consistently.

**Errors Should Feel Impossible:**

If users encounter something that feels like an "error", that's already too late. Everything should feel like a normal, explainable state of the workflow.

**Familiarity Over Cleverness:**

No adaptive layouts, no smart rearranging, no novelty. Consistency is what enables muscle memory and calm focus.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**For Engineers (Stefan) - Case/Work Management:**

**1. Jira (when used simply, not over-configured)**

- Very clear state transitions (To do → In progress → Done)
- Engineers immediately understand what needs attention
- Lists and detail views are predictable and consistent
- No ambiguity about ownership or status

**What it does well:**
- Clear states
- One source of truth
- No surprises
- Fast to scan, fast to decide

**UX Success Analysis:**
- **Core problem solved**: Eliminates "what needs my attention?" mental overhead with clear state-based filtering
- **State clarity**: Visual distinction between states is unmistakable
- **Consistent structure**: Every issue has the same layout - no hunting for information
- **Fast scanning**: Engineers can review 10 issues in seconds because layout never changes
- **Clear ownership**: Never ambiguous who's responsible

**Key insight for Bauexperts CRM**: State transitions should be visually obvious and limited (Waiting → Submitted → Blocked → Completed). No intermediate states that add confusion.

**2. GitHub Issues / Pull Requests**

- Extremely clear visibility of state and history
- Everything relevant is in one place (context, discussion, changes)
- Read-only vs editable states are very clear
- Strong audit trail without being noisy

**What it does well:**
- Clear states
- One source of truth
- No surprises
- Fast to scan, fast to decide

**UX Success Analysis:**
- **Core problem solved**: Complete context in one view - no need to check emails, messages, or other systems
- **Timeline-based history**: Everything that happened is visible chronologically
- **Read-only vs editable is crystal clear**: Comment box appears = you can interact
- **Strong audit trail**: Every change is logged, but not noisy or overwhelming
- **Conversation + data in one place**: Discussion happens alongside the actual content

**Key insight for Bauexperts CRM**: The Activity Feed should combine system events + human messages in one chronological timeline. Engineers see complete case history without switching views.

---

**For Customers (Anna) - Transparency & Status Tracking:**

**1. Amazon Order Tracking**

- Customers always know "where things stand"
- Simple, human-readable statuses
- Progress is visible without needing to understand the backend
- Very reassuring even when something takes time

**What it does well:**
- Calm certainty
- Progress visibility
- Reassurance through clarity, not speed

**UX Success Analysis:**
- **Core problem solved**: Eliminates anxiety about "where is my order?" without requiring customer knowledge of logistics
- **Simple, human language**: "Order placed" not "Fulfillment initiated"
- **Progress without precision**: "Arriving Tuesday" not "ETA: 14:32:17 UTC"
- **Reassurance even when slow**: Customers see movement, trust the process
- **No action required from customer**: Passive monitoring, not active management

**Key insight for Bauexperts CRM**: Case status for customers should be human-readable ("Engineer reviewing your data" not "Status: IN_REVIEW"). Progress visibility = calm confidence.

**2. DHL / UPS Package Tracking**

- Timeline-based progress
- Clear current status + next expected step
- No technical language, no guessing

**What it does well:**
- Calm certainty
- Progress visibility
- Reassurance through clarity, not speed

**UX Success Analysis:**
- **Core problem solved**: Timeline shows "where you are" + "what's next" in one glance
- **Visual timeline**: Past → Current (highlighted) → Future steps shown
- **Current + next**: Always know what's happening now AND what comes next
- **No surprises**: Expected timeline shown upfront, deviations explained
- **Scannable at a glance**: Don't need to read paragraphs to understand status

**Key insight for Bauexperts CRM**: Widget progress (Tab 3 of 7) should show: completed tabs, current tab, remaining tabs. Activity feed shows: past events, current status, next expected action.

---

**For Experts (Markus) - Field Data Collection (Mobile/Offline):**

**1. Google Maps**

- Best-in-class offline handling
- Clear indication of offline vs online
- Data never feels "at risk"
- Sync happens silently when connection returns

**What it does well:**
- Offline-first reliability
- Invisible auto-save
- Trust earned through consistency

**UX Success Analysis:**
- **Core problem solved**: Users never worry "will this work without internet?" - it just does
- **Offline indicator always visible**: Small icon shows connection status
- **Offline data pre-downloaded**: Maps available before you need them
- **Seamless online/offline transition**: No jarring mode switches
- **Sync happens silently**: When online, updates without user action

**Key insight for Bauexperts CRM**: Offline indicator must be persistent and subtle. Experts should see sync status clearly but not intrusively. Data loss = trust death.

**2. Apple Notes / Apple Photos**

- Extremely reliable offline
- Auto-save is invisible
- Users never worry about losing data
- Simple, predictable UI on mobile/tablet

**What it does well:**
- Offline-first reliability
- Invisible auto-save
- Trust earned through consistency

**UX Success Analysis:**
- **Core problem solved**: Users never think "did that save?" - trust is absolute
- **Auto-save is invisible**: No "saving..." spinners, no confirmation dialogs
- **Sync shown only when relevant**: Syncing indicator appears briefly, then disappears
- **Zero data loss in 99.9% of use**: Reliability builds permanent trust
- **Simple, predictable UI**: No clever features, no surprises

**Key insight for Bauexperts CRM**: Auto-save should be silent. Only show "Draft saved" after error recovery or network interruption. Normal operation = invisible infrastructure.

**3. Survey / Inspection Apps**

- Step-by-step data entry
- Clear progress indication
- Optimized for field work, not desktop thinking

**What it does well:**
- Offline-first reliability
- Invisible auto-save
- Trust earned through consistency

**UX Success Analysis:**
- **Core problem solved**: Field workers complete complex data entry efficiently on tablets
- **Step-by-step progression**: One section at a time, not overwhelming full form
- **Touch-optimized controls**: Large tap targets, minimal typing
- **Clear progress**: "Question 5 of 12" always visible
- **Offline-first**: Assume no connectivity, sync later

**Key insight for Bauexperts CRM**: 7-tab widget should be optimized for mobile/tablet touch. Large tap targets, minimal typing, camera integration for photos. Tab-by-tab progression prevents overwhelm.

---

**Overall UX Inspiration Theme:**

- Boringly reliable
- Clear states, always visible
- One source of truth
- No excitement, no cleverness
- Users never feel the need to "be careful"

These patterns focus on **behavior, state clarity, reliability, and predictability** - not visual style or branding.

### Transferable UX Patterns

**Navigation Patterns:**

**1. State-based filtering (from Jira)**
- **Pattern**: Engineer dashboard filters by case state - "Needs attention" shows only Submitted + Blocked cases
- **Solves**: "What should I work on next?" without mental effort
- **Application**: Engineers see action-required cases first, not all cases
- **Supports**: Control without mental effort emotional goal

**2. Timeline-based progress (from DHL/UPS, Amazon)**
- **Pattern**: Activity feed shows past → current → next expected action
- **Solves**: Customer uncertainty about "what's happening?"
- **Application**: Case detail view shows chronological timeline of all events
- **Supports**: Calm certainty and transparency emotional goals

**3. Tab-based sectioning (from Survey apps)**
- **Pattern**: 7-tab widget breaks complex form into manageable chunks
- **Solves**: Customer overwhelm from seeing all requirements at once
- **Application**: Widget tabs separate building data into logical sections
- **Supports**: Immediate certainty and approachable emotional goals

---

**Interaction Patterns:**

**1. Read-only vs editable clarity (from GitHub)**
- **Pattern**: Visual distinction between locked (Submitted) and editable (Draft, Blocked) widget states
- **Solves**: User confusion about "Can I edit this?"
- **Application**: Submitted widget shows all data but no input fields. Blocked state shows input fields.
- **Supports**: Zero cognitive load and state must be explicit principles

**2. Silent auto-save (from Apple Notes)**
- **Pattern**: Data persists automatically, no confirmation needed
- **Solves**: User anxiety about data loss
- **Application**: Widget auto-saves on every field change (especially offline)
- **Supports**: Invisible infrastructure and nothing to worry about principles

**3. Offline-first with visible sync (from Google Maps)**
- **Pattern**: Work offline, subtle indicator shows connection status, sync happens automatically
- **Solves**: Expert field work without reliable connectivity
- **Application**: Offline icon visible when disconnected, sync queue shows pending changes
- **Supports**: Trust through reliability and professional confidence emotional goals

**4. Progress always visible (from Survey apps, DHL)**
- **Pattern**: "Tab 3 of 7" or "Step 2: Submit data" constantly shown
- **Solves**: User uncertainty about "how much is left?"
- **Application**: Widget tab bar shows all 7 tabs with current/completed/remaining states
- **Supports**: Calm focus and clear progress feedback principles

---

**Visual Patterns:**

**1. Status badges/labels (from Jira, Amazon)**
- **Pattern**: Color-coded, text-labeled status ("Waiting for data", "Data submitted", "Blocked", "Completed")
- **Application**: Case list and case detail show current state with color + icon + text
- **Supports**: Immediate confidence emotional goal
- **Aligns with**: Explicit state communication requirement

**2. Chronological activity timeline (from GitHub, package tracking)**
- **Pattern**: System events + user messages in one feed, newest last
- **Application**: Activity feed combines "Engineer started review" + "Customer: I have a question" in one timeline
- **Supports**: Trust through transparency emotional goal
- **Aligns with**: Single source of truth architecture

**3. Minimal, consistent layout (from Apple products)**
- **Pattern**: Predictable locations, no adaptive rearranging
- **Application**: Case list columns always same order, widget tabs never reorder, dashboard sections fixed
- **Supports**: Muscle memory respect emotional goal
- **Aligns with**: Familiarity over cleverness principle

### Anti-Patterns to Avoid

**1. Multiple Intermediate States**
- **Anti-pattern**: To Do → In Progress → In Review → QA → Approved → Done (too many states)
- **Why avoid**: Creates confusion about "where are we really?" and increases cognitive load
- **For Bauexperts**: Stick to exactly 4 states - Waiting for data, Data submitted, Blocked, Completed. No "In Review" or intermediate statuses.

**2. Separate Notification/Messaging Systems**
- **Anti-pattern**: Notification bell + separate messages tab + email notifications all showing different information
- **Why avoid**: Forces users to check multiple places to understand what's happening
- **For Bauexperts**: Activity feed is the only timeline - system events and messages in one place

**3. Ambiguous Edit States**
- **Anti-pattern**: Grayed-out fields that might be editable "if you click the right button"
- **Why avoid**: Users waste time testing editability instead of working
- **For Bauexperts**: Locked = completely read-only with clear visual distinction. Editable = input fields visible.

**4. Hidden Progress / "Smart" Wizards**
- **Anti-pattern**: Progressive disclosure that hides future steps until current step completes
- **Why avoid**: Users don't know "how much is left?" which creates anxiety
- **For Bauexperts**: All 7 tabs visible from the start. Progress indicator always present.

**5. Manual Save Buttons**
- **Anti-pattern**: "Save Draft" button that users must remember to click
- **Why avoid**: Creates anxiety about data loss and requires emotional energy
- **For Bauexperts**: Auto-save is automatic and invisible. No "Save" button exists.

**6. Optimistic UI That Hides Problems**
- **Anti-pattern**: Show success immediately, silently retry failures in background
- **Why avoid**: Conflicts with "Trust Through Truth" - users need to know actual state
- **For Bauexperts**: Offline indicator always visible. Sync failures shown clearly. Never lie about state.

**7. Adaptive/Smart Layouts**
- **Anti-pattern**: Dashboard that rearranges based on "importance" or usage patterns
- **Why avoid**: Destroys muscle memory, forces users to reorient every time
- **For Bauexperts**: Case list columns always in same order. Widget tabs never reorder. Predictable = reliable.

**8. Feature Tours / Onboarding Wizards**
- **Anti-pattern**: Multi-step tutorial on first login explaining every feature
- **Why avoid**: Conflicts with "immediate certainty" - UI should be self-explanatory
- **For Bauexperts**: Widget opens with simple instruction text. No tutorial. First 3 minutes determine success.

**9. Gamification Elements**
- **Anti-pattern**: Badges, streaks, "You completed 5 cases today!" celebrations
- **Why avoid**: Adds excitement when we want calm focus. Creates noise.
- **For Bauexperts**: Quiet satisfaction. No celebrations. System stays out of the way.

**10. Confirmation Dialogs for Normal Actions**
- **Anti-pattern**: "Are you sure you want to submit?" for expected actions
- **Why avoid**: Implies user might make a mistake, creates anxiety and friction
- **For Bauexperts**: Validation prevents invalid submission. No confirmations for normal workflow.

**11. Loading Spinners Everywhere**
- **Anti-pattern**: Show spinner for every network request, even fast ones
- **Why avoid**: Creates perception of slowness, draws attention to infrastructure
- **For Bauexperts**: Only show loading for operations > 500ms. Invisible infrastructure.

### Design Inspiration Strategy

**What to Adopt (Directly):**

**1. State-based filtering (Jira)**
- **Implementation**: Engineer dashboard "Needs attention" filter shows Submitted + Blocked cases only
- **Because**: Supports "control without mental effort" for engineers
- **Adoption approach**: Direct implementation - this pattern works as-is

**2. Chronological activity timeline (GitHub)**
- **Implementation**: All case events in one feed, newest last
- **Because**: Single source of truth, supports transparency emotional goal
- **Adoption approach**: Direct implementation - combine system events + human messages

**3. Silent auto-save (Apple Notes)**
- **Implementation**: Data persists automatically, no user action required
- **Because**: Invisible infrastructure, zero emotional energy required
- **Adoption approach**: Direct implementation - save on every field change, show nothing unless error

**4. Offline-first architecture (Google Maps)**
- **Implementation**: Offline indicator visible, data syncs automatically when connected
- **Because**: Professional confidence for experts, zero tolerance for data loss
- **Adoption approach**: Direct implementation - service worker + local storage + sync queue

---

**What to Adapt (For Bauexperts Context):**

**1. Progress timeline (DHL/UPS)**
- **Adapt as**: "Tab 3 of 7" widget progress + Activity feed showing current status
- **Modify for**: 7-tab widget structure specific to Energieausweis
- **Simplify for**: Non-technical customers need plain language, not logistics terms
- **Adaptation approach**: Extract progress visibility principle, apply to widget tabs

**2. Read-only vs editable states (GitHub)**
- **Adapt as**: Locked widget (Submitted) vs editable widget (Draft, Blocked)
- **Modify for**: Widget-specific editability rules, not just text fields
- **Strengthen for**: Customers must never wonder "Can I edit this?"
- **Adaptation approach**: Make state even more obvious - color + icon + text + visual layout change

**3. State badges (Jira, Amazon)**
- **Adapt as**: Color + icon + text labels for case status
- **Modify for**: Bauexperts workflow states (Waiting/Submitted/Blocked/Completed)
- **Simplify for**: Customers see friendlier language than engineers ("Being reviewed" vs "Submitted")
- **Adaptation approach**: User-role-specific language, same underlying state

---

**What to Avoid (Explicitly):**

**1. Multiple intermediate states**
- **Conflicts with**: State clarity goal
- **Decision**: Keep exactly 4 states, no more

**2. Separate communication channels**
- **Conflicts with**: Single source of truth
- **Decision**: Activity feed only, no separate notifications or messages

**3. Smart/adaptive layouts**
- **Conflicts with**: Muscle memory respect
- **Decision**: Fixed, predictable layouts always

**4. Confirmation dialogs for normal actions**
- **Conflicts with**: Calm focus
- **Decision**: Validation prevents errors, not confirmations

**5. Manual save buttons**
- **Conflicts with**: Invisible infrastructure
- **Decision**: Auto-save only, silent and automatic

**6. Feature tours or tooltips**
- **Conflicts with**: Immediate certainty
- **Decision**: UI must be self-explanatory from first interaction

**7. Gamification elements**
- **Conflicts with**: Boring reliability
- **Decision**: No badges, no celebrations, no unnecessary feedback

---

**Strategy Summary:**

This strategy guides every UX decision while keeping Bauexperts CRM unique. We're not copying visual style or branding - we're extracting behavioral patterns that support our emotional north star of "calm confidence" and "boringly reliable."

**Core principle: Behavior > Appearance**
- State clarity matters more than visual design
- Reliability matters more than features
- Predictability matters more than novelty

**Implementation priorities:**
1. State clarity (4 states only, always visible)
2. Timeline as single source of truth (activity feed)
3. Offline reliability (zero data loss tolerance)
4. Silent auto-save (invisible infrastructure)
5. Progress visibility (Tab X of 7 always shown)
6. Consistent layouts (muscle memory over cleverness)

## Design System Foundation

### Design System Choice

**Selected: shadcn/ui + Tailwind CSS**

**Technology Stack:**
- **shadcn/ui**: Component collection built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives (foundation layer)
- **TypeScript**: Type-safe component development

**Architecture:**
- Components are **copied into the project** (not installed as npm dependency)
- Full ownership and customization of all UI components
- No runtime dependency bloat
- Tree-shakeable - only ship components actually used

### Rationale for Selection

**Primary Decision Factors:**

**1. Aligns with "Boringly Reliable" Philosophy**
- Uses battle-tested Radix UI primitives proven across GitHub, Vercel, and other major platforms
- Predictable interaction patterns users already know
- No clever innovations - just solid, familiar components

**2. Supports "Muscle Memory Over Cleverness"**
- Component behavior is consistent and predictable
- No adaptive or "smart" UI patterns
- Standard interactions users have seen in other professional tools

**3. Enables Offline-First Architecture**
- No runtime CSS-in-JS dependencies
- Components compile directly into app bundle
- Perfect for service worker caching and offline reliability
- Critical for expert field work without connectivity

**4. Accessibility Built-In (Zero Effort)**
- Radix UI handles keyboard navigation automatically
- ARIA attributes managed correctly by default
- Focus management works without custom code
- Screen reader support built-in
- **Result**: Accessibility compliance without requiring emotional energy from developers

**5. Minimal Bundle Size**
- Only components actually used are included in bundle
- No massive framework overhead
- Faster load times on mobile (critical for customers and experts)
- Supports "Mobile-First Reliability" emotional goal

**6. Customizable Without Complexity**
- Tailwind utilities enable styling adjustments
- Component behavior stays consistent (no need to override complex logic)
- Can match brand colors/spacing without rebuilding components
- Customization doesn't break accessibility or keyboard nav

**7. Fits Next.js Ecosystem Perfectly**
- Designed for React Server Components
- Works seamlessly with Next.js 16+ architecture
- No compatibility friction
- Community support strong within Next.js ecosystem

**8. Speed of MVP Delivery**
- Copy component, use component - no configuration overhead
- Excellent documentation with copy-paste examples
- Reduces time spent on UI infrastructure
- Team can focus on business logic and workflow reliability

**9. Long-Term Maintainability**
- Components are owned by project (not locked to external dependency versions)
- Can fix bugs or adjust behavior without waiting for library updates
- No breaking changes from npm package updates
- Full control over maintenance timeline

**10. No Heavy Framework Lock-In**
- Components are source code in your repo
- Not dependent on shadcn/ui organization continuing to exist
- Can migrate individual components if needed
- Reduces long-term technical risk

---

**Why NOT Ant Design (Alternative Considered):**

While Ant Design has excellent enterprise components, it was rejected because:
- Heavier bundle size (conflicts with mobile-first reliability)
- More opinionated design language (less customizable without effort)
- Dependency lock-in (harder to migrate away if needed)
- Runtime overhead from comprehensive component library
- **Can still adopt later** if table/form abstractions prove necessary (pragmatic fallback)

### Implementation Approach

**Phase 1: Initial Setup**

1. **Install shadcn/ui CLI and initialize:**
   ```bash
   npx shadcn@latest init
   ```
   - Configure Tailwind CSS
   - Set up path aliases (@/components)
   - Configure theme tokens (colors, spacing, typography)

2. **Install core components needed for MVP:**
   - Button (case actions, widget navigation)
   - Card (case list items, widget container)
   - Tabs (7-tab widget structure)
   - Badge (case status indicators)
   - Form components (Input, Select, Textarea for widget fields)
   - Dialog (blocked case explanations, confirmations if needed)
   - Toast (error notifications, offline indicators)

3. **Establish component organization:**
   ```
   /components
     /ui              # shadcn/ui components (generated)
     /features        # Bauexperts-specific components
       /widget        # 7-tab widget components
       /case          # Case list, case detail
       /activity-feed # Activity timeline
   ```

**Phase 2: Component Customization**

1. **Configure design tokens** (tailwind.config.js):
   - Primary colors (case status states: waiting, submitted, blocked, completed)
   - Semantic colors (success, warning, error, neutral)
   - Typography scale (optimized for readability on mobile/tablet)
   - Spacing scale (touch-friendly tap targets on mobile)
   - Border radius (consistent corner rounding)

2. **Extend base components** where needed:
   - **StatusBadge** (wraps shadcn Badge with case status styling)
   - **WidgetTab** (wraps shadcn Tabs with progress indicators)
   - **OfflineIndicator** (custom component using shadcn Toast patterns)
   - **ActivityFeedItem** (custom timeline component)

3. **Establish component patterns:**
   - All interactive elements use shadcn/ui base components
   - Custom business logic components **compose** shadcn primitives
   - Never override Radix UI behavior (accessibility would break)

**Phase 3: Accessibility Validation**

1. **Automated testing:**
   - axe-core integration for accessibility regression testing
   - Lighthouse CI for ongoing compliance monitoring

2. **Keyboard navigation verification:**
   - Tab order through 7-tab widget
   - Focus indicators on all interactive elements
   - Escape key behavior in dialogs/modals

3. **Screen reader testing:**
   - NVDA/JAWS testing on engineer dashboard
   - VoiceOver testing on mobile widget (customers, experts)

**Phase 4: Offline Capability Integration**

1. **Service worker setup:**
   - Cache shadcn/ui component styles
   - Cache Tailwind CSS bundle
   - Offline-first caching strategy for all UI assets

2. **Local storage integration:**
   - Widget draft data persistence
   - Sync queue for pending submissions
   - Offline indicator state management

### Customization Strategy

**What We Customize:**

**1. Color Palette (Design Tokens)**

Replace shadcn/ui default colors with Bauexperts case workflow semantics:

- **Primary**: Brand color (if exists, otherwise neutral professional blue)
- **Status colors**:
  - `status-waiting`: Yellow/amber (not started, needs action)
  - `status-submitted`: Blue (in progress, under review)
  - `status-blocked`: Orange/red (attention required, corrections needed)
  - `status-completed`: Green (finished, successful)
- **Semantic colors**:
  - `success`: Green (successful actions)
  - `warning`: Orange (soft validation warnings)
  - `error`: Red (hard validation errors, sync failures)
  - `neutral`: Gray scale (default UI elements)

**Rationale**: Color-coded status supports "immediate confidence" emotional goal (users understand state in < 1 second).

---

**2. Typography Scale**

Optimize for mobile/tablet readability and professional clarity:

- **Headings**: Clear hierarchy for case titles, section headers
- **Body text**: 16px minimum (mobile readability, accessibility)
- **Form labels**: 14px medium weight (clear field identification)
- **Helper text**: 12px (validation messages, instructions)
- **Monospace**: Case IDs, technical data (engineer dashboard)

**Rationale**: Supports "minimal cognitive load" - text is always readable without zooming or strain.

---

**3. Spacing & Touch Targets**

Mobile-optimized spacing for expert tablet use:

- **Tap targets**: Minimum 44x44px (Apple/Android guidelines)
- **Spacing between interactive elements**: 8px minimum
- **Form field height**: 48px (comfortable touch on tablets)
- **Button sizes**: Large (48px height) on mobile, medium (40px) on desktop

**Rationale**: Supports "effortless interactions" on tablet for expert field work.

---

**4. Border Radius**

Consistent corner rounding for professional aesthetic:

- **Small**: 4px (badges, tags)
- **Medium**: 8px (buttons, inputs, cards)
- **Large**: 12px (dialogs, modals, containers)

**Rationale**: Subtle rounding feels modern but not playful (professional tool, not consumer app).

---

**What We Do NOT Customize:**

**1. Component Behavior**
- Never override Radix UI interaction patterns
- Keep keyboard navigation as-is (Tab, Enter, Escape, Arrow keys)
- Preserve ARIA attributes and screen reader announcements
- Maintain focus management logic

**Rationale**: Accessibility and predictability depend on standard behavior. "Familiarity over cleverness."

---

**2. Animation & Transitions**
- Keep shadcn/ui default transitions (fast, subtle)
- No custom animations or elaborate transitions
- Avoid attention-grabbing effects

**Rationale**: Supports "calm focus" emotional goal. System should be quiet and unobtrusive.

---

**3. Layout Primitives**
- Use Tailwind's flex/grid utilities as-is
- No custom layout abstractions
- Standard responsive breakpoints (sm, md, lg, xl)

**Rationale**: Predictable layouts using industry-standard patterns. Developers and designers know how Tailwind works.

---

**Customization Philosophy:**

**"Adjust appearance, preserve behavior"**

- Colors, spacing, typography → Customizable (visual brand alignment)
- Interaction patterns, accessibility, keyboard nav → Never customize (standard behavior = muscle memory)

**Trade-off Hierarchy:**

1. **Accessibility > Appearance** - If customization breaks accessibility, don't do it
2. **Behavior consistency > Visual uniqueness** - Predictable interactions > novel UI
3. **Performance > Polish** - Fast, reliable > animated, fancy

---

**Implementation Checklist:**

- [ ] Install shadcn/ui and configure Tailwind
- [ ] Define design tokens (colors, typography, spacing)
- [ ] Install core components (Button, Card, Tabs, Badge, Form, Dialog, Toast)
- [ ] Create component organization structure
- [ ] Build StatusBadge component (extends shadcn Badge)
- [ ] Build WidgetTab component (extends shadcn Tabs with progress)
- [ ] Build OfflineIndicator component
- [ ] Configure accessibility testing (axe-core, Lighthouse CI)
- [ ] Test keyboard navigation across all components
- [ ] Test screen reader compatibility (NVDA/VoiceOver)
- [ ] Integrate service worker for offline CSS caching

## Defining User Experience

### Defining Experience

**Core Interaction: "Fill the 7-tab Energieausweis widget to provide complete building data"**

This is the defining experience of Bauexperts CRM - the universal touchpoint where all three user types interact with the system:

- **Customers** fill it to provide building information
- **Experts** collect data on-site via the widget on tablets
- **Engineers** review submitted widget data to make decisions

**If we nail this ONE interaction - the widget data collection experience - everything else follows.**

When users describe Bauexperts CRM to their friends, they'll say:
- **Customers**: "They walked me through exactly what they needed, tab by tab. It was actually clear."
- **Experts**: "I could fill everything on-site on my tablet, even without internet. It just saved automatically."
- **Engineers**: "All the data is right there in the widget. I can review and decide in minutes, not hours."

**Why this is the defining experience:**

This single interaction is the heart of the system because:
- Customers are guided step by step and know exactly what is needed
- Experts can reliably collect complete data on-site (even offline)
- Engineers can review everything in one structured view and decide quickly

If the widget experience works flawlessly:
- Coordination chaos disappears
- Transparency comes for free
- Adoption happens naturally

Everything else (dashboards, notifications, activity feed) exists only to support this core loop.

**If we nail the 7-tab widget experience, the product succeeds. If we fail there, nothing else can compensate.**

### User Mental Model

**Customers (Anna) - Current Approach:**

**How they currently solve this:**
- Email exchanges with photos attached
- Phone calls with engineers asking "what do you mean by heating type?"
- Uncertainty about whether they provided everything needed

**Mental model they bring:**
- "Forms are confusing"
- "I'll probably forget something"
- Anxiety about technical requirements

**Their expectation:**
- Progressive disclosure - "Show me one thing at a time, tell me exactly what you need"
- Clear instructions with examples
- Confirmation that they did it right

**Where they get confused/frustrated:**
- Technical terminology without explanations
- Not knowing what photos to take or how to frame them
- Uncertainty about completion - "Did I give them everything?"
- Fear of rejection - "What if I did it wrong?"

**What they love/hate about current solutions:**
- **Love about package tracking**: Always know where they are in the process, transparent status
- **Hate about forms**: "Submit" button when they're not sure if they filled everything correctly, surprise validation errors

---

**Experts (Markus) - Current Approach:**

**How they currently solve this:**
- Paper checklist on-site → photos on phone → type everything into email later → hope nothing was missed
- Unstructured data capture leads to follow-up questions

**Mental model they bring:**
- "I'll capture everything on-site, organize it later"
- Professional pride in complete, accurate data collection
- Frustration with tools that don't work in the field

**Their expectation:**
- Checklist they can complete while walking through building
- Offline-first (connectivity not guaranteed on-site)
- Professional tool that makes them look competent to clients

**Where they get frustrated:**
- Losing data due to app crashes or connectivity issues
- Forgetting which room a photo is from
- Client asks "did you get everything?" and they're not 100% certain
- Unprofessional email submission process

**What they love/hate about current solutions:**
- **Love about field apps**: Works offline, auto-saves, organized structure, fast camera access
- **Hate about email**: Unstructured, easy to forget items, unprofessional handoff, no confidence in completeness

---

**Engineers (Stefan) - Current Approach:**

**How they currently solve this:**
- Hunt through email thread for attachments
- Open 15 photos, cross-reference with text descriptions
- Message customer "can you clarify heating system type?"
- Spend 60% of time coordinating instead of doing technical work

**Mental model they bring:**
- "Where's the heating system photo?" → scroll email → "Is this the right one?" → uncertainty
- Expectation that data will be incomplete or unclear
- Resignation to follow-up questions being necessary

**Their expectation:**
- All data in one structured view
- Click through tabs like reviewing a form
- Complete context without switching between email/attachments/notes

**Where they get frustrated:**
- Missing information discovered mid-review (wasted time)
- Having to ask follow-up questions (delays case completion)
- Unclear or contradictory data (photo shows oil heating, text says gas)
- Email archaeology to find specific attachment

**What they love/hate about current solutions:**
- **Love about Jira/GitHub**: Everything in one view, clear structure, complete context, fast scanning
- **Hate about email**: Scattered information, attachments in separate thread from descriptions, no structure, slow to review

### Success Criteria

**What makes users say "this just works":**

**For Customers:**

1. **Tab 1 opens** → Instructions are immediately clear → "Oh, this is what you need. I can do this."
2. **They fill a field** → Auto-saved silently → They never think "did that save?"
3. **They complete Tab 2** → Tab shows "✓ Complete" → They feel progress
4. **They try to submit incomplete widget** → Validation shows exactly what's missing → No surprise rejection
5. **They submit widget** → Confident data is complete → "I gave them everything they asked for"
6. **After submission** → Widget still visible in read-only mode → "I can always check what I sent"

**For Experts:**

1. **Site loses connectivity** → Widget shows offline icon → They continue working without anxiety
2. **They take 20 photos** → All organized by tab/section → No confusion later about which photo is which
3. **They finish inspection** → Submit button active → "I know I got everything"
4. **They get back to office** → Data syncs automatically → "Professional handoff delivered"
5. **Client asks "did you get everything?"** → Expert opens widget → Reviews all data → "Yes, all here"

**For Engineers:**

1. **Case appears "Data submitted"** → Click to review → Widget opens with all 7 tabs filled
2. **They scan Tab 2 (Heating)** → Data + photo both visible → No hunting for attachments
3. **Something unclear** → Click "Block" → Write message → Widget unlocks for customer
4. **Data is complete** → Click "Complete" → Upload PDF → Done in 10 minutes vs 1 hour with email
5. **Colleague needs to take over case** → Opens case → Complete context immediately available → Zero handoff time

---

**When do they feel smart or accomplished:**

- **Customers**: "I filled that whole thing and knew exactly what to do at every step. It wasn't confusing like I expected."
- **Experts**: "Clean inspection, zero follow-up questions needed. I look professional."
- **Engineers**: "Reviewed 5 cases before lunch - used to take all day. I'm actually doing technical work now."

---

**What feedback tells them they're doing it right:**

**Progress visibility:**
- "Tab 3 of 7" always visible
- Completed tabs show green checkmark ✓
- Progress counter: "4 of 7 tabs completed"

**Field-level feedback:**
- Green checkmark ✓ next to valid required field
- Orange warning icon ⚠ next to soft validation issue (doesn't block submission)
- Red error icon ✗ next to hard validation error (blocks submission)
- Helper text below field explains what's needed or what's wrong

**Tab-level feedback:**
- Completed tab shows green checkmark in tab label
- Current tab highlighted with blue underline
- Incomplete tabs show just tab number

**Submit readiness:**
- Submit button disabled (gray) when hard validation fails
- Submit button enabled (blue, prominent) when all hard validation passes
- Text below button: "All required information provided" or "3 required fields remaining"

**Success confirmation:**
- "Data submitted - Engineer will review your information"
- Case status changes to "Data submitted"
- Activity feed shows: "You submitted building data - [timestamp]"

---

**How fast should it feel:**

- **Field changes**: Instant feedback (< 100ms)
- **Tab switching**: Instant (< 100ms, no loading spinner)
- **Auto-save**: Silent, no visible delay
- **Submit**: < 1 second to confirmation
- **Sync (offline to online)**: Background, non-blocking, subtle indicator only

**Performance targets align with "boringly reliable":**
- Not impressive speed, just fast enough to feel responsive
- No loading spinners that draw attention to infrastructure
- Calm, predictable performance

---

**What should happen automatically (invisible infrastructure):**

1. **Auto-save** on every field change (debounced 500ms)
2. **Tab completion detection** (mark tab ✓ when all required fields filled)
3. **Offline sync** when connection restored
4. **Validation** as user types (soft warnings immediately, hard validation on submit)
5. **Progress tracking** (current tab highlighted, completed tabs marked, progress counter updated)
6. **Draft recovery** (if browser crashes, draft persists - user returns and continues)
7. **Photo thumbnail generation** (uploaded photos show thumbnails automatically)

**Critical principle: These automations must be invisible. If users notice them working, they're too noisy.**

### Novel vs. Established UX Patterns

**Pattern Classification: ESTABLISHED patterns executed with discipline**

This is NOT novel interaction design. This is disciplined application of familiar patterns users already know.

**Established Patterns We're Using:**

**1. Tab-based progression**
- **Familiar from**: Forms, settings panels, checkout flows, AWS console, Gmail settings
- **User understanding**: Tabs = sections, click to navigate between them
- **Learning curve**: None - universal pattern

**2. Form filling with validation**
- **Familiar from**: Every web form ever, Google Forms, Typeform, checkout processes
- **User understanding**: Fill field, get feedback, submit when complete
- **Learning curve**: None - foundational web interaction

**3. Progress indicators**
- **Familiar from**: Surveys (SurveyMonkey), onboarding flows, checkout processes, Stripe payment
- **User understanding**: "Step 3 of 7" or "Tab 3 of 7" shows progress toward completion
- **Learning curve**: None - common pattern

**4. Read-only vs editable states**
- **Familiar from**: GitHub issues/PRs, Google Docs suggestion mode, Jira ticket views
- **User understanding**: If you see input fields = you can edit. If you see text only = read-only.
- **Learning curve**: None - standard pattern across collaborative tools

**5. Auto-save**
- **Familiar from**: Google Docs, Notion, Gmail drafts, modern email clients
- **User understanding**: Changes save automatically without clicking "Save"
- **Learning curve**: None - expected behavior in modern web apps

---

**Our Unique Twist: NOT Innovation, but EXECUTION**

We're not inventing new patterns. We're applying familiar patterns with **discipline and clarity** that eliminates confusion:

**1. State clarity discipline**
- Only 4 states (Waiting → Submitted → Blocked → Completed), no ambiguity
- State always visible via color + icon + text (redundant clarity)
- Transitions are explicit, never inferred

**2. Editability discipline**
- Submitted = completely locked (no input fields visible at all)
- Blocked = completely editable (all relevant fields become inputs again)
- No hybrid state where "some fields locked, some editable" (that creates confusion)

**3. Progress discipline**
- All 7 tabs always visible (no progressive disclosure hiding future tabs)
- Progress indicator never hidden
- Completed tabs stay marked (visual persistence of accomplishment)

**4. Offline discipline**
- Works offline by default, not as "special mode"
- Offline state always indicated (small persistent icon)
- No "you're offline" modal blocking work (just indicator + automatic sync when back online)

**5. Read-only reassurance discipline**
- After submission, widget stays fully visible forever (not hidden or collapsed)
- All tabs remain accessible for review
- Data displayed exactly as entered (memory aid + confidence builder)

---

**Why Established Patterns Win Here:**

**No user education required:**
- First-time users understand the widget immediately
- Patterns behave like Jira, GitHub, Google Forms - tools they've used hundreds of times
- Zero learning curve = immediate confidence (supports "2-3 minute success" emotional goal)

**Muscle memory from other tools:**
- Tab navigation works like every other tabbed interface
- Form validation works like every other form
- Auto-save works like Google Docs
- Users don't think about the tool, they focus on their task

**Predictable behavior = calm confidence:**
- No surprises, no clever tricks, no "smart" adaptations
- System behaves exactly as users expect based on prior experience
- Supports "boringly reliable" emotional north star

---

**This is execution over innovation:**

- State clarity matters more than clever state management
- Predictable behavior matters more than novel interactions
- Discipline in applying standards matters more than inventing new patterns

**If users finish and think: "This just worked exactly as expected" - we've achieved the goal.**

### Experience Mechanics

**Detailed step-by-step flow for: "Fill the 7-tab Energieausweis widget to provide complete building data"**

---

### 1. Initiation: How the user starts this action

**Customer Path:**

1. **Trigger**: Purchases Energieausweis service online → Case automatically created → Status: "Waiting for data"
2. **Invitation**: Receives notification: "Please provide building information for your Energieausweis"
3. **Entry point**: Clicks notification → Lands on Case Detail page
4. **First impression**: Sees widget with clear instruction banner at top:
   - **"We'll guide you through 7 sections to collect building information. Fill out what you know. You can save and return anytime."**
5. **Starting state**: Widget shows Tab 1 (Building Address) already open and active

**Visual cues:**
- Widget is prominent (center of page, clear container)
- Tab 1 highlighted (blue underline)
- Submit button visible but disabled (gray) - shows end goal
- Progress indicator: "Tab 1 of 7" - establishes scope

---

**Expert Path:**

1. **Trigger**: Internal team assigns case to expert → Expert receives notification
2. **Entry point**: Expert opens "My Cases" dashboard on tablet → Sees assigned case
3. **Call to action**: Taps "Fill building data" button (blue, prominent)
4. **First impression**: Widget opens on Tab 1, same instruction text
5. **Context**: Expert mode indicated subtly (metadata shows "Assigned to Expert [Name]" but widget UI identical)

**Same widget structure (universal widget):**
- No separate "expert UI" - same 7 tabs, same fields, same instructions
- Only difference: Metadata tracking ("Filled by Expert [Name]")

---

**Triggers and Invitations:**

- **Clear call-to-action**: "Provide building data" (customers) or "Fill building data" (experts)
- **Status badge urgency**: "Waiting for data" in yellow/amber (creates urgency without pressure)
- **Widget preview**: "0 of 7 tabs completed" shown before opening (establishes scope, reduces overwhelm)
- **Expected timeline**: "Usually takes 15-20 minutes" (sets realistic expectation)

---

### 2. Interaction: What the user actually does

**Tab Navigation:**

**Desktop:**
- Horizontal tab bar shows all 7 tabs: `[1. Address ✓] [2. Heating] [3. Insulation] [4. Windows] [5. Ventilation] [6. Photos] [7. Notes]`
- Current tab highlighted with blue underline + white background
- Completed tabs show green checkmark ✓ + green tab label
- Incomplete tabs show tab number only, gray text
- Click any tab → Instant switch (< 100ms, no loading)

**Mobile/Tablet:**
- Dropdown selector shows current tab: "Tab 2: Heating System ▼"
- Tap dropdown → All 7 tabs appear in list with completion status
- Tap tab → Switch instantly
- Swipe left/right to navigate between tabs (native mobile gesture)

---

**Field Interaction:**

**Text input:**
- User clicks field → Field gains focus, blue border appears
- User types → Field updates instantly, character-by-character
- After 500ms pause → Auto-save triggers (silent)
- Required field filled correctly → Green checkmark ✓ appears next to field

**Dropdown/Select:**
- User clicks dropdown → Options appear below field
- User selects option → Selection updates instantly
- Dropdown closes, selected value shown
- Auto-save triggers after 500ms

**Photo upload:**
- **Desktop**: "Upload Photo" button → File picker opens → User selects image → Thumbnail appears
- **Mobile/Tablet**: Two buttons: "Take Photo" (opens camera) | "Choose from Library" (file picker)
- Photo captured/selected → Thumbnail appears with file name
- Multiple photos supported: Thumbnails appear in grid

**Camera integration (mobile/tablet):**
- "Take Photo" button tapped → Device camera opens natively
- Expert takes photo → Photo captured → Returns to widget
- Thumbnail appears immediately in Photos tab
- Photo added to upload queue (syncs when online)

---

**Auto-save Behavior:**

**Normal operation (online):**
- Every field change triggers auto-save after 500ms debounce
- **Completely silent** - no spinner, no toast, no indication
- User never thinks about saving

**Offline operation:**
- Field changes save to local storage (IndexedDB)
- First offline save shows toast once: "Working offline - draft saved locally"
- Subsequent saves silent (user already knows)
- Offline indicator (top-right) shows connection status

**Draft persistence:**
- User closes browser → Returns 2 days later → Draft still there, exact state preserved
- No "do you want to save?" dialog - already saved
- Supports "nothing to worry about" emotional goal

---

**Validation as User Works:**

**Soft Validation (Warnings, not blockers):**
- Orange warning icon ⚠ appears next to field
- Helper text: "This seems unusual - please confirm it's correct"
- Does NOT prevent moving to next tab
- Does NOT block submission
- Engineer sees warning when reviewing (flagged for extra attention)

**Example soft validations:**
- Building year is 1850 (unusual but valid)
- Heating type selected but no heating age provided
- No description in Additional Notes

**Hard Validation (Blockers):**
- Red error icon ✗ appears next to field
- Red border on field
- Helper text: "Required" or "Must be a number" or "Invalid format"
- Submit button stays disabled until all hard validation passes
- Can still navigate between tabs (not trapped)

**Example hard validations:**
- Required field empty
- Invalid format (letters in number field)
- Photo requirement not met (Tab 6 requires minimum 3 photos)

---

**Tab Completion Detection:**

**Automatic:**
- When all required fields in Tab 2 filled → Tab 2 automatically gets green checkmark ✓
- Progress counter updates: "2 of 7 tabs completed"
- User sees progress without manual "mark complete" action

**Visual feedback:**
- Tab label changes from gray "2" to green "2 ✓"
- Progress text updates: "Tab 2 of 7" → "2 of 7 tabs completed"
- Encourages forward momentum

---

**System Response Characteristics:**

- **Instant feedback**: All interactions < 100ms (field focus, typing, tab switching)
- **No loading spinners**: Tab switching instant (data already loaded client-side)
- **Smooth transitions**: Subtle, fast (shadcn/ui defaults - ~150ms fade)
- **Offline indicator**: Top-right corner shows connection status if offline (small icon, persistent but unobtrusive)
- **No blocking modals**: System never interrupts user flow with "Are you sure?" dialogs

---

### 3. Feedback: What tells users they're succeeding

**Progress Visibility (Always Present):**

**Tab bar visual:**
- `[✓ Address] [✓ Heating] [3 Insulation] [4] [5] [6] [7]`
- Completed tabs = green ✓, current tab = blue underline, remaining tabs = gray numbers

**Progress indicators:**
- Tab position: "Tab 3 of 7"
- Completion counter: "2 of 7 tabs completed"
- Submit button state: "3 required fields remaining" or "All required information provided"

---

**Field-Level Feedback:**

**Valid required field:**
- Green checkmark ✓ next to field label
- Green border briefly when validation passes
- Helper text: "" (no text needed, checkmark is sufficient)

**Soft validation warning:**
- Orange warning icon ⚠ next to field
- Orange border on field
- Helper text: "This seems unusual - please confirm it's correct"

**Hard validation error:**
- Red error icon ✗ next to field
- Red border on field
- Helper text: Clear explanation - "Required" | "Must be a number" | "Minimum 3 photos needed"

---

**Tab-Level Feedback:**

**Completed tab:**
- Green checkmark in tab label: "1. Address ✓"
- Green text color
- Feels like checking off a checklist item

**Current tab:**
- Blue underline + white background (highlighted)
- Bold text weight
- Clearly distinguished from other tabs

**Incomplete tab:**
- Gray tab number only: "4"
- No icon, neutral state
- Waiting to be completed

---

**Submit Readiness Feedback:**

**Submit button disabled (incomplete data):**
- Gray color (low contrast, clearly inactive)
- Text: "Submit Building Data"
- Helper text below: "3 required fields remaining" (exact count, not vague)

**Submit button enabled (ready to submit):**
- Blue color (prominent, clear call-to-action)
- Text: "Submit Building Data"
- Helper text below: "All required information provided ✓"
- User sees this and feels confident to submit

---

**How do they know when it's working:**

**Customers:**
- "I filled Tab 2 → green checkmark appeared → I'm making progress"
- "Progress counter says 2 of 7 → I'm about 1/3 done"
- "Submit button turned blue → I can submit now and I'm confident it's complete"

**Experts (offline):**
- Offline icon visible (top-right) → "System knows I'm offline, it's working"
- Fields still accept input → "It's working without internet"
- Photos appear in queue → "I can submit when I'm back online"
- No errors, no blocking → "Professional tool that works in the field"

**Engineers:**
- Widget loads with all 7 tabs filled → "Complete data, I can review immediately"
- Soft warnings highlighted in orange → "These need extra attention during review"
- No hard validation errors → "No missing required data, submission was clean"

---

**What happens if they make a mistake:**

**During filling:**

**Invalid input:**
1. User types "ABC" in number field → Red border appears + "Must be a number"
2. User corrects to "25" → Border turns green + checkmark ✓ appears
3. Auto-save happens 500ms later (silent)

**Accidental tab switch with unsaved changes:**
1. User filling Tab 2 → Accidentally clicks Tab 3
2. No problem - auto-save already happened (no data loss)
3. User clicks back to Tab 2 → Data still there

**Close browser accidentally:**
1. User filling widget → Browser crashes or closes
2. User returns hours later → Opens case
3. Widget shows exact state where they left off (draft persisted)

---

**After submission (Blocked case workflow):**

**Engineer finds issue:**
1. Engineer reviewing case → Sees heating type unclear
2. Engineer clicks "Block" button → Enters message: "Please confirm heating type - Tab 2 shows 'Gas' but photo appears to show oil tank"
3. Case status → "Blocked"

**Customer receives correction request:**
1. Customer receives notification: "Engineer requested clarification on your Energieausweis data"
2. Customer clicks notification → Opens case detail
3. Sees engineer's message prominently displayed
4. Widget automatically unlocks (editable again)
5. Clear indicator: "Update needed - Blocked by Engineer Stefan"

**Customer makes correction:**
1. Engineer's message directs to Tab 2 → Customer navigates to Tab 2
2. Sees heating type field (now editable again)
3. Reviews photo → "Oh, that is oil, not gas"
4. Corrects field to "Oil" → Auto-saves
5. Clicks "Re-submit" button → Widget locks again, status → "Data submitted"

**Key principle: Blocked state feels like collaborative clarification, NOT user error or failure.**

---

### 4. Completion: How users know they're done

**Submit Action Flow:**

**User clicks "Submit Building Data" button:**
1. Button shows loading state (< 1 second): "Submitting..." with subtle spinner
2. Validation runs one final time (hard validation only - soft warnings don't block)
3. Data posted to server (or queued for sync if offline)
4. Success confirmation appears

**Success confirmation:**
- Toast/banner appears: "Data submitted - Engineer will review your information"
- Widget immediately transitions to read-only state
- Case status badge changes: "Waiting for data" → "Data submitted" (yellow → blue)
- Activity feed updates: "You submitted building data - [timestamp]"

---

**Read-Only State (CRITICAL SUCCESS CRITERIA):**

**Visual transformation:**
- **Widget remains fully visible** (not hidden, not collapsed, not minimized)
- **All 7 tabs still accessible** (user can click through and review anytime)
- **All data displayed exactly as entered** (no reformatting, no summarization)
- **No input fields visible** (just text display - clear visual distinction from editable state)
- **Locked state banner**: Top of widget shows blue banner with lock icon 🔒:
  - **"Submitted - Under Engineer Review"**
  - Clear, calm language (not "Locked" or "Read-only" which sounds restrictive)

**What users CAN do in read-only state:**
- Navigate between all 7 tabs
- Review all data they entered
- See all photos they uploaded (thumbnails clickable for full view)
- Copy text if needed (for their own records)
- See soft validation warnings that engineer will review

**What users CANNOT do in read-only state:**
- Edit any fields (no input fields shown)
- Upload additional photos
- Delete or modify existing data
- Click "Submit" again (already submitted)

**NO "Edit" button shown:**
- Only engineer can unlock via "Block" action
- Prevents accidental edits after submission
- Supports "state must be explicit" principle (either editing OR viewing, never ambiguous)

---

**Why Read-Only Visibility is Critical:**

**For Customers:**
- **Memory aid**: Customer forgets what they wrote in "Additional Notes" field 2 days later → Opens case → Reviews Tab 7 → Sees their notes → "Oh yes, I mentioned the basement heating issue"
- **Confidence**: Customer wonders "did I upload the boiler room photo?" → Opens widget → Reviews Tab 6 → Sees all 8 photos → Reassured
- **Trust**: Data is always accessible, never hidden → "They didn't make my information disappear after I submitted"

**For Experts:**
- **Professional reference**: Expert forgets which photos they took at which property → Opens case → Reviews all photos → Confident about what was captured
- **Client questions**: Client calls asking "did you document the attic?" → Expert opens widget while on call → Reviews Tab 3 → "Yes, see here in the notes and photos"
- **Handoff confidence**: Expert certain internal team can see everything they documented → Professional credibility maintained

**For Engineers:**
- **Review context**: All data visible in structured format without hunting through emails
- **Decision confidence**: Can review widget multiple times before making final determination

---

**Successful Outcome Indicators:**

**Status changes:**
- Case status: "Waiting for data" → "Data submitted"
- Status badge color: Yellow/amber → Blue
- Activity feed entry: "You submitted building data - 2026-01-02 14:32"

**User sees clear confirmation:**
- **"Your information has been submitted."**
- **"We'll notify you when the engineer reviews it."**
- Clear next expectation: Passive waiting, notification-driven (no action needed)

---

**What's Next (User Expectations):**

**Passive waiting phase:**
- Customer doesn't need to do anything
- No ambiguity about next steps
- Clear expectation: "We'll notify you"

**Notification-driven interactions:**
- If engineer blocks case → Customer gets notification with exact correction needed
- If engineer completes case → Customer gets notification: "Your Energieausweis is ready"

**Transparent timeline:**
- Activity feed shows: "Engineer Stefan started review - [timestamp]" when engineer opens case
- Customer sees progress without needing to ask "what's happening?"
- Supports "calm certainty" emotional goal

---

**Final state after submission:**
- Widget visible, read-only, fully accessible for review anytime
- Case status clear: "Data submitted" or later "Blocked" or "Completed"
- Activity feed shows complete history
- Customer feels: "I gave them everything they needed, and I can always check what I sent"
- Expert feels: "Professional handoff delivered, documented proof of completeness"
- Engineer feels: "Complete data available, I can review efficiently"

**This completion experience supports the core emotional goal: Calm confidence through transparency and reassurance.**
