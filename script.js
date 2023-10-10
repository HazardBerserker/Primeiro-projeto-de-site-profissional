let count = 1;
document.getElementById("radio1").checked = true;

//chama a função de 2 em 2 segundos
setInterval( function(){
    nextImage();
}, 5000);


function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}

AOS.init();