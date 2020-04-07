import React, { Component } from "react";
import "./AddStocks.css";
import Modal from '../Modal/Modal';

import fire from "../Firebase/firebase";
import Axios from "axios";

class AddStocks extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      modal : true
    };
  }
  componentDidMount() {
    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/stocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let stocks = response.data;
      console.log(stocks);
      this.setState({ stocks });
    });
  }

  addStocksBtn = () => {
      this.setState({modal : false})
  }

  render() {
    let stockArr = Object.keys(this.state.stocks);
    return (
      <>
        <div className="add-stocks-title">
          <h2>Add stocks to my stocks</h2>
        </div>
        <div className="AddStocksTitle">
          <ul>
            {stockArr.map(stock => {
              return (
                <li key={stock}>
                  <button className="StockButton" onClick={this.addStocksBtn}>
                    {this.state.stocks[stock].symbol}
                  </button>
                  <span>{this.state.stocks[stock].name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Modal companyName='microsoft'/>
      </>
    );
  }
}

export default AddStocks;
