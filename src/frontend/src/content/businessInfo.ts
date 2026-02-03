/**
 * Centralized business information for Built Rite Creations.
 * Single source of truth for contact details, hours, and service area.
 */

export const businessInfo = {
  name: 'Built Rite Creations',
  phone: {
    display: '(781) 227-0994',
    tel: '7812270994',
  },
  email: 'david@builtritesign.com',
  hours: {
    days: 'Monday—Friday',
    time: '8am — 5pm',
  },
  serviceArea: 'Greater Boston Area (New England)',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
} as const;
