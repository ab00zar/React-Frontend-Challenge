import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component{
    render(){
        const { commentData, removeComment } = this.props

        return(
            <Comment commentData={commentData} removeComment={removeComment} />
        )
    }
}

export default Comments