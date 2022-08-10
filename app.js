function display(a){
  var html ='';
  for(i=0; i<a.abilities.length; i++){
    html+=a.abilities[i].ability.name+'<br>';
  }
  document.querySelector('#output0').innerHTML=html
}

function ability(){
  var p=document.querySelector('#poke').value;
  fetch('https://pokeapi.co/api/v2/pokemon/'+p)
  .then(response => response.json())
  .then(json => display(json))
}
