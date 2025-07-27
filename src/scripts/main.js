import '../styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApiDocSwagger from './ApiDocSwagger';


/**
 * NOTE: You can turn on the below components when the backend services are fully configured
 */
const ENABLE = false;

// TODO: Find a better way to render the dom 
const searchContainer = document.querySelector('#search-container');
if (ENABLE && searchContainer) {
    // Dynamic import to avoid bundling when disabled
    import('./Search').then(({ default: Search }) => {
        ReactDOM.render(<Search />, searchContainer);
    });
}

// Instantiate API Swagger component
const apiswaggerContainer = document.querySelector('#apiswagger-container');
(apiswaggerContainer) && ReactDOM.render(<ApiDocSwagger />, apiswaggerContainer);
