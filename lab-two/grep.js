//grep module

//path module is used to join path strings, fs is used to read directories for file names and the file contents, and async module performs tasks such as forEach loops asynchronously
var path = require("path");
var fs = require("fs");
var async = require("async");

var filePath = "./txtFiles";

//function using async.each, goes through array and logs out each file containing the word needle. Does not return an array
var findNeedles = function(err, data) {
    async.each(data, function(file, callback) {
        //specify encoding type, or data will just be a raw text buffer
        fs.readFile(path.join(filePath + "/", file), "utf8", function(err, data) {
            if (data.match("needle")) {
                console.log(data.toString());
                console.log("filename: ", file);
            }
            callback();
        });
    }, function(err, data) {
        console.log("all done!");
    });
};

//async filter, filters array of files to check for word "needle", and adds filename to array in callback if file passes truthiness test (in this case if the string matches "needle")
var filterNeedles = function(err, data) {
    async.filter(data, function(file, callback) {
        fs.readFile(path.join(filePath + "/", file), "utf8", function(err, data) {
            if (data.match("needle")) {
                //must return callback(true) here, or else node will complain of multiple callbacks in the function
                return callback(true);
            }
            //callback(false) if file contents do not contain the word "needle"
            callback(false);
        });
    }, function(result) {
        console.log(result);
    });
};

module.exports = {
    findNeedles: findNeedles,
    filterNeedles: filterNeedles
};