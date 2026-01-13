/**
 * Source table configuration
 * Define the BigQuery project, dataset, and table prefix for GA4 data
 */
const SOURCE_PROJECT = 'server-side-bounteous-ga4-2024';
const SOURCE_DATASET = 'analytics_452829362';
const SOURCE_TABLE_PREFIX = 'events_'; // Standard GA4 events table prefix

/**
 * Core event parameters configuration
 * Defines which event parameters to extract and their data types
 * Supported types: string, int, float, double
 */
const CORE_PARAMS_ARRAY = [
    {
        name: "engagement_time_msec",
        type: "int"
    },
    {
        name: "engaged_session_event",
        type: "int"
    },
    {
        name: "entrances",
        type: "int"
    },
    {
        name: "firebase_conversion",
        type: "int"
    },
    {
        name: "firebase_screen",
        type: "string"
    },
    {
        name: "firebase_screen_class",
        type: "string"
    },
    {
        name: "form_name",
        type: "string"
    },
    {
        name: "ga_session_id",
        type: "int"
    },
    {
        name: "ga_session_number",
        type: "int"
    },
    {
        name: "ignore_referrer",
        type: "string"
    },
    {
        name: "page_location",
        type: "string"
    },
    {
        name: "page_referrer",
        type: "string"
    },
    {
        name: "page_title",
        type: "string"
    },
    {
        name: "percent_scrolled",
        type: "float"
    },
    {
        name: "session_engaged",
        type: "string"
    }
];

/**
 * Core user properties configuration
 * Defines which user properties to extract and their data types
 * Supported types: string, int, float, double
 */
const CORE_USER_PROPS_ARRAY = [
    {
        name: "user_type",
        type: "string"
    }
];

/**
 * Custom item parameters configuration
 * Defines which custom item parameters to extract from item_params array
 * Leave empty if no custom item parameters needed
 * Supported types: string, int, float, double
 */
const CUSTOM_ITEMS_PARAMS = [
    // Example:
    // {
    //     name: "custom_size",
    //     type: "string"
    // },
    // {
    //     name: "custom_color",
    //     type: "string"
    // },
    // {
    //     name: "custom_discount_rate",
    //     type: "double"
    // }
];

module.exports = { 
    SOURCE_PROJECT,
    SOURCE_DATASET,
    SOURCE_TABLE_PREFIX,
    CORE_PARAMS_ARRAY,
    CORE_USER_PROPS_ARRAY,
    CUSTOM_ITEMS_PARAMS
};