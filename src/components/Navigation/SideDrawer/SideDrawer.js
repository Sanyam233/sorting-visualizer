import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import Dropdown from '../../DropDown/DropDown';

const SideDrawer = (props) =>{

    const isVisible = props.display;

    return(<div className = 'sideDrawer' style = {{display : isVisible ? 'block' : 'none'}}>
        <div className = 'sideDrawer__container'>
            <Logo/>
            <div className = 'sideDrawer__navigation'>
                <Dropdown 
                        items = {props.algoItems} 
                        header = {props.algoHeader}
                        selector = {props.algoSelector}
                        widthProp = {160}/>                        
                <Dropdown 
                        items = {props.sizeItems} 
                        header = {props.sizeHeader}
                        selector = {props.sizeSelector}
                        widthProp = {80}
                />                    
            </div>
        </div>

    </div>)
}

export default SideDrawer;