const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5002;

// Required for our POST requests to work
app.use(bodyParser.urlencoded({extended: true}));

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
    },
    {
        name: 'John Coltrane',
        born: 1926,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.post('/artist', (req, res) => {
    console.log(`In /artist POST with ${req.body}`);
    const artistToAdd = req.body;
    if(artistToAdd.name === 'Miles') {
        artistToAdd.type = 'Jazz';
    }
    artistListArray.push(artistToAdd);
    console.log(artistListArray);
    res.sendStatus(201); // created!
});

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});