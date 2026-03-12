// import type { Core } from '@strapi/strapi';

import {Core} from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi } ) {
    strapi.documents.use(async (context, next) => {
      // Nur für den invoice Content-Type
      if (context.uid !== 'api::payment.payment') {
        return next();
      }

      // Nur beim Erstellen
      if (context.action !== 'create') {
        return next();
      }

      // Nur setzen, wenn noch keine Nummer vorhanden ist
      if (context.params?.data?.invoiceNumber) {
        return next();
      }

      const counter = await strapi.db.query('api::counter.counter').findOne({
        where: { key: 'TSB-2026' },
      });

      if (!counter) {
        throw new Error('Counter "TSB-2026" wurde nicht gefunden.');
      }

      const nextValue = Number(counter.value) + 1;

      await strapi.db.query('api::counter.counter').update({
        where: { id: counter.id },
        data: { value: nextValue },
      });

      context.params.data.invoiceNumber = String(nextValue);

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
