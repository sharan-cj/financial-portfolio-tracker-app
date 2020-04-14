import React, { Component } from "react";
import MyStocks from "../MyStocks/MyStocks";
import AddStocks from "../AddStocks/AddStocks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h2>Finance Portfolio Tracker</h2>
        </div>

        <div className="MyStocks">
          <h2>My Stocks</h2>
          <table className="MyStocksTable">
            <thead>
            <tr>
              <th>Stock symbol</th>
              <th>Stock name</th>
              <th>No. of shares</th>
              <th>Buy price</th>
              <th>Current price</th>
              <th>Profit/Loss</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <MyStocks />
            </tbody>
          </table>
        </div>
        <hr></hr>
        <div>
          <AddStocks />
        </div>
      </div>
    );
  }
}

export default App;
