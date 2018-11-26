import React,{Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import Regin from './regin'
import '../../../sass/login.scss'

class login extends Component{
	
	render(){
		return <div>
		<div className='loginBox'>
			<ul className='loginType'>
			<li><span className='active'>用户登录</span></li>
			<li><span>短信快捷登录</span></li>
			</ul>
		</div>
		<div className='loginForm'>
			<div className='loginItem'><input type="" name="" id="" value="" placeholder="请输入手机号"/></div>
			<div className='loginItem'><input type="" name="" id="" value="" placeholder="请输入登录密码"/></div>
			<div className='loginBtn'><span>登录</span></div>
		</div>
		<div className='loginLink'>
		{/*需要路由跳转<NavLink to='Regin' className='reginLink'>快速注册<NavLink/>*/}
		<NavLink to="/regin">快速注册</NavLink>
		<a className='passLink'>忘记密码</a>
		</div>
		<Route path = "/regin" component={Regin} />
	</div>
	}
	
}
export default login;