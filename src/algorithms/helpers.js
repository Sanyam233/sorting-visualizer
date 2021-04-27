// function newTrace(arr){
//     return [{
//         array : [...arr],
//         groupA : [],
//         groupB : [],
//     }]
// }
// function addToTrace(trace, arr, grpA = [], grpB = []){
//     trace.push({
//         array : [...arr],
//         groupA : [...grpA],
//         groupB : [...grpB],
//     })
// }

// function swap(array, i, j){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
// }

const newTrace = (arr) => {
    return [{
        array : [...arr],
        compare : [],
        swap : [],
        sortedIndices : []
    }];
}
const addToTrace = (trace, arr, sort, cmp = [], swp = []) => {
    trace.push({
        array : [...arr],
        compare : [...cmp],
        swap : [...swp],
        sortedIndices : [...sort]
    });
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const lastSorted = (trace) => {
    return trace[trace.length - 1].sortedIndices;
}

export {newTrace, addToTrace, swap,lastSorted}