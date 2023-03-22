import React from 'react'
import  './Posts.css'

const Posts = ({posts}) => {
  
  
  return (
    <div className='container'>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      <div className='tags'>
      <span>tags:</span>
      {
        posts.tags&& posts.tags.map((element,i)=>{
          return <span>{element}</span>
        })
      }
      
      
      
      
      </div>
    </div>
  )
}

export default Posts
