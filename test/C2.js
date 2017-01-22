var InheritanceCreator = require('../src/InheritanceCreator');

var C2 = function () {
    this.c2 = 'c2-value';
};

InheritanceCreator.prepareToInherits(C2);

module.exports = C2;

var B = require('./B');
InheritanceCreator.inheritsFrom(C2, B);