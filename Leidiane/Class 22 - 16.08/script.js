var myVar;
var start = new Date;

$('#btnstart').click(function(){
    if (myVar !== undefined)
        return;
    
    myVar = setInterval(function() {
    var offset=0;// = (1000*60*59) ;		//for debugging
    var diff = new Date - start + offset;	//this contains miliseconds since it was started
                
    var hour = Math.floor(diff / (1000*60*60)); 	// (miliseconds * by seconds * by minutes = finding the number of miliseconds in a hour)
    var min = Math.floor((diff % (1000*60*60)) /  (1000*60)); //(miliseconds * minutes = finding the number of miliseconds in a minute)
    var sec = Math.floor(((diff % (1000*60*60)) %  (1000*60)) / 1000); 
    var ms = Math.floor(((diff % (1000*60*60)) %  (1000*60)) % 1000); 		
    
    //00:00:00
    $('#Timer').text(hour + ":"+min+ ":"+sec+ ":"+ms);
    }, 10);		//this is the refresh interval in miliseconds
})

$('#btnpause').click(function(){
    clearInterval(myVar);
    myVar=undefined;
});


$('#btnreset').click(function(){
    clearInterval(myVar);

}	);