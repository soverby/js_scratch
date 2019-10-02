const ADD_VALUE = 'ADD_VALUE';
const SUB_VALUE = 'SUB_VALUE';

const fnMap = [];

fnMap[ADD_VALUE] = (state, value) => state + value;
fnMap[SUB_VALUE] = (state, value) => state - value;

const actionReducer = (state = 0, action = {}) => {
    const { type, payload } = action;

    return fnMap[type] ? fnMap[type](state, payload.value) : state;
};

const actions = [
    { type: ADD_VALUE, payload: { value: 1}},
    { type: ADD_VALUE, payload: { value: 2}},
    { type: ADD_VALUE, payload: { value: 3}},
    { type: SUB_VALUE, payload: { value: 2}}
];

console.log(actions.reduce(actionReducer, 0));







