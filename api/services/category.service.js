const boom = require('@hapi/boom');



const { models } = require('../libs/sequelize')

class CategoriesService {

    constructor() {
        this.categories = [];
        this.generate();
    }

    async generate() {
    }

    async created(data) {
        const newCategories = models.Category.create(data);
        return newCategories;
    }

    async find() {
        const rta = await models.Category.findAll({
            include: ['products']
        });
        return rta

    }

    async findOne(id) {
        const categories = await models.Category.findByPk(id)
        if (!categories) {
            throw boom.notFount('categories not found');
        }

        return categories;
    }

    async update(id, changes) {
        const categories = await this.findOne(id)
        const rta = await categories.update(changes)
        return rta
    }

    async delete(id) {
        const categories = await this.findOne(id)
        await categories.destroy()
        return { id };
    }
}

module.exports = CategoriesService
