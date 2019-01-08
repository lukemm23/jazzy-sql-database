const express = require('express');
const router = express.Router();

const artistListArray = [
    {
        name: 'Miles Davis',
        born: '1926-05-26',
    },
    {
        name: 'Duke Ellington',
        born: '1899-04-29',
    }
];

router.get('/', (req, res) => {
    console.log(`In /artist GET`);
    res.send(artistListArray);
});

router.post('/', (req, res) => {
    console.log(`In /artist POST with ${req.body}`);
    const artistToAdd = req.body;
    artistListArray.push(artistToAdd);
    console.log(artistListArray);
    res.sendStatus(201); // created!
});

module.exports = router;