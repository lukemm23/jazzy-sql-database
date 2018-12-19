const express = require('express');

const app = express();
const PORT = 5002;

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

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});