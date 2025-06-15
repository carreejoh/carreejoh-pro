interface FormData {
  theme: {
    primary_color: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    secondary_color: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    font: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
  };
  branding: {
    logo: { included: boolean; customValue: { cropped: string; original: string }; defaultValue: string; exclusionReason?: string; checklist?: any[] };
    short_name: { included: boolean; customValue: string; defaultValue: string; exclusionReason?: string; checklist?: any[] };
    long_name: { included: boolean; customValue: string; defaultValue: string; exclusionReason?: string; checklist?: any[] };
  };
  contact: {
    phoneLink: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    email: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
  };
  location: {
    addressFull: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    googleMapEmbedLink: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    googleMapLink: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    appleMapLink: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
  };
  hours: {
    included: boolean;
    exclusionReason?: string;
    checklist?: any[];
    customValue: any;
  };
  landing: {
    image: { included: boolean; customValue: { cropped: string; original: string }; exclusionReason?: string; checklist?: any[] };
    title: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    subtext: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
  };
  services: {
    cards: Array<{
      included: boolean;
      customValue: any;
      exclusionReason?: string;
      checklist?: any[];
    }>;
  };
  about: {
    team_image: { included: boolean; customValue: { cropped: string; original: string }; exclusionReason?: string; checklist?: any[] };
    owner_image: { included: boolean; customValue: { cropped: string; original: string }; exclusionReason?: string; checklist?: any[] };
    description: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    team_description: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    owner_name: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
    owner_description: { included: boolean; customValue: string; exclusionReason?: string; checklist?: any[] };
  };
}

interface MissingItem {
  section: string;
  field: string;
  reason: 'excluded' | 'empty';
  exclusionReason?: string;
  searchLocationsChecked?: string[];
  notes?: string;
}

const formatFieldName = (fieldName: string) => {
  return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/^./, str => str.toUpperCase())
    .trim();
};

const getSearchLocationsChecked = (checklist: any[]) => {
  if (!checklist) return [];
  return checklist
    .filter(item => item.checked)
    .map(item => item.label);
};

const extractChecklistNotes = (checklist: any[]) => {
  if (!checklist) return '';
  const notesItem = checklist.find(item => item.id === 'notes');
  return notesItem?.notes || '';
};

