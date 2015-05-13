var hapi = require("hapi");
var server = new hapi.Server();
server.connection({
  port: 8000
});

server.start(console.log("server started"));

server.views({
  isCached: false,
  path: "views",
  engines: {
    html: require("handlebars")
  },
  layoutPath: "layouts",
  layout: "default",
  partialsPath: "views/partials"
})

server.route({
  method: "GET",
  path: "/",
  handler: function(req, reply) {
    reply.view("index", {title: "Hello world"});
  }
});

server.route({
  method: "GET",
  path: "/assets/{param*}",
  handler: {
    directory: {
      path: "build"
    }
  }
});
