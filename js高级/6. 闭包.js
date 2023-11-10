/** 闭包的简单定义：内层函数使用外层函数的变量 */
function outer(){
    const a = 1;
    function inner(){
        console.log(a); // 内层里面使用了外层变量即可，返回不是必须的
    }
    inner() // 这一步调用是必须的
}
/* 外包的意义在于，在外部可以访问内部的局部变量a */
outer() // 1

/** 闭包的常见形式 */
function outer2(){
    const a = 1; // 我现在想在外面全局作用域下访问该变量
    function inner(){
        console.log(a)
    }
    return inner // 返回内部函数，刚才我们是在内部调用的，现在我们把调用的步骤也放到外面去执行
}
const Inner = outer2() // Inner存储的就是outer里面的内部inner
Inner() // 1，这样将调用的这一步也放到外面


/* 闭包应用：统计函数调用次数 */
// 这是一个平常的计数
let i = 0
function test(){
    i++;
    console.log(`函数调用了${i}次`)
}
test() // 函数调用了1次

// 但是这样有一个问题，这个i是个全局变量，任何人都可以使用它
i = 1000 // 如果有人篡改i，就废了
test() // 函数调用了1001次

// 我们将它转化为闭包的形式，将该计数变量私有化。
function count(){
    let num = 0; // num作为局部变量，外界将不能直接修改它
    function fn(){ // 记录fn被调用的次数
        num++;
        console.log(`函数调用了${num}次`)
    }
    return fn;
}
let fun = count(); // 这里就把num绑定到全局变量fun上面了，由于fun()即fn()需要num++，因此num就一直不会被js回收
fun() // 函数调用了1次，此时按理说要回收它里面的局部变量了，可是js一看，上面的fun变量仍然需要用到num，所以就不去回收了
fun() // 函数调用了2次
/*
    可以看到，调用完count()，里面的局部变量num并没有被销毁，而是随着fn()的操作可以进行++
    这是因为调用count()时，它会返回fn()，赋值给fun. 而global可以顺着引用fun找到fn()函数（在堆内存里面），然后顺着num++，进而找到num=0，因此js判定不会进行回收。
    直到全局变量fun（引用也是变量）本身被回收为止（页面关闭时）
*/

/** 问题1：闭包一定有return吗？
 *  答案是不一定，看你是否需要用到内层的变量x和函数inner()，如果不需要就不用return
 *  闭包的定义是：两层函数嵌套，其中内层函数使用了外层函数作用域下定义的变量
 */

function noReturn(){
    const x = 100;
    function justUse(){
        console.log('我只是输出了变量x = '+x);
    }
    justUse() // 这里不需要返回x，但一定要调用
}
noReturn() // 我只是输出了变量x = 100

function needReturn(){
    const x = 1000;
    return function getX(){
        console.log("返回了内层函数, x的值是："+x);
    }
}
let inner = needReturn()
inner() // 返回了内层函数, x的值是：1000