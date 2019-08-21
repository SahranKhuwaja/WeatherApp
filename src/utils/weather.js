const request = require('request');


const weather = (longitude,lattitude,callBack)=>{

const url = `https://api.darksky.net/forecast/8d6e3c84ff3f88fdd434ce5e11b281da/${encodeURIComponent(lattitude)},${encodeURIComponent(longitude)}?units=si`;

request({url,json:true},(error,{ body }={})=>{


    if(error){

        callBack('Unable to connect to weather service!',undefined);

    }
    else if(body.error){

        callBack('Unable to find weather!',undefined);

    }
    else{

        callBack(undefined,`${body.daily.summary} It is currently ${body.currently.temperature} degrees out there. The High temperature is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is ${body.currently.precipProbability}% chance of rain.`);


    }







});



};


module.exports = weather;