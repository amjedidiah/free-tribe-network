# Deployment Steps

1. Create a new directory for the database:

    ```bash
    mkdir wordpress-db
    ```

2. Navigate to the directory:

    ```bash
    cd wordpress-db
    ```

3. Launch the database(without deploying):

    ```bash
    fly launch --no-deploy --image mysql:8
    ```

4. Create a volume for the database:

    ```bash
    fly volumes create mysqldata --size 10
    ```

5. Set the secrets:

    ```bash
    fly secrets set MYSQL_PASSWORD='<your-password>' MYSQL_ROOT_PASSWORD='<your-root-password>'
    ```

6. Update the fly.toml file

    ```toml
    # fly.toml app configuration file generated for freetribenetwork-wordpress-db on 2025-06-16T13:46:52+01:00

    # See <https://fly.io/docs/reference/configuration/> for information about how to use this file

    app = 'freetribenetwork-wordpress-db'
    primary_region = 'jnb'

    [build]
    image = 'mysql:8'

    [[vm]]
    memory = '2gb'
    cpu_kind = 'shared'
    cpus = 1

    [mounts]
    source = "mysqldata"
    destination = "/data"

    [env]
    MYSQL_DATABASE = "some_db"
    MYSQL_USER = "non_root_user"

    [processes]
    app = """--datadir /data/mysql \
        --mysql-native-password=ON"""
    ```

7. Deploy the database:

    ```bash
    fly deploy
    ```
