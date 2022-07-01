import React, { Component } from "react";
import './App.css';

class App extends Component {
  
  state = {
disabled: true
  }

  handlechange=(e) => {
    if((e.target.value.length) <=11 && (e.target.value.length) >=1) {
      this.setState({
        disabled: false
      });
    }
    else {
      this.setState({
        disabled: true
      });
    }
  }
  render() {
    return(
      <div className="container">
        <h2>STOP A CHECK</h2>
        <form>
          <input type="number" placeholder="Check Number" onChange={this.handlechange}/>
          <br/>
          <button disabled={this.state.disabled} >SUBMIT</button>
        </form>
      </div>
    );
  }
}
export default App;
