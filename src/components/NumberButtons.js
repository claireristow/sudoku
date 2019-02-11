import React, { Component } from 'react';

class NumberButtons extends Component {
    handleClick = (buttonNum) => {
        document.querySelector(`.${this.props.currentBox}`).innerHTML = buttonNum;
    }
    render() {
        return (
            <section className="number-buttons">
                <button onClick={() => this.handleClick("1")}>1</button>
                <button onClick={() => this.handleClick("2")}>2</button>
                <button onClick={() => this.handleClick("3")}>3</button>
                <button onClick={() => this.handleClick("4")}>4</button>
                <button onClick={() => this.handleClick("5")}>5</button>
                <button onClick={() => this.handleClick("6")}>6</button>
                <button onClick={() => this.handleClick("7")}>7</button>
                <button onClick={() => this.handleClick("8")}>8</button>
                <button onClick={() => this.handleClick("9")}>9</button>
            </section>
        );
    }
};

export default NumberButtons;