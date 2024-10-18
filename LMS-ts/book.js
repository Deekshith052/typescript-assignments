"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, title, authorId, availableCopies) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.availableCopies = availableCopies;
    }
    return Book;
}());
exports.Book = Book;
