/*jshint node:true*/
var react = require('react-tools');
var docblock = require('jstransform/src/docblock');

module.exports = function transformJSX(source) {
    var error;
    try {
        source = react.transform(source, {harmony: true, stripTypes: true});
    }
    catch(e) {
        error = e;
    } 
    
    return  {
        source: source,
        error: error
    };
};