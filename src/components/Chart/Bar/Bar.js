import React from 'react'
import classes from './Bar.module.css'

const Bar = (props) => { 

    let c = [classes.Bar];

    if(props.stateA){
        c.push(classes.GroupA);
    }else if(props.stateB){
        c.push(classes.GroupB)
    }

    if(props.size === 10){
        c.push(classes.xSmall);
    }else if (props.size === 20){
        c.push(classes.Small);
    }else if (props.size === 50){
        c.push(classes.Medium);
    }else if (props.size === 75){
        c.push(classes.Large);
    }else if (props.size === 100){
        c.push(classes.xLarge);
    }

    return (<div className = {c.join(' ')} style = {{height : props.height}}>
    </div>)

}

export default Bar;