import React, {Component} from 'react';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';
import Product from '../../containers/Product/Product';

class Home extends Component {
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

            <hr />
            <p>Product Component </p>
            <Product />
            </div>
        )
    }
}

export default Home;