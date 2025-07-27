This is a guide for using GitHub Copilot with the Legal Concepts project.
Construction Law Concepts Repository - A comprehensive legal reference guide covering foundational construction law doctrines and principles.

**Use Yarn for package management.**

### Included Themes

A theme is a collection of templates (under the `_includes` folder) that generates a specific type of content. An example is the **Technology Radar**, which renders a page for the radar and a page for each of the blips.

- **(NEW)** API Browser - OpenAPI browser, based on Swagger UI.

I am changing the template from products to legal concepts.

`src\_data\legal_concepts.json` is the data file that contains the legal concepts.

Revise this site content under `./src` as you go.

### Commands

- `yarn serve` - Start development server
- `yarn build` - Build for production
- `yarn generate:concepts` - Generate concept pages from legal_concepts.json
- `yarn legal-cli` - CLI tool for generating content

```
├───{lang}        - Contents in given locale
│   ├ {lang}.json - Common front matter for all the contents in Spanish
│   ├── pages     - Site pages
│   ├── posts     - Site posts (e.g. blog articles)
│   ├── concepts  - concept catalog
│   └── radar     - (Technology) Radar
├───images        - Images
├───scripts
│   ├─ main.js    - Main JS file webapack uses to build the asset bundle.
│   └─ algolia.js - Site posts (blog articles)
├───styles        - Tailwind's CSS styling
├───_data         - Data/configuration file.
│   ├─ site.js    - Main site configuration data.
│   ├──l10n       - localization resource bundles
└───_includes     - Eleventy's inclusion files, as specified in the front matter
    ├─ apibrowser - API spec (Swagger) browser
    ├─ concepts   - concept Catalog layout (Architecture Repository)
    ├─ layout     - Default layouts
    └─radar       - Technology Radar layout
```
