/** Map是es6新引入的一种数据结构，和Object类似，但是它可以以真正的键值对存储数据 */
/* 1. 创建Map对象 */
const map = new Map();
console.log(typeof map); // 本质属于object类型

// 也可以传入二维数组作为初始值 Map([[key1,value1],[key2,value2],[key3,value3]...])，注意键值对外层必须套中括号！
const map2 = new Map([
  ["name", "lxy"],
  ["age", 24],
]);
console.log(map2); // Map(2) { 'name' => 'lxy', 'age' => 24 }

/* 2. set设置键值对，get获取键值对 */
map.set("name", "lxy"); // map可以使用任意类型作为key
map.set("age", 24);
console.log(map.get("name")); // lxy

// 使用consonle打印输出map，会显示数量和里面的所有键值对，用'=>'分割 */
// map会保存键值对的存入顺序。
console.log(map); // Map(2) { 'name' => 'lxy', 'age' => 24 }
// 使用size属性来获取Map对象的大小
console.log(map.size); // 2

/* 3. has判断是否存在，delete删除*/
console.log(map.has("age")); // true，map.has()会返回是否存在true/false
// console.log(map.delete("age")); // 根据键名删除，最后返回删除结果
// clear()会删除所有map中的元素
// map.clear();

/* 4. 遍历相关：由于Map类是可迭代的，因此我们可以用for..of直接遍历其中的元素，也就是一个个键值对 */
let myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (let [key, value] of myMap) {
  console.log(`[${key}, ${value}]`); // [a, 1]  [b, 2]  [c, 3]
}
// 另外，forEach也支持map对象，可以为每个键值对设置回调函数。它传入的匿名函数的两个参数分别是value和key，注意顺序别反了！（相当于item和index）
myMap.forEach((value, key) => {
  console.log(`[${key}, ${value}]`); // [a, 1]  [b, 2]  [c, 3]
});

/* 此外，我们还可以通过map.keys()，map.values()和map.entries 分别获取所有的键、值和键值对。 */
// 这三个函数返回的值都是一个迭代器，按照插入顺序包含所有的键、值和键值对。既然是迭代器，就可以通过for..of获取到
console.log(map.keys()); // [Map Iterator] { 'name', 'age' }
for (let key of map.keys()) {
  console.log(key); // name  age
}
for (let entry of map.entries()) {
  console.log(entry); // [ 'name', 'lxy' ]  [ 'age', 24 ]
}

/* 5. 使用解构赋值获取所有键值对：如果我们想一口气获得所有键值对，可以用解构赋值。
    实际上，刚才的 let [key, value] of myMap 也算是一种解构赋值
*/
let [...entries] = myMap;
console.log(entries); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]，获取一个包含所有键值对的数组。

// 也可以使用keys()，values()配合解构，获取所有的键，值
let [...keys] = myMap.keys(); // [ 'a', 'b', 'c' ]
let [...values] = myMap.values(); // [ 1, 2, 3 ]
console.log(keys, values);

/**
 *  WeakMap人如其名，是比较弱的Map类，它只支持四种函数；set(),get(),has(),delete()
 *  WeakMap不能获取大小，是无法枚举的。因此不支持size()函数和循环for..of/forEach
 *  由于循环不行，所以解构也废了。
 */
/* 重要：WeakMap中的键只能是Object类型或者其子类型 */
let obj = {
  name: "rtg",
  age: 24,
};

let wm = new WeakMap([[obj, "rtg"]]);
console.log(wm.get(obj)); // rtg

/* 重要：WeakMap对象对键的引用是弱引用，这意味着如果原始对象被删除或者没有其他引用指向了，就会被js回收
   它的作用在于：如果原始的key已经无指针指向它，说明已经废弃，就该被垃圾回收掉了。而在map的强引用里面会一直占着茅坑，不回收那些“已经被废弃的key”。
*/
// 这里的user是我们平常使用的引用，也就是强引用。只要有强引用存在，js就不会垃圾回收
let user = { name: "Alice" };
// 然而，weakmap对象对这里你传入的键user的引用是弱引用,js垃圾回收机制不会顾虑它的存在。
// 另外，这里的user是引用传递，所以是把{name:"Alice"}对象的地址传进来了，相当于WeakMap({name:"Alice"},"some value")
let weakmap = new WeakMap([[user, "some value"]]);
// 因此当原始对象没有其他强引用时（假设user指针被清空，此时{ALice}没有人指向它了）,那么weakmap里面该条记录也会被清空。
user = null;
console.log(weakmap.get(user)); // undefined

/* 补充：值是强引用，但是该条记录entry在key被回收掉时就会作废了 */
let metadata = "online";
user = { name: "rtg" };
weakmap.set(user, metadata);
user = null;
console.log(weakmap.get(user)); // undefined，online这里尝试获取user对应的值value也就是metadata已经没有了，说明该条目已被删除
console.log(metadata); // 但是这里因为有变量metadata指向value，所以值本身还存在，因为符合js不被回收机制。如果是直接当场定义的话，值也会被彻底回收。
