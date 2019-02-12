import React, { Component } from 'react';

class GameOver extends Component {

    handleClick = () => {
        document.querySelector(`.game-over`). classList.remove('show-overlay');
    }

    render() {
        return (
            <div className='game-over-container'>
                <h2>Congratulations,</h2>
                <h2>you are a sudoku master!</h2>
                <button className="play-again" onClick={() => this.handleClick()}>Play Again</button>
            </div>
        );
    }
};

export default GameOver;