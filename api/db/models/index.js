const { User, UserSchema } = require('./user.model')
const { Product, ProductsSchema } = require('./product.model')
const { Category, CategoriesSchema } = require('./category.model');
const { Order, OrdersSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductsSchema, Product.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));
    Order.init(OrdersSchema, Order.config(sequelize))
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize))

    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    User.associate(sequelize.models)
    Order.associate(sequelize.models)
    // OrderProduct.associate(sequelize.models)
}

module.exports = setupModels;