function newTrace(arr){
    return [{
        array : [...arr],
        groupA : [],
        groupB : [],
    }]
}
function addToTrace(trace, arr, grpA = [], grpB = []){
    trace.push({
        array : [...arr],
        groupA : [...grpA],
        groupB : [...grpB],
    })
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export {newTrace, addToTrace, swap}