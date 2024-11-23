# three-level-architecture
3層アーキテクチャのサンプルリポジトリ

## Development

### Command

See [Makefile](./Makefile)

### FE

- framework: Remix
- local access: `http://localhost:3010`

### BE

- framework: NestJS
- local access: `http://localhost:3020`
- API interface: `http://localhost:3020/api`

#### Setup

```bash
$ cp apps/be/.env.sample apps/be/.env
```

### DB

- MySQL

#### Access database

```bash
$ mysql -h localhost -u root -p -D sample --protocol=tcp
Enter password:Password!

mysql>

```

### SchemaSpy

- local access: `http://localhost:8080`

---

## Production

See [Makefile](./Makefile)
