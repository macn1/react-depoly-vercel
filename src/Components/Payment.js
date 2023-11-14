// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import useRazorpay from "react-razorpay";


// const PaymentComponent = () => {
//     const [Razorpay] = useRazorpay();

// const handlePayment = async (params) => {
//     console.log('pranav');
// //   const order = await createOrder(params); //  Create order on your backend

//   const options = {
//     key: "rzp_test_AzPqrmW4ZbTrrW", // Enter the Key ID generated from the Dashboard
//     amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "Acme Corp",
//     description: "Test Transaction",
   
//     order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
//     handler: function (response) {
//       alert(response.razorpay_payment_id);
//       alert(response.razorpay_order_id);
//       alert(response.razorpay_signature);
//     },
//     prefill: {
//       name: "Piyush Garg",
//       email: "youremail@example.com",
//       contact: "9999999999",
//     },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };

//   const rzp1 = new Razorpay(options);

//   rzp1.on("payment.failed", function (response) {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
//     alert(response.error.step);
//     alert(response.error.reason);
//     alert(response.error.metadata.order_id);
//     alert(response.error.metadata.payment_id);
//   });

//   rzp1.open();
// };
  // const [formData, setFormData] = useState({
  //   name: '',
  //   amount: '',
  //   phoneNumber: '',
  // });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send data to a server, process payment, etc.
//     console.log('Form submitted with data:', formData);
//   };

//   const formStyle = {
//     marginTop:'100px',
//     width: '300px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     margin: '10px 0',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   };

//   const buttonStyle = {
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };


//   return (
//     <div>
//         <Navbar/>
//       <h2>Payment Component</h2>
//       <form  style={formStyle}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             style={inputStyle}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={formData.amount}
//             onChange={handleInputChange}
//             style={inputStyle}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             style={inputStyle}
//             required
//           />
//         </div>
//         <div>
//           <button  onClick={handlePayment} style={buttonStyle} >
//             Make Payment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PaymentComponent;

import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import Navbar from './Navbar';

import img from  '../image/Ctribute TO US.png'
import Footer from './Footer';
// import useRazorpay from "react-razorpay";


const PaymentComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    phoneNumber: '',
  });
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
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_AzPqrmW4ZbTrrW",
        key_secret:"0ShOJCHOtk67gLkk4LM3VK9D",
        amount: amount *100,
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
  
  


  const sendEmail = () => {
    console.log("hello");
    emailjs.send(
      'service_k5yjwfu',//service id
      'template_rz09vqg', //template id
      {
        to_name: 'pranavpranab@gmail.com',
        message: 'This is the body of the email',
      },
      'EZ0yThSzlhuStys_f' //user id
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };
  
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
            value={amount}onChange={(e)=>setamount(e.target.value)}
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
          />
          <div className="row"><p className="col-12">Please provide any ONE of the following ID options.</p> <div className="col-6 col-lg-3"><select name="id_type" id="id_type" required="required" className="form-control"><option value="1_pan" selected="selected">PAN</option> <option value="2_aadhaar">Aadhaar</option> <option value="4_passport">Passport</option> <option value="5_elector_id">Elector ID</option> <option value="6_dl">Driving License</option></select></div> <div className="col-6 col-lg-9"><input type="text" name="id_number" id="id_number" placeholder="ID Number*" required="required" className="form-control" /></div></div>
        </div>
        <input type="checkbox"  checked="checked" />
        <label htmlFor="">   I am happy to cover processing fee for sanatha dharma trust</label>
        <div>
          <button   style={buttonStyle}  >
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



