import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component {
    constructor() {
        super();
        this.state = {
            id:0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.state.name] = e.state.value;
        this.setState(state);
    }
    render () {
        return (
        <div>
            <Header heading="Add Subscriber" />
<div className="component-body-container"> 
        <button className="custom-btn"> Back </button>
        <form className="subscriber-form">
    </form>
            <label htmlFor="name" className="label-control"> Name: </label><br/>
            <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /> <br/><br/>
            <label htmlFor="phone" className="label-control"> Phone: </label><br/>
            <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler} /> <br/><br/>
            </div>
            <button type="submit" className="custom-btn add-btn"> Add </button>
        </div>
        
        )
            
        
    }
}

export default AddSubscriber;