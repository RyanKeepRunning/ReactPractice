import React from 'react';
import ReactDOM from 'react-dom';


import Hello from '@/components/Hello';
import '@/06ClassImplementation';
//展开运算符的使用方法：
// var o1 = {
// 	name : 'Ryan',
// 	age : '26',
// 	gender : 'maile'
// };

// var o2 = {
// 	uni : 'University of Melbourne',
// 	...o1
// };

// console.log(o2);
//将o1 与 o2合并可以在o2里手动按照name : o1.name...这种方法添加
//也可以使用展开运算符如上操作




//第一种创建组件的方式，构造函数：首字母大写：如果用小写开头，会报错，因为这是React的操作习惯
// function Hello(props){
// 	// return null;表示返回为空，什么都不渲染
// 	// return <div>这是一个Hello组件</div>//组件中必须返回一个合法的虚拟DOM元素
// 	console.log(props);
// 	// props.name = 'Cat' 无法重新赋值！！因为React中的组件是只读的！
// 	return <div>这是一个组件 --- {props.name} ---- {props.age} -----{props.gender} </div>
// };

//class 创建的组件有自己的私有数据和生命周期函数
//function 创建的组件没有自己的......，只有props
//Stateful Component and Stateless Component
//Stateless 效率通常会高，但是通常都用class关键字，因为保不准以后会需要state属性
class Movie extends React.Component{
	constructor(){
		super();
		this.state ={
			msg: 'This.State生成的MSG'
		}
	}
	render(){
		// this.props.name = 'Cassie'注意无论是在什么情况下这个props的属性都是只读的
		this.state.msg = 'Modified msg' //因此是可以修改的
		return <div>MovieExtendsComponent
			{this.props.name}--{this.props.age} --{this.props.gender} --{this.state.msg}
		</div>;
	}//用于渲染当前组件所对应的render函数

}//在class关键字创建的组件中，想接收外部参数直接通过xxx。属性就可以直接接收

const dog = {
	name:'Dog',
	age : 3,
	gender : 'male'
}

ReactDOM.render(
	<div> 
	123
	<Hello name = {dog.name} age = {dog.age} gender = {dog.gender}></Hello>  组件
	如果组件的内容很多，就可以使用ES6展开运算符语法来这样操作
	<Hello {...dog}></Hello>
	<Movie name = {dog.name} age = {dog.age}></Movie>相当于new了一个Movie的实例对象
	<Movie {...dog}></Movie>相当于相当于又new了一个
	</div>
	,document.getElementById('app'));