<?php
/**
 * Plugin Name: REST API CORS
 * Description: Enable CORS for REST API
 * Version: 1.0
 * Author: Free Tribe Network
 */

add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Expose-Headers: Link');
        header('Access-Control-Allow-Headers: X-WP-Nonce, Content-Type, Authorization');
        return $value;
    });
}, 15);
