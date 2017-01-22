var InheritanceCreator = require('../src/InheritanceCreator');

var D5 = function () {
    this.d5 = 'd5-value';
};

InheritanceCreator.prepareToInherits(D5);

module.exports = D5;

var C3 = require('./C3');
InheritanceCreator.inheritsFrom(D5, C3);