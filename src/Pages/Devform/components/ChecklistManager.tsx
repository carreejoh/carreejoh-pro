
export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

export type ChecklistType = 
  | 'color' 
  | 'font' 
  | 'logo' 
  | 'contact' 
  | 'location' 
  | 'hours' 
  | 'image' 
  | 'text' 
  | 'email'
  | 'phone'
  | 'address'
  | 'maps'
  | 'services'
  | 'description';

export const ChecklistTemplates: Record<ChecklistType, ChecklistItem[]> = {
  color: [
    { id: 'logo', label: 'Business Logo', checked: false },
    { id: 'website', label: 'Existing Website', checked: false },
    { id: 'facebook', label: 'Facebook Page/Banner', checked: false },
    { id: 'instagram', label: 'Instagram Posts', checked: false },
    { id: 'signage', label: 'Street View Signage', checked: false }
  ],
  
  font: [
    { id: 'website_inspect', label: 'Website Font Inspector', checked: false },
    { id: 'facebook_graphics', label: 'Facebook Graphics', checked: false },
    { id: 'whatthefont', label: 'WhatTheFont.com', checked: false },
    { id: 'logo_embedded', label: 'Logo File Fonts', checked: false }
  ],
  
  logo: [
    { id: 'website', label: 'Website/Placeholder Page', checked: false },
    { id: 'facebook_avatar', label: 'Facebook Avatar/Banner', checked: false },
    { id: 'yelp_photos', label: 'Yelp Photos', checked: false },
    { id: 'gmb_photos', label: 'Google My Business Photos', checked: false },
    { id: 'google_images', label: 'Google Images Search', checked: false },
    { id: 'street_view', label: 'Street View Signage', checked: false }
  ],
  
  contact: [
    { id: 'gmb', label: 'Google My Business', checked: false },
    { id: 'yelp', label: 'Yelp Listing', checked: false },
    { id: 'website', label: 'Website Contact Page', checked: false },
    { id: 'facebook', label: 'Facebook Business Page', checked: false }
  ],
  
  phone: [
    { id: 'gmb', label: 'Google My Business', checked: false },
    { id: 'yelp', label: 'Yelp Listing', checked: false },
    { id: 'website', label: 'Website Contact Page', checked: false },
    { id: 'facebook', label: 'Facebook Business Page', checked: false },
    { id: 'signage', label: 'Street View Signage', checked: false }
  ],
  
  email: [
    { id: 'website_contact', label: 'Website Contact Page', checked: false },
    { id: 'gmb_contact', label: 'Google My Business Contact', checked: false },
    { id: 'facebook_about', label: 'Facebook About Section', checked: false },
    { id: 'yelp_contact', label: 'Yelp Contact Info', checked: false }
  ],
  
  location: [
    { id: 'gmb', label: 'Google My Business', checked: false },
    { id: 'street_view', label: 'Street View Verification', checked: false },
    { id: 'yelp', label: 'Yelp Listing', checked: false },
    { id: 'website', label: 'Website Contact/About', checked: false }
  ],
  
  address: [
    { id: 'gmb', label: 'Google My Business', checked: false },
    { id: 'street_view', label: 'Street View Verification', checked: false },
    { id: 'yelp', label: 'Yelp Listing', checked: false },
    { id: 'website', label: 'Website Contact Page', checked: false },
    { id: 'facebook', label: 'Facebook About Section', checked: false }
  ],
  
  maps: [
    { id: 'google_maps', label: 'Google Maps Search', checked: false },
    { id: 'apple_maps', label: 'Apple Maps Search', checked: false },
    { id: 'gmb_embed', label: 'Google My Business Embed', checked: false },
    { id: 'website_maps', label: 'Website Map Section', checked: false }
  ],
  
  hours: [
    { id: 'gmb', label: 'Google My Business', checked: false },
    { id: 'website', label: 'Business Website', checked: false },
    { id: 'yelp', label: 'Yelp Listing', checked: false },
    { id: 'facebook', label: 'Facebook Page', checked: false },
    { id: 'signage', label: 'Door/Window Signage', checked: false }
  ],
  
  image: [
    { id: 'gmb_photos', label: 'Google My Business Photos', checked: false },
    { id: 'yelp_photos', label: 'Yelp Photos', checked: false },
    { id: 'facebook', label: 'Facebook Posts/Photos', checked: false },
    { id: 'instagram', label: 'Instagram Posts', checked: false },
    { id: 'website', label: 'Website Gallery/Images', checked: false },
    { id: 'street_view', label: 'Street View Screenshot', checked: false }
  ],
  
  text: [
    { id: 'website_about', label: 'Website About Page', checked: false },
    { id: 'gmb_description', label: 'Google My Business Description', checked: false },
    { id: 'facebook_about', label: 'Facebook About Section', checked: false },
    { id: 'yelp_description', label: 'Yelp Business Description', checked: false }
  ],
  
  description: [
    { id: 'website_about', label: 'Website About Page', checked: false },
    { id: 'gmb_description', label: 'Google My Business Description', checked: false },
    { id: 'facebook_about', label: 'Facebook About Section', checked: false },
    { id: 'yelp_description', label: 'Yelp Business Description', checked: false },
    { id: 'website_services', label: 'Website Services Page', checked: false }
  ],
  
  services: [
    { id: 'gmb_services', label: 'Google My Business Services', checked: false },
    { id: 'website_services', label: 'Website Services Page', checked: false },
    { id: 'yelp_categories', label: 'Yelp Categories', checked: false },
    { id: 'facebook_services', label: 'Facebook Services Section', checked: false },
    { id: 'reviews', label: 'Customer Reviews/Mentions', checked: false },
    { id: 'signage', label: 'Storefront Signage', checked: false }
  ]
};

export const createChecklist = (type: ChecklistType): ChecklistItem[] => {
  return ChecklistTemplates[type].map(item => ({ ...item }));
};

export const getChecklistType = (section: string, field: string): ChecklistType => {
  // Theme section
  if (section === 'theme') {
    if (field.includes('color')) return 'color';
    if (field === 'font') return 'font';
  }
  
  // Branding section
  if (section === 'branding') {
    if (field === 'logo') return 'logo';
    if (field.includes('name')) return 'text';
  }
  
  // Contact section
  if (section === 'contact') {
    if (field === 'phoneLink') return 'phone';
    if (field === 'email') return 'email';
  }
  
  // Location section
  if (section === 'location') {
    if (field.includes('address')) return 'address';
    if (field.includes('Map')) return 'maps';
  }
  
  // Hours section
  if (section === 'hours') return 'hours';
  
  // Landing section
  if (section === 'landing') {
    if (field === 'image') return 'image';
    if (field === 'title' || field === 'subtext') return 'text';
  }
  
  // Services section
  if (section === 'services') {
    if (field === 'background') return 'image';
    return 'services';
  }
  
  // About section
  if (section === 'about') {
    if (field.includes('image')) return 'image';
    if (field.includes('description')) return 'description';
    if (field.includes('name')) return 'text';
  }
  
  // Default fallback
  return 'text';
}; 