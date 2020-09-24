import React, {Component} from 'react';
import './Home.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubePage from '../pages/YoutubeComp/YoutubePage';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifecycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import {GlobalProvider} from '../../context/context';


class Home extends Component {
     render() {
        return (
           <Router>
            
            <div className="wrapper">
            <div className="navigation">
            <Link to="/"> BlogPost </Link>
            <Link to="/youtube"> Youtube</Link>
            <Link to="/product" > Product</Link>
            <Link to="/lifecycle" > Lifecycle</Link>
            </div>

            <Route exact path="/" component={BlogPost}/>
            <Route path="/detail-post/:id" component={DetailPost} />
            <Route path="/youtube" component={YoutubePage} />
            <Route path="/product" component={Product}/>
            <Route path="/lifecycle" component={LifeCycleComp}/>
            </div>
           </Router>
        )
    }
}

export default GlobalProvider(Home);