export const generateMissingReport = (formData: FormData) => {
  const missingItems: MissingItem[] = [];
  const currentDate = new Date().toLocaleDateString();

  // Check Theme fields
  Object.entries(formData.theme).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'Theme Configuration',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else if (!field.customValue.trim()) {
      missingItems.push({
        section: 'Theme Configuration',
        field: formatFieldName(key),
        reason: 'empty'
      });
    }
  });

  // Check Branding fields
  Object.entries(formData.branding).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'Branding',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else if (key === 'logo') {
      const logoValue = field.customValue as { cropped: string; original: string };
      if (!logoValue.cropped && !logoValue.original) {
        missingItems.push({
          section: 'Branding',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    } else {
      const textValue = field.customValue as string;
      if (!textValue.trim()) {
        missingItems.push({
          section: 'Branding',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    }
  });

  // Check Contact fields
  Object.entries(formData.contact).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'Contact Information',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else {
      const textValue = field.customValue as string;
      if (!textValue.trim()) {
        missingItems.push({
          section: 'Contact Information',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    }
  });

  // Check Location fields
  Object.entries(formData.location).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'Location Information',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else {
      const textValue = field.customValue as string;
      if (!textValue.trim()) {
        missingItems.push({
          section: 'Location Information',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    }
  });

  // Check Hours
  if (!formData.hours.included) {
    missingItems.push({
      section: 'Hours of Operation',
      field: 'Hours of Operation',
      reason: 'excluded',
      exclusionReason: formData.hours.exclusionReason,
      searchLocationsChecked: getSearchLocationsChecked(formData.hours.checklist || []),
      notes: extractChecklistNotes(formData.hours.checklist || [])
    });
  }

  // Check Landing fields
  Object.entries(formData.landing).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'Landing Page',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else if (key === 'image') {
      const imageValue = field.customValue as { cropped: string; original: string };
      if (!imageValue.cropped && !imageValue.original) {
        missingItems.push({
          section: 'Landing Page',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    } else {
      const textValue = field.customValue as string;
      if (!textValue.trim()) {
        missingItems.push({
          section: 'Landing Page',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    }
  });

  // Check Services
  const excludedServices = formData.services.cards.filter(card => !card.included);
  const emptyServices = formData.services.cards.filter(card => 
    card.included && (!card.customValue.title || !card.customValue.description)
  );

  excludedServices.forEach((card, index) => {
    missingItems.push({
      section: 'Services',
      field: `Service Card ${index + 1}${card.customValue.title ? ` (${card.customValue.title})` : ''}`,
      reason: 'excluded',
      exclusionReason: card.exclusionReason,
      searchLocationsChecked: getSearchLocationsChecked(card.checklist || []),
      notes: extractChecklistNotes(card.checklist || [])
    });
  });

  emptyServices.forEach((card, index) => {
    console.log(card)
    missingItems.push({
      section: 'Services',
      field: `Service Card ${index + 1} - Missing Information`,
      reason: 'empty'
    });
  });

  // Check About fields
  Object.entries(formData.about).forEach(([key, field]) => {
    if (!field.included) {
      missingItems.push({
        section: 'About Us',
        field: formatFieldName(key),
        reason: 'excluded',
        exclusionReason: field.exclusionReason,
        searchLocationsChecked: getSearchLocationsChecked(field.checklist || []),
        notes: extractChecklistNotes(field.checklist || [])
      });
    } else if (key.includes('image')) {
      const imageValue = field.customValue as { cropped: string; original: string };
      if (!imageValue.cropped && !imageValue.original) {
        missingItems.push({
          section: 'About Us',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    } else {
      const textValue = field.customValue as string;
      if (!textValue.trim()) {
        missingItems.push({
          section: 'About Us',
          field: formatFieldName(key),
          reason: 'empty'
        });
      }
    }
  });

  // Generate the report
  const report = {
    reportDate: currentDate,
    totalMissingItems: missingItems.length,
    excludedItems: missingItems.filter(item => item.reason === 'excluded').length,
    emptyItems: missingItems.filter(item => item.reason === 'empty').length,
    missingItems: missingItems,
    summary: {
      'Theme Configuration': missingItems.filter(item => item.section === 'Theme Configuration').length,
      'Branding': missingItems.filter(item => item.section === 'Branding').length,
      'Contact Information': missingItems.filter(item => item.section === 'Contact Information').length,
      'Location Information': missingItems.filter(item => item.section === 'Location Information').length,
      'Hours of Operation': missingItems.filter(item => item.section === 'Hours of Operation').length,
      'Landing Page': missingItems.filter(item => item.section === 'Landing Page').length,
      'Services': missingItems.filter(item => item.section === 'Services').length,
      'About Us': missingItems.filter(item => item.section === 'About Us').length,
    }
  };

  return report;
};

export const generateMissingReportText = (formData: FormData) => {
  const report = generateMissingReport(formData);
  const currentDate = new Date().toLocaleDateString();
  
  let reportText = `BUSINESS CONFIGURATION - MISSING ASSETS REPORT\n`;
  reportText += `Generated: ${currentDate}\n`;
  reportText += `${'='.repeat(60)}\n\n`;
  
  reportText += `SUMMARY:\n`;
  reportText += `Total Missing Items: ${report.totalMissingItems}\n`;
  reportText += `Excluded Items: ${report.excludedItems}\n`;
  reportText += `Empty Items: ${report.emptyItems}\n\n`;
  
  reportText += `BREAKDOWN BY SECTION:\n`;
  Object.entries(report.summary).forEach(([section, count]) => {
    if (count > 0) {
      reportText += `${section}: ${count} missing\n`;
    }
  });
  reportText += `\n`;
  
  reportText += `DETAILED MISSING ITEMS:\n`;
  reportText += `${'='.repeat(60)}\n\n`;
  
  const groupedItems = report.missingItems.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, MissingItem[]>);
  
  Object.entries(groupedItems).forEach(([section, items]) => {
    reportText += `${section.toUpperCase()}:\n`;
    reportText += `${'-'.repeat(section.length + 1)}\n`;
    
    items.forEach((item, index) => {
      reportText += `${index + 1}. ${item.field}\n`;
      reportText += `   Status: ${item.reason === 'excluded' ? 'EXCLUDED' : 'EMPTY'}\n`;
      
      if (item.reason === 'excluded') {
        if (item.exclusionReason) {
          reportText += `   Reason: ${item.exclusionReason}\n`;
        }
        if (item.searchLocationsChecked && item.searchLocationsChecked.length > 0) {
          reportText += `   Search Locations Checked: ${item.searchLocationsChecked.join(', ')}\n`;
        }
        if (item.notes) {
          reportText += `   Notes: ${item.notes}\n`;
        }
      }
      reportText += `\n`;
    });
    reportText += `\n`;
  });
  
  if (report.totalMissingItems === 0) {
    reportText += `🎉 CONGRATULATIONS! All business information has been collected successfully.\n`;
    reportText += `No missing assets or excluded items found.\n`;
  }
  
  return reportText;
};

export const downloadMissingReport = (formData: FormData) => {
  const shortName = formData.branding.short_name.customValue || formData.branding.short_name.defaultValue || 'Business';
  const sanitizedName = shortName.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${sanitizedName}_missing_assets_report.txt`;
  
  const reportText = generateMissingReportText(formData);
  const dataUri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(reportText);
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', filename);
  linkElement.click();
};
