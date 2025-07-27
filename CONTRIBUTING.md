## Contributing to Legal Concepts

Thank you for your interest in contributing to the Construction Law Concepts Repository!

### How to Contribute Legal Concepts

All legal concepts are stored in `src/_data/legal_concepts.json`. To add or update a concept, follow the schema below. Each concept should be a JSON object matching this structure:

```json
{
  "principleName": "string",
  "aliases": ["string"],
  "primaryJurisdiction": "string",
  "fieldOfLaw": "string",
  "coreConcept": {
    "elevatorPitch": "string",
    "underlyingRationale": "string"
  },
  "discovery": {
    "origin": {
      "type": "string (e.g., Common Law, Equity, Statute)",
      "landmarkCase": "string (Case name and citation)",
      "summary": "A brief description of the origin."
    },
    "evolution": [
      {
        "caseName": "string",
        "year": "integer",
        "contribution": "string (How this case expanded, limited, or clarified the principle)."
      }
    ]
  },
  "deconstruction": {
    "essentialElementsTest": [
      {
        "element": "string (The name of the condition)",
        "description": "string (A clear explanation of what must be proven for this element.)"
      }
    ],
    "scopeAndLimitations": {
      "triggers": ["string (Factual scenarios that engage the principle)"],
      "limitations": ["string (Established exceptions or contractual provisions that can override it)"],
      "role": "string (e.g., 'Shield', 'Sword', 'Both')"
    }
  },
  "dissemination": {
    "hypotheticalExample": {
      "scenario": "string (A simple, illustrative story)",
      "outcome": "string (The result of applying the principle to the scenario)"
    },
    "audienceAdaptation": {
      "forClient": "string (Explanation focusing on practical impact and the 'bottom line')",
      "forLawyer": "string (Explanation focusing on legal mechanics and contentious points)"
    }
  },
  "deployment": {
    "application": {
      "affirmativeArgument": "string (How to argue FOR the principle's application)",
      "defensiveArgument": "string (How to argue AGAINST the principle's application)"
    },
    "legalConsequence": "string (The precise legal result if the principle is successfully applied)"
  },
  "relevantPrinciples": [
    "string (name of principle connected to this principle)": "string (How it is relevant)"
  ]
}
```

#### Steps to Contribute

1. **Fork the repository** and create a new branch for your changes.
2. **Edit `src/_data/legal_concepts.json`**:
   - Add your new concept as a new object in the array, or update an existing one.
   - Ensure your entry matches the schema above.
   - Use clear, concise language and cite cases where relevant.
3. **Validate your JSON**: Make sure the file is valid JSON. You can use online tools or run `yarn legal-cli validate` if available.
4. **Submit a Pull Request**: Describe your changes and reference any sources or cases.

#### Tips

- Keep entries factual and neutral.
- Use the correct jurisdiction and field of law.
- Cite landmark cases and provide clear explanations.
- If you are unsure about the format, review existing entries for examples.

---
For questions or help, open an issue or contact the maintainers.
