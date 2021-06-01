const express = require('express');
const router = express.Router();

const feedbackData = require('../data/feedback.json');

const fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/feedback', (req,res) => {

    res.render('feedback', {
    pageTitle: "FIF Band - Feedback Form",
    pageID: feedbackData
});
})

router.get('/api', (req, res) => {

    feedbackData.unshift('form data', req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
        
        if(err){
            console.log(err);
        }
    })
    res.json(feedbackData);
})

module.exports = router;