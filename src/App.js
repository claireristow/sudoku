import React, { Component } from 'react';
import './styles/styles.css';

// components
import Puzzle from './components/Puzzle';
import PuzzleDifficulty from './components/PuzzleDifficulty';
import NumberButtons from './components/NumberButtons';
import Rules from './components/Rules';
import GameOver from './components/GameOver';

class App extends Component {

  // keep track of the current element the user is focusing on
  constructor() {
    super();
    this.state = {
      currentElement: "",
      elementsFilled: 0
    }
  }

  // send current element to state
  currentElement = (elementClass) => {
    this.setState({
      currentElement: elementClass
    })
  }

  // when a new element is filled, add to state counter
  updateElementsFilled = (num) => {
    this.setState({
      elementsFilled: num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sudoku</h1>
        </header>
        <main className="wrapper">
          <aside>
            <Rules />
          </aside>
          <section className="puzzleElements">
            <PuzzleDifficulty updateElementsFilled={this.updateElementsFilled} />
            <Puzzle currentElement={this.currentElement} />
            <NumberButtons currentElement={this.state.currentElement} updateElementsFilled={this.updateElementsFilled} elementsFilled={this.state.elementsFilled} />
          </section>
          <section className="game-over">
            <GameOver />
          </section>
        </main>
        <footer>
          <p>&copy;2019 Claire Ristow</p>
        </footer>
      </div>
    );
  }
}

export default App;
