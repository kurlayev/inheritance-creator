var InheritanceCreator = require('../src/InheritanceCreator');

var D4 = function () {
    this.d4 = 'd4-value';
};

InheritanceCreator.prepareToInherits(D4);

module.exports = D4;

var C2 = require('./C2');
InheritanceCreator.inheritsFrom(D4, C2);