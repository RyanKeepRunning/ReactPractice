import React from 'react'

export default class BindEvent extends React.Component{
	constructor(){
		super();
		this.state = {
			msg:'我是来自濮屯的青青'
		}
	}
	render(){
		return <div>
		<div>BindEven组件</div>
		<hr/>
		<button onClick={()=>this.myClickHandler('🐷')}>在console里发射猪头披萨</button>
		<hr/>
		<br/>
		<button onClick={()=>this.convertToPigHeadandPRMs('🐖')}>对青青使用照妖镜</button>
		<h3>{this.state.msg}</h3>
		<hr/>
		<input type = 'text' style ={{width:'100%'}} value = {this.state.msg} onChange = {(e)=>{this.textValueHandler(e)}} />
		</div>
	}

// setState是异步的，所以如果在进行setState操作后想要立刻获得结果，就需要把后续工作
// 写在setState的回调函数中
	convertToPigHeadandPRMs = (args1)=>{
		// this.state.msg = '🐷';
		this.setState({msg:'哼唧哼唧??? '+ '🐷 '+ args1 + ' ??????'},function(){
			console.log(this.state.msg);
		});
	}

	textValueHandler = (e)=>{
		console.log(e.target.value);
		const newValue = e.target.value;
		this.setState({
			msg:newValue
		})
	}

	myClickHandler(args1){
		console.log('Button!!!!Button!!!Button!!!!'+args1);
	}
}
//()=>{this.myClickHandler('🐷','🍕')}