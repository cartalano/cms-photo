import type { Schema, Struct } from '@strapi/strapi';

export interface SharedArtiste extends Struct.ComponentSchema {
  collectionName: 'components_shared_artistes';
  info: {
    displayName: 'artiste';
  };
  attributes: {
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedLieu extends Struct.ComponentSchema {
  collectionName: 'components_shared_lieus';
  info: {
    displayName: 'lieu';
  };
  attributes: {
    adress: Schema.Attribute.String;
    city: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPeriode extends Struct.ComponentSchema {
  collectionName: 'components_shared_periodes';
  info: {
    displayName: 'periode';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.artiste': SharedArtiste;
      'shared.lieu': SharedLieu;
      'shared.periode': SharedPeriode;
    }
  }
}
