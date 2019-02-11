import React from 'react';
import sudoku from 'sudoku-umd';

const PuzzleDifficulty = () => {
    const newPuzzle = (difficulty) => {
        const puzzle = sudoku.generate(difficulty).split("");
        console.log(puzzle);

        let boxNum = 1;
        puzzle.map((num) => {
            if (num === ".") {
                num = " ";
            }
            document.querySelector(`.box-${boxNum}`).innerHTML = `${num}`;
            boxNum += 1;
        })
    }
    return (
        <section className="puzzle-buttons">
            <button onClick={() => newPuzzle("medium")}>Easy</button>
            <button onClick={() => newPuzzle("hard")}>Medium</button>
            <button onClick={() => newPuzzle("very-hard")}>Hard</button>
        </section>
    );
};

export default PuzzleDifficulty;