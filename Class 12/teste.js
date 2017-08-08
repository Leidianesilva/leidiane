/*var book1 = {
    title:"Torre de Belem",
    descricao:"diwek",
    imagem:"Pictures/Torre de Belem.jpg",
    link: "https://www.google.pt",
};

var book2 = {
    title:"Mercado",
    descricao:"diwek",
    imagem:"Pictures/Mercado.jpg",
    link: "https://www.google.pt",
};
var book3 = {
    title:"Almilcar Jorge",
    descricao:"diwek",
    imagem:"Pictures/Rua.jpg",
    link: "https://www.google.pt",
};

*/
//added on 01.08.17//

function Library(){
    this.books = []
    this.addBook = function(book){
        this.books.push(book);
    }
};


function Book(img, title, descricao, link){
    this.img = img;
    this.title = title;
    this.descricao = descricao;
    this.link = link;

    this.render = function(){
      $("#img").attr('src',this.img);
      $("#title").html(this.title);
      $("#descricao").html(this.descricao);
      $("#link").attr('href',this.link);   
    }

};
var book1 = new Book("Pictures/Torre de Belem.jpg","Torre de Belem", "diwek", "https://www.google.pt");




var Book = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


/*
function completeBook() {
    var html = `
    <div class="book col-md-4 cold-md-offset-4 col-sm-8 col-sm-offset-2"  >
        <img>
        <h1></h1>
        <p></p>
        <a></a>
    </div>
    
    `;
*/
    
/*
    $.each(library, function(index, book) {
        $("#bookContainer").append(html);
        $currentBook = $(".book:last-child");
        $nextBook = $currentBook.next();
        $("img",$currentBook).attr("src",book.imagem);
        $("h1",$currentBook).text(book.title);
        $("p",$currentBook).text(book.descricao);
        $("a",$currentBook).attr("href",book.link);
        });
    $(".book:first-child").addClass("active");
};    
completeBook(); 
/*

$("#buttonLike, #buttonDislike").click(function(){
    $currentBook = $(".active");
    $nextBook = $currentBook.next();
    $currentBook.removeClass("active");
    $nextBook.addClass("active");
});

var click = 0; 
function completeTable(){
    var table = document.getElementById()
    var row = table.insertRow(0)

    var html = `
  
        <tr>                
          <td></td>
          <td></td>
        </tr>`
    
    

