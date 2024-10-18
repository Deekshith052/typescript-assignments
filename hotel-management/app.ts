
class Room {
    constructor(
        public roomNumber: number,
        public pricePerNight: number,
        public isAvailable: boolean = true
    ) {}
}

class Customer {
    constructor(public name: string, public checkInDate: Date, public nights: number, public room: Room) {}
    
    public calculateTotalCost(): number {
        return this.nights * this.room.pricePerNight;
    }
}

class Hotel {
    private rooms: Room[] = [];

    constructor(roomNumbers: number[], pricePerNight: number) {
        for (const roomNumber of roomNumbers) {
            this.rooms.push(new Room(roomNumber, pricePerNight));
        }
    }

    public listRooms(): Room[] {
        return this.rooms;
    }

    public checkAvailability(): Room[] {
        return this.rooms.filter(room => room.isAvailable);
    }

    public checkIn(customerName: string, roomNumber: number, nights: number): string {
        const room = this.rooms.find(r => r.roomNumber === roomNumber && r.isAvailable);
        if (room) {
            room.isAvailable = false;
            const customer = new Customer(customerName, new Date(), nights, room);
            return `Checked in ${customerName} to room ${roomNumber} for ${nights} nights.`;
        } else {
            return `Room ${roomNumber} is not available.`;
        }
    }

    public totalCost(customer: Customer): number {
        return customer.calculateTotalCost();
    }
}

function main() {
    const hotel = new Hotel([101, 102, 103, 104, 105], 100); // Rooms 101 to 105, $100 per night

    console.log("List of all hotel rooms:");
    hotel.listRooms().forEach(room => {
        console.log(`Room ${room.roomNumber} - $${room.pricePerNight}/night - ${room.isAvailable ? 'Available' : 'Occupied'}`);
    });

    console.log("\nAvailable rooms:");
    hotel.checkAvailability().forEach(room => {
        console.log(`Room ${room.roomNumber} - $${room.pricePerNight}/night`);
    });

    const checkInMessage = hotel.checkIn("John Doe", 101, 3); // Customer checks into room 101 for 3 nights
    console.log(checkInMessage);

    const customer = new Customer("John Doe", new Date(), 3, hotel.listRooms()[0]); // Create a customer instance
    const totalCost = hotel.totalCost(customer);
    console.log(`Total cost for the stay: $${totalCost}`);
}

main();
