   // src/App.js
import React, { Component, useState } from 'react';
import Contacts from './components/contacts';
import Card from "./components/Card";
import stonk from "./resources/assets/stonk.jpeg";
import PrivatePage from './components/PrivatePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LoginPage/LoginPage';


const stock = {
  name: "Some stock",
  price: "$69.420",
  image: stonk,
  description:
    "This is a stock. Not chicken stock, not beef stock, not vegetable stalk. Just, stock."
};

export default function App(){

  // state = {
  //   co ntacts: []
  // }
  //render() {
    const [token, setToken] = useState();

    if(!token) {
      return <Login setToken={setToken} />
    }
    return (
      <div className="App">
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
              <Switch>
                <Route path="/privatepage">
                  <PrivatePage />
                </Route>
                <Route path="/">
                  <Card
                    name={stock.name}
                    price={stock.price}
                    image = {stock.stonk}
                    description={stock.description}
                  />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
      </div>

      //<Contacts contacts={this.state.contacts} /
    );
  //}

  //   componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ contacts: data })
  //   })
  //   .catch(console.log)
  // }
}
//export default App;
