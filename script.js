function Car(make, model) {
	 this.make=make
	this.modal=model
}
Car.prototype.getMakeModel= function () {
	return `${this.make}${this.model}`
}

function SportsCar(make, model, topSpeed) {
	this.make=make
	this.model=model
	this.topSpeed=topSpeed
}
SportsCar.prototype.getMakeModel= function () {
	return `${this.make}${this.model}`
}
SportsCar.prototype.getTopSpeed=function () {
	return this.topSpeed
}
SportsCar.__proto__=Car
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
