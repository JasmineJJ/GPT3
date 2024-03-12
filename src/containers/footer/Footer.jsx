import React from 'react';
import './footer.css';
import Footer_links from '../../components/footer_links/Footer_links';
import imgUrl from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='footer_container'>
     <div className='footer_sectionUp'>
     <h1 class="gradient__text">Do you want to step in to the future before others</h1>
     <button>Request Early Access</button>
     </div>
     <div className='footer_sectionDown'>
     <div className='footer_sectionDown1'>
     <img src={imgUrl}/>
     <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
     </p>
     </div>
     <div className='footer_sectionDown2'>
     <Footer_links title={'Links'} text1={'Overons'} text2={'Social Media'} text3={'Counters'} text4={'Contact'} />
     <Footer_links title={'Company'} text1={'Terms & Conditions'} text2={'Privacy Policy'} text3={'Contact'} />
     <Footer_links  title={'Get in touch'} text1={'Crechterwoord K12 182 DK Alknjkcb'} text2={'085-132567'} text3={'info@payme.net'}  />
     </div>
    
     </div>
    </div>
  )
}

export default Footer;
