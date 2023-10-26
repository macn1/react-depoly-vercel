import React from 'react'

function Section() {
  return (
    <>
   
{/* < section id="hero" className="hero">
<div className="container">
	<div className="row">
		<div className="col-md-5">
			<div className="herotext">
				<h1 className="wow bounceInDown" data-wow-duration="1s" data-wow-delay="0.1s">Run<span className="lighter">CHARITY</span></h1>
				<p className="lead wow zoomIn" data-wow-duration="2s" data-wow-delay="0.5s">
					When we give cheerfully and accept gratefully, everyone is blessed.
				</p>
				<p>
					<a href="/" className="btn btn-default btn-lg wow fadeInLeft" role="button"> View Gallery </a> &nbsp; <a href="/" className="btn btn-default btn-lg wow fadeInRight" role="button">Find a Cause</a>
				</p>
			</div>
		</div>
		<div className="col-md-7">
		</div>
	</div>
</div>
</section> */}

<section id="about" className="parallax section" style={{backgroundImage:`url`}}>
<div className="wrapsection">
	<div className="parallax-overlay" style={{backgroundColor: '#FF5733'}}></div>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
		
				<div className="maintitle">
					<h3 className="section-title"><strong>Welcome <span className="lighter"></span></strong> to sanathana dharma charitable trust</h3>
					<p className="lead">
						

					</p>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="service-box wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
					<img src="http://themepush.com/demo/runcharity/assets/img/dummy.jpg" alt=""/>
					<h3> About<br/>sanathana Dharmaa</h3>
					<div className="text-left">
						<p>
						people  in India are facing an existential crisis, especially in Kerala. Keeping this in mind, a few well-meaning Hindu activists decided to take action to help the ailing all community. We launched an initiative to protect our people, traditions,and way of life. This movement, which aims to serve and protect all people
						</p>
					
						<p className="text-center">
							<button type="button" className="btn btn-info btn-md"><a href="/">Learn More</a></button>
						</p>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.1s">
					<span className="glyphicon glyphicon-stats"></span>
					<h3>87464</h3>
					<p>
						Persons fed
					</p>
					{/* <button type="button" className="btn btn-info btn-md"><a href="/">Learn More</a></button> */}
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.2s">
					<span className="glyphicon glyphicon-tree-deciduous"></span>
					<h3>8000</h3>
					<p>
						Hindus Helped
					</p>
					{/* <button type="button" className="btn btn-info btn-md"><a href="/">Learn More</a></button> */}
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.3s">
					<span className="glyphicon glyphicon-heart"></span>
					<h3>6457</h3>
					<p>
					Patients helped
					</p>
					{/* <button type="button" className="btn btn-info btn-md"><a href="/">Learn More</a></button> */}
				</div>
			</div>
			<div className="col-md-4 col-sm-6">
				<div className="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.4s">
					<span className="glyphicon glyphicon-usd"></span>
					<h3>7452</h3>
					<p>
					Legal Help
					</p>
					{/* <button type="button" className="btn btn-info btn-md"><a href="/">Learn More</a></button> */}
				</div>
			</div>
		</div>
	</div>
</div>
</section>    
    </>
  )
}

export default Section
