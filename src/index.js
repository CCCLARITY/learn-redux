// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);


const rootElement = document.getElementById('root');
const render = () => ReactDOM.render(
    <Counter 
        value={store.getState()}
        onIncrement={()=>store.dispatch({type: 'INCREMENT'})}
        onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
    />,
    rootElement
)

render();
store.subscribe(render);