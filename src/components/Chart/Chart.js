import React from 'react'
import Bar from './Bar/Bar'
import classes from './Chart.module.css'

const Chart = (props) => {

    const bars = props.arr.map((num,i) => {
    
        return (<Bar 
        height = {num} 
        stateA = {props.groupA.includes(i)}
        stateB = {props.groupB.includes(i)} 
        size = {props.size}/>)});
                
    return( <div className = {classes.Chart}>
        {bars}
    </div>)
}

export default Chart;