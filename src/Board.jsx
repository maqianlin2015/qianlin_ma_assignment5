import "./style/Board.css";
import React, { useState } from "react";
import { Square } from "./Square";
import { useSelector } from "react-redux";

export default function Board() {
    const boardStateWhole = useSelector((state) => state.game);
    const boardState =  boardStateWhole[0];
    const countState = boardStateWhole[1]; 
    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square symbol={boardState[i][j]} x={i} y={j}/>);
        }
    }

    return (
        <div>
            <h1>Count: {countState}</h1>
            <div id="board">{boardComponent}</div>
        </div>
    );
}
