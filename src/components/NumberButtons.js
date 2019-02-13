import React, { Component } from 'react';

class NumberButtons extends Component {

    addNumber = (buttonNum) => {
        const currentElementHTML = document.querySelector(`.${this.props.currentElement}`);
        if (this.props.currentElement && !currentElementHTML.hasAttribute('readonly')) {
            this.props.newInput(buttonNum);
            currentElementHTML.value = buttonNum;
        }
    }  

    focusElement = () => {
        document.querySelector(`.${this.props.currentElement}`).focus();
    }
    
    // event listener for user's keystrokes (instead of using number buttons)
    componentDidMount() {
        document.addEventListener("keyup", (e) => {
            const currentElementClasses = document.querySelector(`.${this.props.currentElement}`).classList;
            if (e.keyCode === 38) {
                // arrow up
                if (!currentElementClasses.contains('row-1')) {
                    const newElement = parseInt(this.props.currentElement.slice(8)) - 9;
                    this.props.updateCurrentElement(`element-${newElement}`);
                    this.focusElement();
                }
            } else if (e.keyCode === 37) {
                // arrow left
                if (!currentElementClasses.contains('col-1')) {
                    const newElement = parseInt(this.props.currentElement.slice(8)) - 1;
                    this.props.updateCurrentElement(`element-${newElement}`);
                    this.focusElement();
                }
            } else if (e.keyCode === 39) {
                // arrow right
                if (!currentElementClasses.contains('col-9')) {
                    const newElement = parseInt(this.props.currentElement.slice(8)) + 1;
                    this.props.updateCurrentElement(`element-${newElement}`);
                    this.focusElement();
                }
            } else {
                // arrow down
                if (!currentElementClasses.contains('row-9')) {
                    const newElement = parseInt(this.props.currentElement.slice(8)) + 9;
                    this.props.updateCurrentElement(`element-${newElement}`);
                    this.focusElement();
                }
            }
        })
        // prevent default arrow up and down functionality on inputs
        const elements = document.getElementsByClassName('element');
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('keydown', function (e) {
                if (e.which === 38 || e.which === 40) {
                    e.preventDefault();
                }
            })
        }
    }

    render() {
        return (
            <div className="number-buttons">
                <button onClick={() => this.addNumber("1")}>1</button>
                <button onClick={() => this.addNumber("2")}>2</button>
                <button onClick={() => this.addNumber("3")}>3</button>
                <button onClick={() => this.addNumber("4")}>4</button>
                <button onClick={() => this.addNumber("5")}>5</button>
                <button onClick={() => this.addNumber("6")}>6</button>
                <button onClick={() => this.addNumber("7")}>7</button>
                <button onClick={() => this.addNumber("8")}>8</button>
                <button onClick={() => this.addNumber("9")}>9</button>
                <button onClick={() => this.props.clear()}>Clear</button>
            </div>
        );
    }
};

export default NumberButtons;