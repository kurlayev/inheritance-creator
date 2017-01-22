var InheritanceCreator = require('../src/InheritanceCreator');

var D3 = function () {
    this.d3 = 'd3-value';
};

InheritanceCreator.prepareToInherits(D3);

module.exports = D3;

var C2 = require('./C2');
InheritanceCreator.inheritsFrom(D3, C2);