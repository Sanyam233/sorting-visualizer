import React from 'react'
import DropDown from '../DropDown/DropDown'


const PlaybackSpeed = (props) =>{

    let speed_array = {"x0.5" : 300, "x1" : 150, "x2" : 75, "x3" : 30, "x4" : 10};

    return(<div>
        <DropDown items = {speed_array} 
        heading = {""}
        header = {"x1"}
        selector = {props.speedSelector}
        width = {60}/>
    </div>)
}

export default PlaybackSpeed;