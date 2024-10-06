const boom = require('@hapi/boom');



const { models } = require('../libs/sequelize')

class ProductsService {

    constructor() {
        this.products = [];
        this.generate();
    }

    async generate() {
    }

    async created(data) {
        const newProducts = models.Product.create(data);
        return newProducts;
    }

    async find() {
        console.log(models.Product)
        const rta = await models.Product.findAll();
        return rta

    }

    async findOne(id) {
        const products = await models.Product.findByPk(id)
        if (!products) {
            throw boom.notFount('products not found');
        }

        return products;
    }

    async update(id, changes) {
        const products = await this.findOne(id)
        const rta = await products.update(changes)
        return rta
    }

    async delete(id) {
        const products = await this.findOne(id)
        await products.destroy()
        return { id };
    }
}

module.exports = ProductsService
