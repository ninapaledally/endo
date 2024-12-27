// Example object constructor function
function MyObject() {
    this.modify = function(pulse, output) {
        console.log("Modifying with pulse:", pulse, "and output:", output);
        // Example: Setting a property based on pulse and output
        this.result = pulse * output;
    };
}

// Creating an instance of MyObject
let obj = new MyObject();

// Calling modify method on obj
let pulse = 5;
let output = 10;
obj.modify(pulse, output);

console.log(obj.result); // Output: 50
