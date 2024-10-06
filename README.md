# Migraciones con Sequelize

Este proyecto utiliza Sequelize para gestionar las migraciones de la base de datos. A continuación se describen los pasos para crear, aplicar y revertir migraciones.

```bash
## Crear una nueva migración
npx sequelize-cli migration:generate --name {NOMBRE_DE_LA_MIGRACION}

## Para aplicar los cambios la migracion
npm run migrations:run

## Para Deshacer la última migración
npm run migrations:revert

## Para Deshacer todas las migraciones
npm run migrations:delete
