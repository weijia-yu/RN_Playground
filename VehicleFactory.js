function Car(options) {
    if( options.brand != undefined)
        this.brand = options.brand;
    else
        this.brand = "Jeep";

    if( options.color != undefined)
        this.color = options.color;
    else
        this.color = "White";
}

function Truck(options) {
    if( options.brand != undefined)
        this.brand = options.brand;
    else
        this.brand = "Volvo";

    if( options.color != undefined)
        this.color = options.color;
    else
        this.color = "Black";
}

function VehicleFactory() {

}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createNewVehicle = function(options) {
    if( options.vehicleType === 'Car') {
        this.vehicleClass = Car;
    }
    else if( options.vehicleType === 'Truck') {
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options);
}

var factory = new VehicleFactory();
var car = factory.createNewVehicle( {
    vehicleType: "car",
    color: "yellow",
    doors: 6 } );


console.log(car);