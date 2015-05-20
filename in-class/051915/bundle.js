(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//extends Backbone model
var CalculatorModel = Backbone.Model.extend({
    defaults: {
        result: 0,
        input: 0,
    },
    doMath: function(operation) {
        //get the current value
        var value = this.get("result");
        //get the input value
        var input = this.get("input");
        //add or subtract or mult or divide
        if (operation == "add") {
            var output = value + input;
        }
        else if (operation == "sub") {
            var output = value - input;
        }
        //set the result
        this.set("result", output);
   }
});

module.exports = CalculatorModel;

},{}],2:[function(require,module,exports){
//extends the backbone view
var CalculatorView = Backbone.View.extend({
    //the element targeted by the view
    el: ".calculator",
    //when an object is initialized, bind event listener to result on change, then renders view
    initialize: function() {
        this.listenTo(this.model, "change:result", this.render);
    },
    //event type then target of event, and finally the function bound to the event
    events: {
        "keyup .input": "updateInput",
        "click .operation": "runOperation"
    },
    //selects the #calc-template script as a template
    template: _.template($("#calc-template").html()),
    //assigns the properties of the model, puts model in the template, and puts the html template in the objects element
    render: function() {
        var model = this.model.toJSON();
        var html = this.template(model);
        this.$el.html(html);
    },
    //updates input based on value of input box
    updateInput: function(e) {
        var value = e.target.value;
        this.model.set("input", Number(value)); //value * 1
    },
    //performs operation functions based on button data-op value
    runOperation: function(e) {
        var op = $(e.target).data("op");
        this.model.doMath(op);
    }
});

module.exports = CalculatorView;

},{}],3:[function(require,module,exports){
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

},{"./calcModel":1,"./calcView":2}]},{},[3]);
