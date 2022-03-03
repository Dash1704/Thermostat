class Thermostat {

  constructor() {
    this.defaultTemperature = 20
  }

  getTemperature(){
    return this.defaultTemperature
  }

  up() {
    return this.defaultTemperature += 1
  }
}
module.exports = Thermostat