# three-level-architecture
3層アーキテクチャのサンプルリポジトリ

## Getting started (Hot reload)

```bash
$ docker compose -f ./docker-compose.yml up -w
```

## Delete container

```bash
$ docker compose down --rmi all
```

## Delete container and volumes

```bash
$ docker compose down -v --rmi all
```

## FE

- framework: Remix
- local access: `http://localhost:3010`

## BE

- framework: NestJS
- local access: `http://localhost:3020`

### setup

```bash
$ cp apps/be/.env.sample apps/be/.env
```

## DB

- MySQL

### Access database

```bash
$ mysql -h localhost -u root -p -D sample --protocol=tcp
Enter password:Password!

mysql>

```

## SchemaSpy

MySQLのスキーマ情報を出力し、GitHub Pagesで公開する

## Generate schemaspy

```bash
$ docker compose -f ./docker-compose-schemaspy.yml up
$ docker compose -f ./docker-compose-schemaspy.yml down -v --rmi all
```

### ローカル環境で確認したい時

```bash
$ http-server docs -o
```
