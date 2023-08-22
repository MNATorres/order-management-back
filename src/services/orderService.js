class OrderService {
  constructor(model) {
    this.model = model;
  }
  async getOrders({ status, startDate, endDate, nearExpiration }) {
    let filter = {};
    if (status) {
      filter = { ...filter, status };
    }
    let dateFIlter = {};
    if (startDate) {
      dateFIlter = { ...dateFIlter, $gte: startDate };
    }
    if (endDate) {
      dateFIlter = { ...dateFIlter, $lte: endDate };
    }
    if (startDate || endDate) {
      filter = { ...filter, createDate: dateFIlter, status: "Traveling" };
    }
    if (nearExpiration) {
      filter = {
        ...filter,
        shippingPromise: { $lte: Date.now() + 48 * 3600 * 1000 },
        status: "Approve",
      };
    }
    return this.model
      .find(filter)
  }
}

module.exports = OrderService;
