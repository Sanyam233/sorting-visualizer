import {newTrace, addToTrace, swap} from './helpers'

function quickSort(array){

    let trace = newTrace(array);

    function partisan(array, low, high){

        let pivot = array[high];
        let counter_index = low;
    
        for(let i = low; i < high; i++){
            addToTrace(trace, array, [high, i]);
            if(array[i] <= pivot){
                addToTrace(trace, array,[], [counter_index, i]);
                swap(array, counter_index, i);
                addToTrace(trace, array);
                counter_index+=1;
            }
        }

        addToTrace(trace, array,[], [counter_index, high]);

        swap(array, counter_index, high);

        addToTrace(trace, array);

        return counter_index;
    
    }    

    function recursiveSort(array, low, high){

        if(low < high){
    
            let pivot = partisan(array, low, high);
    
            recursiveSort(array, low, pivot - 1);
            recursiveSort(array, pivot + 1, high);
    
        }
    } 

    

    recursiveSort(array, 0, array.length - 1);

    return trace;


}

export default quickSort;