const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// static content. this will be replaced with a database table
const songListArray = [
    {
        title: 'Take Five',
        length: '2:55',
        date_released: '1959-09-29'
    },
    {
        title: 'So What',
        length: '9:22',
        date_released: '1959-08-17'
    }
];

router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    pool.query(`SELECT * FROM "songs"`)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

router.post('/', (req,res) => {
    const newSong = req.body;
    console.log(newSong);

    const queryString = `INSERT INTO "songs" (title, length, date_released) VALUES
    ('${newSong.title}', '${newSong.length}', '${newSong.date_released}');`;

    pool.query(queryString)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;