//1...Object literal
const book  = {
    title : 'book name',
    author : 'author name',
    isRead : false,
    toggleReadStatus(){
        this.isRead=!this.isRead;
    },
    describe(){
        if((typeof this.title === 'string') && (typeof this.author === 'string') && this.title && this.author){
            if(this.isRead){
            return `${this.title} by ${this.author} [Read].`;
            }
            else{
            return `${this.title} by ${this.author} [UnRead].`;
            }
        }
        return 'title or author is missing!';

    }
};


//2...factory function
const bookFactory=(title="" , author="" , isRead=false)=>{
return {
    title , 
    author , 
    isRead,
     toggleReadStatus(){
          this.isRead=!this.isRead;
    },
    describe(){
        if((typeof this.title === 'string') && (typeof this.author === 'string') && this.title && this.author){
            if(this.isRead){
            return `${this.title} by ${this.author} [Read].`;
            }
            else{
            return `${this.title} by ${this.author} [UnRead].`;
            }
        }
        return 'title or author is missing!';

    },
}
};

//3...constructor function
function bookConstructor(title , author , isRead=false){
    this.title=title;
    this.author = author;
    this.isRead=isRead;


}
bookConstructor.prototype.toggleReadStatus= function(){
    this.isRead=!this.isRead;

}

bookConstructor.prototype.describe=function(){
     if((typeof this.title === 'string') && (typeof this.author === 'string') && this.title && this.author){

        return this.isRead?  `${this.title} by ${this.author} [Read].` :  `${this.title} by ${this.author} [UnRead].`;
          
        }
        return 'title or author is missing!'; 
}

//4...class
class Book{
    constructor(title , author , isRead=false){
        this.title=title;
        this.author=author;
        this.isRead=isRead;
    }
   toggleReadStatus(){
    this.isRead=!this.isRead;

   } 
   describe(){
     if((typeof this.title === 'string') && (typeof this.author === 'string') && this.title && this.author){

        return this.isRead?  `${this.title} by ${this.author} [Read].` :  `${this.title} by ${this.author} [UnRead].`;
          
        }
        return 'title or author is missing!'; 
   }
}

const bookFactoryObject=bookFactory('Pride and Prejudice' , 'Jane Austen' , true);
const bookConstructorObject = new bookConstructor('Little Women' , 'Louisa May Alcott' , false);
const bookClassObject=new Book('The Little Prince' , 'Antoine de Saint-Exupéry' , true);

console.log(bookFactoryObject.describe());
console.log(book.describe());
console.log(bookConstructorObject.describe());
console.log(bookClassObject.describe());


//bookConstructorObject.toggleReadStatus();
//console.log(bookConstructorObject.describe());
//bookClassObject.toggleReadStatus();
//console.log(bookClassObject.describe());