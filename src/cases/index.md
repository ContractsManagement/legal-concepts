---
layout: layout/base.njk
title: "Legal Cases"
description: "Browse landmark cases and their impact on construction law principles"
keywords: "legal cases, landmark cases, case law, precedents, construction law cases"
---

<h1>Legal Cases</h1>

<p>Browse landmark cases and precedents that have shaped construction law principles.</p>

<div class="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
  {% for case in collections.cases %}
  <div class="bg-white p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
    <h3 class="text-xl font-semibold text-purple-600 mb-3">
      {{ case.name }}
    </h3>

    {% if case.year %}
    <p class="text-sm text-gray-500 mb-2">{{ case.year }}</p>
    {% endif %}
    
    {% if case.type %}
    <p class="text-sm text-blue-600 mb-3">{{ case.type }}</p>
    {% endif %}
    
    {% if case.summary %}
    <p class="text-gray-700 mb-4 text-sm">{{ case.summary | slice: 0, 200 }}{% if case.summary.size > 200 %}...{% endif %}</p>
    {% elsif case.contribution %}
    <p class="text-gray-700 mb-4 text-sm">{{ case.contribution | slice: 0, 200 }}{% if case.contribution.size > 200 %}...{% endif %}</p>
    {% endif %}
    
    <div class="text-sm">
      <h4 class="font-semibold text-gray-800 mb-2">Related Concepts:</h4>
      <ul class="text-gray-700 space-y-1">
        {% for concept in case.concepts limit: 3 %}
        <li>
          <a href="/concepts/{{ concept.data.concept.principleName | slug }}/" class="text-purple-600 hover:underline">
            {{ concept.data.concept.principleName }}
          </a>
        </li>
        {% endfor %}
        {% if case.concepts.length > 3 %}
        <li class="text-gray-500">and {{ case.concepts.length - 3 }} more...</li>
        {% endif %}
      </ul>
    </div>
    
    <div class="mt-3 text-xs text-gray-600">
      {{ case.concepts.length }} related concept{{ 's' if case.concepts.length != 1 }}
    </div>
  </div>
  {% endfor %}
</div>
