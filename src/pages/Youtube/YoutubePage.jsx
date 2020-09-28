import React, {Component} from 'react';
import './YoutubeComp.css';
import YoutubeComp from './YoutubeComp';

class YoutubePage extends Component {
    render(){
        return(
            <>
            <YoutubeComp />
                <YoutubeComp time="7.12" title="ABCDEFGHIJK" desc="Mau Apa Aja" />
                <YoutubeComp time="10.12" title="LMNOPQRSTUV" desc="Mau Apa Aja" />
                <YoutubeComp time="12.12" title="WXYZABCDEFG" desc="Mau Apa Aja" />
                <YoutubeComp time="20.12" title="HIJKLMNOPQRS" desc="Mau Apa Aja" />
                <YoutubeComp />
            </>
        )
    }
}

export default YoutubePage;

