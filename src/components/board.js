import React from 'react';
import GuessBox from './guessBox';
import Card from './card';
import GameBody from './gameBody';
import './gameBody.css';
import './board.css';
import './guessBox.css'


export default function Board() {
    const feedback = "test feedback";
    return (
        <div className="main-content">
            <h1>HOT or COLD</h1>
            <div className="board">

                <div className="cards">
                    <Card  feedback = {feedback}/>
                </div>
                <div className="gamebody">
                    <GameBody />
                </div>
                <div className="guessBox">
                    <GuessBox />
                </div>
            </div>
        </div>
    );
}

