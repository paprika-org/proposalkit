#!/bin/bash
# ProposalKit example — generates examples/example-output.md

npx proposalkit \
  --client "Acme Corp" \
  --project "E-commerce Storefront Redesign" \
  --budget "\$8,500" \
  --timeline "6 weeks" \
  --scope "UX audit and wireframes,Visual design (desktop + mobile),Frontend development (React),CMS integration (Shopify),QA testing and handover" \
  --about "We are a two-person design and development studio specialising in e-commerce UX. We've helped 20+ brands increase their conversion rates through cleaner, faster storefronts." \
  --output examples/example-output.md

# Pro: generate PDF with modern theme
# PROPOSALKIT_PRO_KEY=your_key npx proposalkit \
#   --client "Acme Corp" \
#   --project "E-commerce Storefront Redesign" \
#   --budget "\$8,500" \
#   --timeline "6 weeks" \
#   --scope "UX audit and wireframes,Visual design,Frontend development,QA testing" \
#   --about "Two-person UX studio, 20+ e-commerce projects." \
#   --pdf --theme modern \
#   --output proposal-acme.pdf
