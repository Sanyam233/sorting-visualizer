import React from 'react';
import classes from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = (props) => (<button className = {classes.Button} onClick = {props.sort} disabled = {props.disabled}>
    <FontAwesomeIcon className = {classes.ButtonPlay} icon = "play" />
    </button>)


export default Button;