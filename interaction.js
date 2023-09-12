function changeBalloonSize(KeyboardEvent) {
    if (KeyboardEvent.code=='ArrowUp' || KeyboardEvent.code=='ArrowDown') {
        const balloon = document.getElementById('gameObject');
        const currentSize = parseFloat(getComputedStyle(balloon).getPropertyValue('font-size'));
        let newSize = 0;

        if(KeyboardEvent.code=='ArrowUp'){
            newSize = currentSize + 25;
           
            if (newSize>=400) {
               balloon.textContent = '💥';
               document.getElementById('gameOver').style.display = 'block';
               document.removeEventListener("keydown", changeBalloonSize);
               return;
            }
            /*balloon.style.fontSize = newSize+'px';*/
            balloon.style.setProperty('--newSize', newSize+'px'); 

        }else if(KeyboardEvent.code=='ArrowDown'){
            newSize = currentSize - 25;
            
            if (newSize<50) {
                return;
             }
            /*balloon.style.fontSize = newSize+'px';*/
            balloon.style.setProperty('--newSize', newSize+'px');
        }
    }
};

document.addEventListener("keydown", changeBalloonSize);   
    
/*
    // CSS-Klasse "animated-text" hinzufügen, um die Animation zu aktivieren
    balloon.classList.add("animated-text");

    // Nach Abschluss der Animation CSS-Klasse entfernen
    balloon.addEventListener("animationend", function() {
    balloon.classList.remove("animated-text");
    });*/



