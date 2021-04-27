import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './PlayButton.css';



const Button = (props) => (
    <button 
        className = 'play-button'
        onClick = {props.sort} 
        disabled = {props.disabled}>
        <FontAwesomeIcon 
        className = 'play-button__icon' 
        icon = {props.playing ? 'pause' : 'play'} />
    </button>);


export default Button;