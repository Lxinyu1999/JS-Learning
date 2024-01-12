/** call()方法
 *  语法：函数名.call(thisArg, arg1,arg2...)，其中第一个thisArg表示修改的this指向
 *
 *  call的特点是修改this的同时会调用。它是函数方法的默认调用形式
 */
let p = {};
function fn1() {
  console.log(this);
}
fn1(); // global
fn1.call(p); // p对象

/** apply：也是修改this同时执行，不同点在于它接收数组作为参数 */
function fn2(a, b) {
  console.log("我是" + this + ". 我计算的a+b = " + (a + b));
}
fn2(1, 2); // 我是[object global]. 我计算的a+b = 3
fn2.apply(p, [1, 2]); // 我是[object Object]. 我计算的a+b = 3

/* apply常见应用：求数组最大值 */
// 之前我们用扩展运算符可以快速算出
let arr = [1, 2, 4, 3, 6, 9];
console.log(Math.max(...arr)); // 9
// 现在可以用apply，我们只需要它的数组参数功能，第一个thisArg设为null即可。
console.log(Math.max.apply(null, arr)); // 9

/** bind()：只绑定新的this然后返回一个新函数，而不会执行原函数。最常见
 *  语法：fn.bind(thisArg,arg1,arg2...)，返回一个新的函数
 */
let person = {
  name: "rtg",
  age: 24,
};
function fn3(a, b) {
  console.log("我是" + this.name);
}
let test = fn3.bind(person);
test(); // 我是rtg
