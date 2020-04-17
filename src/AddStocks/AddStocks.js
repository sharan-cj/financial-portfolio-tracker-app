import React, { Component } from "react";
import "./AddStocks.css";
import Modal from "../Modal/Modal";
import Axios from "axios";

class AddStocks extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      modal: false,
      myStocks: []
    };
    
  }
  componentDidMount() {
    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/stocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let stocks = response.data;
      console.log("stocks", stocks);
      this.setState({ stocks });
    });

    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/myStocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let myStocks = response.data;
    //   console.log("myStocks", myStocks);
      this.setState({ myStocks });
    });
  }

  componentDidUpdate() {
    Axios.get(
      "https://financial-pf-tracker.firebaseio.com/myStocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt"
    ).then(response => {
      let myStocks = response.data;
      // console.log("myStocks", myStocks);
      this.setState({ myStocks });
    });
  }

  addStocksBtn = event => {
    this.setState({
      modal: true,
      stockName: event.target.name,
      stockSymbol: event.target.id
    });
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  stockFormCancelBtn = () => {
    this.setState({ modal: false });
    this.stockFormReset();
  };

  addStockHandler = () => {
    let myStocksArr = Object.keys(this.state.myStocks);
    var warning;
    if(myStocksArr.length < 5){
        myStocksArr.forEach(stock => {
            
            let selectedStockName = this.state.myStocks[stock].stockName;
            if (this.state.stockName === selectedStockName) {
              this.setState({ warningText: "The selected stock is already added !" });
              warning = true;
              this.stockFormReset();
            } else if (selectedStockName !== this.state.stockName) {
              warning = false;
              this.setState({ warningText: "" });
            } else {
              this.stockFormCancelBtn();
            }
        
        
          });
          if (warning === false) {
            this.setState({ warningText: "" });
            this.postData();
            this.stockFormCancelBtn();
            console.log("posting...");
          } else {
            this.setState({ warningText: "The selected stock is already added !" });
          }

    } 
    else {
        this.setState({ warningText: "Can't add more than five stocks !"});
    }
    
  };

  stockFormReset = () => {
    this.setState({
      numberOfShares: null,
      buyPrice: null,
      buyDate: null,
      warningText: ""
    });
  };

  postData = () => {
    Axios.post(
      "https://financial-pf-tracker.firebaseio.com/myStocks.json?auth=7S5VnVzMGMBN8wudel6jnQp2SOblrVG89nzJucyt",
      {
        stockName: this.state.stockName,
        stockSymbol: this.state.stockSymbol,
        numberOfShares: this.state.numberOfShares,
        buyPrice: this.state.buyPrice,
        buyDate: this.state.buyDate
      }
    ).then(response => console.log(response));
  };

  render() {
    let modalContent = (
      <>
        <button id="xcancel" onClick={this.stockFormCancelBtn}>
          <img src={require("../images/redcross.png")} alt='&#10008;'/> 
          
        </button>
        <div className="AddStockForm">
          <h2>
            Add <span>{this.state.stockName}</span> to my stocks
          </h2>
          <div>
            <h4>Company Name : </h4>
            <span>{this.state.stockName}</span>
          </div>
          <div>
            <h4>
              No. of Shares : <span>{this.state.numberOfShares}</span>
            </h4>
            <input
              type="number"
              placeholder="No. of Shares"
              name="numberOfShares"
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <h4>
              Buy Price : <span>{this.state.buyPrice}</span>
            </h4>
            <input
              type="number"
              placeholder="Buying price"
              name="buyPrice"
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <h4>
              Buy Date : <span>{this.state.buyDate}</span>
            </h4>

            <span id="warning">{this.state.warningText}</span>

            <input type="date" name="buyDate" onChange={this.inputHandler} />
          </div>

          <button className="AddStockFormBtn" onClick={this.addStockHandler}>
            Add
          </button>
        </div>
      </>
    );

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
                  <button
                    className="StockButton"
                    onClick={this.addStocksBtn}
                    name={ this.state.stocks[stock].name}
                    id={this.state.stocks[stock].symbol} 
                  >
                    {this.state.stocks[stock].symbol}
                  </button>
                  <span>{this.state.stocks[stock].name}</span>
                </li>
              );
            })}
          </ul>
          {this.state.modal ? (
            <Modal content={modalContent} test="working" />
          ) : null}
        </div>
      </>
    );
  }
}

export default AddStocks;
