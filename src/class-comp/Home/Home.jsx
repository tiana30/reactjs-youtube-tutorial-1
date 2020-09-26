import React, {Component} from 'react';
import './Home.css';
//import YoutubeComp from '../../function-comp/YoutubeComp';
//import Product from '../Product';
//import LifeCycleComp from '../LifeCycle/LifeCycleComp';
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
            <div className="container">
                <hr />
                <h2> Blog Post Component </h2>
                <hr />
                {/* <YoutubeComp />
                <YoutubeComp time="7.12" title="ABCDEFGHIJK" desc="Mau Apa Aja" />
                <YoutubeComp time="10.12" title="LMNOPQRSTUV" desc="Mau Apa Aja" />
                <YoutubeComp time="12.12" title="WXYZABCDEFG" desc="Mau Apa Aja" />
                <YoutubeComp time="20.12" title="HIJKLMNOPQRS" desc="Mau Apa Aja" />
                <YoutubeComp /> */}

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