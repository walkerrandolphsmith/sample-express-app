import express from 'express';

let host = process.env.HOST | 'localhost';
let port = process.env.PORT | 3000;

let app = express();

app.use('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, error => {
    if(error) {
        console.error(error);
    } else {
        console.info(`==> Listening on port ${port}. Open up http://${host}:${port}/ in your browser.`);
    }
});
