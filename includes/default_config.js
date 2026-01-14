/**
 * Source table configuration
 * Define the BigQuery project, dataset, and table prefix for GA4 data
 */
const SOURCE_PROJECT = 'server-side-bounteous-ga4-2024';
const SOURCE_DATASET = 'analytics_452829362';
const SOURCE_TABLE_PREFIX = 'events_';

/**
 * Data stream configuration
 * Defines what type of data is in your GA4 property
 * Options: 'web', 'app', or 'both'
 */
const DATA_STREAM_TYPE = 'both'; // 'web', 'app', or 'both'

/**
 * Parameter consolidation setting
 * Only applies when DATA_STREAM_TYPE = 'both'
 * If true: web and app parameters are consolidated (e.g., page_location + firebase_screen → screen_location)
 * If false: web and app parameters are kept separate (page_location and firebase_screen as distinct columns)
 */
const CONSOLIDATE_WEB_APP_PARAMS = true;

/**
 * Backfill configuration
 * Used for initial table creation. Determines how far back to load historical data.
 * Format: YYYYMMDD
 * If null, defaults to 13 months ago for start, yesterday for end
 */
const BACKFILL_START_DATE = null; // e.g., '20240101' or null for auto
const BACKFILL_END_DATE = null;   // e.g., '20241231' or null for auto

/**
 * Destination schema for output tables
 */
const DESTINATION_SCHEMA = 'ga4_reporting';

/**
 * Core event parameters configuration
 * Parameters that apply to all stream types (web, app, or both)
 * These are always extracted regardless of DATA_STREAM_TYPE setting
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
        name: "percent_scrolled",
        type: "int"
    },
    {
        name: "session_engaged",
        type: "string"
    }
];

/**
 * Web-specific event parameters
 * Only extracted when DATA_STREAM_TYPE = 'web' or 'both'
 * consolidated_name: Used when CONSOLIDATE_WEB_APP_PARAMS = true (maps to unified field name)
 */
const WEB_PARAMS_ARRAY = [
    {
        name: "link_classes",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "link_text",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "link_url",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "page_location",
        type: "string",
        consolidated_name: "screen_location" // Consolidates with firebase_screen
    },
    {
        name: "page_referrer",
        type: "string",
        consolidated_name: "screen_referrer" // Consolidates with firebase_previous_screen
    },
    {
        name: "page_title",
        type: "string",
        consolidated_name: "screen_title" // Consolidates with firebase_screen_class
    },
    {
        name: "video_current_time",
        type: "int"
        // No consolidated_name - web-only parameter
    },
    {
        name: "video_duration",
        type: "int"
        // No consolidated_name - web-only parameter
    },
    {
        name: "video_percent",
        type: "int"
        // No consolidated_name - web-only parameter
    },
    {
        name: "video_provider",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "video_title",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "video_url",
        type: "string"
        // No consolidated_name - web-only parameter
    },
    {
        name: "visible",
        type: "string"
        // No consolidated_name - web-only parameter
    }
];

/**
 * App-specific event parameters
 * Only extracted when DATA_STREAM_TYPE = 'app' or 'both'
 * consolidated_name: Used when CONSOLIDATE_WEB_APP_PARAMS = true (maps to unified field name)
 */
const APP_PARAMS_ARRAY = [
    {
        name: "firebase_conversion",
        type: "int"
        // No consolidated_name - app-only parameter
    },
    {
        name: "firebase_previous_class",
        type: "string"
        // No consolidated_name - app-only parameter
    },
    {
        name: "firebase_previous_id",
        type: "string"
        // No consolidated_name - app-only parameter
    },
    {
        name: "firebase_previous_screen",
        type: "string",
        consolidated_name: "screen_referrer" // Consolidates with page_referrer
    },
    {
        name: "firebase_screen",
        type: "string",
        consolidated_name: "screen_location" // Consolidates with page_location
    },
    {
        name: "firebase_screen_class",
        type: "string",
        consolidated_name: "screen_title" // Consolidates with page_title
    },
    {
        name: "firebase_screen_id",
        type: "string"
        // No consolidated_name - app-only parameter
    }
];

/**
 * Core user properties configuration
 * Defines which user properties to extract and their data types
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
 */
const CUSTOM_ITEMS_PARAMS = [];

module.exports = { 
    SOURCE_PROJECT,
    SOURCE_DATASET,
    SOURCE_TABLE_PREFIX,
    DATA_STREAM_TYPE,
    CONSOLIDATE_WEB_APP_PARAMS,
    BACKFILL_START_DATE,
    BACKFILL_END_DATE,
    DESTINATION_SCHEMA,
    CORE_PARAMS_ARRAY,
    WEB_PARAMS_ARRAY,
    APP_PARAMS_ARRAY,
    CORE_USER_PROPS_ARRAY,
    CUSTOM_ITEMS_PARAMS
};