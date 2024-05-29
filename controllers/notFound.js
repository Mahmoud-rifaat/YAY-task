function notDefined(req, res) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    const response = { message: 'Not found', status: 404 };
    const jsonData = JSON.stringify(response);
    res.write(jsonData);
    res.end();
}


module.exports = notDefined;