import React, {Component, createContext} from 'react';
import './Home.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubePage from '../pages/YoutubeComp/YoutubePage';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifecycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';


const RootContext = createContext();
const Provider = RootContext.Provider;



class Home extends Component {
    state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        switch(action.type){
            case "PLUS_ORDER":
              return this.setState({
                  totalOrder: this.state.totalOrder + 1
              })
        
            case "MINUS_ORDER":
              let totalOrder = 0;
              if(this.state.totalOrder > 0) {
                totalOrder = this.state.totalOrder - 1
             }
             return this.setState({
                totalOrder: totalOrder
            })
        
            default:
              return this.state;
          }
        }

    render() {
        return (
           <Router>
            <Provider value={
                {state:this.state, 
                dispatch: this.dispatch}
            }>
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
            </Provider>
           </Router>
        )
    }
}

    export {Home, RootContext};