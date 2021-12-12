'use strict';
const slugify = require('slugify');
/**
 * Lifecycle callbacks for the `product` model.
 */

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.title) {
                console.log(data.name.toLowerCase());
                data.slug = slugify(data.name.toLowerCase());
            }
        },
        beforeUpdate: async (params, data) => {
            data.slug = slugify(data.name.toLowerCase());
        },
    },
};
