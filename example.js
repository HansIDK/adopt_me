class Auto {
  constructor(brand, maxSpeed) {
    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
  }

  speedUp(amount) {
    this.speed = Math.min(this.speed + amount, this.maxSpeed);
  }

  slowDown(amount) {
    this.speed = Math.max(this.speed - amount, 0);
  }
}

const bmw = new Auto("e56", 130);
console.log(bmw);
bmw.speedUp(123456789);
console.log(bmw);
bmw.slowDown(23);
console.log(bmw);
