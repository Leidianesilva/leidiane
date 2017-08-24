$('.primeiro').click(function(){
    $("#startPage").hide();
    $("#mainPage").show();
    $("#primeiroTitulo").hide();
    });

function Library(){
    this.books = [ ];
    this.addBook = function(book){
        this.books.push(book)
    };
    this.index =1
    this.nextBook=function(){
        var book = this.books [this.index]
        book.render();
        this.index++
    };
};

function Book(img, title, descricao, link){
    this.img = img;
    this.title = title;
    this.descricao = descricao;
    this.link = link;
    this.likes=0;
    this.dislikes=0;
    this.render = function(){
        $("#picture").attr("src",this.img);
        $("#titulo").html(this.title);
        $("#paragrafo").html(this.descricao);
        $("#website").attr("href",this.link);
    };
};

var library = new Library();

var book1 = new Book ("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Torre_de_belem_vista_do_tejo.jpg/300px-Torre_de_belem_vista_do_tejo.jpg", "Torre de Belem", "diwek", "https//:www.google.com");
var book2 = new Book ("https://3.bp.blogspot.com/-rRdfovy4Dw4/WAXu4UmrmfI/AAAAAAAAOxc/bV8DKmEoMrQYPFLKc2Zchjz59i6-15EdwCLcB/s640/mercado%2Bsan%2Bmiguel%2Bnoite.jpg", "Mercado", "diwek","https://www.google.com");
var book3 = new Book ("https://upload.wikimedia.org/wikipedia/commons/7/76/Tranv%C3%ADa_553_en_Rua_da_Concei%C3%A7%C3%A3o%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_01.JPG", "Rua Almilcar Jorge", "diwek","https://www.google.com");


library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

book1.render();

$('#buttonLike').click(function(){
    if (library.index < library.books.length){
        library.books[library.index-1].likes++;
    
        library.nextBook();
    }
    else{
        library.books[library.index-1].likes++;
        $("#mainPage").hide();
        $("#endPage").show();
        counterLikes()
    };
});

$('#buttonDislike').click(function(){
    if (library.index < library.books.length){
        library.books[library.index-1].dislikes++;
    
        library.nextBook();
    }
    else{
        library.books[library.index-1].dislikes++;
        $('#mainPage').hide();
        $("#endPage").show();
        counterLikes();
    }
});

function counterLikes(){
    var counterLike=0;
    var counterDislike=0;
    $.each(library.books, function(index, book){
        if(book.likes==1){
            counterLike++
        }else{
            counterDislike++
        }
    });

    $("#contador1").text(counterLike);
    $("#contador2").text(counterDislike);
};




       
