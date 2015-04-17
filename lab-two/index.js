/**
 * Created by ddoner on 4/16/15.
 */

var grep = require('./grep');
var fs = require("fs");

var filePath = "./txtFiles";

fs.readdir(filePath, grep.filterNeedles);