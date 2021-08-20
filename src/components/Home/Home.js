import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Home.css'

function Home() {
	return (
		<div className='home-container'>
			<div class='banner-container'>
				<Navbar />
				<div class='banner-content'>
					<h1 class='banner-title'>Super Man</h1>
					<p class='banner-description'>
						Superman is a fictional superhero who first appeared in American
						comic books published by DC Comics.
					</p>
					<button class='banner-button'>Play</button>
				</div>
			</div>
		</div>
	)
}

export default Home
