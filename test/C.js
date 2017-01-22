var InheritanceCreator = require('../src/InheritanceCreator');

var C = function () {
    this.c = 'c-value';
};

InheritanceCreator.prepareToInherits(C);

module.exports = C;

var B = require('./B');
InheritanceCreator.inheritsFrom(C, B);
