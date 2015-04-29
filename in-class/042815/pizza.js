//pizza.js

var hapi = require("hapi");
var server = new hapi.Server();
var orders = require("./orders");

server.connection({
    port: 8080
});
server.start();
server.views({
    path: "templates",
    engines: {
        html: require("handlebars")
    },
    isCached: false
})

server.route({
    method: "GET",
    path: "/{name?}",
    handler: function(request, reply) {
        var name = request.params.name || "Anonymous";
        reply.view("index.html", {
            user: name,
            pizzas: orders.pizzas
        });
    }
});

server.route({
    method: "POST",
    path: "/order",
    handler: function(request, reply) {
        orders.add(request.payload);
        console.log(request.payload);
        reply.view("index.html", {
            pizzas: orders.pizzas
        });
    }
});
