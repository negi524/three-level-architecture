FROM mysql:9.1.0 AS development

# Copy setting file
COPY ./etc/mysql/my.cnf /etc/mysql/my.cnf

# Copy init script
COPY ./initdb.d/ /docker-entrypoint-initdb.d/

EXPOSE 3306
