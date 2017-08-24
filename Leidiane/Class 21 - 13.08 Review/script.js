console.log("helloworld");

//there are 3 types of variables
var inteiro = 10;
console.log(10);

var decimal = 10.0;
console.log(decimal);

var string = "sugestao do filipe";
console.log(string);

var xpto = "10";    //this is a string
console.log(xpto);

var booleano = true;
console.log(booleano)

var  xpto2 = "false";
console.log(xpto2);

var inteiro1 = 10;
var inteiro2 = 20;
console.log(inteiro1+inteiro2);

var string1 = "10";
var string2 = "20";
console.log(string1+string2);

var xpto3 = "10";
var xpto4 = 20;
console.log(xpto3+xpto4);

console.log(xpto3+xpto4+xpto4);

console.log(xpto+(xpto4+xpto4));
console.log(xpto4+xpto4+xpto3);

var res = xpto4+xpto4+xpto3;
console.log(string1-string2);

var string3 = "hello world";
var string4 = "hello";
console.log(string3-string4);
console.log(xpto3);

var xpto5 = Number(xpto3);
console.log(xpto5);

var xpto6 = Number(string3);
console.log(xpto6);

var xpto8 = "true";
var xpto9 = Boolean(xpto8);

var xpto7 = Boolean("true");
console.log(xpto7); 

var xpto10 = "10";
var xpto11 = "10";
console.log(xpto10*xpto11);     //this line is the same thing like the one below.
console.log(Number(xpto10)*Number(xpto11));


console.log(2 ==4);
console.log(2+2 ==4);
console.log(2+2 == 4 && false);

console.log(2+2 == 4 || false);
console.log(2+(2==4));
console.log(2+(2+2==4));

console.log(2==2 && 4==4 || 5==2);
console.log(2==2 && (4==4 || 5==2));
console.log(2==2 || (4==4 && 5==2));
console.log(2==2 || (4==4 && 5==2));
console.log(2==2 || 4==4 && 5==2);  // 2==2 is true, therefore, the rest doesnt matter. It still being true

//creating arrays
var arr1 = [];
var arr2 = [0,1,2,3,4,5,6,7];
var arr3 = new Array(10);

console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(arr2[7]);

var arr4 = [7,6,5,4,3,2,1];
console.log(arr4[3]);

//to know the length of the array
console.log(arr4.length);

//Adding new elements to an array
console.log(arr4.push(0));
console.log(arr4);

arr4[0] = 0;
console.log(arr4);

//POP removes the last element
console.log(arr4.pop());
console.log(arr4);

//Shift moves the first element
console.log(arr4.shift());
console.log(arr4);

//removes the elements according to the position
console.log(arr4.splice(2,2));  // the number (2 refers to the index poistion, 2 the number of elements to be removed)
console.log(arr4);

//Creating a Dictiionary
var dict1 = {
    "chave": "valor"
}
console.log(dict1);
console.log(dict1.chave);
console.log(dict1["chave"]); //the chave will alway be a string.

console.log(dict1[0]);      //this is undefined, because we dont access a dictionary by index.

dict1["chave2"] = 1000;
console.log(dict1);

//Creating a dimensional matrix:
var matriz = [[1,2,2],[4,5,6],[7,8,9]];
console.log(matriz[1]); // parte 4,5,6 do array

var parte = matriz[1];
console.log(parte);

console.log(parte[1]);
console.log(matriz[1][1]); //index 1 of the first array, and index 1 of the position of the array index 1).


//Creating a Dictionary inside of a dictionary (it is like an genealogic tree)
var dictondict = {
    "dict2":{
        "chave3":"valor"
    },
    "outrodict":{
        "chave1":"valor1",
        "dict2":{
            "chave2":"valor2"
        }
    }
}
console.log(dictondict);
console.log(dictondict["outrodict"]["dict2"]["dict2"]);

dictondict["outrodict"]["dict2"] ["chave4"] = "valor4";

console.log(dictondict);


//Arrays with a dictionary inside
//var dictionarray = [{"chave":"valor"},dictiondict,matriz];
//console.log(dictionarray);

//console.log(dictionarray[2][2][2]);


//Loop for
for(var i=0; i<=9;i++){
    console.log("iteracao:"+i);
}

for (var i=9; i>=0; i--){
    console.log("iteracao:"+i);
    }
console.log(matriz.length);

for(var i=0; i<matriz.length; i++){
    console.log(matriz[i]);
    console.log(matriz[i].length);
    for (var j=0; i<matriz[i].length; j++){
        console.log(matriz[j]);
    }
}

for (var i in matriz){      //Same as for(var i=0; i<matriz.length; i++){
    for (var j in matriz[i]){       // same as for (var j=0; i<matriz[i].length; j++){
        console.log(matriz[i][j]);

    }
}

//types of loop
while (2==2){
    console.log("o prof e toto");
}

for(;;){
    console.log("young");
}














