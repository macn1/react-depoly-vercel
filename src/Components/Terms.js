import React from 'react'
import Navbar from './Navbar'
import terms from '../image/erms .png'
import Footer from './Footer'

function Terms() {
  return (
    <div>
        <Navbar/>
        <div className='container'> 
        <div className='one'> 
        <img src={terms} alt="" />
        </div>
        <div className='two'>
          <h6>Use of the website is provided by Hindusevakendram subject to the following Terms and Conditions:</h6>
            <p> <br />By using this website you are accepting the terms and conditions. They are effective from your first <br /> visit.Hindusevakendram may change these terms and conditions from time to time; your use of the website indicates your acceptance of the terms and conditions at the time of use. <br/>Hindusevakendram reserves the right to  change the content of the website at any time. <br />Hindusevakendram has taken every precaution to make sure the content of this website is accurate and legally correct at the time of appearance. If you believe the content of any of our pages is inaccurate please contact us,mail at mail@hindusevakendram.org
           <p> <br /> Hindusevakendram accepts no liability for loss or damage, including personal injury, resulting from use of this website. Hindusevakendram makes all reasonable efforts to make sure malware or viruses are not transmitted from this website, however this cannot be guaranteed. We recommend that you safeguard your IT equipment before downloading information and files. Hindusevakendram will not accept liability for damage caused by viruses.
           </p> <br />When we provide links to other websites it does not mean that we approve of or endorse the views and information contained in the website. We accept no liability for damage caused by malware or viruses on websites that we have linked to <br /> <p>.Please request permission before using our logos or other branded material. We reserve the right to require our logo to be removed from websites or printed material if it is not in our interests.</p> <p>Our downloadable documents, brochures and web pages are provided for your use. You may copy or print the information for private purpose including teaching. You may not amend the content or use it for commercial purposes without Hindusevakendram written consent.Images and photos used on this website are the property of Hindusevakendram or other Copyright owners. The may not be reproduced or used without Hindusevakendram or the copyright owner’s written consent </p><p></p>.If there is any conflict between these terms and conditions and rules or specific terms of use relating to specific material then the latter shall prevail.</p>

        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Terms