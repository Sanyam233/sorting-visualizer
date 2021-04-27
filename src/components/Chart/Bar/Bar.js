import './Bar.css';

const Bar = (props) => { 

    let classes = 'bar ';

    if (props.stateA) {
        classes += 'groupA';
    }else if (props.stateB) {
        classes += 'groupB';
    }

    const barWidth = (100 / props.size) * 2;

    const margin = barWidth / 2;

    return (
    <div 
        className = {classes} 
        style = {{
            height : props.height, 
            width : `${barWidth}%`, 
            margin : `0px ${margin}px`
            }}>
    </div>);

}

export default Bar;