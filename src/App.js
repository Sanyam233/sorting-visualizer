import {Component} from 'react';

import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import SortVisualizer from './containers/SortVisualizer/SortVisualizer';
import * as algorithms from './algorithms/index';
import './App.css';


class App extends Component{

    ALGORITHMS = {
        'selectionSort' : algorithms.selectionSort,
        'bubbleSort' : algorithms.bubbleSort,
        'insertionSort' : algorithms.insertionSort,
        'quickSort' : algorithms.quickSort,
        'mergeSort' : algorithms.mergeSort
    }

    state = {
        array : [],
        trace : [],
        algorithm : 'selectionSort',
        size : 100,
        sideDrawerDisplay : false,
        repeatDisabled : true
    }


    componentDidMount() {
        this._generateArray();
    }

    _generateArray = () => {

        const arr = [];

        const size = this.state.size;

        for(let i = 0; i < size; i++){
            const num = Math.round((Math.random() * (370 - 50)) + 50);
            arr.push(num);
        }   

        this.setState({
            array : arr,
        }, this._generateTrace)        
    }

    _generateTrace = () =>{
      
        const nums = [...this.state.array];

        const sort = this.ALGORITHMS[this.state.algorithm];

        if(sort){

            const trace = sort(nums);
            
            this.setState({
                trace : trace,
            })
        }
    }

    sizeSelector = (size) => {
        
        this.setState({
            size : size,
        }, this._generateArray);

    }

    sortSelector = (algorithm) => {

        this.repeatDisableHandler(true);

        this.setState({ 
            algorithm : algorithm
        }, this._generateArray)
    }

    sideDrawerToggle = () =>{

        this.setState((prevState) => {
            return{
                sideDrawerDisplay : !prevState.sideDrawerDisplay
            }
        });
    }

    repeatDisableHandler = (disabled) => {

        this.setState({repeatDisabled : disabled});

    }

      
    render(){

        return (
            <div className = 'app'>
                <NavigationBar sortSelector = {this.sortSelector}
                sizeSelector = {this.sizeSelector}
                sideDrawerToggle = {this.sideDrawerToggle}
                sideDrawerDisplay = {this.state.sideDrawerDisplay}/>
                <SortVisualizer
                array = {this.state.array}
                trace = {this.state.trace}
                size = {this.state.size}
                selected = {this.state.algorithm !== ''}
                repeatDisabled = {this.state.repeatDisabled}
                repeatDisableHandler = {this.repeatDisableHandler}
                />
            </div>
        )

    }

}

export default App;