enum Colors {
  preto,
  branco,
  vermelho,
  prata,
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
}