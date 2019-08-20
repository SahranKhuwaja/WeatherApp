console.log('Js is loaded!');


const form = document.querySelector('#form1');
const search = document.querySelector('#location');
const oneM = document.querySelector('#firstP');
const secondM = document.querySelector('#secondP');

form.addEventListener('submit',(e)=>{

e.preventDefault();

oneM.textContent = 'Loading...';
secondM.textContent = ' ';

fetch(`http://localhost:3000/weather?address=${search.value}`).then((Response)=>{

  Response.json().then((data)=>{
 

if(data.error){
    oneM.textContent = data.error;

}else{

    oneM.textContent = data.Location;
    secondM.textContent = data.forcastData;
}


  });


});





});

