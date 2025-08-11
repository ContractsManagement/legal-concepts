const { DateTime } = require('luxon');

module.exports = {

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yyyy-LL-dd');
    },

    // date filter (localized)
    formatDate: function (date, format, locale) {
        locale = locale ? locale : "en";

        // Handle both Date objects and date strings
        let dt;
        if (date instanceof Date) {
            dt = DateTime.fromJSDate(date);
        } else if (typeof date === 'string') {
            dt = DateTime.fromISO(date);
        } else {
            return "Invalid Date";
        }

        return dt.toFormat(format, { locale });
    },

    // Add filter for data formatting
    dateIso: date => {
        return DateTime.fromJSDate(date).toISO();
    },

    // Add filter for RSS date formatting
    dateRss: date => {
        return DateTime.fromJSDate(date).toRFC2822();
    },

    jsonify: text => {
        return JSON.stringify(text); // E.g. May 31, 2019
    },

    // Get array length
    size: array => {
        return Array.isArray(array) ? array.length : 0;
    },

    // Strip out html
    algExcerpt: function (text) {
        //first remove code
        text = text.replace(/<code class="language-.*?">.*?<\/code>/sg, '');
        //now remove html tags
        text = text.replace(/<.*?>/g, '');
        //now limit to 5k
        return text.substring(0, 8000); // Algolia's limit to 10K
    },

    // Truncate text to specified length
    truncate: function (text, length = 100) {
        if (!text) return '';
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    }
}
