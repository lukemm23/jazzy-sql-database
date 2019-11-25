const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: "jazzy_ajax",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000

});

pool.on('connect', () => {
    console.log('WHAT UP connected to the DB!');
});

pool.on('error', (error) => {
    console.log(`BACK OFF ITS BROKEN! ${error}`);
});



module.exports = pool;