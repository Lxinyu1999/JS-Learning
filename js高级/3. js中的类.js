
/** 1. 定义类的第一种方法：构造函数+原型链
 *  语法格式：
 *   function 类名(){
 *   
 *   }
 *   或者
 *   类名 = function(){
 *    
 *   }
 * 
 *   创建对象时：let 对象名 = new 类名() // 相当于调用上面的构造函数
 */

// 可以看到，第一种方法它的语法和定义函数一模一样（因为本来就是构造函数就是个函数啊）
function sayHello(){}
// 这是调用函数
sayHello()
// 这是创建对象，把它当作构造函数。
new sayHello() // sayHello表示一个类

// 总结下来，就是js当中，类的定义和构造函数的定义是放到一起的。

/* 
    传入实参 在构造函数内部通过 this.属性名 接收
*/

// 定义一个学生类
function Student(name,age){ // 一种区分函数or对象的方法是，对象我们默认首字母大写
    // 声明属性，this表示当前对象
    // 假设Student类有两个属性
    this.name = name;
    this.age = age;
    
} 
// 创建学生对象
let lxy = new Student(); // 可以什么都不赋值
let rtg = new Student("日天哥",24)

// 访问对象的属性
console.log(lxy); // Student { name: undefined, age: undefined }
console.log(rtg); // Student { name: '日天哥', age: 24 }
console.log("名字是："+rtg.name+"年龄是："+rtg.age);

/* 还可以通过这种方法来访问类中的属性，就和python里面的字典一样 */
console.log(rtg["age"]); // 24
console.log(rtg["name"]); // 日天哥

/* 添加函数/方法 */
Product = function(pno,pname,price){
    // 属性
    this.pno = pno;
    this.pname = pname;
    this.price = price;

    // 方法
    this.getPrice=function(){
        return this.price
    }
}

let pro = new Product(111,"西瓜",4.5)
console.log(pro.getPrice()) // 4.5

/** 通过prototype属性，可以动态地扩展属性or方法
 *  因为很多时候，我们不是一口气完成所有内部函数/方法的定义的
 *  定义方法：原始类名.prototype.扩展的属性/方法名
 */

// 使用方法和正常定义内部方法是一样的。
Product.prototype.getPname = function(){
    return this.pname // this表当前对象Product的具体实例
}
console.log(pro.getPname()) //西瓜

// 扩展属性
Product.prototype.oye = "哦耶";
console.log(pro.oye) // 哦耶

// 你也可以给现有的类扩展函数
String.prototype.suiyi = function(){
    console.log("这是给String类型扩展的函数")
}
"abc".suiyi(); // 这是给String类型扩展的函数
