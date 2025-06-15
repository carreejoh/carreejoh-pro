import configTemplate from '../assets/config_template.json';

interface FormData {
  theme: {
    primary_color: { included: boolean; customValue: string; defaultValue: string };
    secondary_color: { included: boolean; customValue: string; defaultValue: string };
    font: { included: boolean; customValue: string; defaultValue: string };
  };
  branding: {
    logo: { included: boolean; customValue: { cropped: string; original: string }; defaultValue: string };
    short_name: { included: boolean; customValue: string; defaultValue: string };
    long_name: { included: boolean; customValue: string; defaultValue: string };
  };
  contact: {
    phoneLink: { included: boolean; customValue: string; defaultValue: string };
    email: { included: boolean; customValue: string; defaultValue: string; semiCustomValue?: string };
  };
  location: {
    addressFull: { included: boolean; customValue: string; defaultValue: string };
    googleMapEmbedLink: { included: boolean; customValue: string; defaultValue: string };
    googleMapLink: { included: boolean; customValue: string; defaultValue: string };
    appleMapLink: { included: boolean; customValue: string; defaultValue: string };
  };
  hours: {
    included: boolean;
    customValue: {
      monday: { isOpen: boolean; openTime: string; closeTime: string };
      tuesday: { isOpen: boolean; openTime: string; closeTime: string };
      wednesday: { isOpen: boolean; openTime: string; closeTime: string };
      thursday: { isOpen: boolean; openTime: string; closeTime: string };
      friday: { isOpen: boolean; openTime: string; closeTime: string };
      saturday: { isOpen: boolean; openTime: string; closeTime: string };
      sunday: { isOpen: boolean; openTime: string; closeTime: string };
    };
    defaultValue: any;
  };
  landing: {
    image: { included: boolean; customValue: { cropped: string; original: string }; defaultValue: string };
    title: { included: boolean; customValue: string; defaultValue: string };
    subtext: { included: boolean; customValue: string; defaultValue: string };
  };
  services: {
    cards: Array<{
      included: boolean;
      customValue: {
        title: string;
        description: string;
        image: { cropped: string; original: string };
        items: string[];
      };
      defaultValue: any;
    }>;
  };
  about: {
    team_image: { included: boolean; customValue: { cropped: string; original: string }; defaultValue: string };
    owner_image: { included: boolean; customValue: { cropped: string; original: string }; defaultValue: string };
    description: { included: boolean; customValue: string; defaultValue: string };
    team_description: { included: boolean; customValue: string; defaultValue: string };
    owner_name: { included: boolean; customValue: string; defaultValue: string };
    owner_description: { included: boolean; customValue: string; defaultValue: string };
  };
}

const formatTime = (time: string) => {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const convertHoursToTemplate = (hoursData: any) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  return days.map((day, index) => {
    const dayKey = dayKeys[index];
    const dayData = hoursData[dayKey];
    
    if (!dayData.isOpen) {
      return { day, time: 'Closed' };
    }
    
    const openTime = formatTime(dayData.openTime);
    const closeTime = formatTime(dayData.closeTime);
    return { day, time: `${openTime} - ${closeTime}` };
  });
};

