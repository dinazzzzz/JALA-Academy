var myCar = { 

    /* Properties */
    color: "blue", 
    make: "Toyota", 
    
    /* Getter methods */
    getColor: function() { 
	return this.color; 
    }, 
    getMake: function() { 
	return this.make; 
    },  

    /* Setter methods */
    setColor: function(newColor) {
        this.color = newColor;
    },
    setMake: function(newMake) {
	this.make = newMake;
    }
};