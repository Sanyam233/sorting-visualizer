import DropDown from '../../DropDown/DropDown';


const SPEED_ARRAY = {'x1' : 1, 'x2' : 2, 'x3' : 3, 'x4' : 4};

const SpeedControls = (props) =>{

    return(
    <div>
        <DropDown items = {SPEED_ARRAY} 
        header = {"x1"}
        selector = {props.speedSelector}
        width = {60}/>
    </div>)
}

export default SpeedControls;