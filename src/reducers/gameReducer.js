const defaultState = [
    [
        ['', ''],
        ['', '']
    ],
    0
];



export default function gameReducer(
    state = defaultState, action

) {
    if (action.type === 'boardClick') {
        const value = state[0][action.x][action.y];
        if (value === 'on') {
            state[0][action.x][action.y] = 'off';
            state[1] -= 1;
        } else {
            state[0][action.x][action.y] = 'on';
            state[1] += 1;
        }
        return [...state];
    }

    return state;
}