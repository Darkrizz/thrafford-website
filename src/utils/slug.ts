/** "Dr. Anita Chugh" -> "anita-chugh" (honorifics dropped so URLs stay clean). */
export const memberSlug = (name: string) =>
  name
    .replace(/^(Dr|Mr|Ms|Mrs|Prof)\.?\s+/i, '')
    .toLowerCase()
    .replace(/[^a-z]+/g, '-')
    .replace(/^-|-$/g, '');
