interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Builds a mailto link from contact form data for static hosting compatibility.
 * Pre-fills the user's email client with the quote request details.
 */
export function buildContactMailto(data: ContactFormData): string {
  const recipient = 'david@builtritesign.com';
  const subject = encodeURIComponent(`Quote Request from ${data.name}`);
  
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || 'Not provided'}\n\n` +
    `Message:\n${data.message}`
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
