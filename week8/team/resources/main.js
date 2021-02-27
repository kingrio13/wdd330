const requestURL = 'https://pokeapi.co/api/v2/pokemon';


  //controller
  function showPokemon(url){
    const listelementID=document.querySelector('#pokeContent');
    clearView();
    renderPokemon(url, listelementID);
  }

  //clear view content
  function clearView(){
    const parentID=document.querySelector('#poke_pagination');
    const listelementID=document.querySelector('#pokeContent');
    parentID.innerHTML="";
    listelementID.innerHTML="";
  }


  //model
  function getPokemon(url){
    return fetch(url).then(function (response) {
     return response.json();
    })
  }

  //controller and model
  function renderPokemon(url, listelementID){
    getPokemon(url).then(function (newPoke) {
      // console.log(newPoke);
        const dataPokemon=newPoke.results;
        renderPokemonList(dataPokemon, listelementID);        
        if(newPoke.count>1){
          //view of next and previous
          renderNextPrev();
          renderPagination(newPoke.count);
          
          //event Listener for Next and Previous
          eventNextPrev(newPoke.previous, newPoke.next);
          }

    })
  }


//if you cannot rewerite the for loop, maybe addevent later on.



  function renderPagination(pokeCount){
    // console.log('check if this one is showed always')

    const poke_pagination=document.querySelector('#poke_pagination');
    const pokePagiCon=document.createElement('div');
    pokePagiCon.setAttribute('class','pagiContainer');
    const endToCreate=Math.ceil(pokeCount/20);

    for(let x=1; x<=endToCreate; x++){
      const btnCreate=document.createElement('input');
      btnCreate.setAttribute('type','button');
      btnCreate.setAttribute('value',x);
      btnCreate.addEventListener("click",()=>{
        let urlNum=(x*20)-20;
        const pokeURL=`https://pokeapi.co/api/v2/pokemon?offset=${urlNum}&limit=20`
        showPokemon(pokeURL);
      })
      pokePagiCon.appendChild(btnCreate);
      poke_pagination.appendChild(pokePagiCon);
      
    }
  }


  //model
  function specificPokemon(url){
    console.log("show specific pokemon and information", url);
  }
 
  //eventListener
  function eventNextPrev(lPrev, lNext){
    const btnPrev=document.querySelector("#prev");
    const btnNext=document.querySelector('#next');

    if(lPrev){
    btnPrev.addEventListener("click", prevClick=>{
      showPokemon(lPrev);
    })
  }


  if(lNext){
    btnNext.addEventListener("click",nextClick=>{
      showPokemon(lNext);
    })
  }

  }


  //view
  function renderNextPrev(){
    const parentID=document.querySelector('#poke_pagination')
    let item=document.createElement('li');
    let ulList=document.createElement('ul');
    item.innerHTML=`<a id="prev" href="#">Previous</a> <a id="next" href="#">Next</a>`;
    ulList.appendChild(item)
    parentID.appendChild(ulList);
  }

  function renderPokemonList(newpokemon, listelementID){
      let ulList=document.createElement('ul');
      newpokemon.forEach(newpoke => {
        ulList.appendChild(pokemonList(newpoke));
      });
      listelementID.appendChild(ulList);      
  }


//View + Conttoller
function pokemonList(newpoke){
    let item=document.createElement('li');
    item.innerHTML=`<a href="#" data-url="${newpoke.url}">${newpoke.name}</a>`;

    item.addEventListener("click", pokeURL=>{
      pokeURL.preventDefault();
      getPokemonInfo(newpoke.url);
    })
    return item;
}

//model
function getPokemonInfo(url){
  getPokemon(url).then(function (newPoke) {
      console.log(newPoke);
      renderPokeInfo(newPoke);
  });
}

//view
function renderPokeInfo(pokemon){
const specificPokemon_container=document.querySelector('#specificPokemon');
specificPokemon_container.textContent="";
const specificPokemon=document.createElement('div');
specificPokemon.setAttribute('class', 'pokemonInfoContainer');



let pokeIMG=document.createElement('img');
pokeIMG.setAttribute('src',pokemon.sprites.other.dream_world.front_default);
specificPokemon.appendChild(pokeIMG);

let pokemonName=document.createElement('h1');
pokemonName.innerHTML=pokemon.name;
specificPokemon.appendChild(pokemonName);

let pokeWH=document.createElement('p');
pokeWH.innerHTML=`<span>Height:${pokemon.height}</span>
<span>Weight:${pokemon.weight}</span>
`;
specificPokemon.appendChild(pokeWH);


let pokemonStatContainer=document.createElement('div');
pokemonStatContainer.setAttribute('class', 'pokeStats');
let pokemonStats=document.createElement('h3');
pokemonStats.innerHTML="STATS"
pokemonStatContainer.appendChild(pokemonStats);


for(const stats in pokemon.stats){
  let statLi=document.createElement('span');
  statLi.innerText=`${pokemon.stats[stats].stat.name} - ${pokemon.stats[stats].base_stat}`;
  pokemonStatContainer.appendChild(statLi);
}

specificPokemon.appendChild(pokemonStatContainer);


let pokemonAbilitiesContainer=document.createElement('div');
pokemonAbilitiesContainer.setAttribute('class', 'pokeAbility');
let pokemonAbilities=document.createElement('h3');
pokemonAbilities.innerHTML="Abilities"
pokemonAbilitiesContainer.appendChild(pokemonAbilities);
for(const stats in pokemon.abilities){
  let statLi=document.createElement('span');
  statLi.innerText=`${pokemon.abilities[stats].ability.name}`;
  pokemonAbilitiesContainer.appendChild(statLi);
}
specificPokemon.appendChild(pokemonAbilitiesContainer);


specificPokemon_container.appendChild(specificPokemon);
}









  window.addEventListener("load",()=>{
      showPokemon(requestURL)
  })