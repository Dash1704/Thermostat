class Thermostat {

  constructor() {
    this.defaultTemperature = 20
    this.maxiumTemperature = 25
    this.powerSavingMode = true
  }

  getTemperature(){
    // return this.defaultTemperature
    // if (this.defaultTemperature > 25){
    //   return this.maxiumTemperature
    // };
    if (this.powerSavingMode === true && this.defaultTemperature > 25){
      return this.maxiumTemperature
    }
    else {return this.defaultTemperature
    }
  };

  up() {
    return this.defaultTemperature += 1
  };

  down() {
    return this.defaultTemperature -= 1
  };

  setPowerSavingMode(onOrOff) {
    this.powerSavingMode = onOrOff
  };

};


module.exports = Thermostat