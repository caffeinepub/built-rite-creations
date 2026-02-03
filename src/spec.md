# Specification

## Summary
**Goal:** Update the website to use the correct business phone number everywhere.

**Planned changes:**
- Update the centralized business phone constants to set the display number to “(781) 227-0994” and the `tel:` digits to “7812270994”.
- Verify and remove any remaining references to “(844) 527-3733” in frontend source and rendered UI phone links/text.

**User-visible outcome:** All phone numbers shown on the site (and all tap-to-call links) use “(781) 227-0994” with `tel:7812270994`, and the old number no longer appears.
