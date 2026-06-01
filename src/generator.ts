export interface ProposalData {
  client: string;
  project: string;
  budget: string;
  timeline: string;
  scope: string[];
  about: string;
  date?: string;
}

export function generateMarkdown(data: ProposalData): string {
  const date = data.date ?? new Date().toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const scopeList = data.scope.map(item => `- ${item.trim()}`).join('\n');

  return `# Proposal: ${data.project}

**Prepared for:** ${data.client}
**Date:** ${date}

---

## Introduction

Thank you for the opportunity to work with ${data.client}. This proposal outlines the scope, timeline, and investment for **${data.project}**.

We are committed to delivering high-quality work that meets your goals and exceeds expectations.

---

## Project Scope

This engagement covers the following deliverables:

${scopeList}

Any work outside this scope will be discussed and agreed upon before proceeding, with a revised estimate provided.

---

## Deliverables

| # | Deliverable | Included |
|---|-------------|----------|
${data.scope.map((item, i) => `| ${i + 1} | ${item.trim()} | ✓ |`).join('\n')}

---

## Timeline

**Estimated duration:** ${data.timeline}

The project will begin within one week of signed agreement and deposit receipt. Milestones will be shared at project kick-off.

---

## Investment

**Total:** ${data.budget}

**Payment terms:**
- 50% deposit due before work begins
- 50% on final delivery

Payment accepted via bank transfer or card. All amounts are exclusive of applicable taxes.

---

## About

${data.about}

---

## Next Steps

1. Review this proposal and raise any questions
2. Sign and return the agreement
3. Submit the 50% deposit
4. We schedule the kick-off call

This proposal is valid for **14 days** from the date above.

---

*Generated with [ProposalKit](https://github.com/paprika-org/proposalkit) — built by Paprika Labs*
`;
}