export const generateConfig = (formData: FormData) => {
  // Start with a deep copy of the template
  const config = JSON.parse(JSON.stringify(configTemplate));

  // Theme Configuration
  config.theme.primary_color.included = formData.theme.primary_color.included;
  config.theme.primary_color.customValue = formData.theme.primary_color.customValue || formData.theme.primary_color.defaultValue;

  config.theme.secondary_color.included = formData.theme.secondary_color.included;
  config.theme.secondary_color.customValue = formData.theme.secondary_color.customValue || formData.theme.secondary_color.defaultValue;

  config.theme.font.included = formData.theme.font.included;
  config.theme.font.customValue = formData.theme.font.customValue || formData.theme.font.defaultValue;

  // Branding
  config.branding.logo.included = formData.branding.logo.included;
  config.branding.logo.customValue = formData.branding.logo.customValue.cropped || formData.branding.logo.defaultValue;

  config.branding.short_name.included = formData.branding.short_name.included;
  config.branding.short_name.customValue = formData.branding.short_name.customValue || formData.branding.short_name.defaultValue;

  config.branding.long_name.included = formData.branding.long_name.included;
  config.branding.long_name.customValue = formData.branding.long_name.customValue || formData.branding.long_name.defaultValue;

  // Contact
  config.contact.phoneLink.included = formData.contact.phoneLink.included;
  config.contact.phoneLink.customValue = formData.contact.phoneLink.customValue || formData.contact.phoneLink.defaultValue;

  // Calculate formatted phone from phoneLink
  const phoneNumber = formData.contact.phoneLink.customValue || formData.contact.phoneLink.defaultValue;
  if (phoneNumber && phoneNumber.length === 10) {
    const formattedPhone = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    config.contact.phone = {
      included: formData.contact.phoneLink.included,
      defaultValue: formattedPhone,
      customValue: formattedPhone
    };
  }

  config.contact.email.included = formData.contact.email.included;
  config.contact.email.customValue = formData.contact.email.customValue || formData.contact.email.defaultValue;
  
  // Generate email based on short name
  const shortName = formData.branding.short_name.customValue || formData.branding.short_name.defaultValue;
  if (shortName) {
    const sanitizedName = shortName.replace(/[^a-zA-Z0-9]/g, '_');
    const generatedEmail = `${sanitizedName}@gmail.com`;
    config.contact.email.semiCustomValue = generatedEmail;
  } else if (formData.contact.email.semiCustomValue) {
    config.contact.email.semiCustomValue = formData.contact.email.semiCustomValue;
  }

  // Location
  config.location.addressFull.included = formData.location.addressFull.included;
  config.location.addressFull.customValue = formData.location.addressFull.customValue || formData.location.addressFull.defaultValue;

  // Calculate address and addressSecondary from addressFull
  const fullAddress = formData.location.addressFull.customValue || formData.location.addressFull.defaultValue;
  if (fullAddress) {
    const addressParts = fullAddress.split(',');
    const address = addressParts[0]?.trim() || '';
    const addressSecondary = addressParts.slice(1).join(',').trim() || '';
    
    config.location.address = {
      included: formData.location.addressFull.included,
      defaultValue: address,
      customValue: address
    };
    
    config.location.addressSecondary = {
      included: formData.location.addressFull.included,
      defaultValue: addressSecondary,
      customValue: addressSecondary
    };
  }

  config.location.googleMapEmbedLink.included = formData.location.googleMapEmbedLink.included;
  config.location.googleMapEmbedLink.customValue = formData.location.googleMapEmbedLink.customValue || formData.location.googleMapEmbedLink.defaultValue;

  config.location.googleMapLink.included = formData.location.googleMapLink.included;
  config.location.googleMapLink.customValue = formData.location.googleMapLink.customValue || formData.location.googleMapLink.defaultValue;

  config.location.appleMapLink.included = formData.location.appleMapLink.included;
  config.location.appleMapLink.customValue = formData.location.appleMapLink.customValue || formData.location.appleMapLink.defaultValue;

  // Hours
  config.hours.included = formData.hours.included;
  if (formData.hours.included) {
    config.hours.customValue = convertHoursToTemplate(formData.hours.customValue);
  }

  // Landing
  config.landing.image.included = formData.landing.image.included;
  config.landing.image.customValue = formData.landing.image.customValue.cropped || formData.landing.image.defaultValue;

  config.landing.title.included = formData.landing.title.included;
  config.landing.title.customValue = formData.landing.title.customValue || formData.landing.title.defaultValue;

  config.landing.subtext.included = formData.landing.subtext.included;
  config.landing.subtext.customValue = formData.landing.subtext.customValue || formData.landing.subtext.defaultValue;

  // Services
  const hasIncludedServices = formData.services.cards.some(card => card.included);
  config.services.cards.included = hasIncludedServices;
  
  if (hasIncludedServices) {
    config.services.cards.customValue = formData.services.cards
      .filter(card => card.included)
      .map(card => ({
        title: card.customValue.title,
        description: card.customValue.description,
        image: card.customValue.image.cropped || card.customValue.image.original,
        items: card.customValue.items
      }));
  }

  // About
  config.about.team_image.included = formData.about.team_image.included;
  config.about.team_image.customValue = formData.about.team_image.customValue.cropped || formData.about.team_image.defaultValue;

  config.about.owner_image.included = formData.about.owner_image.included;
  config.about.owner_image.customValue = formData.about.owner_image.customValue.cropped || formData.about.owner_image.defaultValue;

  config.about.description.included = formData.about.description.included;
  config.about.description.customValue = formData.about.description.customValue || formData.about.description.defaultValue;

  config.about.team_description.included = formData.about.team_description.included;
  config.about.team_description.customValue = formData.about.team_description.customValue || formData.about.team_description.defaultValue;

  config.about.owner_name.included = formData.about.owner_name.included;
  config.about.owner_name.customValue = formData.about.owner_name.customValue || formData.about.owner_name.defaultValue;

  config.about.owner_description.included = formData.about.owner_description.included;
  config.about.owner_description.customValue = formData.about.owner_description.customValue || formData.about.owner_description.defaultValue;

  return config;
};

export const downloadConfig = (config: any, formData: FormData) => {
  const shortName = formData.branding.short_name.customValue || formData.branding.short_name.defaultValue || 'Business';
  const sanitizedName = shortName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${sanitizedName}_config.json`;
  
  const dataStr = JSON.stringify(config, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', filename);
  linkElement.click();
};
