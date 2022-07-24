const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const randomGift = {
    type: ['Pokemon', 'Pen', 'Power Ranger', 'Bag'],
    color: ['Red', 'Gold', 'Purple', 'Blue', 'White', 'Black'],
    pureness: ['75%', '85%', '95%', '100%']
};

const randomWord = (arr) => {
    let rdmIdx = randomNumber(arr.length);
    return arr[rdmIdx]
};


const pickWords = (obj) => {
    const pickedWords = [];
    for (let list in obj) {
        pickedWords.push(randomWord(obj[list]))
    }  
    return pickedWords;   
}

const formattedGift = (arr) => {
    console.log(arr.join('\n'))
 };

 formattedGift(pickWords(randomGift)); 