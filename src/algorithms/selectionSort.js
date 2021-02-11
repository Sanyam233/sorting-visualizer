import {newTrace, addToTrace, swap} from './helpers'

function selectionSort(arr){

    let array = [...arr];

    let trace =  newTrace(array);

    for(let i = 0; i < array.length - 1; i++){

        let min_idx = i;
        for(let j = i + 1; j < array.length; j++){

            addToTrace(trace, array, [min_idx, j]);

            if(array[j] < array[min_idx]){
                min_idx = j;
            }
        }

        addToTrace(trace, array, [], [i, min_idx]);

        swap(array, i, min_idx);

        addToTrace(trace, array);

    }

    return trace;
}

export default selectionSort;

