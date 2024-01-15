/** 在每个js对象内部，都有一个隐藏属性[[prototype]]，这个属性是一个引用，指向另一个对象或者null
 *  我们被指向的对象为“原型”，你可以理解为“对象的父亲”
 *  访问该属性，我们通过__proto__属性，这是一个内部属性（不推荐直接访问，此处为了学习）
 */
let animal = {
  eat() {
    console.log("I must eat.");
  },
};
let rabbit = {
  jump() {
    console.log("I can jump.");
  },
};
console.log(rabbit.__proto__); // [Object: null prototype] {}
// 为兔子对象设置原型
rabbit.__proto__ = animal;
console.log(rabbit.__proto__); // { eat: [Function: eat] }

/* 当我们从一个对象中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这被称为“原型继承”。 */
rabbit.eat(); // I must eat.

/* 你可以设置很长的原型链 */
let longEar = {
  sayHi() {
    console.log("My ear is long.");
  },
  __proto__: rabbit,
};
longEar.eat(); // I must eat. 可以使用爷爷辈对象的方法。

// 另外，for..in也会迭代你继承的所有属性
for (let key in longEar) {
  console.log(key); // sayHi jump eat
}

/** prototype属性
 *  刚才的__proto__是指向对象自身的原型，现在的prototype是用于类或者说构造函数的，当你对一个构造函数设置prototype属性以后
 *  由该构造函数new出来的所有对象都指向该原型。该原型里面，只有一个属性constructor，constructor指向构造函数自身
 */
function Rabbit() {
  console.log("兔子已创建");
}
/* 默认的Rabbit原型的样式 */
// Rabbit.prototype = { constructor: Rabbit };
console.log(Rabbit.prototype.constructor); // [Function: Rabbit]

// 因此你用constructor属性也可以创建对象
let r = new Rabbit(); // r的原型链里面有一个方法constructor
let r2 = new r.constructor(); // 兔子已创建

console.log(r.__proto__ === Rabbit.prototype); // true
