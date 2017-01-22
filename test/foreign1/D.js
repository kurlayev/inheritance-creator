var InheritanceCreator = require('../../src/InheritanceCreator');

var D = function () {
    this.d = 'd-foreign1-value';
};

InheritanceCreator.prepareToInherits(D);

module.exports = D;

var C = require('./C');
InheritanceCreator.inheritsFrom(D, C);