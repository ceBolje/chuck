//App.js
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';



class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <AllPost/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <PostForm/>
                    </div>
                </div>
                <div className="row">
                        <div className="logo"></div>
                </div>
            </div>
        );
    }
}

export default App;