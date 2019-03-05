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