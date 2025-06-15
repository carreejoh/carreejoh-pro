import React, { useState } from 'react';
import FormSection from './Devform/components/FormSection';
import TextInput from './Devform/components/TextInput';
import ColorInput from './Devform/components/ColorInput';
import CheckboxField from './Devform/components/CheckboxField';
import TextAreaInput from './Devform/components/TextAreaInput';
// import HoursInput from './Devform/components/HoursInput';
import ServiceCard from './Devform/components/ServiceCard';
import PictureUploader from './Devform/components/pictureUploader';
import InstructionModels from './Devform/components/InstructionModels';
import InstructionModal from './Devform/components/InstructionModal';
import InstructionButton from './Devform/components/InstructionButton';
import EnhancedExclusionReason from './Devform/components/EnhancedExclusionReason';
import UniversalExclusionReason from './Devform/components/UniversalExclusionReason';
import { ChecklistItem, createChecklist } from './Devform/components/ChecklistManager';
import { generateConfig, downloadConfig } from './Devform/utlis/generate_config';
import { downloadMissingReport } from './Devform/utlis/generate_missing';

// interface DayHours {
//   day: string;
//   time: string;
// }

interface HoursOfOperation {
  monday: { isOpen: boolean; openTime: string; closeTime: string };
  tuesday: { isOpen: boolean; openTime: string; closeTime: string };
  wednesday: { isOpen: boolean; openTime: string; closeTime: string };
  thursday: { isOpen: boolean; openTime: string; closeTime: string };
  friday: { isOpen: boolean; openTime: string; closeTime: string };
  saturday: { isOpen: boolean; openTime: string; closeTime: string };
  sunday: { isOpen: boolean; openTime: string; closeTime: string };
}

interface ServiceCardData {
  title: string;
  description: string;
  image: { cropped: string; original: string };
  items: string[];
}

interface ConfigField {
  included: boolean;
  defaultValue: any;
  customValue: any;
  exclusionReason?: string;
  checklist?: ChecklistItem[];
}

interface FormData {
  theme: {
    primary_color: ConfigField & { defaultValue: string; customValue: string };
    secondary_color: ConfigField & { defaultValue: string; customValue: string };
    font: ConfigField & { defaultValue: string; customValue: string };
  };
  branding: {
    logo: ConfigField & { defaultValue: string; customValue: { cropped: string; original: string } };
    short_name: ConfigField & { defaultValue: string; customValue: string };
    long_name: ConfigField & { defaultValue: string; customValue: string };
  };
  contact: {
    phoneLink: ConfigField & { defaultValue: string; customValue: string };
    email: ConfigField & { defaultValue: string; customValue: string; semiCustomValue: string };
  };
  location: {
    addressFull: ConfigField & { defaultValue: string; customValue: string };
    googleMapEmbedLink: ConfigField & { defaultValue: string; customValue: string };
    googleMapLink: ConfigField & { defaultValue: string; customValue: string };
    appleMapLink: ConfigField & { defaultValue: string; customValue: string };
  };
  hours: ConfigField & { defaultValue: HoursOfOperation; customValue: HoursOfOperation };
  landing: {
    image: ConfigField & { defaultValue: string; customValue: { cropped: string; original: string } };
    title: ConfigField & { defaultValue: string; customValue: string };
    subtext: ConfigField & { defaultValue: string; customValue: string };
  };
  services: {
    cards: Array<ConfigField & { defaultValue: ServiceCardData; customValue: ServiceCardData }>;
  };
  about: {
    team_image: ConfigField & { defaultValue: string; customValue: { cropped: string; original: string } };
    owner_image: ConfigField & { defaultValue: string; customValue: { cropped: string; original: string } };
    description: ConfigField & { defaultValue: string; customValue: string };
    team_description: ConfigField & { defaultValue: string; customValue: string };
    owner_name: ConfigField & { defaultValue: string; customValue: string };
    owner_description: ConfigField & { defaultValue: string; customValue: string };
  };
}

