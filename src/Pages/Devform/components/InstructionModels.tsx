import React from 'react';

export const ThemeInstructions: React.FC = () => (
  <div>
    <p><strong>Primary & Secondary Colors:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Use eyedropper tool on business logo or signage screenshot</li>
      <li>Sample colors from Facebook/Instagram banners if available</li>
      <li>Extract hex codes from existing website elements</li>
      <li>If no clear source found, mark as "unavailable"</li>
    </ul>
    <p className="mt-2"><strong>Font Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Use browser tools (WhatFont or FontFace Ninja) on existing websites</li>
      <li>Inspect Facebook graphics and banners for font information</li>
      <li>Screenshot signage and run through WhatTheFont.com</li>
      <li>Check logo files for embedded font information</li>
    </ul>
  </div>
);

export const BrandingInstructions: React.FC = () => (
  <div>
    <p><strong>Logo Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Check existing website or placeholder page first</li>
      <li>Download from Facebook Page avatar/banner</li>
      <li>Search Yelp "Photos" section</li>
      <li>Check Google My Business "Photos"</li>
      <li>Try Google Images search: "[BusinessName] logo"</li>
      <li>Last resort: Screenshot signage from Street View</li>
    </ul>
    <p className="mt-2"><strong>Business Names:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Use exact name as listed on Google My Business/Yelp</li>
      <li>Record both short name (common usage) and long name (legal/full)</li>
    </ul>
  </div>
);

export const ContactInstructions: React.FC = () => (
  <div>
    <p><strong>Phone Number Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Get from Google My Business listing (most reliable)</li>
      <li>Cross-reference with Yelp listing</li>
      <li>Check existing website contact page</li>
      <li>Verify on Facebook business page</li>
      <li>Record numbers only (e.g., 8019068168) for phone link</li>
    </ul>
    <p className="mt-2"><strong>Email Address:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Look for publicly listed email on website contact page</li>
      <li>Check Google My Business "Contact" section</li>
      <li>If not publicly available, mark as "N/A"</li>
      <li>Don't guess or create email addresses</li>
    </ul>
  </div>
);

export const LocationInstructions: React.FC = () => (
  <div>
    <p><strong>Address Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Use complete address from Google My Business (most accurate)</li>
      <li>Format: Street Number + Street Name, City, State ZIP</li>
      <li>Example: "61 2100 S, South Salt Lake, UT 84115"</li>
      <li>Verify address matches physical location on Street View</li>
    </ul>
    <p className="mt-2"><strong>Map Links:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li><strong>Google Map Embed:</strong> Get embed code from Google Maps</li>
      <li><strong>Google Map Link:</strong> Direct link to business on Google Maps</li>
      <li><strong>Apple Map Link:</strong> Search business on Apple Maps, copy link</li>
      <li>Test all links to ensure they point to correct location</li>
    </ul>
  </div>
);

export const HoursInstructions: React.FC = () => (
  <div>
    <p><strong>Hours Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Primary source: Google My Business hours (most up-to-date)</li>
      <li>Cross-reference with business website if available</li>
      <li>Check Yelp listing for consistency</li>

      <li>Mark days as "Closed" if business is not open</li>
    </ul>
  </div>
);

export const LandingInstructions: React.FC = () => (
  <div>
    <p><strong>Hero Image Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Download from Google My Business "Photos" (exterior shots preferred)</li>
      <li>Check Yelp "Photos" section for high-quality images</li>
      <li>Look for Facebook/Instagram posts with storefront images</li>
      <li>Use Google Street View screenshot as last resort</li>
      <li>Minimum resolution: 800×600 px</li>
    </ul>
    <p className="mt-2"><strong>Content Creation:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li><strong>Title:</strong> If they have a slogan or something put it here</li>
      <li><strong>Subtext:</strong> Brief description highlighting key benefits/location</li>
      <li>Keep messaging focused on local auto service excellence</li>
    </ul>
  </div>
);

export const ServicesInstructions: React.FC = () => (
  <div>
    <p><strong>Service Information Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Record "Primary Services Offered" from Google My Business</li>
      <li>Check website service pages if available</li>
      <li>Look for service categories on Yelp listing</li>
      <li>Note specializations mentioned in reviews</li>
      <li>Common categories: Tire services, Brake repair, Oil change, Engine repair</li>
    </ul>
    <p className="mt-2"><strong>Service Images:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Download service-related photos from Google My Business</li>
      <li>Check for work photos on Facebook/Instagram</li>
      <li>Look for interior shop photos showing equipment</li>
      <li>If no service photos available, use general shop interior images</li>
    </ul>
  </div>
);

export const AboutInstructions: React.FC = () => (
  <div>
    <p><strong>Team & Owner Photos:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Look for staff photos on Google My Business</li>
      <li>Check Facebook "About" section for owner/team images</li>
      <li>Search for "About Us" page on existing website</li>
      <li>Look for team photos in Yelp business photos</li>
      <li>If no photos found, note "Photos not available"</li>
    </ul>
    <p className="mt-2"><strong>Business Description:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Extract from existing "About" page if website exists</li>
      <li>Use Google My Business description as starting point</li>
      <li>Check Facebook "About" section for business story</li>
      <li>Look for founding information, years in business</li>
      <li>Note owner name if publicly available</li>
    </ul>

  </div>
);

export const FontInstructions: React.FC = () => (
  <div>
    <p><strong>Font Collection:</strong></p>
    <ul className="list-disc list-inside ml-4 space-y-1">
      <li>Use browser tools (WhatFont or FontFace Ninja) on existing websites</li>
      <li>Inspect Facebook graphics and banners for font information</li>
      <li>Screenshot signage and run through WhatTheFont.com</li>
      <li>Check logo files for embedded font information</li>
      <li>If fonts not identifiable, mark as "Fonts not identifiable"</li>
    </ul>
    <p className="mt-2"><strong>Recording:</strong> Save identified font names in plain text file within business folder</p>
  </div>
);

const InstructionModels = {
  ThemeInstructions,
  BrandingInstructions,
  ContactInstructions,
  LocationInstructions,
  HoursInstructions,
  LandingInstructions,
  ServicesInstructions,
  AboutInstructions,
  FontInstructions
};

export default InstructionModels; 