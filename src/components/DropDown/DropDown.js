import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './DropDown.css';
import DropDownItems from './DropDownItems/DropDownItems';



class DropDown extends Component {

    state  = {
        selectedItem : this.props.header,
        dropdownDisplay : false,
    }


    itemSelector = (name) =>{

        this.setState((prevState) => {
            return {
            selectedItem : name,
            dropdownDisplay : !prevState.dropdownDisplay,
            }
        });

        this.props.selector(this.props.items[name]);

    }

    _dropdownHandler = () => {
        this.setState((prevState) => {
            return {
                dropdownDisplay : !prevState.dropdownDisplay,
            }
        })

    }

    render() {

        const displayStyle = this.state.dropdownDisplay ? 'block' : 'none';
        const chevronType = this.state.dropdownDisplay ? 'chevron-up' : 'chevron-down';

        return (
            <div className = 'drop-down' style = {{width : this.props.widthProp}}>
                <ul className = 'drop-down__default'>
                    <div className = 'drop-down__default__container'>
                        <li className = 'drop-down__selected'>{this.state.selectedItem}</li>
                        <button onClick={this._dropdownHandler}>
                            <FontAwesomeIcon icon = {chevronType}/>
                        </button>
                    </div>
                </ul>
                <ul className = 'drop-down__menu' style = {{display : displayStyle}}>
                    <DropDownItems 
                    onItemSelection = {this.itemSelector} 
                    items = {this.props.items}
                    />
                </ul>                
            </div>      
        )
    }


}

export default DropDown;