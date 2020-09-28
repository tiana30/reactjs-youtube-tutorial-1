import React, {Component} from 'react';
import './Home.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubePage from '../Youtube/YoutubePage';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycle/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //                 showComponent: false
        //             })
        // }, 5000)
       
    }

    render(){
        return(
       
            <Router> 
            <div className="container">
            <div className="wrapper">
            <hr />
                <h2> Tutorial React dari Youtube </h2>
                <hr />
            <div className="navigation">
            <Link to="/"> BlogPost </Link>
            <Link to="/youtube"> Youtube</Link>
            <Link to="/product" > Product</Link>
            <Link to="/lifecycle" > Lifecycle</Link>
            </div>

            <Route exact path="/" component={BlogPost}/>
            <Route path="/youtube" component={YoutubePage}/>
            <Route path="/product" component={Product}/>
            <Route path="/lifecycle" component={LifeCycleComp}/> 
            </div> 
            </div>
            </Router>
        )
    }
} 

export default Home;