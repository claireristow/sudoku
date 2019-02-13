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
      currentElement: "element-1",
      elementsFilled: 0
    }
  }

  newInput = (num) => {
    console.log('newinput running')
    this.checkIncorrectClass();
    this.checkNum(num);
    this.updateElementsFilled(1);


  }

  // checks for .incorrect and removes if present
  checkIncorrectClass = () => {
    const currentElementClasses = document.querySelector(`.${this.state.currentElement}`).classList
    if (currentElementClasses.contains('incorrect')) {
      currentElementClasses.remove('incorrect');
    }
  }

  // when "clear" button is clicked, clear the element
  clear = () => {
    const currentElementHTML = document.querySelector(`.${this.state.currentElement}`)
    if (this.state.currentElement && currentElementHTML.hasAttribute('readonly') === false) {
      currentElementHTML.value = "";
      if (currentElementHTML.classList.contains('incorrect')) {
        currentElementHTML.classList.remove('incorrect');
      }
      this.updateElementsFilled(-1);
    }
  }  

  // get column and/or row number of the current element
  getLocation = (location) => {
    const classes = document.querySelector(`.${this.state.currentElement}`).classList;
    let rowNum = "";
    for (let i = 0; i < classes.length; i++) {
      if (classes[i].slice(0, 4) === `${location}-`) {
        rowNum = classes[i];
      }
    }
    return rowNum;
  }

  // get cell number of the current element
  getCellNum = () => {
    const parentClasses = document.querySelector(`.${this.state.currentElement}`).parentElement.classList;
    let cellNum = "";
    for (let i = 0; i < parentClasses.length; i++) {
      if (parentClasses[i].slice(0, 5) === `cell-`) {
        cellNum = parentClasses[i];
      }
    }
    return cellNum;
  }

  // check to see if the userinput is valid following sudoku rules
  checkNum = (num) => {

    // get column, row, and cell numbers of current element
    const colNum = this.getLocation("col");
    const rowNum = this.getLocation("row");
    const cellNum = this.getCellNum();

    // get class lists of all elements in identified column, row, and cell
    const colElements = document.getElementsByClassName(colNum);
    const rowElements = document.getElementsByClassName(rowNum);
    const cellElements = document.querySelector(`.${cellNum}`).children;

    // check fit in column
    for (let i = 0; i < colElements.length; i++) {
      console.log(`number = ${num}`)
      if (colElements[i].value === num && !colElements[i].classList.contains(this.state.currentElement)) {
        console.log('going into if statement')
        document.querySelector(`.${this.state.currentElement}`).classList.add('incorrect');
      }
    }

    // check fit in row
    for (let i = 0; i < rowElements.length; i++) {
      if (rowElements[i].value === num && !rowElements[i].classList.contains(this.state.currentElement)) {
        document.querySelector(`.${this.state.currentElement}`).classList.add('incorrect');
      }
    }

    // check fit in cell
    for (let i = 0; i < cellElements.length; i++) {
      if (cellElements[i].value === num && !cellElements[i].classList.contains(this.state.currentElement)) {
        document.querySelector(`.${this.state.currentElement}`).classList.add('incorrect');
      }
    }
  }

  // when a number is added or removed, update the elementsFilled state
  updateElementsFilled = (num) => {
    const newCount = this.state.elementsFilled + num;
    this.updateElementsFilled(newCount);
    if (newCount === 81) {
      if (document.getElementsByClassName('incorrect').length > 0) {
        console.log('you have some incorrect inputs');
      } else {
        this.puzzleCompleted();
      }
    }
  }

  // when puzzle is correct and complete, show overlay
  puzzleCompleted = () => {
    document.querySelector('.game-over').classList.add('show-overlay');
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
      <div className="app">
        <main>
          <div className="wrapper">
            <aside>
              <h1>Sudoku</h1>
              <Rules />
            </aside>
            <section className="puzzleElements">
              <PuzzleDifficulty updateElementsFilled={this.updateElementsFilled} />
              <Puzzle currentElement={this.currentElement} newInput={this.newInput} />
              <NumberButtons currentElement={this.state.currentElement} updateCurrentElement={this.currentElement} clear={this.clear} newInput={this.newInput} />
            </section>
            <section className="game-over">
              <GameOver />
            </section>
          </div>
        </main>
        <footer>
          <p>&copy;2019 Claire Ristow</p>
        </footer>
      </div>
    );
  }
}

export default App;
