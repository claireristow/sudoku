import React, { Component } from 'react';

class Puzzle extends Component {

    // keep track of the current element the user is focusing on
    constructor() {
        super();
        this.state = {
            currentElement: ""
        }
    }

    // when a user clicks on an element, focus and pass state to app.js
    handleClick = (clickedElement) => {
        // only focus if it's not an element from the original puzzle
        if (!document.querySelector(`.${clickedElement}`).classList.contains('original-num')) {
            this.setState({
                currentElement: clickedElement
            }, () => {
                this.props.currentElement(this.state.currentElement);
            });
    
            // add class for focus styles
            const pastSelected = document.querySelector('.focus')
            const currentSelected = document.querySelector(`.${clickedElement}`)
            if (pastSelected) {
                pastSelected.classList.remove('focus');
            }
            currentSelected.classList.add('focus');
        }
    }

    render() {
        return (
            <div className="puzzle-flex">
                <div className="puzzle">
                    <div className="cell cell-1">
                        <div className="element element-1 row-1 col-1" onClick={() => this.handleClick("element-1")}></div>
                        <div className="element element-2 row-1 col-2" onClick={() => this.handleClick("element-2")}></div>
                        <div className="element element-3 row-1 col-3" onClick={() => this.handleClick("element-3")}></div>
                        <div className="element element-10 row-2 col-1" onClick={() => this.handleClick("element-10")}></div>
                        <div className="element element-11 row-2 col-2" onClick={() => this.handleClick("element-11")}></div>
                        <div className="element element-12 row-2 col-3" onClick={() => this.handleClick("element-12")}></div>
                        <div className="element element-19 row-3 col-1" onClick={() => this.handleClick("element-19")}></div>
                        <div className="element element-20 row-3 col-2" onClick={() => this.handleClick("element-20")}></div>
                        <div className="element element-21 row-3 col-3" onClick={() => this.handleClick("element-21")}></div>
                    </div>
                    <div className="cell cell-2">
                        <div className="element element-4 row-1 col-4" onClick={() => this.handleClick("element-4")}></div>
                        <div className="element element-5 row-1 col-5" onClick={() => this.handleClick("element-5")}></div>
                        <div className="element element-6 row-1 col-6" onClick={() => this.handleClick("element-6")}></div>
                        <div className="element element-13 row-2 col-4" onClick={() => this.handleClick("element-13")}></div>
                        <div className="element element-14 row-2 col-5" onClick={() => this.handleClick("element-14")}></div>
                        <div className="element element-15 row-2 col-6" onClick={() => this.handleClick("element-15")}></div>
                        <div className="element element-22 row-3 col-4" onClick={() => this.handleClick("element-22")}></div>
                        <div className="element element-23 row-3 col-5" onClick={() => this.handleClick("element-23")}></div>
                        <div className="element element-24 row-3 col-6" onClick={() => this.handleClick("element-24")}></div>
                    </div>
                    <div className="cell cell-3">
                        <div className="element element-7 row-1 col-7" onClick={() => this.handleClick("element-7")}></div>
                        <div className="element element-8 row-1 col-8" onClick={() => this.handleClick("element-8")}></div>
                        <div className="element element-9 row-1 col-9" onClick={() => this.handleClick("element-9")}></div>
                        <div className="element element-16 row-2 col-7" onClick={() => this.handleClick("element-16")}></div>
                        <div className="element element-17 row-2 col-8" onClick={() => this.handleClick("element-17")}></div>
                        <div className="element element-18 row-2 col-9" onClick={() => this.handleClick("element-18")}></div>
                        <div className="element element-25 row-3 col-7" onClick={() => this.handleClick("element-25")}></div>
                        <div className="element element-26 row-3 col-8" onClick={() => this.handleClick("element-26")}></div>
                        <div className="element element-27 row-3 col-9" onClick={() => this.handleClick("element-27")}></div>
                    </div>
                    <div className="cell cell-4">
                        <div className="element element-28 row-4 col-1" onClick={() => this.handleClick("element-28")}></div>
                        <div className="element element-29 row-4 col-2" onClick={() => this.handleClick("element-29")}></div>
                        <div className="element element-30 row-4 col-3" onClick={() => this.handleClick("element-30")}></div>
                        <div className="element element-37 row-5 col-1" onClick={() => this.handleClick("element-37")}></div>
                        <div className="element element-38 row-5 col-2" onClick={() => this.handleClick("element-38")}></div>
                        <div className="element element-39 row-5 col-3" onClick={() => this.handleClick("element-39")}></div>
                        <div className="element element-46 row-6 col-1" onClick={() => this.handleClick("element-46")}></div>
                        <div className="element element-47 row-6 col-2" onClick={() => this.handleClick("element-47")}></div>
                        <div className="element element-48 row-6 col-3" onClick={() => this.handleClick("element-48")}></div>
                    </div>
                    <div className="cell cell-5">
                        <div className="element element-31 row-4 col-4" onClick={() => this.handleClick("element-31")}></div>
                        <div className="element element-32 row-4 col-5" onClick={() => this.handleClick("element-32")}></div>
                        <div className="element element-33 row-4 col-6" onClick={() => this.handleClick("element-33")}></div>
                        <div className="element element-40 row-5 col-4" onClick={() => this.handleClick("element-40")}></div>
                        <div className="element element-41 row-5 col-5" onClick={() => this.handleClick("element-41")}></div>
                        <div className="element element-42 row-5 col-6" onClick={() => this.handleClick("element-42")}></div>
                        <div className="element element-49 row-6 col-4" onClick={() => this.handleClick("element-49")}></div>
                        <div className="element element-50 row-6 col-5" onClick={() => this.handleClick("element-50")}></div>
                        <div className="element element-51 row-6 col-6" onClick={() => this.handleClick("element-51")}></div>
                    </div>
                    <div className="cell cell-6">
                        <div className="element element-34 row-4 col-7" onClick={() => this.handleClick("element-34")}></div>
                        <div className="element element-35 row-4 col-8" onClick={() => this.handleClick("element-35")}></div>
                        <div className="element element-36 row-4 col-9" onClick={() => this.handleClick("element-36")}></div>
                        <div className="element element-43 row-5 col-7" onClick={() => this.handleClick("element-43")}></div>
                        <div className="element element-44 row-5 col-8" onClick={() => this.handleClick("element-44")}></div>
                        <div className="element element-45 row-5 col-9" onClick={() => this.handleClick("element-45")}></div>
                        <div className="element element-52 row-6 col-7" onClick={() => this.handleClick("element-52")}></div>
                        <div className="element element-53 row-6 col-8" onClick={() => this.handleClick("element-53")}></div>
                        <div className="element element-54 row-6 col-9" onClick={() => this.handleClick("element-54")}></div>
                    </div>
                    <div className="cell cell-7">
                        <div className="element element-55 row-7 col-1" onClick={() => this.handleClick("element-55")}></div>
                        <div className="element element-56 row-7 col-2" onClick={() => this.handleClick("element-56")}></div>
                        <div className="element element-57 row-7 col-3" onClick={() => this.handleClick("element-57")}></div>
                        <div className="element element-64 row-8 col-1" onClick={() => this.handleClick("element-64")}></div>
                        <div className="element element-65 row-8 col-2" onClick={() => this.handleClick("element-65")}></div>
                        <div className="element element-66 row-8 col-3" onClick={() => this.handleClick("element-66")}></div>
                        <div className="element element-73 row-9 col-1" onClick={() => this.handleClick("element-73")}></div>
                        <div className="element element-74 row-9 col-2" onClick={() => this.handleClick("element-74")}></div>
                        <div className="element element-75 row-9 col-3" onClick={() => this.handleClick("element-75")}></div>
                    </div>
                    <div className="cell cell-8">
                        <div className="element element-58 row-7 col-4" onClick={() => this.handleClick("element-58")}></div>
                        <div className="element element-59 row-7 col-5" onClick={() => this.handleClick("element-59")}></div>
                        <div className="element element-60 row-7 col-6" onClick={() => this.handleClick("element-60")}></div>
                        <div className="element element-67 row-8 col-4" onClick={() => this.handleClick("element-67")}></div>
                        <div className="element element-68 row-8 col-5" onClick={() => this.handleClick("element-68")}></div>
                        <div className="element element-69 row-8 col-6" onClick={() => this.handleClick("element-69")}></div>
                        <div className="element element-76 row-9 col-4" onClick={() => this.handleClick("element-76")}></div>
                        <div className="element element-77 row-9 col-5" onClick={() => this.handleClick("element-77")}></div>
                        <div className="element element-78 row-9 col-6" onClick={() => this.handleClick("element-78")}></div>
                    </div>
                    <div className="cell cell-9">
                        <div className="element element-61 row-7 col-7" onClick={() => this.handleClick("element-61")}></div>
                        <div className="element element-62 row-7 col-8" onClick={() => this.handleClick("element-62")}></div>
                        <div className="element element-63 row-7 col-9" onClick={() => this.handleClick("element-63")}></div>
                        <div className="element element-70 row-8 col-7" onClick={() => this.handleClick("element-70")}></div>
                        <div className="element element-71 row-8 col-8" onClick={() => this.handleClick("element-71")}></div>
                        <div className="element element-72 row-8 col-9" onClick={() => this.handleClick("element-72")}></div>
                        <div className="element element-79 row-9 col-7" onClick={() => this.handleClick("element-79")}></div>
                        <div className="element element-80 row-9 col-8" onClick={() => this.handleClick("element-80")}></div>
                        <div className="element element-81 row-9 col-9" onClick={() => this.handleClick("element-81")}></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Puzzle;