import React, {Component , Fragment} from 'react';
import CardProduct from './CardProduct';
import './Product.css';
import {connect} from 'react-redux'; //1. inisialisasi

class Product extends Component {
    render(){
        return(
            <Fragment>
            <p className="section"> Product Page</p>
              
            <div className="header">
            <div className="logo">
                <img alt="logo" src="https://www.etanee.id/homescreenNew/android-icon-192x192.png"></img>
            </div>
            <div className="troley">
                <img alt="produk" src="data:image/svg+xml;base64,PHN2ZyBpZD0iRmxhdCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00ODYuMTg3IDExNC45MjhhOCA4IDAgMCAwIC02LjE4Ny0yLjkyOGgtMzM2YTggOCAwIDAgMCAwIDE2aDY1LjM4bDkuMTQzIDQ4aC01MC41MjNhOCA4IDAgMCAwIDAgMTZoNTMuNTcxbDkuMTQzIDQ4aC0zOC43MTRhOCA4IDAgMCAwIDAgMTZoNDEuNzYxbDUuNjkzIDI5Ljg4NS0zMS45ODYgMi4xMzNhOCA4IDAgMCAwIC41MjQgMTUuOTgycS4yNjggMCAuNTQtLjAxOGwyNDAtMTZhOCA4IDAgMCAwIDcuMzEzLTYuNDEzbDMyLTE2MGE4LjAwNiA4LjAwNiAwIDAgMCAtMS42NTgtNi42NDF6bS0yNS41NDYgNjEuMDcyaC0zOS42ODNsOS42LTQ4aDM5LjY4M3ptLTEyLjggNjRoLTM5LjY4M2w5LjYtNDhoMzkuNjgyem0tOTUuNjQxIDM4LjM2OSAyLjI0LTIyLjM2OWgzNC4ybC00LjA0IDIwLjIwOXptLTQ4Ljc3NSAzLjI1MS0yLjQzNi0yNS42MmgzNy4zNzFsLTIuMzIgMjMuMmMtLjAwOC4wODItLjAwNi4xNjItLjAxMi4yNDN6bTExMC44MTYtMTUzLjYyLTkuNiA0OGgtNDIuMmw0LjgtNDh6bS02Ny44ODEgNDhoLTUyLjk5MWwtNC41NjktNDhoNjIuMzZ6bS0xLjYgMTYtNC44IDQ4aC00MC41bC00LjU3Mi00OHptMTEuMjggNDggNC44LTQ4aDQwLjZsLTkuNiA0OHptLTEzMC4zNzMtMTEyaDQ3LjA1OWw0LjU3MSA0OGgtNDIuNDg3em0xMi4xOTEgNjRoNDAuOTYzbDQuNTcxIDQ4aC0zNi4zOTJ6bTEyLjE5IDY0aDM0Ljg2OGwyLjU0MiAyNi42ODUtMzEuOTIyIDIuMTI4em0xNTEuMDg5IDE5LjEwNiAzLjgyMS0xOS4xMDZoMzkuNjgzbC0zLjI4NSAxNi40MjV6IiBmaWxsPSIjZTllZWYyIi8+PGNpcmNsZSBjeD0iMTkyIiBjeT0iNDI0IiBmaWxsPSIjNGY1NjU5IiByPSI0OCIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjQyNCIgZmlsbD0iI2U5ZWVmMiIgcj0iMTYiLz48Y2lyY2xlIGN4PSI0NDAiIGN5PSI0MjQiIGZpbGw9IiM0ZjU2NTkiIHI9IjQ4Ii8+PGNpcmNsZSBjeD0iNDQwIiBjeT0iNDI0IiBmaWxsPSIjZTllZWYyIiByPSIxNiIvPjxwYXRoIGQ9Im0yMDggMzQ0di00OGwtNjguNzE5LTI0NC4zMzJhMTYgMTYgMCAwIDAgLTE1LjQwMi0xMS42NjhoLTgzLjg3OWExNiAxNiAwIDAgMCAtMTYgMTYgMTYgMTYgMCAwIDAgMTYgMTZoNTkuOTMxYTE2IDE2IDAgMCAxIDE1LjM4NCAxMS42bDYwLjY4NSAyMTIuNHY4MGgyOTZhMTYgMTYgMCAwIDAgMTYtMTYgMTYgMTYgMCAwIDAgLTE2LTE2eiIgZmlsbD0iI2RhZGNkZSIvPjxwYXRoIGQ9Im04OCA0MHYzMmgtNDhhMTYgMTYgMCAwIDEgMC0zMnoiIGZpbGw9IiNlYjQyM2YiLz48L3N2Zz4=" />    
                <div className="count">{this.props.order}</div>  {/*4.menampilkan nilai dari props */}
            </div>
            </div>
            <CardProduct/>
            </Fragment>
        )
    }

}

const StateProps = (state) => { //3. membuat objek baru dan diberi nilai global totalOrder
    return {
        order: state.totalOrder
    }
}

export default connect(StateProps)(Product); //2. inisialisasi connect untuk menampilkan state global