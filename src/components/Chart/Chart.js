import Bar from './Bar/Bar';
import './Chart.css';

const Chart = (props) => {

    const Bars = props.array.map((num,idx) => {
    
        return (<Bar key = {idx}
        height = {num} 
        stateA = {props.compareArr.includes(idx)}
        stateB = {props.swapArr.includes(idx)} 
        size = {props.size}/>);

    });
                
    return(
    <div className = 'chart' >
        {Bars}
    </div>);
}

export default Chart;