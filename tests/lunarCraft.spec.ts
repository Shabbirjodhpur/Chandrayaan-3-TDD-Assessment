import { LunarCraft } from './lunarCraft'; // Assuming the LunarCraft class is defined in lunarCraft.ts

describe('LunarCraft', () => {
  // Test the moveForward() method
  it('should move the spacecraft forward correctly in the N direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    spacecraft.moveForward();
    expect(spacecraft.x).toBe(0);
    expect(spacecraft.y).toBe(1);
    expect(spacecraft.z).toBe(0);
  });

  it('should move the spacecraft forward correctly in the S direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'S');
    spacecraft.moveForward();
    expect(spacecraft.x).toBe(0);
    expect(spacecraft.y).toBe(-1);
    expect(spacecraft.z).toBe(0);
  });


  // Test the moveBackward() method
  it('should move the spacecraft backward correctly in the E direction', () => {
    const spacecraft = new LunarCraft(1, 0, 0, 'E');
    spacecraft.moveBackward();
    expect(spacecraft.x).toBe(0);
    expect(spacecraft.y).toBe(0);
    expect(spacecraft.z).toBe(0);
  });

  it('should move the spacecraft backward correctly in the W direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'W');
    spacecraft.moveBackward();
    expect(spacecraft.x).toBe(1);
    expect(spacecraft.y).toBe(0);
    expect(spacecraft.z).toBe(0);
  });


  // Test the turnLeft() method
  it('should turn the spacecraft left correctly from N to W direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('W');
  });

  it('should turn the spacecraft left correctly from S to E direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'S');
    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('E');
  });


  // Test the turnRight() method
  it('should turn the spacecraft right correctly from N to E direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('E');
  });

  it('should turn the spacecraft right correctly from S to W direction', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'S');
    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('W');
  });


  // Test the turnUp() method
  it('should turn the spacecraft up correctly', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    spacecraft.turnUp();
    expect(spacecraft.direction).toBe('Up');
  });


  // Test the turnDown() method
  it('should turn the spacecraft down correctly', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    spacecraft.turnDown();
    expect(spacecraft.direction).toBe('Down');
  });


  // Test the processCommands() method
  it('should process a sequence of commands correctly', () => {
    const spacecraft = new LunarCraft(0, 0, 0, 'N');
    const commands = ['f', 'r', 'u', 'b', 'l'];
    spacecraft.processCommands(commands);
    expect(spacecraft.x).toBe(0);
    expect(spacecraft.y).toBe(1);
    expect(spacecraft.z).toBe(-1);
    expect(spacecraft.direction).toBe('W');
  });

});
