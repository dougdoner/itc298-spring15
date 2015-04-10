/**
 * Created by ddoner on 4/9/15.
 */
var loader = require("./loader");

//url of wiki page for use with request module
var wikiPage = "http://en.wikipedia.org/wiki/April_8";

//calls the loadPage function, with the url and the returnData function to handle the callback
loader.loadPage(wikiPage, loader.returnData);