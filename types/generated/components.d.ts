import type { Struct, Schema } from '@strapi/strapi';

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
  };
  attributes: {
    street: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
    country: Schema.Attribute.Enumeration<
      ['Deutschland', '\u00D6sterrreich', 'Schweiz']
    >;
    streetNumber: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    active: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['internal', 'external']>;
    titleAttribute: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'customer-data.physical-condition': CustomerDataPhysicalCondition;
      'customer-data.personal-data': CustomerDataPersonalData;
      'customer-data.contact-data': CustomerDataContactData;
      'customer-data.address-data': CustomerDataAddressData;
      'elements.link': ElementsLink;
    }
  }
}
