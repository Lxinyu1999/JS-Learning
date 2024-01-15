/**
 *  定义普通object类对应对象的方法
 *  通过内置的构造函数Object()即可new一个object对象，例如let obj = new Object();
 *  随后通过obj.属性名 = 属性值的方式即可赋值新的属性
 */
let userObj = new Object();
userObj.name = "lxy";
userObj.age = 24;
console.log(typeof userObj); // object
console.log(userObj); // { name: 'lxy', age: 24 }

/* 
    定义Object对象的另一种方法：{} 大括号里面放入键值对儿
    创建好的对象默认继承Object类
    也是最常见的。
*/
let stuObj = {
  name: "rtg",
  age: 24,
  height: 172,
};
console.log(typeof stuObj); // object
console.log(stuObj); // { name: 'rtg', age: 24, height: 172 }

// 注意！区分object对象和object类！我们定义的{}还有new Object()，这两个都是对象，不是类！
// 类是Object类，它是所有数据的超类。
