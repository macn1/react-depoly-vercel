import React from 'react'
import './Privacy.css'
import Navbar from './Navbar'

import privacy from '../image/privacy2.png'
import Footer from './Footer'

function Privacy() {
  return (
  <div>
    <Navbar/>
    <div className='container'>

   
    <div className='one'>
      
    <img src={privacy} alt="" />
    </div > 
    <div className='two'>
      <h5>Privacy Policy</h5>
<p>The hindusevakendram.org/ collects customer information to enhance your participation. This privacy policy is intended to assist you in understanding what information we gather about you when you visit our website ( https://hindusevakendram.org/ ), how we use and share that information, and the safeguards we have in place for that information. This Privacy Statement applies to the information collected at our website. References to this website shall refer generally to all of 
  https://hindusevakendram.org/ websites.</p>
  <h5>Information We Collect</h5>
<p>General Browsing Information- this website gathers navigational information during each visitor’s use of our website. In the process of gathering navigational information, non-personally identifiable information (i.e. domain type, browser version, service provider and IP address) may be collected. The navigational information tells this website about the use of our website by visitors, including the areas of our site that are most visited or the time of a last visit to a page on our site. It also tells us about the technical efficiencies of our website and services (i.e. the time it takes a visitor to connect to our website or download pages). The navigational information helps us better understand a visitor’s experience at this website and improve upon that experience by recognizing and delivering more of the features, services etc.

You may be requested to provide us with your name, email address and hometown during the registration process. When you register your mobile device or use the mobile device to access the website.</p>
<h5>Information We Share With Third Parties</h5>
<p>We use third parties to help us provide services to you such as processing payments, monitoring online activity on this website , conducting surveys, maintaining our database, administering emails, and administering contests. Third parties also provide aggregate, comparative information on the performance of our site to us and a select group.

If, after making a purchase at this website, you choose to participate in a survey or review you will be providing it to a third party whom we use to process the product reviews. Product reviews that comply with the review rules noted may be published on this website, and some may be published through other communication channels, including, but not limited to emails, television and catalogs. Published reviews may identify the author’s review with nickname and location or designate the reviewer. You should be aware that we may disclose specific information about you if necessary to do so by law or based on our good faith belief that it is necessary to enforce or apply our Site’s Terms & Conditions of Use, conform or comply with the law or is necessary to protect this website , the users of our website or others. If this website were ever merged with, acquired by or acquires another business entity, some or all of the personal information collected about you would be shared with this entity, as well as retained by this website .</p>
<h5>Visitors from Outside India</h5>
<p>If you are visiting this website from a location outside of the India, your orders placed through this website will be accepted and fully processed in and shipped from India. All information you provide will be maintained in Web servers and/or internal systems located within India and protected as noted in this privacy policy.</p>
<h5>Links to Other Websites and Services</h5>
<p>For your convenience, our website may contain links to other sites. Links that appear on this website should not necessarily be deemed to imply that we endorse or have any affiliation with the linked websites. this websiteis not responsible for the privacy practices or the content of such websites. We encourage you to review the separate privacy policies of each site you visit.</p>
<h5>Security Statement</h5>
<p>this website takes the following types of security measures: use of technologies and policies such as limited access data-centers, firewall technology. We have designedthis websiteto accept orders only from Web browsers that accept cookies and permit communication through Secure Socket Layer (SSL) technology. SSL is encryption technology that provides security while information is being transmitted over the Internet. While we implement the above security measures on this site, you should be aware that 100% security is not always possible.</p>
    </div>
    </div>
     <Footer/>
  </div>
  )
}

export default Privacy