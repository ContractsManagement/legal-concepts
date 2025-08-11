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

    // Collections for taxonomies
    eleventyConfig.addCollection("concept", function (collectionApi) {
        return collectionApi.getAll().filter(item =>
            item.inputPath.includes('/concepts/repo/') && item.inputPath.endsWith('.md')
        );
    });

    eleventyConfig.addCollection("jurisdiction", function (collectionApi) {
        const concepts = collectionApi.getAll().filter(item =>
            item.inputPath.includes('/concepts/repo/') && item.inputPath.endsWith('.md')
        );
        const jurisdictions = new Map();

        concepts.forEach(concept => {
            const jurisdiction = concept.data.concept.primaryJurisdiction;
            if (jurisdiction) {
                if (!jurisdictions.has(jurisdiction)) {
                    jurisdictions.set(jurisdiction, {
                        name: jurisdiction,
                        concepts: []
                    });
                }
                jurisdictions.get(jurisdiction).concepts.push(concept);
            }
        });

        return Array.from(jurisdictions.values()).sort((a, b) => a.name.localeCompare(b.name));
    });

    eleventyConfig.addCollection("fieldOfLaw", function (collectionApi) {
        const concepts = collectionApi.getAll().filter(item =>
            item.inputPath.includes('/concepts/repo/') && item.inputPath.endsWith('.md')
        );
        const fields = new Map();

        concepts.forEach(concept => {
            const field = concept.data.concept.fieldOfLaw;
            if (field) {
                if (!fields.has(field)) {
                    fields.set(field, {
                        name: field,
                        concepts: []
                    });
                }
                fields.get(field).concepts.push(concept);
            }
        });

        return Array.from(fields.values()).sort((a, b) => a.name.localeCompare(b.name));
    });

    eleventyConfig.addCollection("cases", function (collectionApi) {
        const legalConceptsData = require('./src/_data/legal_concepts.json');
        const concepts = legalConceptsData.principles || [];
        const cases = new Map();

        concepts.forEach(concept => {
            // Add landmark cases from origin
            const landmarkCase = concept.discovery?.origin?.landmarkCase;
            if (landmarkCase && typeof landmarkCase === 'object' && landmarkCase.type === 'case') {
                const caseKey = landmarkCase.caseName;
                if (!cases.has(caseKey)) {
                    cases.set(caseKey, {
                        name: landmarkCase.caseName,
                        year: landmarkCase.year,
                        summary: landmarkCase.summary || '',
                        type: landmarkCase.type,
                        concepts: []
                    });
                }
                cases.get(caseKey).concepts.push({
                    data: {
                        concept: concept
                    }
                });
            }

            // Add cases from evolution
            const evolution = concept.discovery?.evolution || [];
            evolution.forEach(evolutionCase => {
                if (evolutionCase.caseName && evolutionCase.type === 'case') {
                    const caseKey = evolutionCase.caseName;
                    if (!cases.has(caseKey)) {
                        cases.set(caseKey, {
                            name: evolutionCase.caseName,
                            year: evolutionCase.year,
                            summary: evolutionCase.summary || '',
                            type: evolutionCase.type,
                            concepts: []
                        });
                    }
                    cases.get(caseKey).concepts.push({
                        data: {
                            concept: concept
                        }
                    });
                }
            });
        });

        return Array.from(cases.values()).sort((a, b) => {
            // Sort by year if available, otherwise by name
            if (a.year && b.year) return b.year - a.year;
            return a.name.localeCompare(b.name);
        });
    });

    return {
        pathPrefix: process.env.WEB_PATH_PREFIX || '',
        dir: { input: 'src', output: '_site' }
    };

};
