#ITC 298 Lab two
##Grep.js

Grep.js is a simple Node.js program using the path, async, and fs modules. The objective of this program is to search a directory for text files, search through each of those files, and return only the names of textfiles whos contents contain the word "needle".

###Use of fs module
The fs module is used to search directories for files and return an array of filename strings, as well as reading the file contents of each file itself.

###Use of async
I used the async methods .each and .filter, .each loops through an array (in this case an array of strings), and performs an iterator function over each array value. The last part of the .each method performs a function after the iterator has finished looping over each array value.

The async.filter method provides basically the same structure as .each, except .filter has an intermediary function that tests for truthiness, and if the function returns true it is added to an array that is passed to the callback object for use in the last function (result).

###Use of path module
The path module was used in this program to join to strings, the directory name and the file name. This was used to create a single path for use with fs.readFile.