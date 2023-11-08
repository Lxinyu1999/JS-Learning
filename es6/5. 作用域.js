/** 1. 局部作用域之函数作用域
 *  注意：我们假设统一使用最新的let和const方法来命名变量
 *  只能在函数内部使用（包括传给函数的形参）
 *  在外部无法使用
 */

let b = 100 // b为全局变量
function myFunction(){
    let a = 10;
    console.log(a)
    let c = 199;
}
myFunction() // 注意要先调用函数
// console.log(a) // 报错：a is not defined
// console.log(c) // 报错：c is not defined
console.log(b)

/** 2. 局部作用域之块作用域
 *  只能在大括号{}内部使用的变量
 *  其实函数function(){}也可以看成块作用域；同理还包括for、if、while等。
 */
for (let i = 0;i<5;i++){ // 由于互不冲突，所以可以多次定义for(let i = ...)
    console.log(i) // 0,1,2,3,4
}
// console.log(i) // ReferenceError: i is not defined
{
    let x = 100;
}
// console.log(x) // ReferenceError: x is not defined

/* 使用var声明块内变量时，可以被外界访问。因为var并没有块级作用域
   注意：var有函数作用域
*/
for (var i = 3;i<5;i++){
    var j = 0
}
console.log(i) // 5 
console.log(j) // 0

function ok(){
    var w = 0;
}
ok()
// console.log(w); // ReferenceError: w is not defined

/** 3. 全局作用域
 *  在script标签内，或者单独的.js文件的最外层定义的变量，就是全局作用域。
 *  注：var也有全局作用域
 */
const x = 100;
function test(){
    console.log(x) // 0
}

/** 4. 作用域链
 *  对于同名的全局变量和局部变量，是否会有冲突？答案是不会
 *  在这种情况下，x在各个部位的取值情况如下：
 *  在全局作用域中，x 的值是全局变量的值，也就是你最初定义的值。
 *  在局部作用域中，x 的值是局部变量的值，也就是你在该作用域内重新定义的值。
 *  若对该变量进行了任何操作，则在哪个作用域下进行的操作，就对哪个范围内的x生效。比如在局部作用域让x+100，不会影响外面的全局变量x；同理全局变量变化也不会影响局部作用域内的x。
 *  也就是说，你可以把这两个x当作不同的变量，分开看待了。
*/
// 全局作用域
let a = 1
console.log(a) // 1
function niTian(){
    // 局部作用域，和上面的a两者不冲突
    let a = 2
    console.log(a) // 2
    a++; // 对a进行修改，只会对局部作用域内的a生效，外面的a还是1.
    console.log(a) // 3
}
a = 100; // 对外面的a修改，只会对全局作用域内的a生效，里面的a还是之前的2（3）.
niTian()
console.log(a) // 100

// 如果想在局部作用域内访问同名的全局作用域呢？通过window.x 或者 globalThis.x 这两个对象都指向全局对象。
q = 6324
function niTian2(){
    let q = 599
    console.log(q) // 599
    // console.log(window.a) //ReferenceError: window is not defined，注意nodejs没有window对象了！！
    console.log(globalThis.q) // 6324
}
niTian2()


/** 多层函数嵌套情况下的作用域
 *  原则：就近原则，离着近的赋值就是我们要的
 */
let m = 1;
function mTest(){
    m = 2;
    function mTest2(){
        m = 100; // 就近原则，输出这个
        console.log(m)
    }
    mTest2()
}

mTest() // 输出的是 m = 100