import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.post.value}</h4>
               <hr />
            </div>
        );
    }
}

export default connect() (Post);