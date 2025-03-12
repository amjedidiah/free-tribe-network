#!/bin/bash

# Wait for WordPress to be fully initialized
echo "Waiting for WordPress to initialize..."
sleep 30

# Install WP-CLI
docker-compose exec wordpress curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
docker-compose exec wordpress chmod +x wp-cli.phar
docker-compose exec wordpress mv wp-cli.phar /usr/local/bin/wp

# Install and activate necessary plugins
echo "Installing and activating plugins..."
docker-compose exec wordpress wp plugin install --activate rest-api --allow-root
docker-compose exec wordpress wp plugin install --activate jwt-authentication-for-wp-rest-api --allow-root
docker-compose exec wordpress wp plugin install --activate custom-post-type-ui --allow-root
docker-compose exec wordpress wp plugin install --activate advanced-custom-fields --allow-root

# Configure CORS for REST API
echo "Configuring REST API and CORS..."
docker-compose exec wordpress bash -c "cat > /var/www/html/wp-content/mu-plugins/cors-config.php << 'EOF'
<?php
/**
 * Plugin Name: REST API CORS
 * Description: Enable CORS for REST API
 * Version: 1.0
 * Author: Free Tribe Network
 */

add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function(\$value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Expose-Headers: Link');
        header('Access-Control-Allow-Headers: X-WP-Nonce, Content-Type, Authorization');
        return \$value;
    });
}, 15);
EOF"

# Create mu-plugins directory if it doesn't exist
docker-compose exec wordpress mkdir -p /var/www/html/wp-content/mu-plugins

echo "WordPress setup completed!" 