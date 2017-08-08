
console.log("helloworld");

var novoNumero = 10;
var xhr = new XMLHttpRequest();

xhr.open("get","parte_do_ficheiro.html");

xhr.onreadystatechange = function(){
    var DONE = 4;
    var OK = 200;
    if(xhr.readyState === DONE){
        if(xhr.status === OK){
            console.log(xhr.responseText);
            document.getElementById("parte1").innerHTML = xhr.responseText;
        }else{
            console.log("Error"+xhr.status);
        }
    }
};

function mudaParte1(){
    xhr.send(null); 
}


$("#button1").click(function(){
    $.get("parte_do_ficheiro.html").done(function(data){
        console.log(data);
        $("#parte1").html(data);
}).fail(function(data){
    console.log("Error"+data);
    })
})

/* the website is going to be saved on the terminal (to access it, use the local host)/*/