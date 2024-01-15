/** 1. Object类
 *  Object类是所有类型的超类，超类是指在继承层次结构中处于顶端的类
 *  自定义的任何类都默认继承Object
 *
 *  它有两个属性：prototype 和 constructor
 *  以及若干个方法：toLocaleString(); toString(); valueOf(); keys()/values() 等等。
 *  也就是说，所有的对象都会继承这些个属性和方法。并且js已经给这些方法写好了默认功能，例如toString是输出当前对象的类型。
 *  你也可以后续自己覆盖，比如js的内置类Array，Date这些都覆盖重写了toString()，一个是以字符串输出列表内容，另一个是当前日期
 */

let obj = new Object();

// 返回一个表示该对象的字符串, 如果未重写，默认的toString()方法返回一个对象类型字符串
// 对于Array对象，它将数组元素转换为字符串并用逗号连接起来。
// 对于Date对象，它返回一个表示该日期的字符串。
// 对于Number和Boolean对象，它返回表示该值的字符串。
console.log(obj.toString()); // [object Object]

// toLocaleString()方法返回一个该对象的字符串表示
// console.log(obj.toLocaleString())
// 该方法返回指定对象的原始值。valueOf()方法通常由JavaScript内部调用，而不是在代码中显式调用。
// console.log(obj.valueOf())

/* Object.keys(obj) 和 Object.values(obj)：常用，用于提取对象的所有键/值，返回一个数组 */
let myObj = {
  name: "lxy",
  age: 24,
};
console.log(Object.keys(myObj)); // [ 'name', 'age' ]
console.log(Object.values(myObj)); // [ 'lxy', 24 ]
