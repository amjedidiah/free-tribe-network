# Deployment Steps

1. Create a new directory for the WordPress site:

    ```bash
    mkdir wordpress
    ```

2. Navigate to the directory:

    ```bash
    cd wordpress
    ```

3. Configure the Dockerfile:

    ```dockerfile
    FROM wordpress:latest

    # Create mu-plugins directory for must-use plugins

    RUN mkdir -p /usr/src/wordpress/wp-content/mu-plugins

    # Add CORS configuration as a must-use plugin

    COPY cors-config.php /usr/src/wordpress/wp-content/mu-plugins/cors-config.php

    # Modify upload limits

    COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

    # Expose port 80

    EXPOSE 80
    ```

4. Configure the Fly.toml file:

    ```toml
    # fly.toml app configuration file generated for free-tribe-network-wp on 2025-06-16T15:30:43+01:00

    # See <https://fly.io/docs/reference/configuration/> for information about how to use this file

    app = 'free-tribe-network-wp'
    primary_region = 'lhr'

    [build]
    dockerfile = "Dockerfile"

    [env]
    WORDPRESS_DB_HOST = "freetribenetwork-wordpress-db.internal"
    WORDPRESS_DB_NAME = "some_db"
    WORDPRESS_DB_USER = "non_root_user"

    # Set WORDPRESS_DB_PASSWORD with `fly secrets set`

    [mounts]
    source="wp_content"
    destination="/var/www/html/wp-content"

    [[services]]
    protocol = "tcp"
    internal_port = 80
    processes = ["app"]

    [[services.ports]]
        port = 80
        handlers = ["http"]
        force_https = true

    [[services.ports]]
        port = 443
        handlers = ["tls", "http"]

    [[services.tcp_checks]]
        interval = "15s"
        timeout = "2s"
        grace_period = "1s"
        restart_limit = 0

    [[vm]]
    cpu_kind = "shared"
    cpus = 1
    memory_mb = 2048

    ```

5. Launch the WordPress site(without deploying):

    ```bash
    fly launch --name free-tribe-network-wp --no-deploy
    ```

6. Create a volume for the WordPress site:

    ```bash
    fly volumes create wp_content --size 10
    ```

7. Set the secrets in the fly dashboard

8. Deploy the WordPress site:

    ```bash
    fly deploy
    ```
