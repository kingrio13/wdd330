const requestURL = 'https://pokeapi.co/api/v2/pokemon';
let  mike=0;

  function showPokemon(url){
    const listelementID=document.querySelector('#pokeContent');
    clearView();
    renderPokemon(url, listelementID);
    
  }

 
  //clear view content
  function clearView(){
    const listelementID=document.querySelector('#pokeContent');
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
    //console.log(url);
    getPokemon(url).then(function (newPoke) {
        const dataPokemon=newPoke.results;
        renderPokemonList(dataPokemon, listelementID);        
     
          renderNextPrev();
          renderPagination(newPoke.count);

          let lPrev=newPoke.previous;
          let lNext=newPoke.next;


          const btnPrev=document.querySelector("#prev");
          const btnNext=document.querySelector('#next');

          const listPagRef = document.querySelector('.pagiContainer .btnActive');
          


             if(lPrev){
            btnPrev.onclick = () =>{
              btnNext.removeAttribute('class');
              showPokemon(lPrev);
              
              //const listPagRef2 = document.querySelectorAll('.pagiContainer .btn_show');
             

              // if(listPagRef2.length==10){
              //   listPagRef2[0].classList.remove('btn_show');
              //   listPagRef2[0].classList.add('btn_hide');
              // }

              listPagRef.previousSibling.classList.add('btnActive');
              listPagRef.previousSibling.classList.add('btn_show');
              listPagRef.previousSibling.classList.remove('btn_hide');
             



            }}else{
             btnPrev.classList.add('disabled'); 
            }



           if(lNext){
            btnNext.onclick=()=>{
              btnPrev.removeAttribute('class');
              showPokemon(lNext);

              const listPagRef2 = document.querySelectorAll('.pagiContainer .btn_show');
             

              if(listPagRef2.length==10){
                listPagRef2[0].classList.remove('btn_show');
                listPagRef2[0].classList.add('btn_hide');
              }

              listPagRef.nextSibling.classList.add('btnActive');
              listPagRef.nextSibling.classList.add('btn_show');
              listPagRef.nextSibling.classList.remove('btn_hide');
             
              
            }}else{
              btnNext.classList.add('disabled')
            }

    })
  }




function activePagination(x, endToCreate){


        const listPag= document.querySelectorAll('.pagiContainer input');

        
        for(let i=0; i<=endToCreate; i++){
            if(i>=x-1 && i<=x+8){
              listPag[i].classList.remove('btn_hide');
              listPag[i].classList.add('btn_show');
            }
            else{   
                if(i<=endToCreate-1){
                listPag[i].classList.add('btn_hide');
                listPag[i].classList.remove('btn_show');
              }
            
            }
        }



        
        //need a for loop here. hide

        //first add class 

}

function defaultActive(){
    const btnActive=document.querySelector('.pagiContainer input');
    btnActive.classList.add('btnActive');

    defaultActive=function(){

    }
}


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

      if(x>10){
        btnCreate.setAttribute('class','btn_hide');
      }
      else{
        btnCreate.setAttribute('class','btn_show');
      }
        
      
      
      btnCreate.classList.remove('btnActive');
     
      
      btnCreate.addEventListener("click",()=>{
        let urlNum=(x*20)-20;
        const pokeURL=`https://pokeapi.co/api/v2/pokemon?offset=${urlNum}&limit=20`
        showPokemon(pokeURL);
     
        btnCreate.classList.add('btnActive');
        activePagination(x,endToCreate);
      })
      pokePagiCon.appendChild(btnCreate);
      poke_pagination.appendChild(pokePagiCon);
      if(x==1){
        defaultActive();
      }

    }

   


    renderPagination =function(){
      //we dont want this to run  again.
      const  btnCreate=document.querySelector('.pagiContainer .btnActive');
      btnCreate.classList.remove('btnActive');

    }



  }


  
 

  //view
  function renderNextPrev(){
    const parentID=document.querySelector('#poke_pagination')
    
    let ulList=document.createElement('div');
    ulList.setAttribute('class','btn_prev');
    let item=document.createElement('span');
    item.innerHTML=`<a id="prev" href="#">Previous</a>`;
    ulList.appendChild(item)
    parentID.appendChild(ulList);




    let ulList2=document.createElement('div');
    ulList2.setAttribute('class','btn_next');
    let item2=document.createElement('span');
    item2.innerHTML=`<a id="next" href="#">Next</a>`;
    ulList2.appendChild(item2)
    parentID.appendChild(ulList2);


    renderNextPrev = function(){
      //putting this empty as we dont want this to render again
    }



    
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