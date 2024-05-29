const http = require('http');
const dotenv = require('dotenv');
const getQuote = require('./controllers/quoteController');
const notFound = require('./controllers/notFound');


// app configurations
dotenv.config();

const port = process.env.API_PORT || 3000;

const handleRequest = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/quote' && method === 'GET') {
        getQuote(req, res);
    } else {
        notFound(req, res);
    }
};

const server = http.createServer(handleRequest);


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
