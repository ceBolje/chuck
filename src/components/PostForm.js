import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPost, loadPost} from '../actions/postActions';

import 'bootstrap/dist/css/bootstrap.min.css';

class PostForm extends Component {
    prevId = 0;

    handleSubmit = event => {
        event.preventDefault();

        this.loadPost();
    };

    async loadPost() {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await response.json();

        this.props.dispatch(loadPost(data));
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <button className="btn btn-success">Reload Chuck</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect() (PostForm);