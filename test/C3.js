var InheritanceCreator = require('../src/InheritanceCreator');

var C3 = function () {
    this.c3 = 'c3-value';
};

InheritanceCreator.prepareToInherits(C3);

module.exports = C3;

var B2 = require('./B2');
InheritanceCreator.inheritsFrom(C3, B2);
