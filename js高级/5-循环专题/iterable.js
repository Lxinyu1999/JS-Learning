/**
 *  在es6之后新引入了一种对象，叫做可迭代类型iterable，什么是可迭代类型呢？
 *  和python的定义类似，能通过for..of来遍历每个对象中的元素的，就叫做可迭代类型。
 *  所有的可迭代类型，内部都完成了Symbol.iterator属性()，使用for..of遍历时，Symbol.iterator会被调用
 */

/* 常见的可迭代类型：array，String，map，set */
let arr = [1, "rtg", 3.14, -50];
let s = "我是日天哥";
let map = new Map([
  ["name", "rtg"],
  ["age", 24],
]);
let set = new Set([1, 2, 3.14]);
for (let value of arr) {
  console.log(value); // 1  rtg  3.14  -50
}
for (let c of s) {
  console.log(c); // 我  是  日  天  哥
}
for (let value of map) {
  console.log(value);
  ["name", "rtg"][("age", 24)];
}

/* 
    所有的可迭代类型都有Symbol.iterator属性，它是一个函数引用，调用它会返回一个对象，叫做迭代器iterator，这个iterator里面有一个next()方法
    next()方法会在for..of里面按顺序调用下一个元素，返回形如{done:boolean, value:any}的对象。
 */
// 对于内置的可迭代对象，js已经帮我们实现好了iterator
let array = [1, 2, 3, 4, 5];
// 首先调用数组的迭代器函数，通过中括号表示法和Symbol值获取函数名arr[Symbol.iterator]，小括号表示调用
let iterator = array[Symbol.iterator](); // 该方法会返回一个迭代器对象
// console.log(array.next()); // TypeError: array.next is not a function，直接调用next是不行的，因为next是迭代器的内置方法
// 调用迭代器里面的next()方法，会返回下一个循环的value和done
console.log(iterator.next());

/* 自定义Symbol.iterator函数，我们假设有一个range对象，它会从1遍历到5，左闭右开*/
let range = {
  from: 1,
  to: 3,

  // Symbol.iterator是一个js表达式，因此这是一个计算属性，必须放到中括号里面。
  [Symbol.iterator]: function () {
    // 这里的this指向range对象（因为是range调用该函数）
    this.current = this.from;
    // 返回一个迭代器对象
    return {
      next: () => {
        // 注意next必须使用箭头函数，因此this依然指向上一级range对象。如果是普通的函数就会指向迭代器对象了，那样的话this.current值就丢失了。
        if (this.current < this.to) {
          // 这里this.current++是后递增，所以先返回current，然后再对current+1，防止丢失当前值
          return { value: this.current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// 获取迭代器对象iterator,注意使用symbol值属性时，不能用点表示法，只能用中括号
let rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator.next()); // { value: 1, done: false }
console.log(rangeIterator.next()); // { value: 2, done: false }
console.log(rangeIterator.next()); // { done: true }，之后所有的next运行都是这个结果了。

// 当然，我们可以使用for..of,可以简化上述逐一next的操作（有点像语法糖啊）
// 由此，我们便实现了自定义版本的range（和python的很像了是不是？）
for (let num of range) {
  console.log(num); // 1  2
}

/* 通过while循环可以自动next,显示地调用迭代器。*/
// 字符串也是一种迭代对象
let str = "日天哥";
// 获取str类型的内置迭代器（js已经定义好了）
let strIterator = str[Symbol.iterator]();
while (true) {
  let val = strIterator.next();
  // 判断done属性，如果为true表示已到头，退出循环。
  if (val.done) {
    break;
  } else {
    console.log(val); // { value: '日', done: false }    { value: '天', done: false }    { value: '哥', done: false }
  }
}

/* 迭代器可以单独存在：实际上，迭代器的概念很灵活，不一定非要用在对象上。只不过有一个可迭代对象的概念里面会返回迭代器而已。
   那么此时就不需要通过Symbol.iterator了，我们只需用创建一个对象它满足迭代器的要求（包含next函数）即可。
*/
// 这是一个无穷迭代器的生成函数
function idMaker() {
  let index = 0;
  return {
    next: () => {
      // 设置done为false，使得可以无限制增加下去
      return { value: index++, done: false };
    },
  };
}
// 获取我们的自定义id迭代器
let idIterator = idMaker();
console.log(idIterator.next().value); // 0
console.log(idIterator.next().value); // 1
console.log(idIterator.next().value); // 2
