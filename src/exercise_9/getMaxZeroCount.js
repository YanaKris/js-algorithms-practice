function getMaxZeroCount(raw) {
    let count = 0;
    let countMax = 0;
    for(let i = 0; i < raw.length; i++) {
        if(raw[i] === '0') {
            count++;
            if (countMax < count) {
                countMax = count;
            }
        }
        else count = 0;
    }
    return countMax;
}

console.log(getMaxZeroCount("1010010001"));
console.log(getMaxZeroCount("100100100"));
console.log(getMaxZeroCount("11111"));
console.log(getMaxZeroCount("1000100100001"));