import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../Logo/Logo'
import Dropdown from '../DropDown/DropDown'

const SideDrawer = (props) =>{

    return(<div className = {classes.SideDrawer} style = {{display : props.show ? 'block' : 'none'}}>
        <div className = {classes.Container}>
            <Logo/>
            <div className = {classes.NavigationHolder}>
                <Dropdown 
                        items = {props.algo_items} 
                        header = {props.algo_header}
                        heading = {props.algo_heading} 
                        selector = {props.algo_selector}
                        sidedrawer_render = {true}/>                        
                <Dropdown 
                        items = {props.size_items} 
                        header = {props.size_header}
                        heading = {props.size_heading} 
                        selector = {props.size_selector}
                        sidedrawer_render = {true}/>                    
            </div>
        </div>

    </div>)
}

export default SideDrawer;