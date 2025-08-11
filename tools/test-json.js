console.log('Script starting...');

const fs = require('fs');
const path = require('path');

console.log('Loading JSON...');
try {
    const legalConcepts = require('../src/_data/legal_concepts.json');
    console.log('JSON loaded successfully');
    console.log('Principles count:', legalConcepts.principles?.length || 'No principles');

    if (legalConcepts.principles && legalConcepts.principles.length > 0) {
        console.log('First principle:', legalConcepts.principles[0].principleName);
    }
} catch (error) {
    console.error('Error loading JSON:', error);
}

console.log('Script finished.');
