import React, { Component } from 'react';
import sudoku from 'sudoku-umd';

class PuzzleDifficulty extends Component {

    // keep track of puzzle completion
    constructor() {
        super();
        this.state = {
            elementsFilled: 0
        }
    }

    // when a difficulty is selected, arrange the puzzle data into the sudoku board
    newPuzzle = (difficulty) => {

        // remove and add current classes for styling 
        document.querySelector('.border-button.current').classList.remove('current');
        document.getElementById(difficulty).classList.add('current');

        // use sudoku librayr to generate and format a new puzzle
        const puzzle = sudoku.generate(difficulty).split("");
        let elementNum = 1;
        puzzle.forEach((num) => {
            if (num === ".") {
                num = " ";
                document.querySelector(`.element-${elementNum}`).classList.remove('original-num');
            } else {
                document.querySelector(`.element-${elementNum}`).classList.add('original-num');
            }
            document.querySelector(`.element-${elementNum}`).innerHTML = `${num}`;
            elementNum += 1;
        })
        this.elementsFilled();
    }

    elementsFilled = () => {
        const htmlElements = document.getElementsByClassName('element');
        let count = 0;
        for (let i = 0; i < htmlElements.length; i++) {
            let content = htmlElements[i].innerHTML;
            if (content !== " ") {
                count += 1;
            }
        }
        this.setState({
            elementsFilled: count
        }, () => {
            this.props.updateElementsFilled(this.state.elementsFilled);
        });
    }

    // when the app loads, load a random easy puzzle
    componentDidMount() {
        this.newPuzzle("medium");
    }


    render() {
        return (
            <div className="difficulty-buttons">
                <button className="border-button current" id="medium" onClick={() => this.newPuzzle("medium")}>Easy</button>
                <button className="border-button" id="hard" onClick={() => this.newPuzzle("hard")}>Medium</button>
                <button className="border-button" id="very-hard" onClick={() => this.newPuzzle("very-hard")}>Hard</button>
            </div>
        );
    }
};

export default PuzzleDifficulty;