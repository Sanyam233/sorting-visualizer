import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavigationBar.css';
import Dropdown from '../../DropDown/DropDown';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';

const ALGORITHM_ARRAY = {
    'Selection Sort' : 'selectionSort',
    'Bubble Sort' : 'bubbleSort',
    'Insertion Sort' : 'insertionSort', 
    'Quick Sort' : 'quickSort', 
    'Merge Sort' : 'mergeSort'
    };

const SIZE_ARRAY = {
    '10' : 10,
    '20' : 20,
    '50' : 50,
    '75' : 75,
    '100' : 100,
};

class NavigationBar extends Component{

    render(){

        const isVisible = this.props.sideDrawerDisplay

        return(
        <div className = 'navigation-bar'>
            <SideDrawer
            sizeItems = {SIZE_ARRAY} 
            sizeHeader = '100'
            sizeSelector = {this.props.sizeSelector}
            algoItems = {ALGORITHM_ARRAY} 
            algoHeader = 'Selection Sort'
            algoSelector = {this.props.sortSelector}
            display = {isVisible}/>
            <Backdrop toggle = {this.props.sideDrawerToggle} show = {isVisible}/>
            <div className = 'navigation-bar__container'>
                <button 
                className = 'navigation-bar__menu' 
                onClick = {this.props.sideDrawerToggle}>
                        <FontAwesomeIcon icon = {isVisible ? 'times' : 'bars'}/>
                </button>
                <Logo/>
                <div className = 'navigation-bar__links'>
                    <Dropdown 
                        items = {SIZE_ARRAY} 
                        header = '100'
                        selector = {this.props.sizeSelector}
                        widthProp = {80}/>                    
                    <Dropdown 
                        items = {ALGORITHM_ARRAY} 
                        header = 'Selection Sort'
                        selector = {this.props.sortSelector}
                        widthProp = {160}/>
                </div>
            </div>
        </div>
        );
    }
}

export default NavigationBar;