const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');
const weather = require('./utils/weather');

//Handle Bars
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

app.use(express.static(path.join(__dirname, '../public')));



app.get('',(req,res)=>{

    res.render('index',{
 
        title: 'Weather App',
        name: 'Sahran Khuwaja'


    });


});


app.get('/about',(req,res)=>{

res.render('about',{

    title: 'About Me',
    name: 'Sahran Khuwaja'

});

});

app.get('/help',(req,res)=>{

    res.render('help',{

        title:'Help',
        name: 'Sahran Khuwaja',
        message: 'This is one of the best site. Our team is ready to help you at anytime.'

    });

});




app.get('/weather',(req,res)=>{

if(!req.query.address){

    return res.send({
     
        error: 'You must provide an address!'

    });

}

geoCode(req.query.address,(error,{Location,Longitude,Latitude}={})=>{


if(error){

    return res.send({error});
}

weather(Longitude,Latitude,(error,forcastData)=>{

    if(error){
        return res.send({error});
    }

    res.send({

    Location,
    forcastData


    });

});




});




});




app.get('/help/*' ,(req,res)=>{


    res.render('404',{

        title:'404',
        name:'Sahran Khuwaja',
        message:'Help article not found!'

    });



});


app.get('*' ,(req,res)=>{

    res.render('404',{

        title:'404',
        name:'Sahran Khuwaja',
        message:'Page not found!'

    });


});





app.listen(3000,()=>{

console.log('Server is running!');

});