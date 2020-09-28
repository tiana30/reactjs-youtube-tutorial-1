import React, {Component} from 'react';
import './Home.css';
//import YoutubePage from '../../pages/Youtube/YoutubePage';
//import Product from '../../pages/Product/Product';
//import LifeCycleComp from '../../pages/LifeCycle/LifeCycleComp';
import BlogPost from '../../pages/BlogPost/BlogPost';

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
            <div className="container">
                <hr />
                <h2> Blog Post Component </h2>
                <hr />
                
                {/* <Product /> */}

                {/* {
                    this.state.showComponent ?
                    <LifeCycleComp /> : null
                } */}

                <BlogPost />
                
            </div>
        )
    }
} 

export default Home;