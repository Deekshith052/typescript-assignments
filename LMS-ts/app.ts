import { Author } from "./authors";
import { Book } from "./book";
import { Library } from "./library";
import { Member } from "./member";

const library = new Library();

const author1 = new Author(1, "abc");
const author2 = new Author(2, "xyz");
library.addAuthor(author1);
library.addAuthor(author2);

const book1 = new Book(1, "aaaa", author1.id, 5);
const book2 = new Book(2, "bbbb", author1.id, 3);
const book3 = new Book(3, "cccc", author2.id, 1);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new Member(1, "mno", "mno@example.com");
const member2 = new Member(2, "ijk", "ijk@example.com");
library.addMember(member1);
library.addMember(member2);


member1.borrowBook(book1); 
member2.borrowBook(book1); 
member1.returnBook(book1); 
member2.borrowBook(book3);
member1.returnBook(book3);
member1.borrowBook(book3);

