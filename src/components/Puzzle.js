import React, { Component } from 'react';

class Puzzle extends Component {

    // keep track of the current element the user is focusing on
    constructor() {
        super();
        this.state = {
            currentElement: "",
            currentValue: ''
        }
    }

    // when a user clicks on an element, focus and pass state to app.js
    handleClick = (clickedElement) => {
        this.setState({
            currentElement: clickedElement
        }, () => {
            this.props.currentElement(this.state.currentElement);
            document.querySelector(`.${this.state.currentElement}`).focus();
        });
    }

    handleChange = (e) => {
        this.setState({
            currentValue: e.target.value
        }, () => {
            this.props.newInput(this.state.currentValue)
        })
        
        // this.props.newInput();    
    }

    // when a number is clicked, add to the puzzle
    addNumber = (buttonNum) => {
        this.checkIncorrectClass();
        const currentElementHTML = document.querySelector(`.${this.props.currentElement}`);
        if (this.props.currentElement && !currentElementHTML.hasAttribute('readonly')) {
            currentElementHTML.value = buttonNum;
            this.checkNum(buttonNum);
            this.updateElementsFilled(1);
        }
    }

    
    

    render() {
        return (
            <div className="puzzle-flex">
                <div className="puzzle">
                    <div className="cell cell-1">
                        <input type="number" min="1" max="9" className="element element-1 row-1 col-1" onClick={() => this.handleClick("element-1")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-2 row-1 col-2" onClick={() => this.handleClick("element-2")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-3 row-1 col-3" onClick={() => this.handleClick("element-3")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-10 row-2 col-1" onClick={() => this.handleClick("element-10")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-11 row-2 col-2" onClick={() => this.handleClick("element-11")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-12 row-2 col-3" onClick={() => this.handleClick("element-12")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-19 row-3 col-1" onClick={() => this.handleClick("element-19")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-20 row-3 col-2" onClick={() => this.handleClick("element-20")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-21 row-3 col-3" onClick={() => this.handleClick("element-21")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-2">
                        <input type="number" min="1" max="9" className="element element-4 row-1 col-4" onClick={() => this.handleClick("element-4")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-5 row-1 col-5" onClick={() => this.handleClick("element-5")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-6 row-1 col-6" onClick={() => this.handleClick("element-6")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-13 row-2 col-4" onClick={() => this.handleClick("element-13")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-14 row-2 col-5" onClick={() => this.handleClick("element-14")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-15 row-2 col-6" onClick={() => this.handleClick("element-15")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-22 row-3 col-4" onClick={() => this.handleClick("element-22")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-23 row-3 col-5" onClick={() => this.handleClick("element-23")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-24 row-3 col-6" onClick={() => this.handleClick("element-24")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-3">
                        <input type="number" min="1" max="9" className="element element-7 row-1 col-7" onClick={() => this.handleClick("element-7")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-8 row-1 col-8" onClick={() => this.handleClick("element-8")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-9 row-1 col-9" onClick={() => this.handleClick("element-9")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-16 row-2 col-7" onClick={() => this.handleClick("element-16")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-17 row-2 col-8" onClick={() => this.handleClick("element-17")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-18 row-2 col-9" onClick={() => this.handleClick("element-18")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-25 row-3 col-7" onClick={() => this.handleClick("element-25")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-26 row-3 col-8" onClick={() => this.handleClick("element-26")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-27 row-3 col-9" onClick={() => this.handleClick("element-27")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-4">
                        <input type="number" min="1" max="9" className="element element-28 row-4 col-1" onClick={() => this.handleClick("element-28")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-29 row-4 col-2" onClick={() => this.handleClick("element-29")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-30 row-4 col-3" onClick={() => this.handleClick("element-30")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-37 row-5 col-1" onClick={() => this.handleClick("element-37")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-38 row-5 col-2" onClick={() => this.handleClick("element-38")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-39 row-5 col-3" onClick={() => this.handleClick("element-39")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-46 row-6 col-1" onClick={() => this.handleClick("element-46")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-47 row-6 col-2" onClick={() => this.handleClick("element-47")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-48 row-6 col-3" onClick={() => this.handleClick("element-48")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-5">
                        <input type="number" min="1" max="9" className="element element-31 row-4 col-4" onClick={() => this.handleClick("element-31")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-32 row-4 col-5" onClick={() => this.handleClick("element-32")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-33 row-4 col-6" onClick={() => this.handleClick("element-33")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-40 row-5 col-4" onClick={() => this.handleClick("element-40")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-41 row-5 col-5" onClick={() => this.handleClick("element-41")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-42 row-5 col-6" onClick={() => this.handleClick("element-42")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-49 row-6 col-4" onClick={() => this.handleClick("element-49")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-50 row-6 col-5" onClick={() => this.handleClick("element-50")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-51 row-6 col-6" onClick={() => this.handleClick("element-51")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-6">
                        <input type="number" min="1" max="9" className="element element-34 row-4 col-7" onClick={() => this.handleClick("element-34")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-35 row-4 col-8" onClick={() => this.handleClick("element-35")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-36 row-4 col-9" onClick={() => this.handleClick("element-36")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-43 row-5 col-7" onClick={() => this.handleClick("element-43")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-44 row-5 col-8" onClick={() => this.handleClick("element-44")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-45 row-5 col-9" onClick={() => this.handleClick("element-45")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-52 row-6 col-7" onClick={() => this.handleClick("element-52")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-53 row-6 col-8" onClick={() => this.handleClick("element-53")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-54 row-6 col-9" onClick={() => this.handleClick("element-54")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-7">
                        <input type="number" min="1" max="9" className="element element-55 row-7 col-1" onClick={() => this.handleClick("element-55")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-56 row-7 col-2" onClick={() => this.handleClick("element-56")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-57 row-7 col-3" onClick={() => this.handleClick("element-57")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-64 row-8 col-1" onClick={() => this.handleClick("element-64")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-65 row-8 col-2" onClick={() => this.handleClick("element-65")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-66 row-8 col-3" onClick={() => this.handleClick("element-66")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-73 row-9 col-1" onClick={() => this.handleClick("element-73")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-74 row-9 col-2" onClick={() => this.handleClick("element-74")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-75 row-9 col-3" onClick={() => this.handleClick("element-75")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-8">
                        <input type="number" min="1" max="9" className="element element-58 row-7 col-4" onClick={() => this.handleClick("element-58")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-59 row-7 col-5" onClick={() => this.handleClick("element-59")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-60 row-7 col-6" onClick={() => this.handleClick("element-60")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-67 row-8 col-4" onClick={() => this.handleClick("element-67")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-68 row-8 col-5" onClick={() => this.handleClick("element-68")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-69 row-8 col-6" onClick={() => this.handleClick("element-69")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-76 row-9 col-4" onClick={() => this.handleClick("element-76")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-77 row-9 col-5" onClick={() => this.handleClick("element-77")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-78 row-9 col-6" onClick={() => this.handleClick("element-78")} onChange={this.handleChange} />
                    </div>
                    <div className="cell cell-9">
                        <input type="number" min="1" max="9" className="element element-61 row-7 col-7" onClick={() => this.handleClick("element-61")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-62 row-7 col-8" onClick={() => this.handleClick("element-62")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-63 row-7 col-9" onClick={() => this.handleClick("element-63")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-70 row-8 col-7" onClick={() => this.handleClick("element-70")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-71 row-8 col-8" onClick={() => this.handleClick("element-71")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-72 row-8 col-9" onClick={() => this.handleClick("element-72")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-79 row-9 col-7" onClick={() => this.handleClick("element-79")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-80 row-9 col-8" onClick={() => this.handleClick("element-80")} onChange={this.handleChange} />
                        <input type="number" min="1" max="9" className="element element-81 row-9 col-9" onClick={() => this.handleClick("element-81")} onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Puzzle;