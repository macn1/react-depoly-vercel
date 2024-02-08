import { useState } from "react"

function Form_email_send(){
const [amount,setAmount] = useState(0)
const [email,setEmail] = useState('')
const [name,setName] = useState('')
const [no, setNo] = useState('')
async function sendEmail(){
    const json_send_email = {
        name,
        amount,
        email,
        no
    }
    console.log(json_send_email);



    try {
    const response = await fetch('http://127.0.0.1:8000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            'Accept':'application/json'
          // Add any additional headers here if needed
        },
        body: JSON.stringify(json_send_email), // Replace with your actual data
      });
      console.log('here',response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      
    } catch (error) {
      console.log('err');
    }
  























}
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
    return (
        <div  style={{marginTop:"80px"}} >
        
        <div>
        
        </div>
        <div style={{marginTop:"20px",marginBottom:"10px"}} >
        <div style={centerStyle}>
     <h2>Make Payment Here</h2>
    </div>
   
      <form   style={formStyle} >
        <div >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
          
            style={inputStyle}
            required
            onChange={(e)=>{
              setName(e.target.value)
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
              setAmount(e.target.value)
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
              setEmail(e.target.value)
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
              setNo(e.target.value)
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
     
    </div>
  );
    
}

export default Form_email_send