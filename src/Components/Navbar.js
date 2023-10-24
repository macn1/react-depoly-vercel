import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import logo from '../image/Screenshot 2023-10-22 201737.png'

function Navbar() {
  return (
    <div>
        < header id="header" className="navbar navbar-inverse navbar-fixed-top" role="banner">
<div className="container">
	<div className="navbar-header">
		<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
		<span className="sr-only">Toggle navigation</span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		</button>
	
		<a href="#hero" className="navbar-brand">सनातन धर्म<span className="lighter">   TRUST</span></a>
	</div>
    {/* <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{width:'200px',}} />
      </div> */}
	<nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
        
	<ul className="nav navbar-nav">
		<li>
		<a href="/">Home</a>
		</li>
		<li>
		<a href="#about">About</a>
		</li>
       
		<li>
		<a href="#gallery">Gallery</a>
		</li>
		<li>
		<a href="#faq">Our Mission</a>
		</li>
		
		<li>
		<a href="/payment">Contribute</a>
		</li>
		<li>
		<a href="/contact">Contact</a>
		</li>
	</ul>
	</nav>
</div>
</header>
{/* <Carousel/> */}
    </div>
  )
}

export default Navbar
