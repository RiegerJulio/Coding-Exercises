"use strict";
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Black";
    Colors["WHITE"] = "White";
    Colors["RED"] = "Red";
    Colors["SILVER"] = "Silver";
})(Colors || (Colors = {}));
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "Driver";
    Doors["RIDE"] = "Ride";
    Doors["PASSENGER_DRIVE"] = "Passenger Drive";
    Doors["PASSENGER_RIDE"] = "Passenger Ride";
})(Doors || (Doors = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "Left";
    Directions["RIGHT"] = "Right";
})(Directions || (Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('beep');
    }
    openDoor(door) {
        console.log(`${Doors} door is open`);
    }
    closeDoor(door) {
        console.log(`${Doors} door is closed`);
    }
    turnOn() {
        console.log('The car is turned on');
    }
    turnOff() {
        console.log('The car is turned off');
    }
    speedUp() {
        console.log('The car is speeding up');
    }
    slowDown() {
        console.log('The car is slowing down');
    }
    stop() {
        console.log('The car is stopped');
    }
    turn(direction) {
        console.log(`The car is turning ${direction}`);
    }
}
const gol = new Car('Volkswagen Gol', Colors.SILVER, 4);
gol.openDoor(Doors.DRIVER);
gol.closeDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.slowDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.slowDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.slowDown();
gol.turn(Directions.RIGHT);
gol.slowDown();
gol.stop();
gol.openDoor(Doors.PASSENGER_RIDE);
gol.closeDoor(Doors.PASSENGER_RIDE);
gol.speedUp();
gol.slowDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.slowDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.slowDown();
gol.turn(Directions.RIGHT);
gol.slowDown();
gol.stop();
gol.openDoor(Doors.PASSENGER_RIDE);
gol.closeDoor(Doors.PASSENGER_RIDE);
gol.speedUp();
