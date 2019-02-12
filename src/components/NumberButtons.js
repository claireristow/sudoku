import React, { Component } from 'react';

class NumberButtons extends Component {
    addNumber = (buttonNum) => {
        if (this.props.currentElement) {
            document.querySelector(`.${this.props.currentElement}`).innerHTML = buttonNum;
        }
        this.checkNum(buttonNum);
    }

    clear = () => {
        const currentElement = document.querySelector(`.${this.props.currentElement}`)
        if (this.props.currentElement && !currentElement.classList.contains('original-num')) {
            currentElement.innerHTML = "";
        }
    }

    getLocation = (location) => {
        const classes = document.querySelector(`.${this.props.currentElement}`).classList;
        let rowNum = "";
        for (let i = 0; i < classes.length; i++) {
            if (classes[i].slice(0, 4) == `${location}-`) {
                rowNum = classes[i];
            }
        }
        return rowNum;
    }

    getCellNum = () => {
        const parentClasses = document.querySelector(`.${this.props.currentElement}`).parentElement.classList;
        let cellNum = "";
        for (let i = 0; i < parentClasses.length; i++) {
            if (parentClasses[i].slice(0, 5) == `cell-`) {
                cellNum = parentClasses[i];
            }
        }
        return cellNum;

    }

    checkNum = (num) => {
        const colNum = this.getLocation("col");
        const rowNum = this.getLocation("row");
        const cellNum = this.getCellNum();
        console.log(cellNum)

        const colElements = document.getElementsByClassName(colNum);
        const rowElements = document.getElementsByClassName(rowNum);
        const cellElements = document.querySelector(`.${cellNum}`).children;
        console.log(cellElements)
        
        for (let i = 0; i < colElements.length; i++) {
            if (colElements[i].innerHTML == num && !colElements[i].classList.contains(this.props.currentElement)) {
                console.log('inner html matches column num')
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            } 
        }

        for (let i = 0; i < rowElements.length; i++) {
            console.log(rowElements[i])
            if (rowElements[i].innerHTML == num && !rowElements[i].classList.contains(this.props.currentElement)) {
                console.log('inner html matches row num')
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            }
        }

        for (let i = 0; i < cellElements.length; i++) {
            if (cellElements[i].innerHTML == num && !cellElements[i].classList.contains(this.props.currentElement)) {
                console.log('inner html matches cell num')
                document.querySelector(`.${this.props.currentElement}`).classList.add('incorrect');
            }
        }

    }
    
    componentDidMount() {
        document.addEventListener("keyup", (e) => {
            if (e.keyCode >= 49 && e.keyCode <= 57) {
                this.addNumber(e.key);
            } else if (e.keyCode >= 97 && e.keyCode <= 105) {
                let num = e.key
                this.addNumber(num[num.length -1]);
            }
        })
    }

    render() {
        return (
            <section className="number-buttons">
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
            </section>
        );
    }
};

export default NumberButtons;