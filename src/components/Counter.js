import React, {Component} from 'react';
// import classnames from 'classnames';
import styles from './Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component{

    constructor(props){
        super(props);
        this.onIncrementIfOdd = this.onIncrementIfOdd.bind(this);
        this.onIncrementAsync = this.onIncrementAsync.bind(this);
    }

    onIncrementIfOdd(){
        if(this.props.value % 2 !== 0){
            this.props.onIncrement();
        }
    }

    onIncrementAsync(){
        setTimeout(()=>{
            this.props.onIncrement();
        }, 2000)
    }
    
    render(){
        return <div className={styles.wrapper}>
            <div>点击了{this.props.value}次</div>
            <button onClick={this.props.onIncrement}>+</button>
            <button onClick={this.props.onDecrement}>-</button>
            <button onClick={this.onIncrementIfOdd}>当是奇数的时候增加</button>
            <button onClick={this.onIncrementAsync}>异步增加2s</button>
        </div>
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
}

export default Counter;