import React, { Component } from 'react';
import './styles/styles.css';

// Components
import Puzzle from './components/Puzzle';
import PuzzleDifficulty from './components/PuzzleDifficulty';
import NumberButtons from './components/NumberButtons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentBox: ""
    }
  }

  currentBox = (boxClass) => {
    this.setState({
      currentBox: boxClass
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Puzzle Me Sudoku</h1>
        </header>
        <main>
          <PuzzleDifficulty/>
          <Puzzle currentBox={this.currentBox}/>
          <NumberButtons currentBox={this.state.currentBox}/>
        </main>
      </div>
    );
  }
}

export default App;
