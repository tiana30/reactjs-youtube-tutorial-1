import React, {Component, useState, useEffect} from 'react';
import './Hooks.css';

// class Hooks extends Component {
//     state={
//         count:0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count+1
//         })
//     }
//componentDidMount(){
    //   document.title = `Title Change: ${this.state.count}`
    //}
    //componentDidUpdate(){
        //   document.title = `Title Change: ${this.state.count}`
        //}
    //ComponentWillUnmount(){
    //   document.title = `React Js `
    //}
//     render(){
//         return(
//             <div>
//                 <p> Nilai Saat Ini: {this.state.count}</p>
//                 <button className="btn" onClick={this.onUpdate}>Klik</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title= `Title Change: ${count}`;
        return () => {
            document.title = `React Js `;
        }
    })

    return(
        <div>
            <p className="section">Example Hooks</p>
            <p className="desc"> Nilai Saat Ini: {count}</p>
            <button className="btn" onClick={() => setCount(count+1)}>Klik</button>
        </div>
    )
}

export default Hooks;