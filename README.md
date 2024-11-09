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
- API interface: `http://localhost:3020/api`

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

- local access: `http://localhost:8080`


## 本番環境

### 起動

```bash
$ docker compose -f ./docker-compose-prod.yml up -d
```

## クリア

```bash
$ docker compose -f ./docker-compose-prod.yml down --rmi all
```
