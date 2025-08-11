---
layout: layout/base.njk
title: "Fields of Law"
description: "Browse legal concepts organized by field of law - from contract law to tort liability"
keywords: "fields of law, construction law, contract law, tort law, legal categories"
---

<h1>Fields of Law</h1>

<p>Browse legal concepts organized by field of law and legal specialty area.</p>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {% for field in collections.fieldOfLaw %}
  <div class="bg-white p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
    <h3 class="text-xl font-semibold text-green-600 mb-3">
      <a href="/fields/{{ field.name | slug }}/" class="hover:underline">
        {{ field.name }}
      </a>
    </h3>

    <p class="text-gray-600 mb-4">
      {{ field.concepts.length }} legal concept{{ 's' if field.concepts.length != 1 }}
    </p>
    
    <div class="text-sm">
      <h4 class="font-semibold text-gray-800 mb-2">Key Concepts:</h4>
      <ul class="text-gray-700 space-y-1">
        {% for concept in field.concepts limit: 3 %}
        <li>
          <a href="/concepts/{{ concept.data.concept.principleName | slug }}/" class="text-green-600 hover:underline">
            {{ concept.data.concept.principleName }}
          </a>
        </li>
        {% endfor %}
        {% if field.concepts.length > 3 %}
        <li class="text-gray-500">and {{ field.concepts.length - 3 }} more...</li>
        {% endif %}
      </ul>
    </div>
  </div>
  {% endfor %}
</div>
