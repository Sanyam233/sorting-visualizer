import React, {Component} from 'react';
import classes from './NavigationBar.module.css';
import Dropdown from '../DropDown/DropDown';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Logo from '../Logo/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavigationBar extends Component{

    render(){

        let algorithm_array = {
        "Selection Sort" : "selectionSort",
        "Bubble Sort" : "bubbleSort",
        "Insertion Sort" : "insertionSort", 
        "Quick Sort" : "quickSort", 
        "Merge Sort" : "mergeSort"
        };

        let size_array = {
            "10" : 10,
            "20" : 20,
            "50" : 50,
            "75" : 75,
            "100" : 100,
        };

        return(<div className = {classes.NavigationBar}>
            <SideDrawer show = {this.props.show}
            size_items = {size_array} 
            size_header = {"100"}
            size_heading = {"Size"} 
            size_selector = {this.props.sizeSelector}
            algo_items = {algorithm_array} 
            algo_header = {"Sort Algorithm"}
            algo_heading = {""} 
            algo_selector = {this.props.sortSelector}/>
            <Backdrop toggle = {this.props.sideDrawerToggle} show = {this.props.show}/>
            <div className = {classes.Container}>
                <button className = {classes.BurgerMenu} onClick = {this.props.sideDrawerToggle}><FontAwesomeIcon icon = "bars"/></button>
                <Logo/>
                <div className = {classes.NavigationLinkContainer}>
                    <Dropdown 
                    items = {size_array} 
                    header = {"100"}
                    heading = {"Size"} 
                    selector = {this.props.sizeSelector}
                    width = {60}
                    />                    
                    <Dropdown 
                    items = {algorithm_array} 
                    header = {"Sort Algorithm"}
                    heading = {""} 
                    selector = {this.props.sortSelector}
                    width = {130}

                    />
                </div>
            </div>

        </div>)
    }
}

export default NavigationBar;