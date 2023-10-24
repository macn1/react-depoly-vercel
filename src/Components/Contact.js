import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer';

function Contact() {
	const navigate = useNavigate();
	const [data,setData]= useState({name:'',email:'',message:''})
	console.log(data);

	const handleChange =(e)=>{
		setData({...data,[e.target.name]:e.target.value})
	}
	const handleSubmit =async(e)=>{e.preventDefault()
		
		navigate('/')
		try {
			      const res = await fetch(
			        "https://sheet.best/api/sheets/0e2eff06-b60c-435c-bc09-fa8565742487",
			        {
			          method: "POST",
			          headers: {
			            "Content-Type": "application/json",
			          },
			          body: JSON.stringify(data),
			        }
			      );
			      if (res.ok) {
					
					navigate('/')
					window.location.reload();
			      }
			    } catch (error) {
			      console.log(error);
			    }

	}
  return (
    <div>
		<Navbar/>
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
				<form id="contact" name="contact" method="post" className="text-left" onSubmit={handleSubmit}> 
					<fieldset>
						<div className="row">
							<div className="col-md-4 wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="2s">
								<label for="name">Name<span className="required">*</span></label>
								<input type="text" name="name" id="name" size="30" required value={data.name} onChange={handleChange}/>
							</div>
							<div className="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
								<label for="email">Email<span className="required">*</span></label>
								<input type="text" name="email" id="email" size="30"  required value={data.email} onChange={handleChange} />
							</div>
							<div className="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
								<label for="phone">Phone</label>
								<input type="text" name="phone" id="phone" size="30" value={data.phone} onChange={handleChange}/>
							</div>
						</div>
						<div className="wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="1.5" style={{marginTop: '20px'}}>
							<label for="message">Message<span className="required">*</span></label>
							<textarea name="message" id="message"  value={data.message} onChange={handleChange} required></textarea>
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
{/* <Footer/> */}
    </div>
  )
}

export default Contact
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';



// const Add = () => {
// 	const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     date: new Date().toString(),
//   });

//   const handleChange = (e) =>
//     setData({ ...data, [e.target.name]: e.target.value });
// 	console.log(data);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(
//         "https://sheet.best/api/sheets/0e2eff06-b60c-435c-bc09-fa8565742487",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       if (res.ok) {
// 		navigate('/')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
//       <h1 className="text-muted text-center">Add</h1>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           name="name"
//           value={data.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           name="email"
//           value={data.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="message" className="form-label">
//           Message
//         </label>
//         <textarea
//           name="message"
//           cols="30"
//           rows="3"
//           className="form-control"
//           value={data.message}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="text-center">
//         <button className="btn btn-primary">Add</button>
//       </div>
//     </form>
//   );
// };

// export default Add;