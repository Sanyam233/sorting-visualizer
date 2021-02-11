import {newTrace, addToTrace} from './helpers'

function mergeSort(array){

    let trace = newTrace(array);
    
    function merge(array, l,m, h){

        let l1 = m - l + 1;
        let l2 = h - m;
    
        let array1 = [];
        let array2 = [];
    
        for(let i = 0; i < l1; i+=1){
            array1[i] = array[l + i]
        }
    
        for(let j = 0; j < l2; j++){
            array2[j] = array[m + 1 + j]
        }
    
        let i = 0; 
        let j = 0; 
        let k = l;
    
        while((i < l1) && (j < l2)){

            addToTrace(trace, array, [l + i, m + 1 + j]);

            if(array1[i] <= array2[j]){
                addToTrace(trace, array, [], [k, l + i]);
                array[k] = array1[i];
                addToTrace(trace, array);

                i+=1;
            }else{
                addToTrace(trace, array, [], [k, m + 1 + j]);
                array[k] = array2[j];
                addToTrace(trace, array);
                j+=1;
            }
    
            k+=1;
    
        }
    
        while(i < l1){
            addToTrace(trace, array, [], [k, l + i]);
            array[k] = array1[i];
            addToTrace(trace, array);
            i+=1;
            k+=1;
        }
    
        while(j < l2){
            addToTrace(trace, array, [], [k, m + 1 + j]);
            array[k] = array2[j];
            addToTrace(trace, array);
            j+=1;
            k+=1;
        }    
    
    }
    
    
    
    function recursiveSort(array, l, h){
    
        if(l < h){
    
            let m = Math.floor((l + h)/2);
            recursiveSort(array, l, m);
            recursiveSort(array, m + 1, h);
            merge(array, l, m, h);
        }
    }

    recursiveSort(array, 0, array.length - 1);

    return trace;
}

export default mergeSort;