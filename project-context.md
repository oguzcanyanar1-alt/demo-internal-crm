# Project Context: Energieausweis CRM

> **LLM Quick Reference** - Critical rules for AI agents implementing this project

## Critical Rules (DO NOT VIOLATE)

### Database & Types
- **Tables/columns**: ALWAYS `snake_case` (`cases`, `user_id`, `created_at`)
- **Types source**: ALWAYS import from `@/types/database` (Supabase generated)
- **Foreign keys**: ALWAYS `{table}_id` format (e.g., `user_id`, `case_id`)
- **RLS**: ALL tables MUST have Row Level Security enabled
- **Migrations**: NEVER manually edit database - ALWAYS use Supabase migrations

### State Management (STRICT BOUNDARIES)
- **Server state**: ONLY TanStack Query → `['entity', ...params]` format
- **Client state**: ONLY Zustand → `@/lib/stores/{domain}.ts`
- **Auth state**: ONLY React Context → `components/features/auth/AuthProvider.tsx`
- **NEVER mix** these patterns - each has ONE job

### Next.js App Router
- **Route params**: ALWAYS `[id]` NOT `[caseId]` or `[userId]`
- **Server Actions**: ALWAYS return `{data?, error?}` - NEVER throw
- **Route groups**: Use `(authenticated)` and `(public)` - NEVER nested auth checks
- **Imports**: ALWAYS use `@/` alias - NEVER relative paths like `../../`

### TypeScript Naming
- **Components**: `PascalCase.tsx` (`CaseWidget.tsx`)
- **Hooks**: `camelCase` with `use` prefix (`useCaseData.ts`)
- **Files/utils**: `camelCase` (`formatDate.ts`, `compressImage.ts`)
- **Types/interfaces**: `PascalCase` (`Case`, `UserProfile`)
- **Variables/functions**: `camelCase` (`caseData`, `submitCase`)

## Must-Follow Patterns

### Case State Machine
```typescript
// ONLY these 4 states - enforced by DB check constraint
type CaseState = 'waiting_for_data' | 'submitted' | 'blocked' | 'completed'

// State transitions - NEVER bypass these rules:
// waiting_for_data → submitted (customer/expert submits)
// submitted → blocked (engineer blocks)
// submitted → completed (engineer completes)
// blocked → submitted (customer/expert resubmits)
// completed → FINAL (no transitions allowed)
```

### TanStack Query Keys
```typescript
// ✅ CORRECT
['cases']
['cases', caseId]
['activity-log', caseId]

// ❌ WRONG
{entity: 'cases'}
'case-list'
['getCases']
```

### Server Actions Pattern
```typescript
// ✅ CORRECT - return {data?, error?}
export async function submitCase(caseId: string) {
  const { data, error } = await supabase
    .from('cases')
    .update({ case_state: 'submitted' })
    .eq('id', caseId)

  if (error) return { error: error.message }
  return { data }
}

// ❌ WRONG - NEVER throw
export async function submitCase(caseId: string) {
  const result = await supabase...
  if (result.error) throw new Error(result.error.message) // ❌ NO!
}
```

### Supabase Client Usage
```typescript
// ✅ Browser components - use client
import { createClient } from '@/lib/supabase/client'

// ✅ Server components/actions - use server
import { createClient } from '@/lib/supabase/server'

// ❌ NEVER mix these up - will cause auth errors
```

## Anti-Patterns (AVOID)

### ❌ State Management Violations
```typescript
// ❌ WRONG - don't put server data in Zustand
const useStore = create((set) => ({
  cases: [],
  fetchCases: async () => {...} // ❌ use TanStack Query
}))

// ❌ WRONG - don't put client UI state in TanStack Query
const { data } = useQuery({
  queryKey: ['activeTab'], // ❌ use Zustand for UI state
  queryFn: () => 'tab-1'
})
```

### ❌ Naming Violations
```typescript
// ❌ WRONG - mixed naming conventions
const userId = '...'           // ✅ correct (camelCase)
const user_name = '...'        // ❌ wrong in TypeScript (use userName)
const UserID = '...'           // ❌ wrong (use userId)

// Database columns stay snake_case:
.select('user_id, full_name')  // ✅ correct
```

### ❌ Type Import Violations
```typescript
// ❌ WRONG - manual type definitions
type Case = {
  id: string
  case_state: string
  // ...
}

// ✅ CORRECT - use generated types
import { Database } from '@/types/database'
type Case = Database['public']['Tables']['cases']['Row']
```

### ❌ Route Parameter Violations
```typescript
// ❌ WRONG
/cases/[caseId]/page.tsx
/users/[userId]/page.tsx

// ✅ CORRECT
/cases/[id]/page.tsx
/users/[id]/page.tsx

// Access with: params.id (NOT params.caseId)
```

## Critical Paths (Reference)

```
app/(authenticated)/cases/[id]/actions.ts  → Server Actions (submit, block, complete)
app/api/cases/[id]/pdf/route.ts            → PDF generation
components/features/cases/CaseWidget.tsx   → 7-tab widget
components/features/auth/AuthProvider.tsx  → Auth context
lib/supabase/client.ts                     → Browser Supabase client
lib/supabase/server.ts                     → Server Supabase client
lib/stores/widgetStore.ts                  → Widget drafts + auto-save
lib/stores/syncQueueStore.ts               → Offline sync queue
types/database.ts                          → Supabase generated types
```

## Quick Checks Before Committing

- [ ] All database access uses Supabase client (NEVER raw SQL)
- [ ] All types imported from `@/types/database`
- [ ] State management boundaries respected (Query/Zustand/Context)
- [ ] Server Actions return `{data?, error?}` shape
- [ ] TanStack Query keys use array format
- [ ] Naming follows conventions (snake_case DB, camelCase TS)
- [ ] No hardcoded case states (use type literal)
- [ ] RLS policies present for new tables

---

**Full Architecture**: See `_bmad-output/planning-artifacts/architecture.md`
