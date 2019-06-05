import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            comment: '',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, comment } = this.state; 

        return (
            <div className="form">
                <form onSubmit={this.onFormSubmit} className="container">
                    <div className="form-title">Post a comment</div>
                    <input 
                        type="text" 
                        name="name" 
                        value={name}
                        placeholder="Your name" 
                        className="form-control"
                        onChange={this.handleChange} />
                    <br/>
                    <input 
                        type="text" 
                        name="comment" 
                        value={comment} 
                        placeholder="Say something ..."
                        className="form-control"
                        onChange={this.handleChange} />
                    <br/>
                    <button type="submit" className="btn mybtn">
                        Post
                    </button>
                </form>
            </div>
        );
    }


}

export default Form;