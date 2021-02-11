import React, { Component } from 'react';
import classes from './DropDown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DropDown extends Component {


    state  = {
        selected_item : this.props.header,
        toggle : false,
    }


    alogrithmSelectionHandler = (name, index) =>{

        this.setState((prevState) => {
            return {
            selected_item : name,
            toggle : !prevState.toggle,
            }
        })

        this.props.selector(this.props.items[name]);

    }

    dropDownMenuHandler = () => {
        this.setState((prevState) => {
            return {
                toggle : !prevState.toggle,
            }
        })

    }

    render() {

        const MenuList = Object.keys(this.props.items).map((item,i) => <li 
        className = {classes.MenuItem} 
        key = {i}
        onClick={() => this.alogrithmSelectionHandler(item, i)}
        >
            {item}
        </li>)

        return (
                <div className = {classes.DropDownContainer}>
                    <div className = {this.props.sidedrawer_render ? classes.SidedrawerDropdown :classes.DropDown}
                    style = {{minWidth : this.props.width}}>
                        <div className = {classes.Textholder}>
                            <span className = {classes.Text}>{this.state.selected_item}</span> 
                        </div>     
                        <button className = {classes.DropDownButton}
                        onClick = {this.dropDownMenuHandler}><FontAwesomeIcon icon = {this.state.toggle ? "chevron-up" :"chevron-down"} /></button>  
                        <ul className = {classes.DropDownMenu} style = {{display : this.state.toggle ? 'block' : 'none'}}>
                        {MenuList}
                        </ul>  
                    </div>      
                </div>                
        )
    }


}

export default DropDown;