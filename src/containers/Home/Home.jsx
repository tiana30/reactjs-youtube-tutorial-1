 import React, {Component} from 'react';
// import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
// import Product from '../../containers/Product/Product';
//import LifeCycleComp from '../../containers/LifeCycleComp/LifecycleComp';
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
            <div>
            {/* <p>Youtube Component</p>
            <hr />
            <YoutubeComp time="7.12" title="ABCDEFGHIJK" desc="Mau Apa Aja" />
            <YoutubeComp time="10.12" title="LMNOPQRSTUV" desc="Mau Apa Aja" />
            <YoutubeComp time="12.12" title="WXYZABCDEFG" desc="Mau Apa Aja" />
            <YoutubeComp time="20.12" title="HIJKLMNOPQRS" desc="Mau Apa Aja" />
            <YoutubeComp /> */}
{/* 
            <hr />
            <p>Product Component </p>
            <Product /> */}

            {/* <hr />
            <p>Lifecycle Component</p>
            
            <hr />
            {
                this.state.showComponent ?
                <LifeCycleComp /> : null
            } */}

            <hr />
            <BlogPost />
            </div>
        )
    }
}

export default Home;