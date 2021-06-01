//import express
const express = require('express');
//invoke the express router 
const router = express.Router();

let dataFile = require('../data/data.json');//converted to javascript object


router.get('/', (req, res) => {
    
    let fifDiscography = dataFile.albums;

    let albumPhotos = []

    fifDiscography.forEach(albumObj =>{
        albumPhotos = albumPhotos.concat(albumObj.artwork)
    })
    console.log(albumPhotos);
    
    
    res.render('index', {
        artwork: albumPhotos,
        pageTitle: "The FIF Page You NEED",
        pageID: 'home'
    })

})
module.exports = router;