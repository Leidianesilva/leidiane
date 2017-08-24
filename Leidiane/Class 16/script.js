console.log("helloworld");


// Creating a stack - Data Structure
function Stack(){       //the function stack is a constructor.
    this.data = [];

    this.push = function(element){     //this is an attribute (objective to add info into the pile)
        this.data.push(element);
    } 
    this.pop = function(){       
        var result = this.data[this.data.lenght-1];

        this.data.remove(this.data.lenght-1);    //remove data from the pile
        return result;
    }
};



//Doing the instance
var stack1 = new Stack();   //the function is an empty constructor

stack1.push(2);   //data 2 is added on the pile 
stack1.push(3);    //data 3 is added on the pile  
stack1.push(4);     
stack1.push(5);     

   
//-------Stack for the example below (cars)
function Car(brand,model){
    this.brand = brand;
    this.model = model;
}
//Adding cars into a pile (1st creating the variables)
var hondaCivic = new Car("Honda", "Civic");
var citroenC4 = new Car ("Citroen", "C4");


//Adding cars into a pile
var ferroVelho = new Stack();

ferroVelho.push(citroenC4);
ferroVelho.push(hondaCivic);
//


// Using the data structure "Queue"

function Queue(){
    this.data = []

    this.enqueue = function(element){       //objective to use the enqueue on the project for the books
        this.data.push(element); 
    }

    this.dequeue = function(){
        var result = this.data[0];   
        this.data.splice(0,1);
        return result;
    }; 
};

var queue = new Queue();


