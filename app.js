const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const randomGift = {
    type: ['Pokemon', 'Pen', 'Power Ranger', 'Bag'],
    color: ['Red', 'Gold', 'Purple', 'Blue', 'White', 'Black'],
    pureness: ['75%', '85%', '95%', '100%']
};

const yourGift = [];

for (let caract in randomGift) {
    
    let rdmIndex = randomNumber(randomGift[caract].length);

    switch(caract) {
        
        case 'type':
            yourGift.push(`Your random gift is a : "${randomGift[caract][rdmIndex]}".`)
            break
        
        case 'color':
            yourGift.push(`Which color is : "${randomGift[caract][rdmIndex]}".`)
            break

        case 'pureness':
            yourGift.push(`Its pureness is : "${randomGift[caract][rdmIndex]}".`)
            break

        default: yourGift.push("Error: can't identify your gift")
    }
};

const formattedGift = (arr) => {
   console.log(yourGift.join('\n'))
};

formattedGift(yourGift);