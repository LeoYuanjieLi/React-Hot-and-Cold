import React from 'react';

import './gameBody.css';

export default function GameBody(props) {
    return (
        <form>
            <label>
                <input type="text" name="name" placeholder="Type Your Guess"/>
            </label>
            <div>
                <button type="submit" value="Submit" >Guess!</button>
            </div>
            <div className="count">
                <p>Guessed: {props.count} times!</p>
            </div>
        </form>
    );
};