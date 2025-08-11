---
layout: layout/base.njk
title: "Legal Jurisdictions"
description: "Browse legal concepts by jurisdiction - covering different legal systems and their specific applications"
keywords: "jurisdiction, legal systems, England Wales, civil law, common law, construction law"
---

# Legal Jurisdictions

Browse legal concepts organized by jurisdiction and legal system.

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {% for jurisdiction in collections.jurisdiction %}
  <div class="bg-white p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
    <h3 class="text-xl font-semibold text-blue-600 mb-3">
      <a href="/jurisdictions/{{ jurisdiction.name | slug }}/" class="hover:underline">
        {{ jurisdiction.name }}
      </a>
    </h3>

    <p class="text-gray-600 mb-4">
      {{ jurisdiction.concepts.length }} legal concept{{ 's' if jurisdiction.concepts.length != 1 }}
    </p>
    
    <div class="text-sm">
      <h4 class="font-semibold text-gray-800 mb-2">Key Concepts:</h4>
      <ul class="text-gray-700 space-y-1">
        {% for concept in jurisdiction.concepts limit: 3 %}
        <li>
          <a href="/concepts/{{ concept.data.concept.principleName | slug }}/" class="text-blue-600 hover:underline">
            {{ concept.data.concept.principleName }}
          </a>
        </li>
        {% endfor %}
        {% if jurisdiction.concepts.length > 3 %}
        <li class="text-gray-500">and {{ jurisdiction.concepts.length - 3 }} more...</li>
        {% endif %}
      </ul>
    </div>
  </div>
  {% endfor %}
</div>
