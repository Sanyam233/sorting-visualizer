import {newTrace, addToTrace} from './helpers'

function insertionSort(array){

    let trace =  newTrace(array);

    for(let i = 1; i < array.length; i++){

        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            addToTrace(trace, array, [i, j]);
            array[j + 1] = array[j];
            j -=1;
        }

        addToTrace(trace, array, [], [i, j+1]);
        array[j + 1] = key;
        addToTrace(trace, array, []);

    }

    return trace;
}

export default insertionSort;