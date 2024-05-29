const getRandomQuote = require("../models/quoteModel");

function getQuote(req, res) {

    const quote = getRandomQuote();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    const response = { message: 'Success!', status: 200, data: quote };
    const jsonData = JSON.stringify(response);
    res.write(jsonData);
    res.end();
}


module.exports = getQuote;