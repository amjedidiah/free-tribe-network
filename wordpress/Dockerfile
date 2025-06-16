FROM wordpress:latest

# Create mu-plugins directory for must-use plugins
RUN mkdir -p /usr/src/wordpress/wp-content/mu-plugins

# Add CORS configuration as a must-use plugin
COPY cors-config.php /usr/src/wordpress/wp-content/mu-plugins/cors-config.php

# Modify upload limits
COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# Expose port 80
EXPOSE 80