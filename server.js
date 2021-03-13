const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');
const { get } = require('http');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));

require('./routes/api-routes.js')(app);

//homepage
app.get('/',(res,req)=>{

    res.render('index.html')
});


//scheduling page
app.get('/scheduling',(res,req) =>{

});

//custom scheduled page per appointment
app.get('/scheduling/:name', (res,req) =>{

});


//for creating new appointment
app.post('/scheduling/new-scheduling',(res,req)=>{

});

//confirming appointment
app.post('schedule/admin/confirm/:id', (res,req, auth)=> {

});




app.listen(PORT)