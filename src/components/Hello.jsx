import React from 'react'
import ReactDOM from 'react-dom'



export default function Hello(props){
	console.log(props);
	return <div>这是Hello组件 name = {props.name} age = {props.age} gender = {props.gender} G'day</div>
}


// 把组件暴露出去：
