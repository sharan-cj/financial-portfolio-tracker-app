import React, { Component } from "react";
import './MyStocks.css';
import Axios from 'axios';
import Alphavantage from '../Alphavantage/Alphavantage';


class MyStocks extends Component {
  constructor(){
    super();
    this.state =
    {
      myStocks: [],
      
    };
  };



  componentDidMount() {
    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/myStocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let myStocks = response.data;
      console.log("myStocks", myStocks);
      this.setState({ myStocks });
    });


   
  };

  componentDidUpdate() {
    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/myStocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let myStocks = response.data;
      this.setState({ myStocks });
    });
  };

  stopTrackningHandler = (event) => {
    let myStocksArr = Object.keys(this.state.myStocks);
    let stock = event.target.id;
    if (myStocksArr.length > 1) {
    Axios.delete(
    `https://financial-pf-tracker.firebaseio.com/myStocks/${stock}.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt`
    ).then(response => console.log('deleting...',response));
  }
}



  render() {
    
    return (

      <>
      {Object.keys(this.state.myStocks).map(stock =>{
        return(
        <tr key={stock}>
        <td>{this.state.myStocks[stock].stockSymbol}</td>
        <td>{this.state.myStocks[stock].stockName}</td>
        <td>{this.state.myStocks[stock].numberOfShares}</td>
        <td>{this.state.myStocks[stock].buyPrice}</td>
        <Alphavantage buyDate={this.state.myStocks[stock].buyDate} stockSymbol={this.state.myStocks[stock].stockSymbol} numberOfShares={this.state.myStocks[stock].numberOfShares} buyPrice={this.state.myStocks[stock].buyPrice}/>
        
        <td>
          <button className="StopTrackingBtn" 
          onClick={this.stopTrackningHandler}
          id={stock}
          >Stop Tracking</button>
        </td>
      </tr>)
      })
    }
      </>
    );
  
};
}

export default MyStocks;
