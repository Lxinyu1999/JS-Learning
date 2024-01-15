/** Symbol是es6新引入的数据类型，它用于创建一个全局唯一的标识符，我们称之为Symbol值（类似于number，String，boolean）
 *  Symbol值的创建通过Symbol()函数，注意前面不能加new（人家不是object类型）
 */
let a = Symbol();
console.log(a); // Symbol()
console.log(typeof a); //symbol

/*  Symbol可以接收一个字符串作为参数，但是这个字符串只是用于描述该symbol值和debug，不是属性。
    另外，由于 Symbol 值不是对象，所以也不能添加属性。基本上，它是一种类似于字符串的数据类型。
*/
let b = Symbol("我是b");
console.log(b); // Symbol(我是b)
// js提供了一种Symbol内置属性description，直接可以获取里面的描述
console.log(b.description); // 我是b

// 前面说过了，Symbol是全局唯一，也就是原子性的（atomic）。description只是个描述，所以相同参数的Symbol函数的返回值是不相等的。
console.log(Symbol("a") === Symbol("a")); // false

/* Symbol类型的值不可以与其他类型进行运算。Symbol 可以转换的类型是String和Boolean，默认为true */
// let err = Symbol("随便") + 3; // TypeError: Cannot convert a Symbol value to a number
let s = String(Symbol("随便"));
console.log(s); // Symbol(随便)
console.log(Boolean(Symbol())); // true

/* Symbol.for: 可以识别唯一的Symbol值。虽然Symbol每个值都不相同这很方便，但有时候我希望重新使用同一个 Symbol 值。
   它接收一个字符串作为参数，该参数将作为Symbol值的唯一标识
*/
let x = Symbol.for("foo");
let y = Symbol.for("foo");
console.log(x === y); // true
console.log(Symbol("bar") === Symbol("bar")); // false

/** Symbol的作用之属性名
 *  首先要讨论一下js中的属性名到底是什么？在类中，可以理解为变量，但是在某个对象里面，实际上“属性名”是一个字符串！
 *  在有了Symbol类型以后，Symbol值也可以作为属性名了，由于Symbol值绝对不会相同，所以可以保证一个对象里面没有相同的属性名（键）
 *
 *  使用Symbol定义属性有两种方法：方括号[]表示法 和 Object.defineProperty({})，不可以使用.表示法
 */
// ① 使用[]表示法
let obj = {};
// 相当于之前的obj["name"]
obj[Symbol("name")] = "rtg";
/* 也可以写成如下形式，这里的[Symbol()]表示这是一个js表达式，或者说计算属性名（有点像vue的插值语法{{}}），它不是一个字符串常量，所以必须用[]。 */
let sayHello = Symbol("sayHello");
let obj2 = {
  // 要么这里用Symbol.for或者事先变量存储Symbol值，直接使用的话Symbol就丢失了没人能表示他
  [Symbol.for("name")]: "rtg",
  // 也可以用于函数名
  [sayHello]() {
    console.log("Hello, world");
  },
};
obj2[sayHello](); // Hello, world

// ② 使用Object.defineProperty().需要传入一个配置项
let ageSymbol = Symbol("年龄");
// 三个参数分别表示：对象，键，设置的属性值（通过配置项），其中键（也就是属性名）是Symbol类型
Object.defineProperty(obj, ageSymbol, {
  value: 24,
});

/* 注意：symbol不能用点运算符，因为点运算符后面一定要字符串类型 */
obj2.ageSymbol = 24;
console.log(obj2.ageSymbol, obj2[ageSymbol], obj2["ageSymbol"]); // 24 undefined 24 ，说明赋值到一个字符串属性ageSymbol上去了，symbol值没传进去。

/* Symbol可以用于定义一批常量，使得它们都各不相同。 */
let log = {
  ERROR: Symbol("我是错误"),
  WARN: Symbol("我是警告"),
  INFO: Symbol("我是信息"),
};

/** 内置Symbol：Symbol类里面有很多内置好的字符（或者说js事先定义好的一批字符串），其中这些字符串被用于对象内的隐藏属性，详见iterator一章 */
