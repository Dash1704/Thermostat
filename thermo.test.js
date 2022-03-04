
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

    it('should not go below 10', () => {
      for (let i = 0; i < 15; i++) {
        thermostat.down()
      };
      expect(thermostat.getTemperature()).toBe(10)
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

    it('should set max temp 35 if powersaving off', () => {
      thermostat.setPowerSavingMode(false)
      for (let i = 0; i < 30; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe (32);
    });
  });  


  describe('reset', () => {
    let thermostat = new Thermostat

    it('should set the temperature back to 20', () => {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.getTemperature()).toBe(20)
    });
  });

  describe('energyUsage', () => {
    let thermostat = new Thermostat

    it('should say if its low usage', () => {
      expect(thermostat.energyUsage()).toBe('medium-usage')
    })

    it('should say low-usage', () => {
      thermostat.down()
      thermostat.down()
      thermostat.down()
      expect(thermostat.energyUsage()).toBe('low-usage')
    });
    
    it('should say high-usage', () => {
      for (let i = 0; i < 30; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toBe('high-usage')
    });


  });
  
});