var InheritanceCreator = require('../src/InheritanceCreator');

var B2 = function () {
    this.b2 = 'b2-value';
};

InheritanceCreator.prepareToInherits(B2);

module.exports = B2;

var A2 = require('./A2');
InheritanceCreator.inheritsFrom(B2, A2);
