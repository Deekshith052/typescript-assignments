const rows = 5;
const cols = 5;
const seats: number[][] = [];

for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
        row.push(0); 
    }
    seats.push(row);
}

function bookTicket(row: number, col: number): void {
    if (row < rows && col < cols) {
        if (seats[row][col] === 0) {
            seats[row][col] = 1;
            console.log(`Ticket booked for seat [Row: ${row}, Col: ${col}]`);
        } else {
            console.log(`Seat [Row: ${row}, Col: ${col}] is already booked`);
        }
    } else {
        console.log(`Seat [Row: ${row}, Col: ${col}] does not exist`);
    }
}

function cancelTicket(row: number, col: number): void {
    if (row < rows && col < cols) {
        if (seats[row][col] === 1) {
            seats[row][col] = 0;
            console.log(`Ticket cancelled for seat [Row: ${row}, Col: ${col}]`);
        } else {
            console.log(`Seat [Row: ${row}, Col: ${col}] is not booked`);
        }
    } else {
        console.log(`Seat [Row: ${row}, Col: ${col}] does not exist`);
    }
}

function availableSeats(): void {
    const availableSeats: string[] = [];
    console.log(`Available seats are:`);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (seats[i][j] === 0) {
                console.log(`Row: ${i}, Col: ${j}`);
            }
        }
    }
}



availableSeats();
bookTicket(1, 0);
bookTicket(0, 0);
bookTicket(0,0);
cancelTicket(1, 0);
cancelTicket(1, 0);
availableSeats();
