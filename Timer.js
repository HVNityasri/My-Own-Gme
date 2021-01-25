class Timer {

	constructor() {
  	this.x = 0;
    this.y = 20;
  }
  
  
  display() {
  	rect(this.x, this.y, 5, height);
  	this.y += 0.1;
  }
}