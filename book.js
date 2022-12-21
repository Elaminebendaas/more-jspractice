function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const book1 = new Book('Naval Ravikant: The Almanack', 'Naval Ravikant', '200', true)

Book.prototype.details = function (){
        console.log(this.title + ' by '+ this.author + ", " + this.pages + " pages, " + this.read)
}
book1.details()