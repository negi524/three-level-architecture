# three-level-architecture
3層アーキテクチャのサンプルリポジトリ

## Getting started

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
- port: 3020
- local access: `http://localhost:3020`

## DB

- MySQL

### Access database

```bash
$ mysql -h localhost -u root -p -D sample --protocol=tcp
```

Password=`Password!`
