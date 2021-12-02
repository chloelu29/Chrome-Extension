//This file is run every time there's a popup!
// alert('popup!');
const init = function(){
    //create two buttons
    const button1 = document.createElement('div');
    button1.className = 'button1';
    document.body.appendChild(button1);

    const button2 = document.createElement('div');
    button2.className = 'button2';
    document.body.appendChild(button2);

    //GREEN BUTTON1: select all img on the page and make them blur
    const imgList = document.querySelectorAll('img')
    
    button1.addEventListener('click', addBlur)
    button2.addEventListener('click', removeBlur)

    function changeBlur() {
        for(img of imgList) {
            if (img.style.filter === 'blur(10px)') img.style.filter = 'none';
            else img.style.filter = 'blur(10px)';
        }

    };

    function addBlur(){
        for(img of imgList){
            img.style.filter = 'blur(10px)';
        }
        // setTimeout(addBlur(), 3000)
    };

    //how to turn it off
    function removeBlur(){
        for(img of imgList){
            img.style.filter = 'none';
        }
    }

    //add hotkey for blur
    document.addEventListener('keydown', hotKey);
    function hotKey(KeyEvent){
        console.log(KeyEvent)
        if(KeyEvent.shiftKey === true && KeyEvent.key === 'K'){
            changeBlur();
        }
        
    }

}
init()






