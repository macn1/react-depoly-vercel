import React from 'react'

function Contact() {
  return (
    <div>
      <section id="contactarea" className="parallax section" >
<div className="wrapsection">
	<div className="parallax-overlay" style={{backgroundColor: '#FF5733'}}></div>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="maintitle">
					<h3 className="section-title">Get in Touch</h3>
					<p className="lead">
						If you have questions about our events, don't hesitate to send us your message. This is a real working contact form, test it!
					</p>
				</div>
				<form id="contact" name="contact" method="post" className="text-left">
					<fieldset>
						<div className="row">
							<div className="col-md-4 wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="2s">
								<label for="name">Name<span className="required">*</span></label>
								<input type="text" name="name" id="name" size="30" value="" required/>
							</div>
							<div className="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
								<label for="email">Email<span className="required">*</span></label>
								<input type="text" name="email" id="email" size="30" value="" required/>
							</div>
							<div className="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
								<label for="phone">Phone</label>
								<input type="text" name="phone" id="phone" size="30" value=""/>
							</div>
						</div>
						<div className="wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="1.5" style={{marginTop: '20px'}}>
							<label for="message">Message<span className="required">*</span></label>
							<textarea name="message" id="message" required></textarea>
						</div>
						<div className="wow fadeIn animated" data-wow-delay="0.3" data-wow-duration="1.5s">
							<input id="submit" type="submit" name="submit" value="Send"/>
						</div>
					</fieldset>
				</form>
				<div id="success">		
					<p className="contactalert">
						Your message was sent succssfully! I will be in touch as soon as I can.
					</p>			
				</div>
				<div id="error">			
					<p className="contactalert">
						 Something went wrong, try refreshing and submitting the form again.
					</p>			
				</div>
			</div>
		</div>
	</div>
</div>
</section>
    </div>
  )
}

export default Contact
