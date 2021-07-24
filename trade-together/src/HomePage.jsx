   // src/App.js
   import React, { Component } from 'react';
   import {Link} from 'react-router-dom';
   import Table from 'react-bootstrap/Table'

   
   
   class HomePage extends Component {
     state = {
       stocks: []
     }

     componentDidMount() {
        getStockPrices()
        .then((data) => {
          this.setState({ stocks: data })
        })
        .catch(console.log)
      }
   
     render() {
       return (
         <div className="App">
          <Table striped bordered hover variant responsive='md' style = {{"text-align": 'center', "margin-top":'90px', "margin-right":'90px'  }}>
            <thead>
              <tr style = {{"text-align": 'center'}}>
                <th >#</th>
                <th>Stock Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.stocks.map((stock, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{stock.stockName}</td>
                      <td>{stock.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
         </div>
   
         //<Contacts contacts={this.state.contacts} />
   
       );
     }
   
     //   componentDidMount() {
     //   fetch('http://jsonplaceholder.typicode.com/users')
     //   .then(res => res.json())
     //   .then((data) => {
     //     this.setState({ contacts: data })
     //   })
     //   .catch(console.log)
     // }
   }
   
   const getStockPrices = () =>
    fetch('http://127.0.0.1:9000/stock/all')
    .then((response) => response.json())
   
   export default HomePage;
   