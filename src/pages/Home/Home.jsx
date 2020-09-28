import React, {Component, createContext} from 'react'; //1. import CreateContext
import './Home.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import YoutubePage from '../Youtube/YoutubePage';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycle/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';
import DetailPost from '../BlogPost/DetailPost/DetailPost';

const AppContext = createContext(); //2. buat context baru
const Provider = AppContext.Provider; //3. buat provider baru

class Home extends Component {
    // state = {
    //     showComponent: true
    // }

    //componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //                 showComponent: false
        //             })
        // }, 5000)
       
    //}
    //4. buat state
    state = {
        totalOrder:0
    }
    
    //5. buat method dispatch 
    dispatch = (action) => {
    switch(action.type){ //6. buat action sesuai type
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

    render(){
        return(
            <Router>
            {/* 7. membuat provider(parent) dan menentukan props value */}
            <Provider value= {
            {state:this.state,
            dispatch: this.dispatch}
            }
            >

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
            <Route exact path="/detail-post/:id" component={DetailPost}/>
            <Route path="/product" component={Product}/>
            <Route path="/lifecycle" component={LifeCycleComp}/> 
            </div> 
            </div>
            </Provider>
            </Router>
        )
    }
} 

export {Home, AppContext};