enum Colors {
  BLACK = "Black",
  WHITE = "White",
  RED = "Red",
  SILVER = "Silver",
}

enum Doors {
  DRIVER = "Driver",
  RIDE = "Ride",
  PASSENGER_DRIVE = "Passenger Drive",
  PASSENGER_RIDE = "Passenger Ride",
}

enum Directions {
  LEFT = "Left",
  RIGHT = "Right"
}

interface Car {
  brand: string
  color: Colors
  doors: number,
}

class Car {
  constructor(public brand: string, public color: Colors, public doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk() {
    console.log('beep')
  }
  
  openDoor(door: Doors) {
    console.log(`${Doors} door is open`)
  }

  closeDoor(door: Doors) {
    console.log(`${Doors} door is closed`)
  }
  
  turnOn() {
    console.log('The car is turned on')
  }

  turnOff() {
    console.log('The car is turned off')
  }

  speedUp() {
    console.log('The car is speeding up')
  }

  slowDown() {
    console.log('The car is slowing down')
  }

  stop() {
    console.log('The car is stopped')
  }

  turn(direction: Directions) {
    console.log(`The car is turning ${direction}`)
  }
  
}