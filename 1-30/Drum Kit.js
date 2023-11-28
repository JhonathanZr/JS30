//Utilizamos el window para escuchar el evento de keydown
window.addEventListener("keydown", (e)=>{
//Así cada vez que le damos una tecla en la ventana window tendremos un keyCode de cada tecla
//Creamos una vairable con .querySelector seleccionando el audio + data-key + key code
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

//Se crea una variable key para utilizarla para la transición 
    let keyAdd = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//Cada vez que el keyCode NO sea correcto con el html data-key se cancela la funcion
    if(!audio) return

//Al ser correcto el keyCode aplicamos un currentTime para que el tiempo de reproduccion sea instantaneo   
    audio.currentTime = 0;

//Y un .play para que suene el audio
    audio.play();

//Se agrega la clase playing para los nuevos atributos css (transición)
    keyAdd.classList.add('playing');
})



window.addEventListener("transitionend", ()=>{
    let keyRemove = document.querySelector('.playing')
    if(keyRemove){
        keyRemove.classList.remove('playing')
    }
})
