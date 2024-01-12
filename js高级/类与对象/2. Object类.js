/** 1. Object类型 
 *  Object类型是所有类型的超类，超类是指在继承层次结构中处于顶端的类
 *  自定义的任何类型都默认继承Object
 *  
 *  它有两个属性：prototype 和 constructor 
 *  以及三个方法：toLocaleString(); toString(); valueOf()。
 *  也就是说，所有的对象都会继承这些个属性和方法。并且js已经给这些方法写好了默认功能，例如toString是输出当前对象的类型。
 *  你也可以后续自己覆盖，比如js的内置类Array，Date这些都覆盖重写了toString()，一个是以字符串输出列表内容，另一个是当前日期
*/

let obj = new Object();

// 返回一个表示该对象的字符串, 如果未重写，默认的toString()方法返回一个对象类型字符串
// 对于Array对象，它将数组元素转换为字符串并用逗号连接起来。
// 对于Date对象，它返回一个表示该日期的字符串。
// 对于Number和Boolean对象，它返回表示该值的字符串。
console.log(obj.toString());  // [object Object]

// toLocaleString()方法返回一个该对象的字符串表示
// console.log(obj.toLocaleString())
// 该方法返回指定对象的原始值。valueOf()方法通常由JavaScript内部调用，而不是在代码中显式调用。
// console.log(obj.valueOf())

/** 2. 定义object类对应对象的方法
 *  通过内置的构造函数Object()即可new一个object对象，例如let obj = new Object();
 *  随后通过obj.属性名 = 属性值的方式即可赋值新的属性
 */
let userObj = new Object();
userObj.name = "lxy";
userObj.age = 24;
console.log(typeof(userObj)) // object
console.log(userObj) // { name: 'lxy', age: 24 }


/* 
    定义Object对象的另一种方法：{}
    大括号里面放入键值对儿
*/
let stuObj = {
    name:"rtg",
    age:24,
    height:172
}
console.log(typeof(stuObj)); // object
console.log(stuObj) // { name: 'rtg', age: 24, height: 172 }


// 注意！区分object对象和object类！我们定义的{}还有new Object()，这两个都是对象，不是类！
// 类是Object类，它是所有数据的超类。






