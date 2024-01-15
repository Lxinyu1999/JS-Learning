console.log(typeof 1); // number，默认数字类型是小写

/** js有七个基本类型（string,number,boolean,undefined,null,bigint,symbol） + 一个引用类型object
 *  其中原始类型是没有属性和方法的，且都是值传递
 *  为了使用一些原始类型的方法（length，toUpperCase()等等，就需要进行包装，转换为对象类型，这一过程是js自动在后台进行的，使用完后临时包装立即销毁
 *  这就是为什么我们平常可以丝滑使用str.length，人家帮我们后台处理好了都。
 */
// 对原始类型进行包装
let n1 = 3;
let n2 = new Number(3); // 这是包装类型，本质是一个对象，里面会有很多属性和方法可使用
console.log(n1 === n2); //false
console.log(typeof n1, typeof n2); //number object

/** 查看某个实例是否属于一个类：instanceof 运算符 */
console.log([] instanceof Array); // true，Array是js自带的内置类
