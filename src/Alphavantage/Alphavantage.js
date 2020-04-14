import React, { Component } from 'react';
import Axios from 'axios';


class Alphavantage extends Component {
    state = { 
        stockSymbol: this.props.stockSymbol,
        buyDate: this.props.buyDate,
        buyPrice: this.props.buyPrice,
        numberOfShares: this.props.numberOfShares,
        profitValue: 0,
        currentStockPrice: 0,

     }
    
    componentDidMount(){
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&apikey=4ZLKTGBI0D27R514`)
        .then(response => {
            let currentStockPrice = response.data['Time Series (Daily)'][this.state.buyDate]['4. close'];
            this.setState({currentStockPrice: currentStockPrice});
        })
        .then(()=>{
            let profitValue = parseInt((this.state.currentStockPrice - this.state.buyPrice) * this.state.numberOfShares);
            this.setState({profitValue:profitValue});
        })
        
        
    }

    
    render() { 
        
        return ( 
            <>
            <td>{this.state.currentStockPrice}</td>
            <td>{this.state.profitValue}</td>
            </>
         );
    }
}
 
export default Alphavantage;