/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */

import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default {
  product: Factory.extend({
    image() {
      return faker.image.cats(600, 600, true);
    },
    title() {
      return faker.commerce.product();
    },
    price() {
      return faker.commerce.price(100);
    },
  }),
};
