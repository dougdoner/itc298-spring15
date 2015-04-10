/**
 * Created by ddoner on 4/10/15.
 */

//requiring request and cheerio modules. request is used to return html of a page. Cheerio is a server-side dom manipulator similar to JQuery
var request = require("request");
var cheerio = require("cheerio");

//uses callback to return data
var loadPage = function(url, callback) {
    //request function to fetch url
    request(url, function(err, response, body) {
        if (err)
        //returns a callback with a new error, to be handled by the return data handler
            return callback(new Error("Could not retrieve webpage"));
        //returns the body in a callback
        callback(null, body);
    });
};

var returnData = function(err, data) {
    var deaths = 0;
    var births = 0;
    if (err)
    //logs the error onto the console
        return console.log(err);
    //loads the data into the cheerio object, represented by the $
    var $ = cheerio.load(data);
    console.log();
    console.log("###### BIRTHS ######");
    console.log();
    //finds all births for that day and logs them onto the console
    $("#Births").parent("h2").next("ul").find("li").each(function(i, elem) {
        console.log($(this).text())
        births++;
    });
    console.log();
    console.log("###### DEATHS ######");
    console.log();
    //finds all deaths for that day and logs them onto the console
    $("#Deaths").parent("h2").next("ul").find("li").each(function(i, elem) {
        console.log($(this).text())
        deaths++;
    });
    console.log("Number of births: ", births);
    console.log("Number of deaths: ", deaths);
};

//assigns the functions to be exported
module.exports = {
    loadPage: loadPage,
    returnData: returnData
};