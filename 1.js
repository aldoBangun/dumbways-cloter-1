function stringToChar(str){
    const result = [];
    for(const c of str){
        result.push(c.charCodeAt());
    }
    return result;
}

function toBin(n){
    const bin = [];

    for(let i = 7; i>=0; i--){
        if(n>=2**i){
            n = n - (2**i);
            bin.push(1);
        } else {
            bin.push(0);
        }
    }

    return bin;
}

function stringToBin(input){
    const result = stringToChar(input);

    return result.map(r =>{
        return toBin(r).join('');
    }).join(' ');
}



const userInput = prompt('Input String To Convert : ');

alert(`Result:\n${stringToBin(userInput)}`);