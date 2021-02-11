import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) =>(<div 
    className = {classes.Backdrop}
    onClick = {props.toggle}
    style = {{display : props.show ? 'block' : 'none'}}></div>)

export default Backdrop;