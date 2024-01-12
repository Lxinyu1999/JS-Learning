/* 使用关键词变量保存this */
// 假设我们有一个需求：打印当前对象的年龄
let xiaoming = {
  name: "xiaoming",
  age: 24,
  printName() {
    setTimeout(function () {
      console.log("小明的年龄是：" + this.age);
    });
  },
};
xiaoming.printName(); // 小明的年龄是：undefined

/* 使用关键词变量保存this */
// 假设我们有一个需求：打印当前对象的年龄
let xiaoming2 = {
  name: "xiaoming",
  age: 24,
  printName() {
    // 直接使用定时器，this指向就变成window了，this.age就成undefined了，人家没有这个属性。
    // 为了解决该问题，我们可以先把this储存起来
    let $this = this; // 此时的this还没有使用定时器
    setTimeout(function () {
      console.log("小明的年龄是：" + $this.age);
    });
  },
};
xiaoming2.printName(); // 小明的年龄是：24

/* 使用箭头函数 */
let xiaoming3 = {
  name: "xiaoming",
  age: 24,
  printName() {
    setTimeout(() => {
      console.log("小明的年龄是：" + this.age);
    });
  },
};
xiaoming3.printName(); // 小明的年龄是：24

/* 使用bind */
let xiaoming4 = {
  name: "xiaoming",
  age: 24,
  printName() {
    setTimeout(
      function () {
        console.log("小明的年龄是：" + this.age);
      }.bind(this)
    );
  },
};
xiaoming4.printName(); // 小明的年龄是：24
