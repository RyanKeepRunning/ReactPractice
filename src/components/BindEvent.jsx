import React from 'react'

export default class BindEvent extends React.Component{
	constructor(){
		super();
		this.state = {
			msg:'哈哈'
		}
	}
	render(){
		return <div>
		<div>BindEven组件</div>
		<hr/>
		<button onClick={()=>this.myClickHandler('🐷','🍕')}>在console里发射猪头披萨</button>
		<hr/>
		<button onClick={()=>this.convertToPigHeadandPRMs('🐖','🐂')}>把msg换成猪头</button>
		<h3>{this.state.msg}</h3>
		</div>
	}

// setState是异步的，所以如果在进行setState操作后想要立刻获得结果，就需要把后续工作
// 写在setState的回调函数中
	convertToPigHeadandPRMs = (args1,args2)=>{
		// this.state.msg = '🐷';
		this.setState({msg:'🐷 '+args1+args2},function(){
			console.log(this.state.msg);
		});
	}

	myClickHandler(args1,args2){
		console.log('Button!!!!Button!!!Button!!!!'+args1+' '+args2);
	}
}
//()=>{this.myClickHandler('🐷','🍕')}