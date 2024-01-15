/**
 * Set和数组类似，但是它要求存储的值必须唯一（集合），且没有类型上的限制.
 * 常用方法有四个：add()，has()，delete()，clear()
 */
// Set的构造，和Map类似，传入的必须是一个数组
let s = new Set([1, 2, 3, 4, 4]);
// 直接输出，发现重复的4被干掉了（注意是后面来的重复值会被干掉）
console.log(s); // Set(4) { 1, 2, 3, 4 }

// 获取Set的大小，不能用.size()方法，而是用size属性了
console.log(s.size); // 4

// 一些细节：类型不同的值，是不相等的（5 != '5'）；两个对象的值总是不相等（因为地址不同）
s.add(5);
s.add("5");
s.add({});
s.add({});
console.log(s); // Set(8) { 1, 2, 3, 4, 5, '5', {}, {} }
// 和Map一样，可以通过数组解构赋值快速获取整个Set元素，以数组形式
let [...set] = s;
console.log(set); // [  1, 2,  3,  4,  5, '5', {}, {}  ]

/* Set的重要应用：数组和字符串去重 */
let [...set2] = new Set([1, 2, 3, 3, 4, 4, 4, 5]);
console.log(set2); // [ 1, 2, 3, 4, 5 ]
console.log([...new Set("abbbcdfg")].join("")); // abcdfg
/* 
    Set是iterable的，因此可以用for..of去遍历每一个元素，也支持forEach函数 
    Set在形式上是没有键值对，只有值的。但是我们依然可以使用keys()，values()，entries()去遍历，此时的keys和values值相等 
*/
s.forEach((item) => {
  console.log(`${item} by forEach`);
});

console.log(s.keys()); // [Set Iterator] { 1, 2, 3, 4, 5, '5', {}, {} }，和value一样
console.log(s.entries());
// [Set Entries] {
//     [ 1, 1 ],
//     [ 2, 2 ],
//     [ 3, 3 ],
//     [ 4, 4 ],
//     [ 5, 5 ],
//     [ '5', '5' ],
//     [ {}, {} ],
//     [ {}, {} ]
//   }

/** WeakSet：只能存储对象类型，和WeakMap类似，也是弱引用。
 *  不可遍历，解构；不能使用size属性或方法
 *  只能使用has，delete和add三个方法
 */
// 初始构造必须传入数组 new WeakSet([...])，注意：weakset接收的是对象类型，且本身就解构一次。这意味着如果你直接传入一维数组，里面的成员必须是对象才行
let arr = [1, 2, 3];
// 这样写是错误的，因为Set，Map系列接收参数时会解构，相当于只要里面的成员。而1，2，3不是对象
// let ws = new WeakSet(arr); // TypeError: Invalid value used in weak set
let ws = [[arr]];
console.log(ws); // ws:[1,2,3]里面存放的是一个数组对象
