import {newTrace, addToTrace, swap, lastSorted} from './helpers'

export const selectionSort = (arr) => {

    const array = [...arr];

    const trace =  newTrace(array);

    for(let i = 0; i < array.length - 1; i++){

        let minIdx = i;

        for(let j = i + 1; j < array.length; j++){

            addToTrace(trace, array,lastSorted(trace),[minIdx, j]);

            if(array[j] < array[minIdx]){
                minIdx = j;
            }
        }

        addToTrace(trace, array, lastSorted(trace),[],[i, minIdx]);
        addToTrace(trace, array, lastSorted(trace),[],[i, minIdx]);
        
        swap(array, i, minIdx);

        addToTrace(trace, array, lastSorted(trace));

    }

    return trace;
}



export default selectionSort;

