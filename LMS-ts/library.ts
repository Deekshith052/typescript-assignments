import { Author } from "./authors";
import { Book } from "./book";
import { Member } from "./member";

export class Library {
    private books: Book[] = [];
    private authors: Author[] = [];
    private members: Member[] = [];

    addAuthor(author: Author): void {
        this.authors.push(author);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }
}
