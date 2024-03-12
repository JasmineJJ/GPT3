import React from 'react';
import './footer_links.css';
function Footer_links({title,text1,text2,text3,text4,text5}) {
  return (
    <div className='footer_links_container'>
      <div className='footer_links_title'>
      <h3>{title}</h3>
      </div>
      <div className='footer_links_texts_container'>
      {text1}<br/>
      {text2}<br/>
      {text3}<br/>
      {text4}<br/>
      {text5}
      </div>
    </div>
  )
}

export default Footer_links;



