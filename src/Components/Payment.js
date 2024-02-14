
//re_B1E41hQ1_42pQXt2tRaYCFMvFhYLsmPhP
import React, { useState } from 'react';
import { Resend } from 'resend';
import emailjs from 'emailjs-com'

import Navbar from './Navbar';

import img from  '../image/Ctribute TO US.png'
import Footer from './Footer';


// const resend = new Resend("re_B1E41hQ1_42pQXt2tRaYCFMvFhYLsmPhP");
// import useRazorpay from "react-razorpay";


const PaymentComponent = () => {
  console.log("FUCK OFF");
  console.log(process.env.REACT_APP_APi_key,'aaaaaaaa');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    email:'',
    phoneNumber: '',
  });
  console.log(formData);
  
const setData =(data,state)=>{
  let pokker = formData
  pokker[state] =data
  setFormData(pokker)
  console.log(formData.amount);
  
  
  }
  //2da30d9a-309b-4df6-8681-9fbbeb96bf1b
  

  const [amount, setamount] = useState('');

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center', // Horizontal centering
    alignItems: 'center',     // Vertical centering
    // height: '100vh',         // Adjust to your needs
  };
  const formStyle = {
    marginTop:'100px',
    width: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(formData.amount === ""){
    alert("please enter amount");
    }else{

      console.log(process.env.REACT_APP_APi_key,"WDWD");
      var options = {
        key: process.env.REACT_APP_APi_key,
        key_secret:process.env.REACT_APP_Secret_key,
        amount: formData.amount *100,
        currency:"INR",
        name:"sanathan dharma trust",
        description:"for testing purpose",
        handler: function(response){
          console.log(response);
          alert(response.razorpay_payment_id);
          // alert(response);
        },
        prefill: {
          name:"",
          email:"mvel1620r@gmail.com",
          contact:"9538822342"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      
    }

  }
  
  


  const sendEmail =  (event) => {
    event.preventDefault()
    const config ={
      secureToken :"2da30d9a-309b-4df6-8681-9fbbeb96bf1b",  
      To : 'athulraihan28@gmail.com',
      From : "athulraihan27@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }
    console.log((window.Email));
    if(window.Email){
      window.Email.send(config).then(()=>{alert("email sent successfully")})
    }
      
    }

  
  // In your component, use sendEmail as the onClick handler for your button
  
  


  return (
    <div  style={{marginTop:"80px"}} >
        <Navbar/>
        <div>
        <img src={img} alt=""  style={{width:"100%"}}/>
        </div>
        <div style={{marginTop:"20px",marginBottom:"10px"}} >
        <div style={centerStyle}>
     <h2>Make Payment Here</h2>
    </div>
   
      <form onSubmit={handleSubmit}  style={formStyle} >
        <div >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
          
            style={inputStyle}
            required
            onChange={(e)=>{
              setData(e.target.value,"name")
            }}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            
            style={inputStyle}
            required
            // value={amount} 
            onChange={(e)=>{
              setData(e.target.value,"amount")
            }}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            
            style={inputStyle}
            required
            // value={amount} 
            onChange={(e)=>{
              setData(e.target.value,"email")
            }}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
          
            style={inputStyle}
            required
            onChange={(e)=>{
              setData(e.target.value,"phoneNumber")
            }}
          />
          
          <div className="row"><p className="col-12">Please provide any ONE of the following ID options.</p> <div className="col-6 col-lg-3"><select name="id_type" id="id_type" required="required" className="form-control"><option value="1_pan" selected="selected">PAN</option> <option value="2_aadhaar">Aadhaar</option> <option value="4_passport">Passport</option> <option value="5_elector_id">Elector ID</option> <option value="6_dl">Driving License</option></select></div> <div className="col-6 col-lg-9"><input type="text" name="id_number" id="id_number" placeholder="ID Number*" required="required" className="form-control" /></div></div>
        </div>
        <input type="checkbox"  checked="checked" />
        <label htmlFor="">   I am happy to cover processing fee for sanatha dharma trust</label>
        <div>
          <button   style={buttonStyle}   >
            Make Payment
          </button>
         
        </div>
      </form>
      <button onClick={sendEmail}>send email</button>
      </div>
      <Footer/>
    </div>
  );
};

export default PaymentComponent;


 