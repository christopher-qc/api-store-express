const { User, UserSchema } = require('./user.model')
const { Product, ProductsSchema } = require('./product.model')
const { Category, CategoriesSchema } = require('./category.model')

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductsSchema, Product.config(sequelize));
    Category.init(CategoriesSchema, Category.config(sequelize));

    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
}

module.exports = setupModels;