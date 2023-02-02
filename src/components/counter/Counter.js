import React, { Component } from 'react';
import './counter.css'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    buttonPlus = () => {
        this.setState( state => ({
            number: state.number + 1
        }) )
    }

    buttonMinus = () => {
        this.setState( state => ({
            number: state.number - 1
        }) )
    }

    buttonRandom = () => {
        this.setState( state => ({
            number: state.number = Math.floor(Math.random() * 51)
        }))
    }

    buttonReset = () => {
        this.setState( state => ({
            number: state.number = 0
        }) )
    }

    render() {

        return (

            <div className='counter'>
                <button onClick={this.buttonPlus} >plus</button>
                <div className='counter-number'>
                  {this.state.number}
                </div>

                <button onClick={this.buttonMinus}>minus</button>
                <button onClick={this.buttonRandom}>random</button>
                <button onClick={this.buttonReset} >reset</button>

                
            </div>

        );
    }
}

export default Counter;