
const Thermostat = require('./thermo')

describe(Thermostat, () => {
  
  describe('getTemperature', () => {
    let thermostat = new Thermostat

    it('should give default temperature as 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
    });
  });

  describe('up', () => {
    let thermostat = new Thermostat

    it('should increase temperature by 2', () => {
      thermostat.up()  
      thermostat.up() 
      expect(thermostat.getTemperature()).toEqual(22)
    });
  });

  describe('down', () => {
    let thermostat = new Thermostat

    it('should decrease temperature by 1', () => {
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(19)
    });
  });

  describe('setPowerSavingMode true', () => {
    let thermostat = new Thermostat

    it('should be on by default', () => {
      expect(thermostat.powerSavingMode).toEqual(true)
    });

    it('should be able to switch off', () => {
      thermostat.setPowerSavingMode(false)
      expect(thermostat.powerSavingMode).toEqual(false)
    });

    it('should set maxium temperature of 25', () => {
      thermostat.setPowerSavingMode(true)
      for (let i = 0; i < 10; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe (25);
    });


  });
});