/*jshint node:true*/
var react = require('react-tools');
var docblock = require('jstransform/src/docblock');

module.exports = function transformJSX(source) {
    var error;
    try {
        var hasDocblock = docblock.parseAsObject(docblock.extract(source)).jsx;
        if (hasDocblock) {
            source = react.transform(source, {harmony: true});
        }
    }
    catch(e) {
        error = e;
    } 
    
    return  {
        source: source,
        error: error
    };
};