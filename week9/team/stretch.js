function removeTransition(e) {

  
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');



    if(localStorage.getItem(e.keyCode)){
        //mag Add na
        let mike=localStorage.getItem(e.keyCode);
            mike=parseInt(mike) + 1;
        let mikestyle=mike * 10;
        mikestyle=mikestyle+"px";
        localStorage.setItem(e.keyCode, mike);
        key.style.marginTop = mikestyle;

        if(localStorage.getItem(e.keyCode)==10){
            key.style.marginTop = "1rem";
            localStorage.setItem(e.keyCode, 0);
        }

    }
    else{
        localStorage.setItem(e.keyCode, 1);
    }
    

   
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);