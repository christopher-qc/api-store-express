const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products'

const ProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    code: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class Product extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: true,
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductsSchema, Product }