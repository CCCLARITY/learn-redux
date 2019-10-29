import React, {Component} from 'react';
// import classnames from 'classnames';
import styles from './Counter.module.css';

class Counter extends Component{

    // constructor(props){
    //     super(props)

    // }
    

    render(){
        
        return <div className={styles.wrapper}>
            <div>点击了0次</div>
            <button>+</button>
            <button>-</button>
            <button>当是奇数的时候增加</button>
            <button>异步增加2s</button>
        </div>
    }
}

export default Counter;