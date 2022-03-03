const Thermostat = require('./thermo')

describe(Thermostat, () => {
  const thermostat = new Thermostat();
  // const thermoDouble = { defaultTemperature: () => 20 };

  describe('getTemperature', () => {
    it('should give default temperature as 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
    });
  });

  describe('up', () => {
    it('should increase temperature by 2', () => {
      thermostat.up()  
      thermostat.up() 
      expect(thermostat.getTemperature()).toEqual(22)
    });
  });

  describe('down', () => {
    it('should decrease temperature by 1', () => {
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(21)
    });
  });
});