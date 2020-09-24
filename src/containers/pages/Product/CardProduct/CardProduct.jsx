import React, {Component, Fragment} from 'react';
import Counter from '../Counter';

class CardProduct extends Component {
render() {
    return (
        <Fragment>
            <div className="card">
        <div className="img-thumb-prod">
            <img alt="poto" src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+Utuh+0405kg.jpg"></img>
        </div>
        <p className="product-title">Daging ayam Berbumbu</p>
        <p className="product-price">Rp 410,000</p>
        <Counter />
    </div>
        </Fragment>
    )
}

}
export default CardProduct;