var InheritanceCreator = require('../src/InheritanceCreator');

var D2 = function () {
    this.d2 = 'd2-value';
};

InheritanceCreator.prepareToInherits(D2);

module.exports = D2;

var C = require('./C');
InheritanceCreator.inheritsFrom(D2, C);