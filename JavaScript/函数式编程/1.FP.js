// 面向对象
// 抽象成类与对象，通过封装，继承和多态来演示联系

// 函数式编程
// 对运算过程进行抽象
// 根据输入得到输出

function add (n1, n2) {
    return n1 + n2
}
//输入，返回输出，抽象过程
//add 可以复用
let sum = add(2, 3)//5

// 函数可以存储在变量中
// 函数作为参数
// 函数作为返回值
// 在js中函数就是一个普通对象，并且可以存储到变量/数组中，可以作为另一个函数的参数和返回值。

const a = {
    index(show){return b.view(show)} //函数包裹函数返回值一样
}
const c = {
    index: b.view//给index方法赋值
}