var CalculatorModel = require("./calcModel");
var CalculatorView = require("./calcView");

//instantiates the calculator model
var calc = new CalculatorModel();
//when the result property changes, the calc properties are output onto the console window
calc.on("change:result", function() {
    console.log(calc.toJSON());
});

//instantiates the view, and passes in the calc model object
var view = new CalculatorView({
    model: calc
});

//renders the view
view.render();
