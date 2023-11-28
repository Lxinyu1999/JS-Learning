/** 和变量类似，函数也可以提升，而且不会有任何问题，即先调用，再定义的写法是ok的 */
fn(); // 函数提升！
function fn() {
    console.log("函数提升！")
}

// 但是注意，以下写法是有问题的。这相当于定义了function之后，把地址赋值给fn2，但是赋值是不会提升的！
// fn2() // TypeError: fn2 is not a function
var fn2 = function(){ // 这种写法叫做函数表达式
    console.log("无法执行")
}

/** 剩余参数 
 *  用于处理形参数量不确定的时候
*/

function getNum(){
    console.log(arguments)
}
// arguments是动态参数，只存在于函数里面，它是一种伪数组。
getNum(1,2) // [Arguments] { '0': 1, '1': 2 }
getNum(1,3,4) // [Arguments] { '0': 1, '1': 3, '2': 4 }
getNum(1,2,3,4) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

function getSum(){
    // 用循环即可提取arguments的元素
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum
}
console.log(getSum(1,2)) // 3
console.log(getSum(1,2,3)) // 6

/**
 * 剩余参数：把不定数量的形参表示为一个数组，语法：使用... （此处省略一万字！）
 */
getNum2 = function(...arr){
    console.log(arr) // arr就是所有输入的参数，以数组形式排列
}
getNum2(1,2) // [ 1, 2 ]
getNum2(1,2,3) // [ 1, 2, 3 ]

getSum2 = function(...arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(getSum2(1,2)) //3
console.log(getSum2(1,2,3)) //6

// 使用剩余参数的优点是什么？它可以表示最少要输入的变量
// 假设我要求最少输入两个，上限不管
function getNum3(a,b,...arr){
    console.log(`a=${a}, b=${b}, arr=${arr}`)
}
getNum3(1,2) // a=1, b=2, arr=
getNum3(1,2,3,4) // a=1, b=2, arr=3,4
getNum3(1) // a=1, b=undefined, arr=

/** 展开运算符
 *  它的用法和函数里面的剩余参数很像，也是用 ... 
 *  经常用于数组之中，将一个数组展开，特别是求数组的最大值。
 */
const arr = [1,2,3]
console.log(...arr) // 1 2 3；其实应该是1,2,3的，但是输出时没有了，就按有逗号的走
// 配合Math.max可以求数组最大值
let result = Math.max(...arr)
console.log(result) // 3
// 同理可以求最小值
console.log(Math.min(...arr))
// 所有用到逗号的都可以用
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr)) //6

// 还可以用于合并数组
arr1 = [1,2]
arr2 = [3,4]
arr3 = [...arr1,...arr2]
console.log(arr3) // [ 1, 2, 3, 4 ]