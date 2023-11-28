/** 方法1：命名导出 */
export const pi = 3.14;
export const add = (a,b)=>{
    return a+b;
}
/* export不能用在已经声明好的变量上，只能放在声明语句当中，下面代码是错误的：*/
const id = 1001
const age = 24
// export age; // 报错


/** 方法2：默认导出 
 *  如果我们想先定义好变量和函数，最后再一口气导出的话，就使用这种方式
 *  它会导出一个对象（名字由import时决定），里面的属性和方法就是你要暴露的东西
*/
const name = 'lxy';
function sayHello(){
    console.log('Hello, world!')
}
// 可以将所有变量最后统一打包暴露出去，比较方便，适合导出模块中最主要的功能或值。
export default {name,sayHello}
// 请注意，每个模块只能有一个默认导出export default
// const var = 'error'
// export default var // 错误：一个模块不能具有多个默认导出

export function doSome(){
    console.log('Hello, myMath');
}

/**前面说过了，export必须放在直接声明语句当中
 * 或者，你要把export后面加上大括号 
 * 此时，可以在导出的时候重命名 */
let lxy = 'ritiange';
export {lxy as name}
// export lxy // 这是错的，必须有大括号
// export {lxy} // 这是对的
