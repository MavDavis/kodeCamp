let select = document.querySelector('.countryFetch');
let submit = document.getElementById('submit');


select.addEventListener('click', loadCountry);
submit.addEventListener('click', checkForEmptyField)

function loadCountry(){
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', 'https://restcountries.com/', true);
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
            document.createElement('option');

        }
    }
    xhr.send()
}
function checkForEmptyField(e){
    e.preventDefault()
  let input = document.getElementsByClassName('input');
  let p =document.getElementById('p-tag');
  let error = document.createTextNode('fill in your details');
  let good = document.createTextNode('You have been successfully registered');
  p.style.display =" block"
  let timeout =  setTimeout(()=>{p.removeChild(error)}, 8000);
  let timeout2 =  setTimeout(()=>{p.removeChild(good)}, 8000);
  
   for(var i = 0; i <input.length; i++){
   }
   if((input[0].value== '')){
    p.appendChild(error);
    p.style.color='red'
    timeout;
   }else if((input[1].value== '')){
    p.appendChild(error);
    p.style.color='red' ;
    timeout;
   }else if((input[2].value== '')){
    p.appendChild(error);
    p.style.color='red'  ;
    timeout;
   }else if((input[3].value== '')){
    p.appendChild(error);
    p.style.color='red'  ;
   timeout;
   }else if((input[4].value== '')){
    p.appendChild(error);
    p.style.color='red';
   timeout;
   }
   
   else{
    p.appendChild(good);
    p.style.color='green';
   timeout2;
   }
  //can someone check why input[i].value isnt responding.
  if((input[0].value ='') || (input[1].value='') || (input[2].value='') || (input[3].value='') || (input[4].value='')){
console.log('solution to keep the values and ask for details')
}else{
  input[0].value ='';
   input[1].value ='';
   input[2].value ='';
   input[3].value ='';
   input[4].value ='';
}}
