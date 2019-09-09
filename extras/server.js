const http = require('http');

const callBack = (req, res) => {
    res.write('Hello Shubham!!!');
    res.end();
}

const server = http.createServer(callBack);

server.listen(8001, () => console.log('App listening on port 8001!!!!'));
