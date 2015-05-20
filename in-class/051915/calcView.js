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
