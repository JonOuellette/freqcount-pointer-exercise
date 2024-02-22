// add whatever parameters you deem necessary
function freqCounter(str){
    let frequencies = new Map();

    for (let val of str){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function constructNote(msg, ltrs) {
    let msgMap = freqCounter(msg);
    let ltrsMap = freqCounter(ltrs);

    for (let key of msgMap.keys()){
        if(ltrsMap.has(key) === false) return false;  
        if(msgMap.get(key) > ltrsMap.get(key)) return false;
    }
    return true;
}