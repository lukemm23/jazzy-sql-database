const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool; // Class

// Connect Node to our database
const pool = new Pool({
    database: 'jazzy-ajax', // name of our database
    host: 'localhost', // where is your database?
    port: 5432, // this is the default port
    max: 10, // number of connections
    idleTimeoutMillis: 10000 // 10 seconds
});

// Moving to the database and will no longer be needed here
// const artistListArray = [
//     {
//         name: 'Miles Davis',
//         born: '1926-05-26',
//     },
//     {
//         name: 'Duke Ellington',
//         born: '1899-04-29',
//     }
// ];

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "artists";`;
    pool.query(queryText).then((result) => {
        console.log(result);
        res.send(result.rows); // result.rows will be an Array
    }).catch((error) => {
        console.log(`Error in GET /artists ${error}`);
        res.sendStatus(500);
    });
    console.log(`In /artist GET`);
    // res.send(artistListArray); // No longer needed
});

router.post('/', (req, res) => {
    console.log(`In /artist POST with`, req.body);
    const artistToAdd = req.body;
    const queryText = `INSERT INTO "artists" ("artist_name", "year_born")
                       VALUES ($1, $2);`;
    pool.query(queryText, [artistToAdd.name, artistToAdd.born])
        .then((responseFromDatabase) => {
            console.log(responseFromDatabase);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /artist ${error}`);
            res.sendStatus(500);
        });
    // artistListArray.push(artistToAdd); // No longer needed
    // console.log(artistListArray);
    // res.sendStatus(201); // created!
});

module.exports = router;