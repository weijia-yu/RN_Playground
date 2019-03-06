var jeep = {
    brand: "jeep",
    config: {
        shift: "manual",
        wheel: "4-runner"
    },
    color: "whilte",
    toString: function(){
        console.log(this.brand + " " + this.config.shift + " " + this.config.wheel + " " + this.color);
    }
}

jeep.toString();

var fridge = (function() {
    var brand = "sumsung";
    return {
        toString: function() {
            console.log(this)
            console.log(brand);
        }
    }
})();

fridge.toString();