const fs = require('fs');
const path = require('path');
const legalConcepts = require('../src/_data/legal_concepts.json');

// Create a slug from a string
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim('-'); // Remove leading/trailing hyphens
}

// Generate individual concept pages
function generateConceptPages() {
  const conceptsDir = path.join(__dirname, '../src/en/concepts/repo');

  // Ensure directory exists
  if (!fs.existsSync(conceptsDir)) {
    fs.mkdirSync(conceptsDir, { recursive: true });
  }

  legalConcepts.principles.forEach((concept, index) => {
    const slug = createSlug(concept.principleName);
    const filename = `${slug}.md`;
    const filepath = path.join(conceptsDir, filename);

    const frontMatter = `---
title: "${concept.principleName}"
description: "${concept.coreConcept.elevatorPitch.replace(/"/g, '\\"')}"
keywords: "${concept.principleName}, ${concept.aliases ? concept.aliases.join(', ') + ', ' : ''}${concept.fieldOfLaw}, ${concept.primaryJurisdiction}, construction law, legal concept"
layout: concepts/concepts_item.njk
permalink: "/en/concepts/{{ title | slug }}/"
concept:
  principleName: "${concept.principleName}"
  aliases: ${JSON.stringify(concept.aliases || [])}
  primaryJurisdiction: "${concept.primaryJurisdiction}"
  fieldOfLaw: "${concept.fieldOfLaw}"
  coreConcept:
    elevatorPitch: "${concept.coreConcept.elevatorPitch.replace(/"/g, '\\"')}"
    underlyingRationale: "${concept.coreConcept.underlyingRationale.replace(/"/g, '\\"')}"
  discovery:
    origin:
      type: "${concept.discovery?.origin?.type || ''}"
      landmarkCase: "${concept.discovery?.origin?.landmarkCase || ''}"
      summary: "${concept.discovery?.origin?.summary?.replace(/"/g, '\\"') || ''}"
    evolution: ${JSON.stringify(concept.discovery?.evolution || [])}
  deconstruction:
    essentialElementsTest: ${JSON.stringify(concept.deconstruction?.essentialElementsTest || [])}
tags: 
  - legal-concept
  - construction-law
  - construction-law
---

This page provides detailed information about **{{ concept.principleName }}**.
`;

    fs.writeFileSync(filepath, frontMatter);
    console.log(`Generated: ${filename}`);
  });

  console.log(`Generated ${legalConcepts.principles.length} concept pages`);
}

// Run the generator
generateConceptPages();
