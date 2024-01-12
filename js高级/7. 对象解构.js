/** 和数组类似，我们也可以对对象进行解构赋值，把里面的属性、方法快速提取出来*/
const people = { uname: "rtg", age: 24 };
// 这里的uname,age不是对象属性，而是变量，或者你也可以认为外层{}大括号是一个匿名的对象
let { uname, age } = people; // 注意，这里变量的名字一定要和对象中的属性名相同！
console.log(uname, age); //rtg 24

// 我们可以改它的名字
let { x: xx, y } = { x: 1, y: 2 };
console.log(xx, y); // 1 2，此时输出x是报错的，因为它的值被我们赋值到xx里面了。

/* 解构数组对象 */
const pig = [
  {
    pname: "佩奇",
    page: 18,
  },
];
// 这个对象外层是数组[]，内层是对象{}，解构的时候也是按照这个顺序，[{属性名}]
const [{ pname, page }] = pig; // 相当于把数组里面的元素解构给了对象{}，然后{里面的属性}又解构了里面的属性

/* 多级解构 */
const pig2 = {
  name: "peigi",
  family: {
    father: "猪爸爸",
    mother: "猪妈妈",
  },
};
// 注意，在多级解构的时候，每个相对父元素都要声明在解构里面
let {
  name,
  family: { father },
  mother,
} = pig2;
