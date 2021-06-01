//import express
const express = require('express');
const app = express();
//invoke the express router 

let port = process.env.PORT || 3000;

//public
app.use(express.static('public')) // static assets, css, js, images, videos
app.set('view engine', 'ejs');


//routes
app.use(require('./routes'))
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));
app.use(require('./routes/api'));





// app.get('/', (req, res) => {
    
//     res.render('index')
// })

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);

})