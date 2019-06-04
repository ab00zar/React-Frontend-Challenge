import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component{
    render(){
        const { commentData } = this.props

        return(
            <Comment commentData={commentData} />
        )
    }
}

export default Comments