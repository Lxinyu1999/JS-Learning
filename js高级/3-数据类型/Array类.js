/** js内置类之一，继承自Object类，类型上属于object
 *
 *  Array类有一些预置的实例方法，需要你先创建数组对象再调用
 *  例如：map，filter，forEach和reduce
 */
/* reduce：进行累计操作 语法 arr.reduce(callback(prev,next), 初始值) */
const arr = [1, 3, 2, 7, 8];
// 无初始值
const result = arr.reduce((prev, next) => {
  return prev + next;
});
console.log(result); // 21

// 有初始值
const result2 = arr.reduce((prev, next) => {
  return prev + next;
}, 10);
console.log(result2); // 31
