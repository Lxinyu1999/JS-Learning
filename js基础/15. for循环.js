/** js中的for循环有四种方法 */

/* 1. 经典for循环，和其他写法语言一样 */
// js中的数组类型随意，长度也可以改变。
let arr = [1, 2, "a", 3.14, "日天哥"];
// 注意js里面是let i=0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1  2  a  3.14  日天哥
}

/* 2. for..in方法, 它遍历的是数组的索引值，而不是具体的项目！ */
for (let i in arr) {
  console.log(i); // 0 1 2 3 4
  // 因此如果你想通过for..in访问数组元素，就得用arr[i]
  console.log(arr[i]);
}

// 这方法乍一看很蠢，但也有它的用处。for..in可以遍历对象的属性，因为对象里面属性就是它的key。这几个循环里面，只有for..in可以直接遍历普通的对象。
function User(age, name) {
  this.age = age;
  this.name = name;
}
let user = new User(24, "rtg");

for (let key in user) {
  console.log(key); // age  name
}

// for..in不仅仅会遍历当前对象上的属性/方法，它还会遍历原型链上的方法
User.prototype.a = "我是a";
User.prototype.sayHello = function () {
  console.log("Hello,world");
};
for (let key in user) {
  console.log(key); // age  name  a  sayHello
}

/* 3. for..of 用于遍历可迭代对象（数组，字符串，map，set)中的每个值，它不能访问原型对象上的属性/方法 */
let array = [1, 3.14, "a"];
for (let value of array) {
  console.log(value); // 1  3.14  a
}
// for of的特点：它会按照元素的定义顺序去遍历

// 注意！for..of不能用于普通对象上，TypeError: user is not iterable
// for (let value of user) {
//   console.log(value);
// }

/* 4. forEach方法，它作用于一个数组对象上（必须是数组！），为数组每个元素设置回调函数*/
// 需要传入一个函数作为参数，这个函数接收三个参数（item,index,array本身），因为要传参，建议使用匿名函数
array.forEach((item) => {
  console.log(item); // 1  3.14  a
});
