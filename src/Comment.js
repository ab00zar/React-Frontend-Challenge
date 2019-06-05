import React, { Component } from 'react'

const Comment = props => {
    const rows = props.commentData.map((row, index) => {
      return (
        <div key={index} className="comment">
          <button onClick={() => props.removeComment(index)} 
            type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5>{row.name}</h5>
          <p>{row.comment}</p>         
        </div>
      )
    })
  
    return <div>{rows}</div>
}

export default Comment