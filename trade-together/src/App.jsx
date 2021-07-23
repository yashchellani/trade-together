   // src/App.js
import React, { Component } from 'react';
import Contacts from './components/contacts';
import Card from "./components/Card";
import stonk from "./resources/assets/stonk.jpeg";
import {Link} from 'react-router-dom';


const stock = {
  name: "Some stock",
  price: "$69.420",
  image: stonk,
  description:
    "This is a stock. Not chicken stock, not beef stock, not vegetable stalk. Just, stock."
}

class App extends Component {
  

  
  state = {
    contacts: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card
            name={stock.name}
            price={stock.price}
            image = {stock.stonk}
            description={stock.description}
          />
        </header>
        <Link to="/HomePage"><button>
              Go to Home Page 
            </button>
            </Link>
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

const getStockPrices = () => {
  console.log(fetch('http://127.0.0.1:9000/stock/all'))
}

export default App;
