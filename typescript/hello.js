/*
 * @Author: your name
 * @Date: 2019-12-17 09:15:17
 * @LastEditTime: 2019-12-17 11:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-demo\hello.ts
 */
function sayHello(person) {
    return 'hello ' + person;
}
var user = 'yuyu';
// user = [1,2,4]
console.log(user);
var isDone = false;
// console.log(isDone)
function alertname() {
    alert('my name is yuyue--');
}
// alertname()
// let n1: number[] = [1,3,5]
var anything = 12;
anything = 'what??';
// console.log(anything)
var anytype;
anytype = 'seven';
anytype = 2222;
// console.log(anytype)
// 访问联合类型的属性或方法
function getString(sth) {
    return sth.toString();
}
var tom = {
    name: 'Tom',
    age: 28,
    gender: 'man?',
    id: 9527
};
// tom.id=111			//readonly 定义只读属性
// 数组的项中不允许出现其他的类型：
var fibonacci = [4, 1, 3, 4, 5];
var fibonacci2 = ['232', 'sss', 'str11',];
var fibonacci3 = [1, 2, 4, 5,]; //数组泛型
fibonacci2.push('111111');
var fibonacci4 = [1, 2, 'str', 1];
console.log(fibonacci4);
// 用 any 表示数组中允许出现任意类型：
var fibonacci5 = ['qq', 123, { n: 'aa' }];
function sum(x, y) {
    return x + y;
}
console.log(sum(11, 'www'));
