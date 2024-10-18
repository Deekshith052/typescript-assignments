var rows = 5;
var cols = 5;
var seats = [];
for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < cols; j++) {
        row.push(0);
    }
    seats.push(row);
}
function bookTicket(row, col) {
    if (row < rows && col < cols) {
        if (seats[row][col] === 0) {
            seats[row][col] = 1;
            console.log("Ticket booked for seat [Row: ".concat(row, ", Col: ").concat(col, "]"));
        }
        else {
            console.log("Seat [Row: ".concat(row, ", Col: ").concat(col, "] is already booked"));
        }
    }
    else {
        console.log("Seat [Row: ".concat(row, ", Col: ").concat(col, "] does not exist"));
    }
}
function cancelTicket(row, col) {
    if (row < rows && col < cols) {
        if (seats[row][col] === 1) {
            seats[row][col] = 0;
            console.log("Ticket cancelled for seat [Row: ".concat(row, ", Col: ").concat(col, "]"));
        }
        else {
            console.log("Seat [Row: ".concat(row, ", Col: ").concat(col, "] is not booked"));
        }
    }
    else {
        console.log("Seat [Row: ".concat(row, ", Col: ").concat(col, "] does not exist"));
    }
}
function availableSeats() {
    var availableSeats = [];
    console.log("Available seats are:");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (seats[i][j] === 0) {
                console.log("Row: ".concat(i, ", Col: ").concat(j));
            }
        }
    }
}
availableSeats();
bookTicket(1, 0);
bookTicket(0, 0);
bookTicket(0, 0);
cancelTicket(1, 0);
cancelTicket(1, 0);
availableSeats();
