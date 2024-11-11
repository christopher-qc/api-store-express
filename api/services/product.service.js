const boom = require('@hapi/boom');
const { Op } = require('sequelize');


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

    async find(query) {
        const options = {
            include: ['category'],
            where: {}
        }
        // Paginacion
        const { limit, page, price_min, price_max } = query;
        if (limit && page) {
            options.limit = Number(limit);
            options.offset = (Number(page) - 1) * Number(limit);
        }
        // Filtro por precio
        if (price_min && price_max) {
            options.where.price = {
                [Op.between]: [price_min, price_max]
            }
        }
        const rta = await models.Product.findAll(options);
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
