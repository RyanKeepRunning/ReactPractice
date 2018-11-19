import React from 'react'
// import ReactDOM from 'react-dom'

import styles from '@/components/styles'
import cssobj from '@/css/cmtList.scss'

export default function CmtItem(props){ 
	return <div className = {cssobj.boxItem}>
		<h1 className = {cssobj.titleItem}>评论人：{props.user}</h1>
		<p className = {cssobj.content}>评论内容：{props.content}</p>
	</div>


}