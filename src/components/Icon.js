import React, { Component } from 'react';
import { connect } from 'react-redux';

class Icon extends Component {
    render() {
        return (
            <div>
                <img src={this.props.post.icon_url} />
            </div>
        );
    }
}

export default connect() (Icon);