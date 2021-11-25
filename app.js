const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
    }
 }));

 app.use(express.json({
    limit: '50mb'
}));

const server = app.listen(3030, () => {
    console.log('Server started. port 3030..');
});

app.get('/', (req, res) => res.send('Hello World'));
