let orderCount = 0;
const takeOrder = (crustType, topping) => 
{
  console.log('Order: ' + crustType + ' pizza topped with ' +  topping);
  orderCount = orderCount + 1;
};

let getSubTotal = (itemCount) =>
{
  return itemCount * 7.5;
}

const getTax = (orderCount) =>
{
  return getSubTotal(orderCount) * 0.06;
}

const getTotal = () =>
{
  return getSubTotal(orderCount) + getTax(orderCount);
}

takeOrder('thin crust', 'mushrooms'); 
takeOrder('thin crust', 'mushrooms');
takeOrder('thin crust', 'mushrooms');

console.log(getSubTotal(orderCount));

let test = getTotal();

console.log(test);





