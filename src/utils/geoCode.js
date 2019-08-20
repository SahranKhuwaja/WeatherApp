const request = require('request');



const geoCode =(address,callBack)=>{

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2s5OCIsImEiOiJjanoycnIxY2IwMDY0M3BvODd1dnFnYWN6In0.SXPS-AqsKIqO2ix2vHrU2w`;

request({url,json:true},(error,{ body }={})=>{

      if(error){
         callBack('Unable to connect to location service!',undefined);

      }
      else if(body.message||body.features.length ===0){

        callBack('Unable to find location!',undefined);

      }
      else{

       callBack(undefined,{
        Location:  body.features[0].place_name,
        Longitude: body.features[0].center[0],
        Latitude:  body.features[0].center[1]})


       

      }



});






};

module.exports=geoCode;

   


