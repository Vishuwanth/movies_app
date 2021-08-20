import React from 'react'

import './index.css'
import logo from './logo.svg'
import search from './search.svg'
import avatar from './Avatar.svg'

function Navbar() {
	return (
		<nav class='nav-container'>
			<div class='left-content'>
				<img src={logo} alt='logo' className='logo' />
				<div class='nav-content'>
					<h1 class='nav-heading'>Home</h1>
					<h1 class='nav-heading'>Popular</h1>
				</div>
			</div>
			<div class='right-content'>
				<img src={search} alt='search' className='search' />
				<img src={avatar} alt='avatar' className='avatar' />
			</div>
		</nav>
	)
}

export default Navbar
