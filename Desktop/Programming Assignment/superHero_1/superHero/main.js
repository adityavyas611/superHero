let superHeroNames = [
    'SUPERMAN', 'THOR', 'ROBIN', 'IRONMAN', 'GHOSTRIDER',
    'CAPTAINAMERICA', 'FLASH', 'WOLVERINE', 'BATMAN', 'HULK', 'BLADE',
    'PHANTOM', 'SPIDERMAN', 'BLACKWIDOW', 'HELLBOY', 'PUNISHER']; // Array of Super Hero Names

let deCode =
{
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z']
}; // Object to Store Key value pairs

let i = 0,
    lenInsVal = 0,
    NumArray = [], // to Create Array of given number by user
    combineArray = [], // combine multiple value array into one
    selArray = [], // Array to store the heros with matching letters
    countHero = {}; // To count the occurences of superHero


/**********************************************************
 Function to find superhero using given characters by users
 chr = single character
 idx = index value of outer array
 heroArr = superHero names
 ***********************************************************/

findHero = (chr, idx, heroArr) => {

    heroArr.forEach((value) => {

        if (chr == value[idx] && lenInsVal == value.length) {
            selArray.push(value);
        }
    }
    );
    return selArray;
}

/***************************************
 Function to create an array of numbers
 numValue = Value of number [4855]
 returns Number array = [4,8,5,5]
 ***********************************************************/

genNumArray = numValue => {

    while (i < numValue) {
        NumArray.unshift(numValue % 10);
        numValue = parseInt(numValue / 10);
    }
    return NumArray;
}

/*********************************
 Function to perform operations
 value = userInput
**********************************/

genMain = value => {

    selArray = [],
        i = 0,
        lenInsVal = 0,
        NumArray = [],
        combineArray = [],
        countHero = {};

    value = value.split(" ");
    value = value.map(Number);

    if (value[0] !== 0) {
        return 'Not Valid Code Entered!';
    }
    else {
        NumArray = genNumArray(value[1]);

        lenInsVal = NumArray.length; // Calculating the length of the numArray

        NumArray.forEach((value, index) => { 

            combineArray.push(deCode[value]);

            for (let i = 0; i <= combineArray[0].length; i++) {

                selArray = findHero(combineArray[0][i], index, superHeroNames);
            }
            combineArray = [];

        });

        selArray.forEach(countVal => {
            countHero[countVal] = (countHero[countVal] || 0) + 1;
        }); //counting the superhero based on occurences

        selArray = Object.keys(countHero).reduce((a, b) => countHero[a] > countHero[b] ? a : b);

        return selArray.toString();
    }
}

module.exports = genMain;