import React from 'react';
import logo from './logo.svg';
import cat from './cat.gif';
import cat1 from './cat1.gif';
import './App.css';
import Gogo from './Gogo'



class App extends React.Component {
  constructor(){
    super()
    this.state={total:99,cat:cat}
}
  handleClick=(value) => {
    this.setState({
    total:this.state.total+value
   })
  }
  
  

  render(){
    const user = {
      firstName: 'John',
      lastName: 'Bill'
    };
    const sayHi = <h1>Hello, { user.firstName+' '+user.lastName}</h1>;
    
    return (
    
    <div className="App">
      <header className="App-header">
      <button onClick={() => {
          this.setState({cat:cat1})
        }
        }>cat1</button>
        <img src={this.state.cat} className="App-logo" alt="cat" />
        <img src={logo} className="App-logo" alt="logo" />
         <h1>
          {this.state.total}
        </h1>
        <button className="aa" onClick={() => this.handleClick(+1)
        }>+</button>
        <button onClick={() => {
          this.setState({total:this.state.total-1})
        }
        }>-</button>
        
        <h3>
        {sayHi}
        </h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
  }
  
}

export default App;
