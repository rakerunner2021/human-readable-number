module.exports = function toReadable (number) {
    const simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teensNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decadeNumbers = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    
    let myNum = String(number).split('');
    let finalNum = "";
    if (myNum.length === 1) {
        finalNum = simpleNumbers[myNum[0]];
    } else if (myNum.length === 2 && myNum[0] === '1') {
        finalNum = teensNumbers[myNum[1]];
    } else if (myNum.length === 2 && myNum[0] >= '2' && myNum[1] === '0') {
        finalNum = decadeNumbers[myNum[0] - 2];
    } else if (myNum.length === 2 && myNum[0] >= '2' && myNum[1] !== '0') {
        finalNum = decadeNumbers[myNum[0] - 2] + " " + simpleNumbers[myNum[1]];
    } else if (myNum.length === 3 && myNum[1] === '1') {
        finalNum = simpleNumbers[myNum[0]] + " hundred " + teensNumbers[myNum[2]];
    } else if (myNum.length === 3 && myNum[1] === '0' && myNum[2] === '0') {
        finalNum = simpleNumbers[myNum[0]] + " hundred";
    }
    
    else if (myNum.length === 3 && myNum[1] !== '0' && myNum[2] !== '0' && myNum[1] !== '1') {
        finalNum = simpleNumbers[myNum[0]] + " hundred " +  decadeNumbers[myNum[1] - 2] + " " + simpleNumbers[myNum[2]];
    } else if (myNum.length === 3 && myNum[1] === '0' && myNum[2] !== '0' && myNum[1] !== '1') {
        finalNum = simpleNumbers[myNum[0]] + " hundred " + simpleNumbers[myNum[2]]; 
    } else if (myNum.length === 3 && myNum[2] === '0' && myNum[1] !== '0' && myNum[1] !== '1') {
        finalNum = simpleNumbers[myNum[0]] + " hundred " + decadeNumbers[myNum[1] - 2];
    } else if (myNum.length === 4 && myNum[1] === '0' && myNum[2] === '1') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + teensNumbers[myNum[3]];
    } else if (myNum.length === 4 && myNum[1] !== '0' && myNum[2] === '1') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + simpleNumbers[myNum[1]] + " hundred " + "and " + teensNumbers[myNum[3]];
    } 
    
    else if (myNum.length === 4 && myNum[1] === '0' && myNum[2] === '0' && myNum[3] !== '0') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + "and " + simpleNumbers[myNum[3]];
    } else if (myNum.length === 4 && myNum[1] !== '0' && myNum[2] === '0' && myNum[3] === '0') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + simpleNumbers[myNum[1]] + " hundred";
    } else if (myNum.length === 4 && myNum[1] === '0' && myNum[2] !== '0' && myNum[3] === '0') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + decadeNumbers[myNum[2] - 2];
    } else if (myNum.length === 4 && myNum[1] !== '0' && myNum[2] !== '0' && myNum[3] !== '0') {
        finalNum = simpleNumbers[myNum[0]] + " thousand " + simpleNumbers[myNum[1]] + " hundred " + decadeNumbers[myNum[2] - 2] + " " + simpleNumbers[myNum[3]];
    }
    return finalNum;
}
