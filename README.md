# Construction Law Concepts Repository

A comprehensive legal reference guide covering foundational construction law doctrines and principles.

This repository contains detailed analysis of 31 construction law principles from England & Wales, including their origins, evolution through case law, practical applications, and strategic implications for legal practice.

## Features

- **Comprehensive Legal Concepts**: 31 detailed construction law principles
- **Case Law Analysis**: Evolution of concepts through landmark cases
- **Search Functionality**: Find specific legal concepts quickly
- **Multi-language Support**: Extensible for multiple jurisdictions
- **Responsive Design**: Works on all devices
- **API Access**: JSON API for integration with other systems

## Content Structure

### Legal Concepts Included

The repository covers construction law principles including:

- **Contractual Obligations**: Fitness for purpose, good workmanlike manner
- **Liability Doctrines**: Vicarious liability, non-delegable duties, Rylands v Fletcher
- **Claims and Damages**: Global claims, total cost claims, cost of cure vs loss of amenity
- **Contractual Terms**: Condition precedent, incorporation by reference, waiver
- **Statutory Provisions**: Frustration, force majeure, statutory prohibitions
- **Equitable Principles**: Set-off, rectification, unconscionability
- **Insurance Matters**: Subrogation, contribution between joint tortfeasors

### Data Structure

Each legal concept includes:

- **Core Concept**: Elevator pitch and underlying rationale
- **Discovery**: Origin and evolution through case law
- **Deconstruction**: Essential elements and tests
- **Jurisdiction**: Primary jurisdiction and field of law
- **Aliases**: Alternative names and terminology

## Project Structure

The repository is built using [Eleventy](https://www.11ty.dev/) (11ty) static site generator with the following key components:

### Technology Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/) v3.1.2
- **Styling**: [TailwindCSS](https://tailwindcss.com/) for responsive design
- **Build Tool**: [Webpack](https://webpack.js.org/) for asset bundling
- **Package Manager**: [Yarn](https://yarnpkg.com/) for dependency management
- **Template Engine**: Nunjucks and Liquid for templating
- **Search**: Client-side JavaScript search functionality

### Site Content Directory Structure

```
├───en/               - English content
│   ├── concepts/     - Legal concepts catalog and individual pages
│   ├── pages/        - Site pages (about, search, etc.)
│   └── posts/        - Blog articles
├───images/           - Static images
├───scripts/          - JavaScript files
├───styles/           - CSS styling
├───_data/            - Site configuration and legal concepts data
│   ├── legal_concepts.json  - Legal concepts database
│   ├── site.json     - Site configuration
│   └── l10n/         - Localization resources
└───_includes/        - Eleventy template includes
    ├── concepts/     - Legal concepts templates
    ├── layout/       - Base layouts
    └── radar/        - Technology radar (legacy)
```

## Development

### Content Management

The legal concepts are stored in `src/_data/legal_concepts.json` and automatically generated into individual pages using the `yarn generate:concepts` command.

Each legal concept includes:

- **Principle Name**: Official name and aliases
- **Core Concept**: Summary and underlying rationale  
- **Legal Development**: Origin and evolution through case law
- **Essential Elements**: Tests and requirements
- **Jurisdiction**: Geographic and legal scope

### Adding New Concepts

1. Edit `src/_data/legal_concepts.json` to add new concepts
2. Run `yarn generate:concepts` to create individual pages
3. The site will automatically rebuild and display the new concepts

### Customization

- **Navigation**: Edit `src/_data/l10n/menu_en.json`
- **Site Configuration**: Modify `src/_data/site.json`
- **Styling**: Update TailwindCSS classes in templates
- **Templates**: Customize in `src/_includes/concepts/`

## Installation and Development

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Yarn](https://yarnpkg.com/) package manager

### Local Installation

1. Clone the project

```sh
git clone git@github.com:ContractsManagement/legal-concepts.git
cd legal-concepts
```

2. Install dependencies

```sh
yarn install
```

3. Generate concept pages from the legal concepts data

```sh
yarn generate:concepts
```

4. Start the development server

```sh
yarn serve
```

The site will be available at `http://localhost:3003`

### Building for Production

```sh
yarn build
```

### Available Scripts

- `yarn serve` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn clean` - Clean the output directory
- `yarn generate:concepts` - Generate individual concept pages from legal_concepts.json
- `yarn legal-cli` - Run the CLI tool for generating content
- `yarn test` - Run tests

## Deployment

### GitHub Pages Deployment

This project includes GitHub Actions workflow for automatic deployment to GitHub Pages. The workflow is configured in `.github/workflows/deploy-gh-pages.yml`.

### Environment Variables

You can configure the following environment variables for deployment:

- `WEB_ROOT_URL` - Website's root URL for sitemap generation
- `WEB_PATH_PREFIX` - URL context path for subdirectory deployments
- `GOOGLE_TAG_ID` - Google Analytics tracking ID
- `ALGOLIA_APP_ID` - Algolia search app ID (optional)
- `ALGOLIA_INDEX_NAME` - Algolia search index name (optional)
- `ALGOLIA_SEARCH_API_KEY` - Algolia search API key (optional)

### Alternative Hosting

The site can be deployed on various static hosting platforms:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase](https://firebase.google.com/)

## Docker Support

Build the Docker image:

```bash
docker build -t legal-concepts:latest .
```

Run the container:

```bash
docker run -it --rm -d -p 8080:80 --name legal-concepts legal-concepts:latest
```

The site will be available at `http://localhost:8080`

## API Access

The site generates JSON APIs for programmatic access to the legal concepts data:

- `/api/concepts.json` - All legal concepts in JSON format
- `/api/pages.json` - Site pages metadata  
- `/api/posts.json` - Blog posts and articles

## Contributing

Contributions to expand the legal concepts database are welcome! Please:

1. Fork the repository
2. Add new concepts to `src/_data/legal_concepts.json`
3. Follow the existing data structure
4. Run `yarn generate:concepts` to create pages
5. Test locally with `yarn serve`
6. Submit a pull request

### Content Guidelines

When adding new legal concepts:

- Ensure accuracy of legal principles
- Provide proper case law citations
- Include jurisdiction information
- Follow the established JSON structure
- Add relevant aliases and alternative names

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is built upon:

- [Eleventy](https://www.11ty.dev/) static site generator
- [TailwindCSS](https://tailwindcss.com/) for responsive styling
- Legal concepts analysis from
- Original template structure adapted from Fundamenty

## Disclaimer

The legal concepts presented in this repository are for educational and reference purposes only. This information should not be considered as legal advice. For specific legal matters, always consult qualified legal professionals and refer to official legal sources and current legislation.
