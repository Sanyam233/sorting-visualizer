import {newTrace, addToTrace, swap, lastSorted} from './helpers'

export const bubbleSort = (arr) => {

    const array = [...arr];

    const trace =  newTrace(array);

    for(let i = 0; i < array.length - 1;i++){

        for(let j = 0; j < array.length - i - 1; j++){

            addToTrace(trace, array,lastSorted(trace),[j, j+1]);

            if(array[j] > array[j + 1]){
                
                addToTrace(trace, array, lastSorted(trace),[],[j, j+1]);
                addToTrace(trace, array, lastSorted(trace),[],[j, j+1]);

                swap(array, j, j+1);
                
                addToTrace(trace, array, lastSorted(trace));

            }
        }
    }

    addToTrace(trace, array, lastSorted(trace));

    return trace;

}

