//可以把函数作为参数传递给另一个函数
//可以把函数作为另一个函数的返回值
function forEach (array, fn) {
    for (let i = 0; i < array.length; i++){
        fn(array[i])
    }
}
let arr = [1, 24, 2, 424, 9]
forEach(arr, function (item) {
    console.log(item+1);
})

//函数作为参数，不考虑内部如何实现，更加灵活
function myFilter (array,fn) {//接受数组。fn处理
    let res = []//接受处理好的
    for (let i = 0; i < array.length; i++){
        if (fn(array[i])) {
            res.push(array[i])
        } 
    }
    return res
}
let arr2 = [1, 2, 3, 4, 5, 6, 7]

let r =myFilter(arr2, function (item) {
    return item>2
})
console.log(r);