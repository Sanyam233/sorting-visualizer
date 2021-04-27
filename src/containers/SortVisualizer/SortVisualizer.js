import {Component} from 'react';

import Chart from '../../components/Chart/Chart';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import ColorTray from '../../components/ColorTray/ColorTray';
import './SortVisualizer.css';

class SortVisualizer extends Component {

    state = {
        trace : [],
        array : [],
        compareArr : [],
        swapArr : [],
        sortedIndices : [],
        traceStep : -1,
        speed : 1,
        timeoutQueue : [],
    }

    componentDidMount(){
        this._reset(this.props.array);
    }

    componentDidUpdate(prevProps, prevState){

        if(prevProps.array !== this.props.array){
            console.log("THIS IS RUNNING");
            this._reset(this.props.array);

        }

        if(prevState.trace !== this.props.trace){
            this.clearQueue();
            this.setState({trace : this.props.trace});

        }

    }

    _reset = (array) => {
        this.setState({
            trace : [],
            array : [...array],
            compareArr : [],
            swapArr : [],
            sortedIndices : [],
            traceStep : -1,
        });
    }

    _setVisualization = (item) => {
        this.setState(() => ({
            array : item.array,
            compareArr : item.compare,
            swapArr : item.swap,
            sortedIndices : item.sortedIndices
        }));        
  
    }    

    speedSelector = (speed) => {

        const playing = this.state.timeoutQueue.length > 0;

        this.pause();
        this.setState({ 
            speed : speed
        }, () => {
            if(playing) this.continue();
        });
    }


    clearQueue = () => {

        this.state.timeoutQueue.forEach((item, i) => {
            clearTimeout(item);
        });

        this.setState({timeoutQueue : []});

    }


    play = (trace) => {

        this.props.repeatDisableHandler(false);

        const queue = [];

        const timer = 250 / this.state.speed;

        trace.forEach((item, i) => {
            let id = setTimeout((item) => {
                this.setState((prevState) => ({traceStep : prevState.traceStep + 1}),
                this._setVisualization(item));
            }, i * timer, item);

            queue.push(id);
        });

        let id = setTimeout(this.clearQueue, trace.length * timer);

        queue.push(id);

        this.setState({timeoutQueue : queue});

    }

    pause = () => {
        this.clearQueue();
    }


    continue = () => {
        const trace = this.state.trace.slice(this.state.traceStep);
        this.play(trace);
    }

    restart = () => {
        this.clearQueue();

        this.setState({
            array : [...this.props.array],
            traceStep : -1,
            compareArr : [],
            swapArr : [],
            sortedIndices : []
        });

        this.play(this.state.trace);

    }


    render(){

        let playerFunction = () => this.play(this.state.trace);

        if(this.state.traceStep !== -1){
            playerFunction = this.continue;
        }

        const playState = this.state.timeoutQueue.length > 0;

        return (
        <div className = 'sort-visualizer'>
                <Chart 
                array = {this.state.array} 
                compareArr = {this.state.compareArr} 
                swapArr = {this.state.swapArr}
                size = {this.props.size}
                />
                <ControlPanel 
                onPause = {this.pause}
                onPlay = {playerFunction}
                onSpeedSelect = {this.speedSelector}
                playing = {playState}
                selected = {this.props.selected}
                onRestart = {this.restart}
                repeatDisabled = {this.props.repeatDisabled}
                />
                <ColorTray/>
        </div>);
    }


}

export default SortVisualizer;