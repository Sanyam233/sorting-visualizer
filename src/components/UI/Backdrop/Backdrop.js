import './Backdrop.css';

const Backdrop = (props) =>(<div 
    className = 'backdrop'
    onClick = {props.toggle}
    style = {{display : props.show ? 'block' : 'none'}}></div>);

export default Backdrop;