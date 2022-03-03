const Thermostat = require('./thermo')

describe(Thermostat, () => {
  const thermostat = new Thermostat();
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
});