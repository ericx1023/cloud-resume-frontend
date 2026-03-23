<!--
Sync Impact Report
- Version change: 1.1.0 → 1.2.0
- List of modified principles:
  - VI. Documentation Language (EXCEPTION: README.md must be English)
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - README.md (✅ updated to English)
  - .specify/templates/commands/speckit.specify.toml (✅ updated language constraint)
  - .specify/templates/commands/speckit.plan.toml (✅ updated language constraint)
  - .specify/templates/commands/speckit.tasks.toml (✅ updated language constraint)
  - .specify/templates/commands/speckit.clarify.toml (✅ updated language constraint)
- Follow-up TODOs: Ensure future README changes follow the English requirement.
-->

# cloud-resume-challenge-frontend Constitution

## Core Principles

### I. Code Quality
Code MUST be idiomatic TypeScript, following established patterns and naming conventions. Every function and component MUST be documented with JSDoc where the purpose is not immediately obvious. Maintainability is prioritized; avoid "clever" code in favor of clarity.

### II. Testing Standards
Automated testing is NON-NEGOTIABLE. Every feature or bug fix MUST include unit tests (Jest) and/or integration tests (React Testing Library). A pull request MUST NOT be merged without verifying that all tests pass and coverage remains stable or improves.

### III. User Experience (UX) Consistency
The application MUST maintain a consistent visual language. Components SHOULD be reusable and follow the project's design system. Accessibility (WCAG 2.1 AA) MUST be considered for all user-facing elements, including proper ARIA labels and keyboard navigation.

### IV. Performance Requirements
Performance is a first-class citizen. Bundle sizes MUST be monitored. Large components or libraries SHOULD be lazy-loaded. Every change SHOULD be evaluated for its impact on Core Web Vitals, particularly Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).

### V. Simplicity & YAGNI
Implement only what is necessary for the current requirements (You Ain't Gonna Need It). Avoid over-engineering and speculative features. Keep the codebase clean and lean; removal of unused code is encouraged.

### VI. Documentation Language
Project internal specifications (`spec.md`), implementation plans (`plan.md`), and developer-focused documentation (`quickstart.md`, research, data-models) MUST be written in Traditional Chinese (zh-TW).

**EXCEPTION**: All `README.md` files MUST be written in **English (en)** for global accessibility.

## Additional Constraints
- **Tech Stack**: React 18+, TypeScript, Tailwind CSS, PostCSS.
- **Styling**: Tailwind utility classes are preferred for most styling; custom CSS should be used sparingly and kept in `src/index.css` or component-specific modules.
- **State Management**: Use React hooks (useState, useContext, useReducer) for state. Introduce external state libraries only when complexity warrants it.

## Development Workflow
- **Research**: Every feature starts with a research phase to identify requirements and constraints.
- **Strategy**: Draft an implementation plan and design before writing code.
- **Execution**: Follow the Plan-Act-Validate cycle. Verify all changes locally before submission.
- **Verification**: Use automated linting, type-checking (tsc), and tests as the primary quality gate.

## Governance
This constitution is the supreme guide for project development. Any deviation MUST be justified in the implementation plan. Amendments require a consensus and a version bump. All PRs/reviews must verify compliance.

**Version**: 1.2.0 | **Ratified**: 2026-03-19 | **Last Amended**: 2026-03-19
