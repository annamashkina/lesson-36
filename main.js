console.log('#19. TypeScript homework example file');
// #1
function sumArray(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));
function createUser(name, age, isActive) {
    if (isActive === void 0) { isActive = true; }
    return { name: name, age: age, isActive: isActive };
}
console.log(createUser('Анна', 25));
// #3
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
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
