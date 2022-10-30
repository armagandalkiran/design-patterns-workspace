class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    console.log(execute)
    this.execute = execute;
  }
}

const PlaceOrderCommand = (order, id) => {
  return new Command((orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
};

const CancelOrderCommand = (id) => {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  });
};

const TrackOrderCommand = (id) => {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`)
  );
};

const manager = new OrderManager();

manager.execute(PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(TrackOrderCommand("1234"));
manager.execute(CancelOrderCommand("1234"));
