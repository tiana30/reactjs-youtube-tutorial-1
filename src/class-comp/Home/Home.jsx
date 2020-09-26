import React, {Component} from 'react';
import YoutubeComp from '../../function-comp/YoutubeComp';
import './Home.css';
import Product from '../Product';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <hr />
                <h2>Product Component </h2>
                <hr />
                {/* <YoutubeComp />
                <YoutubeComp time="7.12" title="ABCDEFGHIJK" desc="Mau Apa Aja" />
                <YoutubeComp time="10.12" title="LMNOPQRSTUV" desc="Mau Apa Aja" />
                <YoutubeComp time="12.12" title="WXYZABCDEFG" desc="Mau Apa Aja" />
                <YoutubeComp time="20.12" title="HIJKLMNOPQRS" desc="Mau Apa Aja" />
                <YoutubeComp /> */}

                <Product />
            </div>
        )
    }
} 

export default Home;