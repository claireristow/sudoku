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
        const puzzle = sudoku.generate(difficulty).split("");
        let elementNum = 1;
        puzzle.map((num) => {
            if (num === ".") {
                num = " ";
            } else {
                document.querySelector(`.element-${elementNum}`).classList.add('original-num')
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
            <section className="puzzle-buttons">
                <button onClick={() => this.newPuzzle("medium")}>Easy</button>
                <button onClick={() => this.newPuzzle("hard")}>Medium</button>
                <button onClick={() => this.newPuzzle("very-hard")}>Hard</button>
            </section>
        );
    }
};

export default PuzzleDifficulty;