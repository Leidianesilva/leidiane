function Library(){
    this.books = [ ];
    this.addBook = function(book){
        this.books.push(book)
    };
    this.index =0
    this.nextBook=function(){
        var book = this.books [this.index]
        book.render();
        this.index++
    };
};

function Book (img, title, descricao, link)
    this.img = img;
    this.title = title;
    this.descricao = descricao;
    this.link = link;
    this.render = function(){
        $("#picture").attr("src",this.img);
        $("#titulo").html(this.title);
        $("#paragrafo").html(this.descricao);
        $("#website").attr("href",this.link);
    };

var Library = new Library();

var Book1 = new Book ("pictures/Torre de Belem.jpg", "Torre de Belem", "diwek", "https//:www.google.com");
var Book2 = new Book ("pictures/Mercado.jpg", "Mercado", "diwek","https://www.google.com");
var Book3 = new Book ("pictures/Rua.jpg", "Rua Almilcar Jorge", "diwek","https://www.google.com");


Library.addBook(book1);
Library.addBook(book2);
Library.addBook(book3);

book1.render();

$("#buttonLike,#buttonDislike").click(function(){
    library.nextBook();


});