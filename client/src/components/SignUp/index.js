import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignUp = (props)=> {
	return (

		<div>

			 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    		<span className="navbar-brand">Sign Up</span>
			<span className="text-white">
			{/* <h1>SIGN UP</h1> */}
			
			<form>
				<label>Email</label>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				
				<label>Password</label>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
			
				<button type = 'submit' name = "/auth/signup" onClick = {props.handleSubmit}>Sign Up</button>
			</form></span>
			<Link to = "/" >Go to sign in</Link>
  			</nav>
		</div>
	);
};

export default SignUp;