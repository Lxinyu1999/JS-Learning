/** 使用class关键字定义类
 *  在JavaScript ES6及之后的版本中，class关键字允许你以一种新的方式定义类。
 *  它的本质是一种语法糖，背后仍然使用函数和原型链来实现。使用class关键字可以使代码更清晰、易于理解，并且支持更多面向对象的特性，比如继承（extends）、静态方法、getter和setter等。
 */
// 语法格式
class MyClass{
    // 注意在js当中，通过constructor作为构造函数（逆天啊，之前不是用同名函数来构造吗...)
    constructor(attr1,attr2){
        this.attr1 = attr1;
        this.attr2 = attr2;
    }

    // 直接把实例方法写在里面即可，和java一样
    MyMethod(){

    }

    // 添加静态方法（可选）和java一样，只不过前面没有public，private之类的
    // 静态方法：直接通过类.方法名() 即可调用，无需创建实例
    // MyClass.myStaticMethod()
    static myStaticMethod(){
        // ...
    }
}

// 继承（可选）
class subClass extends MyClass{

    constructor(attr1,attr2,attr3){
        // super的作用是调用父类的构造函数，用来赋值前两个属性
        super.constructor(attr1,attr2);
        this.attr3 = attr3
    }
}

// 实际操作一下
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        // 为了方便，使用模板
        console.log(`Hello, I am ${this.name}. My age is ${this.age} years old.`)
    }
}
// 创建实例
let p = new Person("lxy",24);
p.greet() // Hello, I am lxy. My age is 24 years old.

// 创建子类
class Employee extends Person{
    constructor(name,age,salary){
        super(name,age); // super的作用是直接调用父类的构造函数
        this.salary = salary;
    }

    // 创建静态方法
    static sayHello(){
        console.log("Hello, world. 我是静态方法")
    }

    // 实例方法
    getSalary(){
        return this.salary;
    }
}

let p2 = new Employee("日天哥",25,10000)
// 调用实例方法
console.log(p2.getSalary()) // 10000
// 调用静态方法
Employee.sayHello() // Hello, world. 我是静态方法
// 调用父类方法
p2.greet() // Hello, I am 日天哥. My age is 25 years old.


// 试一下，直接输出对象会怎么样
console.log(p2) // Employee { name: '日天哥', age: 25, salary: 10000 }，输出的是object对象，以{}形式
console.log(typeof(p2)) // object