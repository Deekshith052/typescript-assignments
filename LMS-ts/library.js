"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.authors = [];
        this.members = [];
    }
    Library.prototype.addAuthor = function (author) {
        this.authors.push(author);
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
    };
    return Library;
}());
exports.Library = Library;
