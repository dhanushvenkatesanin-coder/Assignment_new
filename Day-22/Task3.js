let book={
    title:"Psycology of monet",
    author:"Morgen Housel",
    page:180,
    describe:function(){
        console.log(`Title: ${this.title}`);
        console.log(`author:${this.author}`);
        console.log(`page:${this.page}`);
        
        
        
    }
}
let {title,author}=book;
console.log(title);
console.log(author);