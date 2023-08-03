class LunarCraft {
  x: number;
  y: number;
  z: number;
  direction: 'N' | 'S' | 'E' | 'W' | 'Up' | 'Down';

  constructor(x: number, y: number, z: number, direction: 'N' | 'S' | 'E' | 'W' | 'Up' | 'Down') {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }

  moveForward(): void {
    if (this.direction === 'N') this.y++;
    else if (this.direction === 'S') this.y--;
    else if (this.direction === 'E') this.x++;
    else if (this.direction === 'W') this.x--;
    else if (this.direction === 'Up') this.z++;
    else if (this.direction === 'Down') this.z--;
  }

  moveBackward(): void {
    if (this.direction === 'N') this.y--;
    else if (this.direction === 'S') this.y++;
    else if (this.direction === 'E') this.x--;
    else if (this.direction === 'W') this.x++;
    else if (this.direction === 'Up') this.z--;
    else if (this.direction === 'Down') this.z++;
  }

  turnLeft(): void {
    if (this.direction === 'N') this.direction = 'W';
    else if (this.direction === 'S') this.direction = 'E';
    else if (this.direction === 'E') this.direction = 'N';
    else if (this.direction === 'W') this.direction = 'S';
  }

  turnRight(): void {
    if (this.direction === 'N') this.direction = 'E';
    else if (this.direction === 'S') this.direction = 'W';
    else if (this.direction === 'E') this.direction = 'S';
    else if (this.direction === 'W') this.direction = 'N';
  }

  turnUp(): void {
    if (['N', 'S', 'E', 'W'].includes(this.direction)) this.direction = 'Up';
  }

  turnDown(): void {
    if (['N', 'S', 'E', 'W'].includes(this.direction)) this.direction = 'Down';
  }

  processCommands(commands: string[]): void {
    for (const command of commands) {
      if (command === 'f') this.moveForward();
      else if (command === 'b') this.moveBackward();
      else if (command === 'l') this.turnLeft();
      else if (command === 'r') this.turnRight();
      else if (command === 'u') this.turnUp();
      else if (command === 'd') this.turnDown();
    }
  }
}

// Example usage:
const spacecraft = new LunarCraft(0, 0, 0, 'N');
const commands = ['f', 'r', 'u', 'b', 'l'];
spacecraft.processCommands(commands);

console.log('Final Position:', spacecraft.x, spacecraft.y, spacecraft.z);
console.log('Final Direction:', spacecraft.direction);
