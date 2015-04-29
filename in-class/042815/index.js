var hapi = require("hapi");

var server = new hapi.Server();
server.connection({
    port: 8080
});

server.start(function() {
    console.log(server.info);
});

var counter = 0;

server.route({
    method: "GET",
    path: "/{name?}",
    handler: function(request, reply) {
        var name = request.params.name || "Anonymous";
        reply("Hello, " + name);
        counter++;
        console.log("Server requests: " + counter);
    }
});

server.route({
    method: "GET",
    path: "/{name}/{id}",
    handler: function(request, reply) {
        reply(request.params.name + " | " + request.params.id);
    }
});
