import React, {Component} from 'react';

class CardProduct extends Component {

    state = {
        order: 4,
        user: 'tia'
    }

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue); //membuat props baru dan dijalankan ketika nilai berubah
    }

    handlePlus = () => {
        this.setState({ //mengubah nilai state order dengan menambah satu
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order); //memberikan nilai state order pada counter
        })
    }

    handleMinus = () => {
        this.setState({ //mengubah nilai state order dengan mengurangi satu
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order); //memberikan nilai state order pada counter
        })
    }


    render() {
        return(
            <div className="card">
            <div className="img-thumb-prod">
                <img alt="poto" src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+Utuh+0405kg.jpg"></img>
            </div>
            <p className="product-title">Daging ayam Berbumbu</p>
            <p className="product-price">Rp 410,000</p>
            <div className="counter">
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text" value={this.state.order} onChange = {this.handleCounterChange}/>
            <button className="plus" onClick={this.handlePlus}>+</button>
        </div>
    </div>

        )
    }
}

export default CardProduct;



