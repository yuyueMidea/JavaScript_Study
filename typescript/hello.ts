/*
 * @Author: your name
 * @Date: 2019-12-17 09:15:17
 * @LastEditTime: 2019-12-17 11:44:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-demo\hello.ts
 */
function sayHello(person: string){
	return 'hello '+person
}
let user ='yuyu'
// user = [1,2,4]
console.log(user)

let isDone: boolean =false
// console.log(isDone)

function alertname(): void{
	alert('my name is yuyue--')
}
// alertname()

// let n1: number[] = [1,3,5]
let anything: any =12
anything ='what??'
// console.log(anything)

let anytype:string|number;
anytype='seven'
anytype= 2222
// console.log(anytype)
// 访问联合类型的属性或方法
function getString(sth:string|number):string{
	return sth.toString()
}
// console.log(getString('132'))

interface Person{
	name:string;
	age?: number;
	[propName: string]:any;
	readonly id:number;
}
let tom: Person ={
	name:'Tom',
	age: 28,
	gender:'man?',
	id:9527
};
// tom.id=111			//readonly 定义只读属性

// 数组的项中不允许出现其他的类型：
let fibonacci:number[] =[4,1,3,4,5]
let fibonacci2:string[] =['232','sss','str11',]
let fibonacci3:Array<number> = [1,2,4,5,]			//数组泛型
fibonacci2.push('111111')

// 用接口表示数组
interface NumberArray{
	[index: number]: any
}
let fibonacci4:NumberArray =[1,2,'str',1]
console.log(fibonacci4)
// 用 any 表示数组中允许出现任意类型：
let fibonacci5:any[] =['qq',123,{n:'aa'}]

// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
function sum(x:number,y:string):string{
	return x+y
}
console.log(sum(11,'www'))

// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x:number|string):string{
		return x.toString().split('').reverse().join('')
}
console.log(reverse('zhangsan'))