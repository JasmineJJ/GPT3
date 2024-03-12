import React from 'react'
import './Article.css';

const Article = ({blog_img,h6Text,h2Text,h6Text2}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image" >
        <img src={blog_img} alt="blog_image"/>
      </div>
     <div  className="gpt3__blog-container_article-content">
     <div>
     <h6>{h6Text}</h6>
     <h2>{h2Text}</h2>
     </div>
     <h6>{h6Text2}</h6>
     </div>
    </div>
  )
}

export default Article
