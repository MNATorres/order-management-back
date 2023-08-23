class OrderService {
  constructor(model) {
    this.model = model;
  }

  async getOrders({ status, startDate, endDate, nearExpiration }) {
    let filter = {};
    if (status) {
      filter = { ...filter, status };
    }
    let dateFilter = {};
    if (startDate) {
      dateFilter = { ...dateFilter, $gte: startDate };
    }
    if (endDate) {
      dateFilter = { ...dateFilter, $lte: endDate };
    }
    if (startDate || endDate) {
      filter = { ...filter, createDate: dateFilter, status: "Traveling" };
    }
    if (nearExpiration) {
      filter = {
        ...filter,
        shippingPromise: { $lte: Date.now() + 48 * 3600 * 1000 },
        status: "Approve",
      };
    }

    return this.model.find(filter);
  }

  async deleteOrders() {
    try {
      await this.model.deleteMany({});
      return { mensaje: "Todos los pedidos se eliminaron exitosamente." };
    } catch (error) {
      throw error;
    }
  }

  async createOrder(datosPedido) {
    try {
      const pedidoCreado = await this.model.create(datosPedido);
      console.log("Se ha creado un nuevo pedido:", pedidoCreado);
      return pedidoCreado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;
