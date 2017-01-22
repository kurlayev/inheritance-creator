var InheritanceCreator = require('../src/InheritanceCreator');

var B2 = require('./B2');
var B = require('./B');
var A = require('./A');
var D4 = require('./D4');
var D = require('./D');
var C = require('./C');
var C2 = require('./C2');
var D2 = require('./D2');
var D3 = require('./D3');
var Foreign1C = require('./foreign1/C');
var Foreign2C = require('./foreign2/C');
var ForeignD = require('./foreign1/D');
var A2 = require('./A2');
var C3 = require('./C3');
var D5 = require('./D5');

InheritanceCreator.checkInheritanceCompleteness();

var d = new D();
var d5 = new D5();
var c = new C();
var b = new B();
var d4 = new D4();
var foreignD = new ForeignD();
var foreign2C = new Foreign2C();

console.log('d instanceof A = ' + (d instanceof A));
console.log('d instanceof B = ' + (d instanceof B));
console.log('d instanceof C = ' + (d instanceof C));
console.log('d instanceof D = ' + (d instanceof D));

console.log('c instanceof A = ' + (c instanceof A));
console.log('c instanceof B = ' + (c instanceof B));
console.log('c instanceof C = ' + (c instanceof C));

console.log('b instanceof A = ' + (b instanceof A));
console.log('b instanceof B = ' + (b instanceof B));

console.log('d4 instanceof A = ' + (d4 instanceof A));
console.log('d4 instanceof B = ' + (d4 instanceof B));
console.log('d4 instanceof C2 = ' + (d4 instanceof C2));
console.log('d4 instanceof D4 = ' + (d4 instanceof D4));

console.log('foreignD instanceof A = ' + (foreignD instanceof A));
console.log('foreignD instanceof B = ' + (foreignD instanceof B));
console.log('foreignD instanceof Foreign1C = ' + (foreignD instanceof Foreign1C));
console.log('foreignD instanceof ForeignD = ' + (foreignD instanceof ForeignD));

console.log('foreign2C instanceof A = ' + (foreign2C instanceof A));
console.log('foreign2C instanceof B = ' + (foreign2C instanceof B));
console.log('foreign2C instanceof Foreign2C = ' + (foreign2C instanceof Foreign2C));

console.log('d5 instanceof A2 = ' + (d5 instanceof A2));
console.log('d5 instanceof B2 = ' + (d5 instanceof B2));
console.log('d5 instanceof C3 = ' + (d5 instanceof C3));
console.log('d5 instanceof D5 = ' + (d5 instanceof D5));
