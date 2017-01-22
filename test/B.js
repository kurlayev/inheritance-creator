var InheritanceCreator = require('../src/InheritanceCreator');

var B = function () {
    this.b = 'b-value';
};

InheritanceCreator.prepareToInherits(B);

module.exports = B;

var A = require('./A');
InheritanceCreator.inheritsFrom(B, A);
