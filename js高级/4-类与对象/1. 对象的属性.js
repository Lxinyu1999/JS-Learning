/* 计算属性：使用中括号包裹你要动态计算的属性 */
let str = "日天哥";
let obj = {
  [str + "111"]: 123,
};
console.log(obj[str + "111"]); // 123

/* 属性简写：当使用变量作为key且value也相同时，可以省略 */
let name = "rtg";
let age = 24;
let person = {
  //   "name": name,
  //   "age": age,
  age, // 即使你使用其他类型的值作为键，这些值也会被转换成字符串。
  name,
};
console.log(person); // { name: 'rtg', age: 24 }

/* 属性存在判定：in操作符
   js中即使对象不存在属性，你也可以输出它，显示undefined
   
   那我要怎么判定一个对象中是否有某属性，就要用in操作符了
*/
console.log(person.address); // undefined
// 属性名要引号，要不就被js认为是变量了
console.log("age" in person); // true
console.log("address" in person); // false

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user.fullName); // John Smith

/** 属性标志：除了value以外，我们的属性还有一些其他特性（attribute），有三个方面：
 *  writable 可否修改
 *  configurable 可否删除
 *  enumerable 可否迭代
 *  这三个值默认是true
 */
let p = {
  name: "rtg",
  age: 24,
};
/* 查看一个属性的所有attribute：通过Object.getOwnPropertyDescriptor(obj,propertyName) */
const result = Object.getOwnPropertyDescriptor(p, "name"); // 前面说过了属性名是字符串
// 返回的是一个“属性描述符”对象，包含所有的标志（和值）
console.log(result); // { value: 'rtg', writable: true, enumerable: true, configurable: true }

/* 修改属性的标志：通过经典的Object.defineProperty(obj, propertyName, descriptor)，把你要定义的descriptor传入即可 
   如果属性不存在，则新创建一个属性并设置相关的配置。
   注意：Object.defineProperty默认会给属性配置false，不允许修改，删除，遍历。
*/
// 传入的descriptor是一个配置项
Object.defineProperty(p, "address", {
  value: "Waseda",
  writable: true,
  configurable: false,
  enumerable: false,
});
console.log(p.address); // waseda
p.address = "kitakyushuu";
console.log(p.address); // kitakyushuu，修改成功

// 使用delete操作符，删除某个属性
delete p.address;
console.log("address" in p); // true，说明删除失败

for (let key in p) {
  console.log(key); // name age 没有address，说明不可遍历。
}

/** 访问器属性：这是和之前的普通属性区分开来的第二种属性，用get，set关键字修饰它。
 *  本质上，它是一个函数，且同时完成了两种操作。
 *  特点是：外部代码依然可以用对象名.属性调用，获取时调用get，修改时调用set
 */
const stu = {
  firstName: "rtg",
  secondName: "asd",
  age: 24,
  address: "kita",

  // 当我们通过stu.fullName获取属性时，getter会幕后运行。不需要我们显示地调用该方法
  get fullName() {
    return this.firstName + this.secondName;
  },
  set fullName(value) {
    [this.firstName, this.secondName] = value.split(" ");
  },
};

console.log(stu.fullName); // rtgasd
// 通过setter设置属性
stu.fullName = "日 天哥";
console.log(stu.fullName); // 日天哥

/* 访问器属性的标志符：没有 value 和 writable，但是有 get 和 set 函数。其他一样 。
   为了更好地定义访问器属性，还是要使用Object.defineProperty
注意：一个属性要么是访问器（具有 get/set 方法），要么是数据属性（具有 value），但不能两者都是。 */
Object.defineProperty(stu, "fullname", {
  // 这回新增的get和set，以函数形式存在。且里面没有value和writable配置了
  get() {
    return `${this.firstName} ${this.secondName}`;
  },
  set(value) {
    [this.firstName, this.secondName] = value.split(" ");
  },
  // 剩下两个一样
  enumerable: false,
  configurable: true,
});
console.log(stu.fullname); // 日 天哥
stu.fullname = "John Smith";
console.log(stu.fullname); // John Smith

/** 用途：实现响应式设计
 *  在之前的数据属性里面，我们经常使用变量传递属性。由于变量是值传递，因此即使后续用户修改这个变量，也无法对属性进行修改
 */
let catName = "miao";
const cat = {
  // 实际上是:"catName":catName
  catName,
  age: 2,
};
console.log(cat.catName); // miao
catName = "喵喵";
/* 很遗憾，我们发现即使你修改了该变量，对象里面的属性却不能变化！
   有人说，直接修改cat.属性不就行了？那样太不安全了，实际开发不这样做
*/
console.log(cat.catName); // miao

/* 解决方法：使用Object.defineProperty()，把它改写为访问器属性。这样当我们修改变量时，调用set方法，它会真的修改对象中的属性 */
Object.defineProperty(cat, "catName", {
  get() {
    // 每次访问catName这个属性的时候，都要从外界的变量当中获取，因此可以随时捕捉到变化
    return catName;
  },
});
console.log(cat.catName); // 喵喵，响应式成功！
