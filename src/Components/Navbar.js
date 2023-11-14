import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import logo from '../image/Screenshot 2023-10-22 201737.png'
import { Link } from "react-router-dom";

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
		{/* <a href="/">Home</a> */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* <Link to="/mission">About</Link> */}
			
		<a href="#about">About</a>
		</li>
       
		<li>
		<Link to ="/gallery">Gallery</Link>
		</li>
		<li>
		<a href="#faq">Our Mission</a>
		</li>
		
		<li>
		
		<Link to="/payment">Contribute</Link>
		</li>
		<li>
		<Link to="/contact">Contact</Link>
		
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
