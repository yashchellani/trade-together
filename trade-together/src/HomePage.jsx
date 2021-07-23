   // src/App.js
   import React, { Component } from 'react';
   import {Link} from 'react-router-dom';
   
   
   class App extends Component {
     
   
     
     state = {
       contacts: []
     }
   
     render() {
       return (
         <div className="App">
           <header className="App-header">
           <div onClick={() => getStockPrices()}>
            HELLO
            </div>
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
   
   const getStockPrices = () =>
    fetch('http://127.0.0.1:9000/stock/all')
    .then((response) => console.log(response.json()))
   
   export default App;
   