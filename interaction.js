function changeBalloonSize(KeyboardEvent) {
    if (KeyboardEvent.code=='ArrowUp' || KeyboardEvent.code=='ArrowDown') {
        const balloon = document.getElementById('gameObject');
        const currentSize = parseFloat(getComputedStyle(balloon).getPropertyValue('--startSize'));
        let newSize = 0;

        if(KeyboardEvent.code=='ArrowUp'){
            newSize = currentSize + 50;
           
            if (newSize>=400) {
               balloon.textContent = '💥';
               document.getElementById('gameOver').style.display = 'block';
               document.removeEventListener("keydown", changeBalloonSize);
               return;
            }
            balloon.style.setProperty('--startSize', newSize+'px');

        }else if(KeyboardEvent.code=='ArrowDown'){
            newSize = currentSize - 50;
            
            if (newSize<50) {
                return;
             }
            balloon.style.setProperty('--startSize', newSize+'px');
        }
    }
};

document.addEventListener("keydown", changeBalloonSize);



