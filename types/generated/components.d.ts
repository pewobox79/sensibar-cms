import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.link': ElementsLink;
      'customer-data.personal-data': CustomerDataPersonalData;
      'customer-data.contact-data': CustomerDataContactData;
      'customer-data.address-data': CustomerDataAddressData;
    }
  }
}
