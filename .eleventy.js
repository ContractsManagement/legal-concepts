require('dotenv').config();
const filters = require('./utils/filters.js');
const passthroughs = require('./utils/passthroughs.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(syntaxHighlight);

    // Copy our static assets to the output folder
    passthroughs.forEach(passthroughPath => {
        eleventyConfig.addPassthroughCopy(passthroughPath);
    });

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    })

    return {
        pathPrefix: process.env.WEB_PATH_PREFIX || '',
        dir: { input: 'src', output: '_site' }
    };

};
