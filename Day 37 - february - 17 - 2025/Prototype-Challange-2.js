// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
    this.name = name;
    this.batteryLevel = batteryLevel;
  }
  
  Robot.prototype.charge = function() {
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
  };
  
  const Robo1 = new Robot('Robo1', 100);
  Robo1.charge();
  console.log(Robo1.batteryLevel); 