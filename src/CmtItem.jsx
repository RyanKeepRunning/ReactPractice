import React from 'react'
// import ReactDOM from 'react-dom'

//方式一

// export default function CmtItem(props){ 
// 	return <div style = {{border:'1px dashed #ccc', margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'}}>
// 		<h3>评论人：{props.user}</h3>
// 		<p>评论内容：{props.content}</p>
// 	</div>

//方式二:第一层封装

// const itemStyle = {border:'1px dashed #ccc', margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'};
// const userStyle = {fontSize:'14px'};
// const contentStyle = {fontSize:'12px'};

// export default function CmtItem(props){ 
// 	return <div style = {itemStyle}>
// 		<h3 style = {userStyle}>评论人：{props.user}</h3>
// 		<p style = {contentStyle}>评论内容：{props.content}</p>
// 	</div>

//方式三： 第二层封装
// const styles = {
// 	item : {border:'1px dashed #ccc', margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
// 	user : {fontSize:'14px'},
// 	content : {fontSize:'12px'}
// }

//方式三： 第三层封装
import styles from '@/components/styles'

export default function CmtItem(props){ 
	return <div style = {styles.item}>
		<h3 style = {styles.user}>评论人：{props.user}</h3>
		<p style = {styles.content}>评论内容：{props.content}</p>
	</div>


}