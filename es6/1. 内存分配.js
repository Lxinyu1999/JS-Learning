/** 在js当中（和java一样），内存分为三个区域
 *  栈内存：存储变量（Number，String，Boolean，Undefined，Null） 注意字符串在js里面是变量类型，不是引用类型！
 *  堆内存：只存储引用对象（又叫复杂类型），也就是所有的object类型。
 *  池：只存储常量
 * 
 *  注意区分 引用：指针，存储引用对象的地址，本质是变量；引用对象：object类型，复杂类型，在堆内存里面划分区域。
 */

// 注意：指向对象的引用（或者说是指针）它本身是在栈内存里面的，而被指向的对象则是在堆内存。
// 因为指针本身也是一个变量，变量就一定在栈内存里面！
let a = "字符串在js里面是变量，而不是引用对象"
let b = a // 只是传入了值
a = "我修改了字符串的值"
console.log(`a = ${a}, b = ${b}`) // a与b不相同

let c = 100
let d = c // 同样只是传入了值
c = 200
console.log(`c = ${c}, d = ${d}`) // a与b不相同

let e = {
    name:'lxy'
}
let f = e // 传入的是{}对象的地址
e.name = 'yxl'; // 修改也会对f生效，因为两个变量都指向了同一个object。
console.log(`e = ${e.name}, f = ${f.name}`) // e = yxl, f = yxl

/* 
    引用类型的比较：通过 === ，即比较两个引用是否指向同一个对象。
    值比较：通过 ==
*/
// 两个存储的东西一样，他们相等吗？
let g = {name:'1'}
let h = {name:'1'}
console.log(g===h) // false
h = g
console.log(g===h) // true 此时相等，因为两个引用都指向了一个对象

/** 传参
 *  原始类型的传参：只进行值传递。
 *  也就是说，括号里面实际上是test(200)，外面的n根本就和里面没关系，只是把它的值拿走了而已
 * 
 */
function test(n){ // 这里的n和外面的n不相干，只是接收了外面n的值
    console.log(`从外界传入的值是${n}`) // 200
    n = 100 // 函数调用结束这个n就被销毁了
    console.log(`此n是局部变量，和外面的全局变量不相干,n=${n}`) // 100
}
let n = 200
test(n) // 看起来是把n传进去了，实际上只是把n的值传入了！所以实际上相当于 test(200)
console.log(n) // 200，因为就近原则，且父层无权进入子层，且全局变量和局部变量无关

/** 引用类型的传参：传入的是地址
 *  在函数内部也可以对被引用对象进行操作，此时就没有局部和全局变量之分了就
 */
let arr = [1,2,3]
function arrAdd(arr){ // 传入的是arr数组的地址，因此可以对它进行操作
    arr.push(100)
}
arrAdd(arr);
console.log(arr) // [ 1, 2, 3, 100]

// 补充：函数也是对象，通过传入函数名即可
function greet(){
    console.log("你好，调用了greet函数！");
}
// 定义一个函数，它可以接收另一个函数名
function callFunction(fn){ // 传入一个函数名，相当于把函数对象的地址传入
    fn() // 这里可以直接调用你传入的函数fn()，因为是引用传参，打破局部变量的局限
}

// 传入一个函数greet，以能调用它
callFunction(greet) // 你好，调用了greet函数！