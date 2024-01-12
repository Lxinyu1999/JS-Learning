/** 三大关键词break，continue和return */
/* 1. break：用于退出当前最近的循环for，也就是内循环退出，而外循环继续 */
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    if (j === 1) {
      // break只会退出当前最近的循环，也就是内层循环；后面的循环即便符合条件也不执行
      break;
    }
    console.log("i: ", i, "j: ", j);
  }
}
// i:  0 j:  0
// i:  1 j:  0
// i:  2 j:  0

/* 2. continue：用于跳过当前循环的剩余部分，并继续执行下一次循环 */
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      // 只会跳过j===1的情况，后面的内层循环继续。
      continue;
    }
    console.log("i: ", i, "j: ", j);
  }
}

/* 3. return用于退出函数，并返回一个值给外界变量（如果有的话）。
      当return执行时，函数会立即停止执行并返回。后面的代码都不执行
 */
function testReturn(num) {
  if (num > 5) {
    return num; // 返回 num 的值，并退出函数
  }
  return "Less than or equal to 5"; // 返回字符串，并退出函数
}
testReturn(10);

/* return和嵌套的关系：如果是函数嵌套函数，在内层函数return会退出内层函数，外层函数不退出（比如递归）
   如果是函数嵌套一个循环语句，return会直接全部退出。
*/
