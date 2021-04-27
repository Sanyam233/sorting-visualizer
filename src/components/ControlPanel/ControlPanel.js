import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayButton from '../PlayButton/PlayButton';
import SpeedControls from './SpeedControls/SpeedControls';
import './ControlPanel.css';

const ControlPanel = (props) => {

    return (
    <div className = 'control-panel'>
        <button className = 'control-panel__repeat__button' 
        onClick = {props.onRestart}
        disabled = {props.repeatDisabled}>
            <FontAwesomeIcon icon = "redo"/>
        </button>
        <PlayButton
        disabled = {!props.selected} 
        playing = {props.playing}
        sort = {props.playing ? props.onPause : props.onPlay}/>
        <SpeedControls speedSelector = {props.onSpeedSelect}/>
    </div>);


}

export default ControlPanel;