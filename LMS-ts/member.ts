import { Book } from "./book";

export class Member {
    borrowedBooks: Book[] = [];

    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}

    borrowBook(book: Book): void {
        if (book.availableCopies > 0) {
            this.borrowedBooks.push(book);
            book.availableCopies--;
            console.log(`${this.name} borrowed "${book.title}"`);
        } else {
            console.log(`"${book.title}" is not available for borrowing.`);
        }
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.availableCopies++;
            console.log(`${this.name} returned "${book.title}"`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}
