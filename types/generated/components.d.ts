import type { Struct, Schema } from '@strapi/strapi';

export interface CustomerDataTestingQuestionResult
  extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_testing_question_results';
  info: {
    displayName: 'TestingQuestionResult';
    description: '';
  };
  attributes: {
    resultDataRaw: Schema.Attribute.JSON;
    resultPoints: Schema.Attribute.Integer;
  };
}

export interface CustomerDataPhysicalCondition extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_physical_conditions';
  info: {
    displayName: 'physical_condition';
    description: '';
  };
  attributes: {
    sensitiveStatus: Schema.Attribute.Enumeration<['unknown', 'yes', 'no']>;
  };
}

export interface CustomerDataPersonalData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_personal_data';
  info: {
    displayName: 'personalData';
    description: '';
  };
  attributes: {
    firstname: Schema.Attribute.String;
    lastname: Schema.Attribute.String;
    birthdate: Schema.Attribute.Date;
    gender: Schema.Attribute.Enumeration<['male', 'female', 'diverse']>;
  };
}

export interface CustomerDataContactData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_contact_data';
  info: {
    displayName: 'contactData';
  };
  attributes: {
    phone: Schema.Attribute.String;
    email: Schema.Attribute.String;
  };
}

export interface CustomerDataAddressData extends Struct.ComponentSchema {
  collectionName: 'components_customer_data_address_data';
  info: {
    displayName: 'addressData';
    description: '';
  };
  attributes: {
    street: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
    country: Schema.Attribute.Enumeration<
      ['Deutschland', '\u00D6sterrreich', 'Schweiz']
    > &
      Schema.Attribute.DefaultTo<'Deutschland'>;
    streetNumber: Schema.Attribute.String;
    city: Schema.Attribute.String;
  };
}

export interface ElementsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_text_blocks';
  info: {
    displayName: 'TextBlock';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Blocks;
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
  };
}

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImg: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    active: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['internal', 'external']>;
    titleAttribute: Schema.Attribute.String;
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
  };
}

export interface ElementsJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_elements_jumbotrons';
  info: {
    displayName: 'Jumbotron';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_sections';
  info: {
    displayName: 'gridSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    item: Schema.Attribute.Component<'elements.grid-item', true>;
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
  };
}

export interface ElementsGridItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_grid_items';
  info: {
    displayName: 'gridItem';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsFiles extends Struct.ComponentSchema {
  collectionName: 'components_elements_files';
  info: {
    displayName: 'files';
  };
  attributes: {
    title: Schema.Attribute.String;
    details: Schema.Attribute.Text;
    uploads: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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

export interface ComponentsTextImgComponent extends Struct.ComponentSchema {
  collectionName: 'components_components_text_img_components';
  info: {
    displayName: 'textImgComponent';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Component<'elements.text-block', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    internalName: Schema.Attribute.String;
    link: Schema.Attribute.Component<'elements.link', false>;
    bgColor: Schema.Attribute.Component<'elements.color-source', false>;
    textLeft: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'customer-data.testing-question-result': CustomerDataTestingQuestionResult;
      'customer-data.physical-condition': CustomerDataPhysicalCondition;
      'customer-data.personal-data': CustomerDataPersonalData;
      'customer-data.contact-data': CustomerDataContactData;
      'customer-data.address-data': CustomerDataAddressData;
      'elements.text-block': ElementsTextBlock;
      'elements.seo': ElementsSeo;
      'elements.logo': ElementsLogo;
      'elements.link': ElementsLink;
      'elements.jumbotron': ElementsJumbotron;
      'elements.grid-section': ElementsGridSection;
      'elements.grid-item': ElementsGridItem;
      'elements.files': ElementsFiles;
      'elements.color-source': ElementsColorSource;
      'components.text-img-component': ComponentsTextImgComponent;
    }
  }
}
