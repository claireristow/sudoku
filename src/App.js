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
      currentElement: ""
    }
  }

  currentElement = (elementClass) => {
    this.setState({
      currentElement: elementClass
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
          <Puzzle currentElement={this.currentElement}/>
          <NumberButtons currentElement={this.state.currentElement}/>
        </main>
      </div>
    );
  }
}

export default App;
