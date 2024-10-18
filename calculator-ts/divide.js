"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = divide;
function divide(n1, n2) {
    if (n2 === 0) {
        return "division by zero is not possible";
    }
    else {
        return n1 / n2;
    }
}