const Devform: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    theme: {
      primary_color: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('color')
      },
      secondary_color: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('color')
      },
      font: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('font')
      }
    },
    branding: {
      logo: {
        included: true,
        defaultValue: "",
        customValue: { cropped: "", original: "" },
        exclusionReason: "",
        checklist: createChecklist('logo')
      },
      short_name: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('text')
      },
      long_name: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('text')
      }
    },
    contact: {
      phoneLink: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('phone')
      },
      email: {
        included: true,
        defaultValue: "",
        customValue: "",
        semiCustomValue: "",
        exclusionReason: "",
        checklist: createChecklist('email')
      }
    },
    location: {
      addressFull: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('address')
      },
      googleMapEmbedLink: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('maps')
      },
      googleMapLink: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('maps')
      },
      appleMapLink: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('maps')
      }
    },
    hours: {
      included: true,
      defaultValue: {
        monday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        tuesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        wednesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        thursday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        friday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        saturday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        sunday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
      },
      customValue: {
        monday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        tuesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        wednesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        thursday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        friday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        saturday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
        sunday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
      },
      exclusionReason: "",
      checklist: createChecklist('hours')
    },
    landing: {
      image: {
        included: true,
        defaultValue: "",
        customValue: { cropped: "", original: "" },
        exclusionReason: "",
        checklist: createChecklist('image')
      },
      title: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('text')
      },
      subtext: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('text')
      }
    },
    services: {
      cards: []
    },
    about: {
      team_image: {
        included: true,
        defaultValue: "",
        customValue: { cropped: "", original: "" },
        exclusionReason: "",
        checklist: createChecklist('image')
      },
      owner_image: {
        included: true,
        defaultValue: "",
        customValue: { cropped: "", original: "" },
        exclusionReason: "",
        checklist: createChecklist('image')
      },
      description: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('description')
      },
      team_description: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('description')
      },
      owner_name: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('text')
      },
      owner_description: {
        included: true,
        defaultValue: "",
        customValue: "",
        exclusionReason: "",
        checklist: createChecklist('description')
      }
    }
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: {
          ...(prev[section as keyof FormData] as any)[field],
          customValue: value
        }
      }
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const [section, field] = name.split('.');
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: {
          ...(prev[section as keyof FormData] as any)[field],
          included: checked
        }
      }
    }));
  };

  const handleExclusionReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');
    
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: {
          ...(prev[section as keyof FormData] as any)[field],
          exclusionReason: value
        }
      }
    }));
  };

  const handleChecklistChange = (section: string, field: string, itemId: string, checked: boolean) => {
    setFormData(prev => {
      const currentField = (prev[section as keyof FormData] as any)[field];
      const updatedChecklist = currentField.checklist?.map((item: ChecklistItem) =>
        item.id === itemId ? { ...item, checked } : item
      ) || [];

      return {
        ...prev,
        [section]: {
          ...prev[section as keyof FormData],
          [field]: {
            ...currentField,
            checklist: updatedChecklist
          }
        }
      };
    });
  };

  const handleHoursChange = (day: keyof HoursOfOperation, field: 'isOpen' | 'openTime' | 'closeTime', value: boolean | string) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        customValue: {
          ...prev.hours.customValue,
          [day]: {
            ...prev.hours.customValue[day],
            [field]: value,
          },
        },
      },
    }));
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phoneNumber;
  };

  const addService = () => {
    const newService = {
      included: true,
      defaultValue: {
        title: "",
        description: "",
        image: { cropped: "", original: "" },
        items: []
      },
      customValue: {
        title: "",
        description: "",
        image: { cropped: "", original: "" },
        items: []
      },
      exclusionReason: "",
      checklist: createChecklist('services')
    };
    
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        cards: [...prev.services.cards, newService]
      }
    }));
  };

  const removeService = (index: number) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        cards: prev.services.cards.filter((_, i) => i !== index)
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate and download the configuration file
    const config = generateConfig(formData);
    downloadConfig(config, formData);
    
    // Generate and download the missing report
    downloadMissingReport(formData);
    
    console.log('Configuration and missing report generated successfully!');
  };

  const handleRestart = () => {
    if (window.confirm('Are you sure you want to restart? This will clear all form data.')) {
      setFormData({
        theme: {
          primary_color: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('color')
          },
          secondary_color: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('color')
          },
          font: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('font')
          }
        },
        branding: {
          logo: {
            included: true,
            defaultValue: "",
            customValue: { cropped: "", original: "" },
            exclusionReason: "",
            checklist: createChecklist('logo')
          },
          short_name: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('text')
          },
          long_name: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('text')
          }
        },
        contact: {
          phoneLink: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('phone')
          },
          email: {
            included: true,
            defaultValue: "",
            customValue: "",
            semiCustomValue: "",
            exclusionReason: "",
            checklist: createChecklist('email')
          }
        },
        location: {
          addressFull: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('address')
          },
          googleMapEmbedLink: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('maps')
          },
          googleMapLink: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('maps')
          },
          appleMapLink: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('maps')
          }
        },
                 hours: {
           included: true,
           defaultValue: {
             monday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             tuesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             wednesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             thursday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             friday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             saturday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             sunday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
           },
           customValue: {
             monday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             tuesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             wednesday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             thursday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             friday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             saturday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
             sunday: { isOpen: false, openTime: '08:00', closeTime: '17:00' },
           },
           exclusionReason: "",
           checklist: createChecklist('hours')
         },
        landing: {
          image: {
            included: true,
            defaultValue: "",
            customValue: { cropped: "", original: "" },
            exclusionReason: "",
            checklist: createChecklist('image')
          },
          title: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('text')
          },
          subtext: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('text')
          }
        },
        services: {
          cards: []
        },
        about: {
          team_image: {
            included: true,
            defaultValue: "",
            customValue: { cropped: "", original: "" },
            exclusionReason: "",
            checklist: createChecklist('image')
          },
          owner_image: {
            included: true,
            defaultValue: "",
            customValue: { cropped: "", original: "" },
            exclusionReason: "",
            checklist: createChecklist('image')
          },
          description: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('description')
          },
          team_description: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('description')
          },
          owner_name: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('text')
          },
          owner_description: {
            included: true,
            defaultValue: "",
            customValue: "",
            exclusionReason: "",
            checklist: createChecklist('description')
          }
        }
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center mb-8">
            <h2 className="card-title text-3xl font-bold">Business Configuration Form</h2>
            <button
              type="button"
              onClick={handleRestart}
              className="btn btn-error btn-outline"
            >
              🔄 Restart Form
            </button>
          </div>

          <div className="space-y-8">
            {/* Theme Section */}
            <FormSection title="Theme Configuration">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Theme Settings</h3>
                <InstructionButton onClick={() => setOpenModal('theme')} />
              </div>
              <div className="space-y-4">
                <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                  <CheckboxField
                    label="Include Primary Color"
                    name="theme.primary_color"
                    checked={formData.theme.primary_color.included}
                    onChange={handleCheckboxChange}
                  />
                  {formData.theme.primary_color.included ? (
                    <div className="mt-3">
                      <ColorInput
                        label="Primary Color"
                        name="theme.primary_color"
                        value={formData.theme.primary_color.customValue || formData.theme.primary_color.defaultValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  ) : (
                    <EnhancedExclusionReason
                      value={formData.theme.primary_color.exclusionReason || ''}
                      onChange={(e) => {
                        e.target.name = 'theme.primary_color';
                        handleExclusionReasonChange(e);
                      }}
                      checklistItems={formData.theme.primary_color.checklist || []}
                      onChecklistChange={(itemId, checked) => 
                        handleChecklistChange('theme', 'primary_color', itemId, checked)
                      }
                      title="Primary Color"
                    />
                  )}
                </div>

                <div className="bg-base-100 p-4 rounded-lg">
                  <CheckboxField
                    label="Include Secondary Color"
                    name="theme.secondary_color"
                    checked={formData.theme.secondary_color.included}
                    onChange={handleCheckboxChange}
                  />
                  {formData.theme.secondary_color.included ? (
                    <div className="mt-3">
                      <ColorInput
                        label="Secondary Color"
                        name="theme.secondary_color"
                        value={formData.theme.secondary_color.customValue || formData.theme.secondary_color.defaultValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  ) : (
                    <EnhancedExclusionReason
                      value={formData.theme.secondary_color.exclusionReason || ''}
                      onChange={(e) => {
                        e.target.name = 'theme.secondary_color';
                        handleExclusionReasonChange(e);
                      }}
                      checklistItems={formData.theme.secondary_color.checklist || []}
                      onChecklistChange={(itemId, checked) => 
                        handleChecklistChange('theme', 'secondary_color', itemId, checked)
                      }
                      title="Secondary Color"
                    />
                  )}
                </div>

                <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                  <CheckboxField
                    label="Include Font"
                    name="theme.font"
                    checked={formData.theme.font.included}
                    onChange={handleCheckboxChange}
                  />
                  {formData.theme.font.included ? (
                    <div className="mt-3">
                      <TextInput
                        label="Font Name"
                        name="theme.font"
                        value={formData.theme.font.customValue || formData.theme.font.defaultValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="e.g., Arial, Roboto, Open Sans"
                      />
                    </div>
                  ) : (
                    <EnhancedExclusionReason
                      value={formData.theme.font.exclusionReason || ''}
                      onChange={(e) => {
                        e.target.name = 'theme.font';
                        handleExclusionReasonChange(e);
                      }}
                      checklistItems={formData.theme.font.checklist || []}
                      onChecklistChange={(itemId, checked) => 
                        handleChecklistChange('theme', 'font', itemId, checked)
                      }
                      title="Font"
                    />
                  )}
                </div>
              </div>
            </FormSection>

            {/* Branding Section */}
            <FormSection title="Branding">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Business Branding</h3>
                <InstructionButton onClick={() => setOpenModal('branding')} />
              </div>
              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Logo"
                  name="branding.logo"
                  checked={formData.branding.logo.included}
                  onChange={handleCheckboxChange}
                />
                {formData.branding.logo.included ? (
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text">Logo</span>
                    </label>
                    <PictureUploader
                      pictureState={formData.branding.logo.customValue}
                      setPictureState={(url) => setFormData(prev => ({
                        ...prev,
                        branding: {
                          ...prev.branding,
                          logo: { ...prev.branding.logo, customValue: url }
                        }
                      }))}
                      uploadText="Upload Logo"
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="branding"
                    field="logo"
                    value={formData.branding.logo.exclusionReason || ''}
                    onChange={(e) => {
                      e.target.name = 'branding.logo';
                      handleExclusionReasonChange(e);
                    }}
                    checklistItems={formData.branding.logo.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('branding', 'logo', itemId, checked)
                    }
                  />
                )}
              </div>

              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Short Name"
                  name="branding.short_name"
                  checked={formData.branding.short_name.included}
                  onChange={handleCheckboxChange}
                />
                {formData.branding.short_name.included ? (
                  <div className="mt-3">
                    <TextInput
                      label="Short Name"
                      name="branding.short_name"
                      value={formData.branding.short_name.customValue || formData.branding.short_name.defaultValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="branding"
                    field="short_name"
                    value={formData.branding.short_name.exclusionReason || ''}
                    onChange={(e) => {
                      e.target.name = 'branding.short_name';
                      handleExclusionReasonChange(e);
                    }}
                    checklistItems={formData.branding.short_name.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('branding', 'short_name', itemId, checked)
                    }
                  />
                )}
              </div>

              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Long Name"
                  name="branding.long_name"
                  checked={formData.branding.long_name.included}
                  onChange={handleCheckboxChange}
                />
                {formData.branding.long_name.included ? (
                  <div className="mt-3">
                    <TextInput
                      label="Long Name"
                      name="branding.long_name"
                      value={formData.branding.long_name.customValue || formData.branding.long_name.defaultValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="branding"
                    field="long_name"
                    value={formData.branding.long_name.exclusionReason || ''}
                    onChange={(e) => {
                      e.target.name = 'branding.long_name';
                      handleExclusionReasonChange(e);
                    }}
                    checklistItems={formData.branding.long_name.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('branding', 'long_name', itemId, checked)
                    }
                  />
                )}
              </div>
            </FormSection>

            {/* Contact Section */}
            <FormSection title="Contact Information">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Contact Details</h3>
                <InstructionButton onClick={() => setOpenModal('contact')} />
              </div>
              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Phone Number"
                  name="contact.phoneLink"
                  checked={formData.contact.phoneLink.included}
                  onChange={handleCheckboxChange}
                />
                {formData.contact.phoneLink.included ? (
                  <div className="mt-3">
                    <TextInput
                      label="Phone Number (Just the numbers)"
                      name="contact.phoneLink"
                      value={formData.contact.phoneLink.customValue || formData.contact.phoneLink.defaultValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      type="tel"
                      placeholder="8019068168"
                    />
                    <div className="mt-2 text-sm text-gray-600">
                      <strong>Formatted:</strong> {formatPhoneNumber(formData.contact.phoneLink.customValue || formData.contact.phoneLink.defaultValue)}
                    </div>
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="contact"
                    field="phoneLink"
                    value={formData.contact.phoneLink.exclusionReason || ''}
                    onChange={(e) => {
                      e.target.name = 'contact.phoneLink';
                      handleExclusionReasonChange(e);
                    }}
                    checklistItems={formData.contact.phoneLink.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('contact', 'phoneLink', itemId, checked)
                    }
                  />
                )}
              </div>

              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Email"
                  name="contact.email"
                  checked={formData.contact.email.included}
                  onChange={handleCheckboxChange}
                />
                {formData.contact.email.included ? (
                  <div className="mt-3">
                    <TextInput
                      label="Email"
                      name="contact.email"
                      value={formData.contact.email.customValue || formData.contact.email.defaultValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      type="email"
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="contact"
                    field="email"
                    value={formData.contact.email.exclusionReason || ''}
                    onChange={(e) => {
                      e.target.name = 'contact.email';
                      handleExclusionReasonChange(e);
                    }}
                    checklistItems={formData.contact.email.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('contact', 'email', itemId, checked)
                    }
                  />
                )}
              </div>
            </FormSection>

            {/* Location Section */}
            <FormSection title="Location Information">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Business Location</h3>
                <InstructionButton onClick={() => setOpenModal('location')} />
              </div>
              {Object.entries(formData.location).map(([key, field]) => (
                <div key={key} className={`bg-base-100 p-4 rounded-lg ${key === 'addressFull' ? 'border-4 border-orange-500' : ''}`}>
                  <CheckboxField
                    label={`Include ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`}
                    name={`location.${key}`}
                    checked={field.included}
                    onChange={handleCheckboxChange}
                  />
                  {field.included ? (
                    <div className="mt-3">
                      <TextInput
                        label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        name={`location.${key}`}
                        value={field.customValue || field.defaultValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        type={key.includes('Link') ? 'url' : 'text'}
                      />
                      {key === 'addressFull' && (
                        <div className="mt-2 text-sm text-gray-600">
                          <div><strong>Short Address:</strong> {(field.customValue || field.defaultValue).split(',')[0]}</div>
                          <div><strong>Long Address:</strong> {field.customValue || field.defaultValue}</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <UniversalExclusionReason
                      section="location"
                      field={key}
                      value={field.exclusionReason || ''}
                      onChange={(e) => {
                        e.target.name = `location.${key}`;
                        handleExclusionReasonChange(e);
                      }}
                      checklistItems={field.checklist || []}
                      onChecklistChange={(itemId, checked) => 
                        handleChecklistChange('location', key, itemId, checked)
                      }
                    />
                  )}
                </div>
              ))}
            </FormSection>

            {/* Hours Section */}
            <FormSection title="Hours of Operation">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Operating Hours</h3>
                <InstructionButton onClick={() => setOpenModal('hours')} />
              </div>
              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Hours of Operation"
                  name="hours"
                  checked={formData.hours.included}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      hours: { ...prev.hours, included: e.target.checked }
                    }));
                  }}
                />
                {formData.hours.included ? (
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text text-lg font-semibold">Hours of Operation</span>
                    </label>
                    <div className="bg-base-200 rounded-lg p-4">
                      <div className="grid gap-3">
                        {(Object.keys(formData.hours.customValue) as Array<keyof HoursOfOperation>).map((day) => (
                          <div key={day} className="bg-base-100 rounded-lg p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-lg capitalize text-primary">{day}</h4>
                              <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`${day}-status`}
                                    className="radio radio-primary radio-sm"
                                    checked={formData.hours.customValue[day].isOpen}
                                    onChange={() => handleHoursChange(day, 'isOpen', true)}
                                  />
                                  <span className="text-sm font-medium">Open</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`${day}-status`}
                                    className="radio radio-primary radio-sm"
                                    checked={!formData.hours.customValue[day].isOpen}
                                    onChange={() => handleHoursChange(day, 'isOpen', false)}
                                  />
                                  <span className="text-sm font-medium">Closed</span>
                                </label>
                              </div>
                            </div>
                            
                            {formData.hours.customValue[day].isOpen ? (
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium text-gray-600">From:</span>
                                  <input
                                    type="time"
                                    value={formData.hours.customValue[day].openTime}
                                    onChange={(e) => handleHoursChange(day, 'openTime', e.target.value)}
                                    className="input input-bordered input-sm w-32"
                                  />
                                  <span className="text-sm text-gray-500">
                                    ({formatTime(formData.hours.customValue[day].openTime)})
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium text-gray-600">To:</span>
                                  <input
                                    type="time"
                                    value={formData.hours.customValue[day].closeTime}
                                    onChange={(e) => handleHoursChange(day, 'closeTime', e.target.value)}
                                    className="input input-bordered input-sm w-32"
                                  />
                                  <span className="text-sm text-gray-500">
                                    ({formatTime(formData.hours.customValue[day].closeTime)})
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="text-center py-2">
                                <span className="text-gray-500 italic">Closed all day</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="hours"
                    field="hours"
                    value={formData.hours.exclusionReason || ''}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        hours: { ...prev.hours, exclusionReason: e.target.value }
                      }));
                    }}
                    checklistItems={formData.hours.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('hours', 'hours', itemId, checked)
                    }
                  />
                )}
              </div>
            </FormSection>

            {/* Landing Section */}
            <FormSection title="Landing Page">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Homepage Content</h3>
                <InstructionButton onClick={() => setOpenModal('landing')} />
              </div>

              <div className="bg-base-100 p-4 rounded-lg border-4 border-orange-500">
                <CheckboxField
                  label="Include Landing Image"
                  name="landing.image"
                  checked={formData.landing.image.included}
                  onChange={handleCheckboxChange}
                />
                {formData.landing.image.included ? (
                  <div className="mt-3">
                    <label className="label">
                      <span className="label-text">Landing Image</span>
                    </label>
                    <PictureUploader
                      pictureState={formData.landing.image.customValue}
                      setPictureState={(url) => setFormData(prev => ({
                        ...prev,
                        landing: {
                          ...prev.landing,
                          image: { ...prev.landing.image, customValue: url }
                        }
                      }))}
                      uploadText="Upload Landing Image"
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="landing"
                    field="image"
                    value={formData.landing.image.exclusionReason || ''}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        landing: {
                          ...prev.landing,
                          image: { ...prev.landing.image, exclusionReason: e.target.value }
                        }
                      }));
                    }}
                    checklistItems={formData.landing.image.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('landing', 'image', itemId, checked)
                    }
                  />
                )}
              </div>

              <div className="bg-base-100 p-4 rounded-lg">
                <CheckboxField
                  label="Include Landing Title"
                  name="landing.title"
                  checked={formData.landing.title.included}
                  onChange={handleCheckboxChange}
                />
                {formData.landing.title.included ? (
                  <div className="mt-3">
                    <TextInput
                      label="Landing Title"
                      name="landing.title"
                      value={formData.landing.title.customValue || formData.landing.title.defaultValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="landing"
                    field="title"
                    value={formData.landing.title.exclusionReason || ''}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        landing: {
                          ...prev.landing,
                          title: { ...prev.landing.title, exclusionReason: e.target.value }
                        }
                      }));
                    }}
                    checklistItems={formData.landing.title.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('landing', 'title', itemId, checked)
                    }
                  />
                )}
              </div>

              <div className="bg-base-100 p-4 rounded-lg">
                <CheckboxField
                  label="Include Landing Subtext"
                  name="landing.subtext"
                  checked={formData.landing.subtext.included}
                  onChange={handleCheckboxChange}
                />
                {formData.landing.subtext.included ? (
                  <div className="mt-3">
                    <TextAreaInput
                      label="Landing Subtext"
                      name="landing.subtext"
                      value={formData.landing.subtext.customValue || formData.landing.subtext.defaultValue}
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          landing: {
                            ...prev.landing,
                            subtext: { ...prev.landing.subtext, customValue: e.target.value }
                          }
                        }));
                      }}
                      rows={3}
                    />
                  </div>
                ) : (
                  <UniversalExclusionReason
                    section="landing"
                    field="subtext"
                    value={formData.landing.subtext.exclusionReason || ''}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        landing: {
                          ...prev.landing,
                          subtext: { ...prev.landing.subtext, exclusionReason: e.target.value }
                        }
                      }));
                    }}
                    checklistItems={formData.landing.subtext.checklist || []}
                    onChecklistChange={(itemId, checked) => 
                      handleChecklistChange('landing', 'subtext', itemId, checked)
                    }
                  />
                )}
              </div>
            </FormSection>

            {/* Services Section */}
            <FormSection title="Services">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Business Services</h3>
                <InstructionButton onClick={() => setOpenModal('services')} />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">Service Cards</h4>
                  <button
                    type="button"
                    onClick={addService}
                    className="btn btn-primary btn-sm"
                  >
                    Add Service
                  </button>
                </div>
                
                {formData.services.cards.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No services added yet. Click "Add Service" to get started.
                  </div>
                ) : (
                  formData.services.cards.map((card, index) => (
                    <div key={index} className="bg-base-100 p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-3">
                        <CheckboxField
                          label={`Include ${card.customValue.title || card.defaultValue.title}`}
                          name={`services.cards.${index}`}
                          checked={card.included}
                          onChange={(e) => {
                            const newCards = [...formData.services.cards];
                            newCards[index] = { ...newCards[index], included: e.target.checked };
                            setFormData(prev => ({
                              ...prev,
                              services: { ...prev.services, cards: newCards }
                            }));
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeService(index)}
                          className="btn btn-error btn-sm"
                        >
                          Remove
                        </button>
                      </div>
                      
                      {card.included ? (
                        <div className="mt-3">
                          <ServiceCard
                            title={card.customValue.title || card.defaultValue.title}
                            data={card.customValue.title ? card.customValue : card.defaultValue}
                            onChange={(data) => {
                              const newCards = [...formData.services.cards];
                              newCards[index] = { ...newCards[index], customValue: data };
                              setFormData(prev => ({
                                ...prev,
                                services: { ...prev.services, cards: newCards }
                              }));
                            }}
                            onKeyDown={handleKeyDown}
                          />
                        </div>
                      ) : (
                        <UniversalExclusionReason
                          section="services"
                          field="cards"
                          value={card.exclusionReason || ''}
                          onChange={(e) => {
                            const newCards = [...formData.services.cards];
                            newCards[index] = { ...newCards[index], exclusionReason: e.target.value };
                            setFormData(prev => ({
                              ...prev,
                              services: { ...prev.services, cards: newCards }
                            }));
                          }}
                          checklistItems={card.checklist || []}
                          onChecklistChange={(itemId, checked) => {
                            const newCards = [...formData.services.cards];
                            const updatedChecklist = newCards[index].checklist?.map((item) =>
                              item.id === itemId ? { ...item, checked } : item
                            ) || [];
                            newCards[index] = { ...newCards[index], checklist: updatedChecklist };
                            setFormData(prev => ({
                              ...prev,
                              services: { ...prev.services, cards: newCards }
                            }));
                          }}
                        />
                      )}
                    </div>
                  ))
                )}
              </div>
            </FormSection>

            {/* About Section */}
            <FormSection title="About Us">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">About the Business</h3>
                <InstructionButton onClick={() => setOpenModal('about')} />
              </div>
              {Object.entries(formData.about).map(([key, field]) => (
                <div key={key} className="bg-base-100 p-4 rounded-lg">
                  <CheckboxField
                    label={`Include ${key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`}
                    name={`about.${key}`}
                    checked={field.included}
                    onChange={handleCheckboxChange}
                  />
                  {field.included ? (
                    <div className="mt-3">
                      {key.includes('image') ? (
                        <>
                          <label className="label">
                            <span className="label-text">{key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                          </label>
                          <PictureUploader
                            pictureState={field.customValue}
                            setPictureState={(url) => setFormData(prev => ({
                              ...prev,
                              about: {
                                ...prev.about,
                                [key]: { ...field, customValue: url }
                              }
                            }))}
                            uploadText={`Upload ${key.replace(/_/g, ' ')}`}
                          />
                        </>
                      ) : key.includes('description') ? (
                        <TextAreaInput
                          label={key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          name={`about.${key}`}
                          value={field.customValue || field.defaultValue}
                          onChange={(e) => {
                            e.target.name = `about.${key}`;
                            handleInputChange(e as any);
                          }}
                          rows={4}
                        />
                      ) : (
                        <TextInput
                          label={key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          name={`about.${key}`}
                          value={field.customValue || field.defaultValue}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                        />
                      )}
                    </div>
                  ) : (
                    <UniversalExclusionReason
                      section="about"
                      field={key}
                      value={field.exclusionReason || ''}
                      onChange={(e) => {
                        e.target.name = `about.${key}`;
                        handleExclusionReasonChange(e);
                      }}
                      checklistItems={field.checklist || []}
                      onChecklistChange={(itemId, checked) => 
                        handleChecklistChange('about', key, itemId, checked)
                      }
                    />
                  )}
                </div>
              ))}
            </FormSection>

            {/* Submit Button */}
            <div className="form-control mt-8">
              <button type="submit" className="btn btn-primary btn-lg">
                Generate Configuration
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Instruction Modals */}
      <InstructionModal
        isOpen={openModal === 'theme'}
        onClose={() => setOpenModal(null)}
        title="Theme Configuration"
      >
        <InstructionModels.ThemeInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'branding'}
        onClose={() => setOpenModal(null)}
        title="Branding"
      >
        <InstructionModels.BrandingInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'contact'}
        onClose={() => setOpenModal(null)}
        title="Contact Information"
      >
        <InstructionModels.ContactInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'location'}
        onClose={() => setOpenModal(null)}
        title="Location Information"
      >
        <InstructionModels.LocationInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'hours'}
        onClose={() => setOpenModal(null)}
        title="Hours of Operation"
      >
        <InstructionModels.HoursInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'landing'}
        onClose={() => setOpenModal(null)}
        title="Landing Page"
      >
        <InstructionModels.LandingInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'services'}
        onClose={() => setOpenModal(null)}
        title="Services"
      >
        <InstructionModels.ServicesInstructions />
      </InstructionModal>

      <InstructionModal
        isOpen={openModal === 'about'}
        onClose={() => setOpenModal(null)}
        title="About Us"
      >
        <InstructionModels.AboutInstructions />
      </InstructionModal>
    </div>
  );
};

export default Devform;
