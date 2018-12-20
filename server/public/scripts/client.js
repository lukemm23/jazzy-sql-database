$(document).ready(onReady);

function onReady() {
    // Add our click handler for submit artist
    $('#submit-artist').on('click', sendArtistToServer);

    // load data from the server, put it on the DOM
    getArtistData();
    getSongData();    
}

function sendArtistToServer() {
    console.log('In function sendArtistToServer');
    // What we want to send to the server as data
    const artistToSend = {name: $('#artist-name').val(), 
                          // .val() will always return a string
                          born: parseInt($('#artist-born').val())};
    // Send the data to the server
    $.ajax({
        method: 'POST',
        url: '/artist',
        data: artistToSend
    })
}

// get artist data from the server
function getArtistData() {
    // Make AJAX GET request here
}

// get song data from the server
function getSongData() {
    // Make AJAX GET request here
}