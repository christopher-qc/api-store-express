const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')

const ORDER_TABLE = 'orders';

const OrdersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    userId: {
        field: 'user_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
};

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            as: 'user',
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false,
        };
    }

    // 2. Definir la máquina de estados
    static stateMachine() {
        return {
            pending: ['paid', 'cancelled'],
            paid: ['shipped', 'refunded'],
            shipped: ['delivered'],
            delivered: [],
            cancelled: [],
            refunded: [],
        };
    }

    // 3. Método para realizar una transición de estado
    transition(action) {
        const currentState = this.status;
        const allowedTransitions = Order.stateMachine()[currentState] || [];

        if (!allowedTransitions.includes(action)) {
            throw new Error(`No se puede cambiar de "${currentState}" a "${action}".`);
        }

        this.status = action;
        return this.save();  // Guardar el nuevo estado en la base de datos
    }
}

module.exports = { ORDER_TABLE, OrdersSchema, Order };