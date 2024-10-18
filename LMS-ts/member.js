"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }
    Member.prototype.borrowBook = function (book) {
        if (book.availableCopies > 0) {
            this.borrowedBooks.push(book);
            book.availableCopies--;
            console.log("".concat(this.name, " borrowed \"").concat(book.title, "\""));
        }
        else {
            console.log("\"".concat(book.title, "\" is not available for borrowing."));
        }
    };
    Member.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.availableCopies++;
            console.log("".concat(this.name, " returned \"").concat(book.title, "\""));
        }
        else {
            console.log("".concat(this.name, " does not have \"").concat(book.title, "\" borrowed."));
        }
    };
    return Member;
}());
exports.Member = Member;
