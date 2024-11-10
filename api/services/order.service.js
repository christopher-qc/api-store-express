const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class OrdersService {

    constructor() {
    }

    async created(data) {
        const newOrders = models.Order.create(data);
        return newOrders;
    }

    async addItem(data) {
        const newItem = models.OrderProduct.create(data);
        return newItem;
    }

    async find() {
        const rta = await models.Order.findAll({
            include: ['user'],
        });
        return rta

    }

    async findOne(id) {
        const orders = await models.Order.findByPk(id, {
            include: [
                {
                    association: 'user'
                }, 
                'items']
        })
        if (!orders) {
            throw boom.notFount('orders not found');
        }

        return orders;
    }

    async update(id, changes) {
        const orders = await this.findOne(id)
        const rta = await orders.update(changes)
        return rta
    }

    async delete(id) {
        const orders = await this.findOne(id)
        await orders.destroy()
        return { id };
    }
}

module.exports = OrdersService
