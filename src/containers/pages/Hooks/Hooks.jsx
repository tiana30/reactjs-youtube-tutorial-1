import React, {Component, useState} from 'react';
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

    return(
        <div>
            <p> Nilai Saat Ini: {count}</p>
            <button className="btn" onClick={() => setCount(count+1)}>Klik</button>
        </div>
    )
}

export default Hooks;