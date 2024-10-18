// hotelReservation.ts
var Room = /** @class */ (function () {
    function Room(roomNumber, pricePerNight, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.roomNumber = roomNumber;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
    return Room;
}());
var Customer = /** @class */ (function () {
    function Customer(name, checkInDate, nights, room) {
        this.name = name;
        this.checkInDate = checkInDate;
        this.nights = nights;
        this.room = room;
    }
    Customer.prototype.calculateTotalCost = function () {
        return this.nights * this.room.pricePerNight;
    };
    return Customer;
}());
var Hotel = /** @class */ (function () {
    function Hotel(roomNumbers, pricePerNight) {
        this.rooms = [];
        for (var _i = 0, roomNumbers_1 = roomNumbers; _i < roomNumbers_1.length; _i++) {
            var roomNumber = roomNumbers_1[_i];
            this.rooms.push(new Room(roomNumber, pricePerNight));
        }
    }
    Hotel.prototype.listRooms = function () {
        return this.rooms;
    };
    Hotel.prototype.checkAvailability = function () {
        return this.rooms.filter(function (room) { return room.isAvailable; });
    };
    Hotel.prototype.checkIn = function (customerName, roomNumber, nights) {
        var room = this.rooms.find(function (r) { return r.roomNumber === roomNumber && r.isAvailable; });
        if (room) {
            room.isAvailable = false;
            var customer = new Customer(customerName, new Date(), nights, room);
            return "Checked in ".concat(customerName, " to room ").concat(roomNumber, " for ").concat(nights, " nights.");
        }
        else {
            return "Room ".concat(roomNumber, " is not available.");
        }
    };
    Hotel.prototype.totalCost = function (customer) {
        return customer.calculateTotalCost();
    };
    return Hotel;
}());
function main() {
    var hotel = new Hotel([101, 102, 103, 104, 105], 100); // Rooms 101 to 105, $100 per night
    console.log("List of all hotel rooms:");
    hotel.listRooms().forEach(function (room) {
        console.log("Room ".concat(room.roomNumber, " - $").concat(room.pricePerNight, "/night - ").concat(room.isAvailable ? 'Available' : 'Occupied'));
    });
    console.log("\nAvailable rooms:");
    hotel.checkAvailability().forEach(function (room) {
        console.log("Room ".concat(room.roomNumber, " - $").concat(room.pricePerNight, "/night"));
    });
    var checkInMessage = hotel.checkIn("John Doe", 101, 3); // Customer checks into room 101 for 3 nights
    console.log(checkInMessage);
    var customer = new Customer("John Doe", new Date(), 3, hotel.listRooms()[0]); // Create a customer instance
    var totalCost = hotel.totalCost(customer);
    console.log("Total cost for the stay: $".concat(totalCost));
}
main();
