import './style/Square.css';
import React from 'react';
import { useDispatch } from 'react-redux';

export function Square(props) {
    const symbol = props.symbol;

    let borderColor = 'originalBorder';
    if (symbol === 'on') {
        borderColor = 'turnOnBorder';
    } else if (symbol === 'off') {
        borderColor = 'turnOffBorder';
    }

    const dispatch = useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        },
        {
            type: 'boardClick',
        }
    )} id="square" class={borderColor}>

    </div>);
}
