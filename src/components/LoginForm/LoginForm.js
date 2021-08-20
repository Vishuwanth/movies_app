import React from 'react'

import './LoginForm.css'
import movieAppLogo from './logo.svg'

function LoginForm() {
	return (
		<>
			<div className='login-container'>
				<img src={movieAppLogo} alt='logo' className='app-logo' />
				<form className='login-form-container'>
					<h1 class='form-heading'>Sign in</h1>
					<div class='input-container'>
						<label htmlFor='userName'>Username</label>
						<div className='input'>
							<input type='text' id='userName' />
						</div>
					</div>
					<div class='input-container'>
						<label htmlFor='password'>Password</label>
						<div className='input'>
							<input type='password' id='password' />
						</div>
					</div>
					<button type='submit' className='Sign-in-button'>
						Sign in
					</button>
				</form>
			</div>
			<div className='login-mobile-container'>
				<img src={movieAppLogo} alt='logo' className='app-mobile-logo' />
				<form className='login-form-container'>
					<h1 class='form-heading'>Sign in</h1>
					<div class='input-container'>
						<label htmlFor='userName'>Username</label>
						<div className='input'>
							<input type='text' id='userName' />
						</div>
					</div>
					<div class='input-container'>
						<label htmlFor='password'>Password</label>
						<div className='input'>
							<input type='password' id='password' />
						</div>
					</div>
					<button type='submit' className='Sign-in-button'>
						Sign in
					</button>
				</form>
			</div>
		</>
	)
}

export default LoginForm
