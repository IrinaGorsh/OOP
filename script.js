class Book {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    }
    
    
    displayInfo = () => {
    console.log(` ${this.title} by ${this.author} has  ${this.pages} pages.`);
    };
    }
    
    const bookInfo = new Book("The Lord of the Rings", "J.R.R.Tolkien", 1178);
    
    bookInfo.displayInfo();

    class Student {
        constructor(name,  age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        }
        
        
        displayInfo = () => {
        console.log(
        `Name: ${this.name} 
         Age: ${this.age}  
         Grade: ${this.grade}.`);
        };
    }
        
        const studentInfo1 = new Student("Hermione Granger", 16, 5);
        
        studentInfo1.displayInfo();
    