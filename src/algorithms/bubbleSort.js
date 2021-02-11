import {newTrace, addToTrace, swap} from './helpers'

function bubbleSort(array){

    let trace =  newTrace(array);

    for(let i = 0; i < array.length - 1;i++){

        for(let j = 0; j < array.length - i - 1; j++){

            addToTrace(trace, array, [j, j+1]);

            if(array[j] > array[j + 1]){
                addToTrace(trace, array, [], [j, j+1]);
                swap(array, j, j+1);
                addToTrace(trace, array);

            }
        }
    }

    addToTrace(trace, array);


    return trace;

}

export default bubbleSort;