import React, { Component } from 'react'

const Comment = props => {
    const rows = props.commentData.map((row, index) => {
      return (
        <div key={index}>
          <h5>{row.name}</h5>
          <p>{row.comment}</p>
        </div>
      )
    })
  
    return <div>{rows}</div>
}

export default Comment