import React, { Component } from 'react';
import './styles/styles.css';
import sudoku from 'sudoku-umd';

class App extends Component {
  newPuzzle = (difficulty) => {
    const puzzle = sudoku.generate(difficulty);
    console.log(puzzle);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Puzzle Me Sudoku</h1>
        </header>
        <main>
          <section className="puzzleFlex">
            <div className="puzzle">
              <div className="quad quad-1">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-2">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-3">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-4">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-5">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-6">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-7">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-8">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
              <div className="quad quad-9">
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
                <div className="box box-5"></div>
                <div className="box box-6"></div>
                <div className="box box-7"></div>
                <div className="box box-8"></div>
                <div className="box box-9"></div>
              </div>
            </div>
          </section>
          <section className="puzzleButtons">
            <button onClick={() => this.newPuzzle("medium")}>Easy</button>
            <button onClick={() => this.newPuzzle("hard")}>Medium</button>
            <button onClick={() => this.newPuzzle("very-hard")}>Hard</button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
