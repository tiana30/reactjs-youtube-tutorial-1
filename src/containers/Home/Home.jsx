import React, {Component} from 'react';
import YoutubeComp from '../../components/YoutubeComp/YoutubeComp';

class Home extends Component {
    render() {
        return (
            <><p>Youtube Component</p>
            <hr />
            <YoutubeComp time="7.12" title="ABCDEFGHIJK" desc="Mau Apa Aja" />
            <YoutubeComp time="10.12" title="LMNOPQRSTUV" desc="Mau Apa Aja" />
            <YoutubeComp time="12.12" title="WXYZABCDEFG" desc="Mau Apa Aja" />
            <YoutubeComp time="20.12" title="HIJKLMNOPQRS" desc="Mau Apa Aja" />
            <YoutubeComp />

            </>
        )
    }
}

export default Home;