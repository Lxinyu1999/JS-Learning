/** var变量的问题：变量提升
 *  注意：变量提升是缺陷，不是优点
 * 
 *  变量提升的意思：在js代码执行之前，先检测当前作用域下所有var声明的变量
 *  它会把所有var声明放到所有代码的最前面
 *  注意：赋值不提前，只提前声明！
 */
// 这里相当于多了一个：var x
// 但是注意：赋值x=10没有！
console.log(`一共有${x}件`); // 一共有undefined件，说明x没有赋值
var x = 10; 

/* 在同一作用域下var可以重复定义，let和count不可以 */
var x = 100;
var x = 99;
// let x = 299; // SyntaxError: Identifier 'x' has already been declared
// const x = 1; // SyntaxError: Identifier 'x' has already been declared

/* var没有块级作用域，这一点在循环里面经常用到 */
// for(var i=0;i<3;i++){}
// console.log(i) // 3

for(let i=0;i<3;i++){}
// console.log(i) // ReferenceError: i is not defined

/* const用于声明一个常量，这意味着一旦一个变量被声明为 const，它的值就不能再被重新赋值。
   但是，如果const是引用（指针），那么const只能确保变量名所绑定的引用地址不变，但不保证指向的对象中的内容不变
*/
const a = 100;
// a=10; // TypeError: Assignment to constant variable.

// 以下操作是合法的，因为你没有修改obj地址，只是修改了被引用的对象的内容
const obj = {name:'lxy',
             age:24
}
obj.name = 'rtg' // 修改属性
obj.sal = '1000' // 添加属性
console.log(obj) // { name: 'rtg', age: 24, sal: '1000' }
// obj = {} // 这是错的，相当于修改地址。TypeError: Assignment to constant variable.