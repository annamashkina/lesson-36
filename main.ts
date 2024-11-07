console.log('#19. TypeScript homework example file');

// #1
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));

// #2
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(name: string, age: number, isActive: boolean = true): User {
  return { name, age, isActive };
}
console.log(createUser('Анна', 25));

// #3
enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

function getOrderStatus(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return 'Замовлення очікує на обробку';
    case OrderStatus.Shipped:
      return 'Замовлення було відправлено';
    case OrderStatus.Delivered:
      return 'Замовлення доставлено';
    case OrderStatus.Cancelled:
      return 'Замовлення скасовано';
    default:
      throw new Error('Невідомий статус замовлення');
  }
}
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
