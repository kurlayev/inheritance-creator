var InheritanceCreator = require('../../src/InheritanceCreator');

var C = function () {
    this.c = 'c-foreign1-value';
};

InheritanceCreator.prepareToInherits(C);

module.exports = C;

var B = require('../B');
InheritanceCreator.inheritsFrom(C, B);