document.addEventListener("keydown", KeyboardEvent => {
    if(KeyboardEvent.code=='ArrowUp'){
        const balloon = document.getElementById('gameObject');
        const currentSize = parseFloat(getComputedStyle(balloon).getPropertyValue('font-size'));
        const newSize = currentSize + 25;
        balloon.style.fontSize = newSize+'px';
    }else if(KeyboardEvent.code=='ArrowDown'){
        console.log('hello');
    }
});
    