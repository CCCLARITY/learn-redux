export default (state = 0, actions) => {
    if(actions.type === 'INCREMENT'){
        return state + 1;
    }else if(actions.type === 'DECREMENT'){
        return state - 1;
    }else{
        return state;
    }
}