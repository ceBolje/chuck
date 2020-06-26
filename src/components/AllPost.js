import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Icon from './Icon';
import {loadPost} from "../actions/postActions";

class AllPost extends Component {

    async componentWillMount() {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await response.json();
        //console.log(data);
        this.props.dispatch(loadPost(data));
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center">{}
                        <div className="float-left">#ID: {this.props.posts.length > 0 ? this.props.posts[0].id : 0}</div>
                        <div className="float-right">Count:{this.props.posts.length}</div>
                    </h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {this.props.posts.map(post => (
                            <div key={post.id} >
                                <Icon  post={post} />
                                <br/>
                                <Post post={post} />
                            </div>
                        ))}
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);