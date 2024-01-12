/** forEach:用于对数组中的每个元素进行一次操作
 *  本质是把数组每个元素传递给一个回调函数）
 *
 * */
let arr = ["a", "b", "c", "d"];
// index可以省略
arr.forEach(function (item, index) {
  console.log(item); // a b c d
  console.log(index); // 0 1 2 3
});

/**
 *  map:和forEach类似，map也是对数组中的每个元素进行某种操作（通过回调函数）
 *  区别点在于：map会返回一个生成的数组，而forEach是对原数组进行操作，不返回。
 *  语法：array.map(function(item[,index]){})
 */
let arr2 = [1, 2, 3, 4, 5];
// 对arr2中的每个数组乘以2，并返回新的数组
let double = arr2.map((item) => {
  // 这里的意思是，每个数组对象都乘以2之后返回给一个新数组
  return 2 * item;
});
console.log(double); // [ 2, 4, 6, 8, 10 ]
// 注意：原数组是不变的
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

/** map的另一大应用：由于返回的是一个数组，还可以链式调用，后面接.filter()
 *  filter通过回调函数用于筛选满足条件的数组元素，用法和forEach，map类似。
 *  语法：array.filter(callback(item[,index]))，参数也一样
 *  filter也会返回一个新数组，里面包含了通过条件筛选后的元素
 */
let filted = double.filter((item) => {
  if (item > 5) return item;
});
console.log(filted); // [ 6, 8, 10 ]

// 可以从map开始使用链式调用一步简写
let arr3 = [1, 2, 3, 4, 5, 6];
// 首先调用.map对所有元素+1，随后调用.filter筛选偶数
const result = arr3
  .map((item) => {
    return item + 1;
  })
  .filter((item) => {
    return item % 2 == 0;
  });
console.log(result); //[ 2, 4, 6 ]
