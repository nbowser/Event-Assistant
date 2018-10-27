import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    		<span className="navbar-brand">Sign In</span>
			<span className="text-white">
			{/* <h1>SIGN IN</h1> */}
			
			<form>
				<label>Email</label>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				
				<label>Password</label>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
			</span>
			<Link to = "/signup" >      Go to sign up</Link>
			</nav>
		</div>
	);
};

export default SignIn;