import React, { Component } from 'react';

class NumberButtons extends Component {

    // when a number is clicked, add to the puzzle
    addNumber = (buttonNum) => {
        this.checkIncorrectClass();
        if (this.props.currentElement) {
            document.querySelector(`.${this.props.currentElement}`).innerHTML = buttonNum;
            this.checkNum(buttonNum);
            this.updateElementsFilled(1);
        }
    }

    // checks for .incorrect and removes if present
    checkIncorrectClass = () => {
        const currentElementClasses = document.querySelector(`.${this.props.currentElement}`).classList
        if (currentElementClasses.contains('incorrect')) {
            currentElementClasses.remove('incorrect');
        }
    }

    // when a number is added or removed, update the elementsFilled state
    updateElementsFilled = (num) => {
        const newCount = this.props.elementsFilled + num;
        this.props.updateElementsFilled(newCount);
        if (newCount === 81) {
            if (document.getElementsByClassName('incorrect').length > 0) {
                console.log('you have some incorrect inputs')
            } else {
                this.puzzleCompleted();
            }
        }
    }

    // when puzzle is correct and complete, show overlay
    puzzleCompleted = () => {
        document.querySelector('.game-over').classList.add('show-overlay');
    }

    // when "clear" button is clicked, clear the element
    clear = () => {
        const currentElement = document.querySelector(`.${this.props.currentElement}`)
        if (this.props.currentElement && !currentElement.classList.contains('original-num')) {
            currentElement.innerHTML = "";
            if (currentElement.classList.contains('incorrect')) {
                currentElement.classList.remove('incorrect');
            }
            this.updateElementsFilled(-1);
        }
    }

    // get column and/or row number of the current element
    getLocation = (location) => {
        const classes = document.querySelector(`.${this.props.currentElement}`).classList;
        let rowNum = "";
        for (let i = 0; i < classes.length; i++) {
            if (classes[i].slice(0, 4) === `${location}-`) {
                rowNum = classes[i];
            }
        }
        return rowNum;
    }

    // get cell number of the current element
    getCellNum = () => {
        const parentClasses = document.querySelector(`.${this.props.currentElement}`).parentElement.classList;
        let cellNum = "";
        for (let i = 0; i < parentClasses.length; i++) {
            if (parentClasses[i].slice(0, 5) === `cell-`) {
                cellNum = parentClasses[i];
            }
        }
        return cellNum;
    }

    // check to see if the userinput is valid following sudoku rules
    checkNum = (num) => {

        // get column, row, and cell numbers of current element
        const colNum = this.getLocation("col");
        const rowNum = this.getLocation("row");
        const cellNum = this.getCellNum();

        // get class lists of all elements in identified column, row, and cell
        const colElements = document.getElementsByClassName(colNum);
        const rowElements = document.getElementsByClassName(rowNum);
        const cellElements = document.querySelector(`.${cellNum}`).children;
        
        // check fit in column
        for (let i = 0; i < colElements.length; i++) {
            if (colElements[i].innerHTML === num && !colElements[i].classList.contains(this.props.currentElement)) {
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            } 
        }

        // check fit in row
        for (let i = 0; i < rowElements.length; i++) {
            if (rowElements[i].innerHTML === num && !rowElements[i].classList.contains(this.props.currentElement)) {
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            }
        }

        // check fit in cell
        for (let i = 0; i < cellElements.length; i++) {
            if (cellElements[i].innerHTML === num && !cellElements[i].classList.contains(this.props.currentElement)) {
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            }
        }
    }
    
    // event listener for user's keystrokes (instead of using number buttons)
    componentDidMount() {
        document.addEventListener("keyup", (e) => {
            if (e.keyCode >= 49 && e.keyCode <= 57) {
                // numbers along top of keyboard
                this.addNumber(e.key);
            } else if (e.keyCode >= 97 && e.keyCode <= 105) {
                // numbers on keyboard numpad
                let num = e.key
                this.addNumber(num[num.length -1]);
            } else if (e.keyCode === 8 || e.keyCode === 46) {
                // backspace and delete
                this.clear();
            }
        })
    }

    render() {
        return (
            <div className="number-buttons">
                <button onClick={() => this.clear()}>Clear</button>
                <button onClick={() => this.addNumber("1")}>1</button>
                <button onClick={() => this.addNumber("2")}>2</button>
                <button onClick={() => this.addNumber("3")}>3</button>
                <button onClick={() => this.addNumber("4")}>4</button>
                <button onClick={() => this.addNumber("5")}>5</button>
                <button onClick={() => this.addNumber("6")}>6</button>
                <button onClick={() => this.addNumber("7")}>7</button>
                <button onClick={() => this.addNumber("8")}>8</button>
                <button onClick={() => this.addNumber("9")}>9</button>
            </div>
        );
    }
};

export default NumberButtons;