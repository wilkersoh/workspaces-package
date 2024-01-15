# Workspaces

npm init -y -w packages/components -w packages/web

- generate a `workspaces` inside root's package.json

## install package under packages/components

npm i antd -w packages/components

## reference packages/components into as modules inside packages/web

```json
    "dependencies": {
        "@workspaces-package/components": "file:./packages/components",
    }
```

## Prettier

- **ignore-unknown** or **-u** helps ignore unknown files matched by patterns.
  - skip those doesn't recognize, instead warinings or errors.
- **write** helps to formatted/overwrites your files
