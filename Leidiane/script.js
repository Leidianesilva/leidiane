var likes = 0;

/*$('.Like').click(function(){
    likes++
    jQuery('#teste').text(likes)
});

$('.Dislike').click(function(){
    if(likes<=0){
        likes=0;}
    else{
        likes--}
    jQuery('#teste').text(likes)
});


$('.buttonLike').click(function(){
    $currentBook=$('.book.active');
    var index = $('.book').index($currentLivro);
    library[index].option = "Like";
})

$('.buttonDislike').click(function(){
    $currentBook = $('.book.active');
    var index = $('.book').index($currentBook);
    library[index].option = "Dislike"
})*/

/*$('.row').on('click','.like', function(){
    $book = $(this).parents('.book');
    $book.removeClass("active");
});*/

/*    $opinion=[];
$('.row').on('click', '.like', function(){
    $opinion.push('.like');
    showNext($(this));
});
$('.row').on('click', '.dislikke', function(){
    $opinion.push('.dislike');
    showNext($(this));
});

function showNext($button) {
    $book = $button.parents('.book');
    $book.removeClass("active");
    $nextBook = $book.next();
    $nextBook.addClass("active");

};*/

/*var erro = falsse;
var contador = 10;
while (!erro){
    if contador ==0{
        erro=true;
    }
    console.log(contador--);
}*/


/*$("button.like").click(function() {
    var $next = $(".book.active").removeClass("active").next(".book");
    if ($next.length >= 0) {
        $next.addClass("active");
    }
    else {
        $(".book:first").addClass("active");
    }
});

$("button.dislike").click(function() {
    var $next = $(".book.active").removeClass("active").next(".book");
    if ($next.length >= 0) {
        $next.addClass("active");
    }
    else {
        $(".book:first").addClass("active");
    }
});*/
   

var book1 = {
    title: "Torre de Belem",
    descricao: "Lorem ipsum dolor sit a",
    img: "Pictures/Torre de Belem.jpg"
}

var book2 = {
    title: "Mercado",
    descricao: "Sed ut perspiciatis unde omnis iste",
    img: "Pictures/Mercado.jpg"
}

var book3 = {
    title: "Rua Almilcar Jorge",
    descricao: "At vero eos et accusamus et iusto dignissimo",
    img: "Pictures/Rua.jpg"
}

var library = [book1, book2, book3];

function loadData(){
    var html=`
<div class="book col-md-4 cold-md-offset-0 col-sm-8 col-sm-offset-2">
    <img class="img-thumbnail"> <h1></h1>
    <p></p>
    <br>
    <a href="http://torrebelem.gov.pt">Torre de Belem</a>
    <br /> 
    <a href="http://google.com">Google</a>
</div>
    `;

    $.each(library,function(index, elemento){
        $("#bookContainer").append(html);
        $book = $(".book:last-of-type");

        $("h1",$book).text(elemento.title);
        $("p",$book).text(elemento.descricao);
        $("img",$book).attr("src",elemento.img);
    });
    $(".book:first-of-type").addClass("active");

}

loadData();


/*$('.buttonLike,' .buttonDislike').click(function(){
    $currentBook= $('.book.active');
    $nextBook= $currentBook.next('.book');
    if($nextBook.length >0){
        $currentBook.removeClass("active");
        $nextBook.addClass("active");
    }
    else{
        $('#mainPage').hide();
        $('#endpage').show();
    }
})*/


$('#buttonLike, #buttonDislike').click(function(){
    $currentBook= $('.book.active');
    $nextBook= $currentBook.next('.book');

    $currentBook= $('.book.active');
    var index = $('.book').index($currentBook);
    library[index].opinion = $(this).attr('data-Opinion');
    
    if($nextBook.length >0){
        $currentBook.removeClass("active");
        $nextBook.addClass("active");
    }
    else{
        $('#mainPage').hide();
        $('#endPage').show();
        completeTag();counterLikes();
    }
});


function completeTag(){
    $.each(library,function(index, book){

    var html = "<tr>";
    html += "<td>";
    html += book.title;
    html += "</td>";
    html += "<td>";
    html += book.opinion;
    html += "</td>";
    html += "</tr>";

    $("#books tbody").append(html);
    });
}



    function counterLikes(){
        var counter=0;
        var counterDislike=0;
        $.each(library,function(index, book){
            if(book.opinion=="like"){
                counter++
            } else {
                counterDislike++    
            }
    });
        $("#contador1").text(counter);
        $("#contador2").text(counterDislike);
}
