const quotes = require('../data/quotes');
const generateRandomIndex = require('../utils/generateRandomIndex');

function getRandomQuote() {
    const randomIndex = generateRandomIndex(quotes.length - 1);
    return quotes[randomIndex];
}


module.exports = getRandomQuote;