import React, {Component} from 'react';
import './Home.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
import Product from '../../containers/Product/Product';
import LifeCycleComp from '../../containers/LifeCycleComp/LifecycleComp';
import BlogPost from '../../containers/BlogPost/BlogPost';
class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
             this.setState({
            showComponent:false
        })
        }, 15000)
       
    }

    render() {
        return (
           <Router>
    <div>
    <div className="navigation">
    <Link to="/"> BlogPost </Link>
    <Link to="/youtube"> Youtube</Link>
    <Link to="/product" > Product</Link>
    <Link to="/lifecycle" > Lifecycle</Link>
    </div>
    
    <Route exact path="/" component={BlogPost}/>
    <Route path="/youtube" component={YoutubeComp}/>
    <Route path="/product" component={Product}/>
    <Route path="/lifecycle" component={LifeCycleComp}/>
    </div>
           </Router>
        )
    }
}

export default Home;