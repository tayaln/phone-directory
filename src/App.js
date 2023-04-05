import React, { Component } from 'react';
import Header from "./Header";
import './App.css';



class App extends Component {
  
  deleteHandler() {
    alert("Delete clicked");
  }

  render() {
    
    return (
      <div>
        <Header heading="Phone Directry" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
            <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler}>Delete</button>
                </span>
          {/* <button className="custom-btn delete-btn">Delete</button> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
