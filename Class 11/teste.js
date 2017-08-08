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
    this.index=0
    this.nextBook = function(){
    var books = this.books[this.index]
    books.render();
    this.index++
    }
};


function Book(img, title, descricao, link){
    this.img = img;
    this.title = title;
    this.descricao = descricao;
    this.link = link;

    this.render = function(){
      $("#picture").attr('src',this.img);
      $("#titulo").html(this.title);
      $("#paragrafo").html(this.descricao);
      $("#website").attr('href',this.link);   
    }

};

var book1 = new Book("https://vignette2.wikia.nocookie.net/harrypotter/images/0/00/Harry_James_Potter34.jpg/revision/latest?cb=20150826224904","Torre de Belem", "diwek", "https://www.google.pt");

var book2 = new Book("http://oud.girlscene.nl/images/library/articles/images01/girlscene/harryyyypotter5.jpg", "Mercado", "diwek", "https://www.google.pt");

var book3 = new Book("Pictures/Rua.jpg", "Almilcar Jorge", "diwek", "https://www.google.pt");


book1.render();
book2.render();
book3.render();

var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);




    
   




