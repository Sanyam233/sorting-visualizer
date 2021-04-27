import {newTrace, addToTrace, lastSorted} from './helpers'

export const insertionSort = (arr) => {

    const array = [...arr];

    let trace =  newTrace(array);

    for(let i = 1; i < array.length; i++){

        let key = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > key){
            addToTrace(trace, array,lastSorted(trace), [i, j]);
            array[j + 1] = array[j];
            j -=1;
        }

        addToTrace(trace, array, lastSorted(trace), [], [i, j+1]);
        addToTrace(trace, array, lastSorted(trace), [], [i, j+1]);

        array[j + 1] = key;
        addToTrace(trace, array,lastSorted(trace));

    }

    return trace;
}

export default insertionSort;