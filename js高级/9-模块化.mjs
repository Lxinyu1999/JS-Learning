/**主要介绍es6的模块化
 * 注意：在nodejs环境下，需要把后缀修改为mjs才能使用es6模块化（或者修改package.json)
 * 
 */

// 导入命名导出的内容
import {pi,add} from './src/myMath.mjs'
console.log(add(pi,10)) // 13.14


// 导入默认导出的内容，我们是得到一个对象，然后把所有暴露的属性和方法作为对象的属性/方法来使用
// 注意这里不需要大括号了，而且你可以任意命名
import myMath from './src/myMath.mjs'
console.log(myMath) // { name: 'lxy', sayHello: [Function: sayHello] }
console.log(myMath.name) 
myMath.sayHello() // Hello, world!
// sayHello() // TypeError: sayHello is not a function


/** as关键字
 *  用于可能会起冲突，或者你想重命名时
 */
// 这两个同名的函数在不同的模块里面，因此我们通过as来区分它们
import {doSome as doSome1} from './src/myMath.mjs' // 注意as要放在大括号里面
import {doSome as doSome2} from './src/myModule.mjs'
doSome1() // Hello, myMath
doSome2() // Hello, myModule

// 之前我们说过，export default需要重命名，实际上是把default这个对象变量进行了默认的as操作
import myModule from './src/myModule.mjs' // 相当于下面的缩写：
// import {default as myModule} from './src/myModule.mjs'

/** import * 
 *  如果要导入的暴露元素过多，通过import *来全部导入到一个对象里面
*/
import * as myModule2 from './src/myModule2.mjs'
console.log(myModule2) // [Module: null prototype] { a: 1, b: 2, c: 3, d: 4 }