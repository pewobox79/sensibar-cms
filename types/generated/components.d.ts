import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsContact extends Struct.ComponentSchema {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    contactData: Schema.Attribute.Blocks;
    hashId: Schema.Attribute.String;
    internalName: Schema.Attribute.String;
    legalLinks: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface ComponentsQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_components_quote_sections';
  info: {
    displayName: 'quoteSection';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    button: Schema.Attribute.Component<'elements.link', false>;
    hasBgImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    hashId: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTextImgComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_text_img_components';
  info: {
    description: '';
    displayName: 'textImgComponent';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    hashId: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    internalName: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    text: Schema.Attribute.Component<'elements.text-block', false>;
    textLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ComponentsTextImgGrid extends Struct.ComponentSchema {
  collectionName: 'components_components_text_img_grids';
  info: {
    displayName: 'TextImgGrid';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    button: Schema.Attribute.Component<'elements.link', false>;
    hashId: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    internalName: Schema.Attribute.String;
    leftTextBlock: Schema.Attribute.Blocks;
    rightTextBlock: Schema.Attribute.Blocks;
  };
}

export interface CustomerDataAddressData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_address_data';
  info: {
    description: '';
    displayName: 'addressData';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.Enumeration<
      ['Deutschland', '\u00D6sterrreich', 'Schweiz']
    > &
      Schema.Attribute.DefaultTo<'Deutschland'>;
    street: Schema.Attribute.String;
    streetNumber: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
  };
}

export interface CustomerDataContactData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_contact_data';
  info: {
    displayName: 'contactData';
  };
  attributes: {
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface CustomerDataPersonalData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_personal_data';
  info: {
    description: '';
    displayName: 'personalData';
  };
  attributes: {
    birthdate: Schema.Attribute.Date;
    firstname: Schema.Attribute.String;
    gender: Schema.Attribute.Enumeration<['male', 'female', 'diverse']>;
    lastname: Schema.Attribute.String;
  };
}

export interface CustomerDataPhysicalCondition extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_physical_conditions';
  info: {
    description: '';
    displayName: 'physical_condition';
  };
  attributes: {
    sensitiveStatus: Schema.Attribute.Enumeration<['unknown', 'yes', 'no']>;
  };
}

export interface CustomerDataTestingQuestionResult
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_testing_question_results';
  info: {
    description: '';
    displayName: 'TestingQuestionResult';
  };
  attributes: {
    resultDataRaw: Schema.Attribute.JSON;
    resultPoints: Schema.Attribute.Integer;
  };
}

export interface ElementsColorSource extends Struct.ComponentSchema {
  collectionName: 'components_elements_color_sources';
  info: {
    displayName: 'colorSource';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['darkGrey', 'lightBeige', 'beige', 'white']
    >;
  };
}

export interface ElementsFiles extends Struct.ComponentSchema {
  collectionName: 'components_elements_files';
  info: {
    displayName: 'files';
  };
  attributes: {
    details: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    uploads: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsGridItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_items';
  info: {
    description: '';
    displayName: 'gridItem';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    description: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_sections';
  info: {
    description: '';
    displayName: 'gridSection';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    hashId: Schema.Attribute.String;
    item: Schema.Attribute.Component<'elements.grid-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_elements_jumbotrons';
  info: {
    displayName: 'Jumbotron';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    active: Schema.Attribute.Boolean;
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['internal', 'external']>;
    titleAttribute: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImg: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

export interface ElementsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_blocks';
  info: {
    description: '';
    displayName: 'TextBlock';
  };
  attributes: {
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    body: Schema.Attribute.Blocks;
    hashId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.contact': ComponentsContact;
      'components.quote-section': ComponentsQuoteSection;
      'components.text-img-component': ComponentsTextImgComponent;
      'components.text-img-grid': ComponentsTextImgGrid;
      'customer-data.address-data': CustomerDataAddressData;
      'customer-data.contact-data': CustomerDataContactData;
      'customer-data.personal-data': CustomerDataPersonalData;
      'customer-data.physical-condition': CustomerDataPhysicalCondition;
      'customer-data.testing-question-result': CustomerDataTestingQuestionResult;
      'elements.color-source': ElementsColorSource;
      'elements.files': ElementsFiles;
      'elements.grid-item': ElementsGridItem;
      'elements.grid-section': ElementsGridSection;
      'elements.jumbotron': ElementsJumbotron;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.seo': ElementsSeo;
      'elements.text-block': ElementsTextBlock;
    }
  }
}
