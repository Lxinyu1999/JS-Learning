/**
 * 我们之前学习过引用传递和值传递，但是如何对一个对象进行"值传递"操作？就需要通过拷贝方法了，它包含了原始对象属性值的精确副本。
 * 拷贝分为：浅拷贝和深拷贝，它希望将一个对象完完整整复制到另一个对象上，而不只是复制一个地址。
 *
 * 浅拷贝的两种方法：扩展运算符和Object.assign(o,obj)
 */

/* 1. 使用扩展运算符，也就是我们之前讲过的拼接两个对象的方法 */
obj = {
  name: "rtg",
  age: 24,
};
// 使用扩展元素先拆开obj，再用大括号括起来
o = { ...obj };
o.age = 20;
console.log(o.age, obj.age); // 20， 24；说明两个对象不相等，浅拷贝成功！

/* 2. 使用Object.assign(o,obj)函数，其中第一个参数是你需要拷贝到的新对象，第二个是原始对象 */
let o2 = {};
Object.assign(o2, obj);
o2.age = 20;
console.log(o2.age, obj.age); // 20, 24

/* 然而，尽管浅拷贝对于基本类型可以精确复制，而对于引用类型，它拷贝的依然是地址。 */
let pig = {
  name: "pegi",
  age: 24,
  family: {
    father: "猪爸爸",
    mother: "猪妈妈",
  },
};
let o3 = { ...pig };
o3.family.father = "猪爹";
console.log(o3.family.father, pig.family.father); // 猪爹 猪爹
// 可以看到，对于family，o3和pig都是指向的同一个对象！

/** 深拷贝：它可以创建原始数据的一个完全独立的副本（包括嵌套的数据结构）。而且对于引用类型也有效，在内存中占用不同的位置。
 *  深拷贝也有两种方法：JSON.parse方法和递归法
 * */

/* 1. JSON.parse(JSON.stringify(obj)) ，内层函数表示把obj转化为JSON字符串，然后外层JSON.parse将JSON格式的字符串再转化为js代码 */
let pig2 = {
  name: "pegi2",
  age: 24,
  family: {
    father: "猪爸爸",
    mother: "猪妈妈",
  },
  sayHello() {
    console.log("Hello,world!");
  },
};
let o4 = JSON.parse(JSON.stringify(pig));
o4.family.father = "猪爹";
console.log(o4.family.father, pig.family.father);
/* 这种方法的缺点是：不能转化函数和undefined、Symbol类型，因为上述三个不存在于JSON格式中 */
// o4.sayHello(); // TypeError: o4.sayHello is not a function
console.log(o4.sayHello); // undefined, 说明这个函数没有被拷贝过去。

/* 2. 递归法，也就是遍历原始obj的每个属性，如果是基本类型，就直接复制给新的对象；如果是引用类型，则递归调用该函数；如果是特殊对象类型（如日期、undefined）可以根据需要特别处理。 */
const people = {
  name: "rtg",
  age: 24,
  job: undefined,
  family: {
    father: "毛爸",
    mother: "毛妈",
  },
  sayHello() {
    console.log("Hello world!");
  },
  arr: [1, 2, 3, 4, 5],
};
/* 数组实现 */
function deepCopy(newObj = {}, oldObj) {
  // key表示属性的名，属性的值是oldObj[key]，这个语法和py里面的词典类似。
  for (let key in oldObj) {
    // 如果当前属性名key对应的是一个数组的话
    if (oldObj[key] instanceof Array) {
      // 为newObj的key属性也创建一个数组。和py类似，js里面也会先检查newObj是否存在key属性，不存在就创建
      newObj[key] = [];
      // 递归调用，把oldObj[key]这个数列拷贝到newObj[key]上
      deepCopy(newObj[key], oldObj[key]);
    } else if (typeof oldObj[key] === "function") {
      newObj[key] = oldObj[key];
    }
    // 这里注意，要先判断是否是数组和函数，然后再判定是否是Object，因为Array也属于object
    else if (oldObj[key] instanceof Object) {
      // 同样也是先为key属性设置空对象
      newObj[key] = {};
      // 然后递归，把旧数组的key复制给新数组的key属性
      deepCopy(newObj[key], oldObj[key]);

      // 剩下的就是基础属性
    } else {
      // 基础属性就直接赋值即可。
      newObj[key] = oldObj[key];
    }
  }
}
let newObj = {};
deepCopy(newObj, people);

newObj.family = {};
console.log(people.family); // { father: '毛爸', mother: '毛妈' }，对象没问题。

console.log(newObj.arr); // [ 1, 2, 3, 4, 5 ], 数组也没问题。

newObj.sayHello(); // Hello world!

/* weakMap版本 */
