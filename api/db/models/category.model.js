const { Model, DataTypes, Sequelize } = require('sequelize')

const CATEGORY_TABLE = 'categories'

const CategoriesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true, // El valor debe ser único
    },
    description: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    state: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
            min: 0, // Ejemplo: valor mínimo
            max: 1, // Ejemplo: valor máximo
        },
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at', // El nombre de la columna en la base de datos
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'update_at', // Nombre de la columna para actualizaciones
        defaultValue: Sequelize.NOW,
    },    
}

class Category extends Model {
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableNmae: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: true,
        }
    }
}

module.exports = { CATEGORY_TABLE, CategoriesSchema, Category }