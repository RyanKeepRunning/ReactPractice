import React from 'react'
// import ReactDOM from 'react-dom'
import CmtItem from '@/components/CmtItem'

//直接像这样导入的css对整个项目都生效（样式表没有独立作用域，可能导致冲突）
import cssobj from '@/css/cmtList.scss'

//没有需要它暴露任何对象之类的东西，就不需要import bootstrap from这种方式了
import 'bootstrap/dist/css/bootstrap.css'

console.log(cssobj)
export default class CmtList extends React.Component{
	constructor(){
		super();
		this.state = {
			CommentList: [
			{id:1,user:'张三',content:'哈哈，沙发'},
			{id:2,user:'李四',content:'哈哈，板凳'},
			{id:3,user:'王五',content:'哈哈，凉席'},
			{id:4,user:'赵六',content:'哈哈，砖头'},
			{id:5,user:'田七',content:'哈哈，楼下山炮'},
			{id:6,user:'常青',content:'哈哈，我是小胖猪'}
			]
		};
	}
	render(){

		return <div>
			<h1 className={cssobj.title + " test"}>这是评论列表组件</h1>
			<button className = "btn btn-primary">Push here</button>
			<div className = "panel panel-primary"></div>
			{this.state.CommentList.map(item => <CmtItem {...item} key = {item.id}></CmtItem>)}
		</div>
	}
}
//<h1 className={[cssobj.title,'test'].join(' ')}>这是评论列表组件</h1> 也可以