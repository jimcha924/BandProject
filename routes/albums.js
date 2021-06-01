//import express
const express = require('express');
//invoke the express router 
const router = express.Router();
let dataFile = require('../data/data.json');

//pull in data
let fifAlbums = dataFile.albums;


router.get('/albums', (req, res) => {

    // an array that holds  all of the artwork
    let pagePhotos = []

    fifAlbums.forEach(albumObj => {
        pagePhotos = pagePhotos.concat(albumObj.artwork) 
    })
    
    res.render('albums', {
        artwork: pagePhotos,
        albums: fifAlbums,
        pageTitle: "FIF -- Albums",
        pageID: 'albums'
    })
})

router.get('/albums/:albumsid', (req, res) => {

    let photos = [];
    let albums = [];

    fifAlbums.forEach(albumObj =>{
        
        if(albumObj.shortname == req.params.albumsid){
            photos = albumObj.artwork;
            albums.push(albumObj)
        }
    })
    // console.log(albumPhotos);
    
    
    res.render('albums', {
        artwork: albumPhotos,
        albums: albums,
        pageTitle: `FIF Albums -- ${albums[0].name}`,
        pageID: 'albumDetail'
    })

})

module.exports = router;