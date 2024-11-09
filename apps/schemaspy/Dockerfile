# https://hub.docker.com/r/schemaspy/schemaspy/
FROM schemaspy/schemaspy:6.2.4

# Copy schemaspy property file
COPY ./schemaspy.properties /schemaspy.properties

# javaユーザーの/outputディレクトリに対する権限エラー回避
USER root
