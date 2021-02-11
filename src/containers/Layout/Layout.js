import React, {Component} from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import classes from './Layout.module.css';
import './Layout.css';
import selectionSort from  '../../algorithms/selectionSort';
import Chart from '../../components/Chart/Chart';
import bubbleSort from '../../algorithms/bubbleSort';
import insertionSort from '../../algorithms/insertionSort';
import quickSort from '../../algorithms/quickSort';
import mergeSort from '../../algorithms/mergeSort';
import Button from '../../components/Button/Button'
import PlaybackSpeed from '../../components/PlaybackSpeed/PlaybackSpeed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Layout extends Component{

    ALGORITHMS = {
        'selectionSort' : selectionSort,
        'bubbleSort' : bubbleSort,
        'insertionSort' : insertionSort,
        'quickSort' : quickSort,
        'mergeSort' : mergeSort
    }

    constructor(props){
        super(props);

        this.state = {
            arr : [],
            trace : [],
            groupA : [],
            groupB : [],
            groupC : [],
            groupD : [],
            algorithm : "",
            size : 100,
            speed : 150,
            show : false,

        }

        this.sortSelector = this.sortSelector.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
    }

    componentDidMount() {
        this._generateArray(this.state.size);
    }

    _generateArray = (size) => {

        let arr_copy = []

        for(let i = 0; i < size; i++){
            let num = Math.round((Math.random() * (370 - 50)) + 50);
            arr_copy.push(num);
        }

        this.setState({
            arr : arr_copy,
        })        
    }

    _generateTrace = (trace) =>{
        this.setState({
            trace : trace,
        })
    }

    _setVisualization = (item) => {
        this.setState(() => ({
            arr : item.array,
            groupA : item.groupA,
            groupB : item.groupB,
            groupC : item.groupC,
            groupD : item.groupD,
        }))        

    }

    sizeSelector = (size) => {
        this.setState({
            size : size,
        })

        this._generateArray(size);
    }

    sortSelector(algorithm){
        this.setState({ 
            algorithm : algorithm
        })
    }

    speedSelector = (speed) => {
        this.setState({ 
            speed : speed
        })
    }

    sideDrawerToggle = () =>{
        this.setState((prevState) => {
            return{
                show : !prevState.show
            }
        })
    }
        
    

    sortHandler(){

        if(this.state.algorithm !== ""){

            let generatedTrace = this.ALGORITHMS[this.state.algorithm](this.state.arr);

            this._generateTrace(generatedTrace)

            generatedTrace.forEach((item, i) =>{

                setTimeout((item) =>{
                    this._setVisualization(item);
               }, i * this.state.speed, item)

            })      
        }  

    }
        

    
    render(){

        return (
            <div>
                <NavigationBar sortSelector = {this.sortSelector}
                sizeSelector = {this.sizeSelector}
                sideDrawerToggle = {this.sideDrawerToggle}
                show = {this.state.show}/>
                <div className = {classes.ChartDisplay}>
                    <div className = {classes.Container}>
                        <div className = {classes.ChartContainer}>
                            <Chart arr = {this.state.arr} 
                            groupA = {this.state.groupA} 
                            groupB = {this.state.groupB}
                            size = {this.state.size}/>
                            <div className = {classes.ControlPanel}>
                                <button 
                                className = {classes.RedoButton}
                                onClick = {() => this._generateArray(this.state.size)}>
                                    <FontAwesomeIcon icon = "redo"/>
                                </button>
                                <Button disabled = {this.state.algorithm === "" ? true : false} sort = {this.sortHandler}/>
                                <PlaybackSpeed speedSelector = {this.speedSelector}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

    }

}


export default Layout;
