/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var B2 = __webpack_require__(3);
	var B = __webpack_require__(7);
	var A = __webpack_require__(8);
	var D4 = __webpack_require__(11);
	var D = __webpack_require__(9);
	var C = __webpack_require__(10);
	var C2 = __webpack_require__(12);
	var D2 = __webpack_require__(13);
	var D3 = __webpack_require__(14);
	var Foreign1C = __webpack_require__(15);
	var Foreign2C = __webpack_require__(16);
	var ForeignD = __webpack_require__(17);
	var A2 = __webpack_require__(4);
	var C3 = __webpack_require__(6);
	var D5 = __webpack_require__(5);
	
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {module.name = 'InheritanceCreator';
	
	var inheritanceWaitingMap = {};
	
	/**
	 * @param {Function} Child
	 */
	exports.prepareToInherits = function (Child) {
	    Child.__notInherited = true;
	};
	
	/**
	 * @param {Function} Child
	 * @param {Function} Parent
	 */
	exports.inheritsFrom = function (Child, Parent) {
	    if (!Child.__notInherited) {
	        var childClassName = getClassName(Child);
	        console.warn('Child constructor "' + childClassName + '" is not prepared to inheritance!');
	    }
	
	    if (Parent.__notInherited) {
	        addToInheritanceWaitingMap(Child, Parent);
	        return;
	    }
	
	    internalInheritsFrom(Child, Parent);
	
	    inheritsDescendantsFor(Child);
	};
	
	exports.checkInheritanceCompleteness = function () {
	    var incompleteInheritedClasses = Object.keys(inheritanceWaitingMap);
	
	    if (incompleteInheritedClasses.length) {
	        console.warn('Incomplete classes inheritance DETECTED: there are classes that were deffered for inheritance '
	                     + 'at future but they were not inherited! These classes is (at least): '
	                     + incompleteInheritedClasses.join(', ') + '.');
	    }
	};
	
	// -------- Private functions --------
	
	/**
	 * @param {Function} Child
	 * @param {Function} Parent
	 */
	function internalInheritsFrom(Child, Parent) {
	    var newChildPrototype = Object.create(Parent.prototype);
	    copyOwnProperties(Child.prototype, newChildPrototype);
	    Object.defineProperty(newChildPrototype, 'constructor', { value: Child, enumerable: false });
	    Child.prototype = newChildPrototype;
	    Child.parentClass = Parent.prototype;
	    Child.parentClassName = getClassName(Parent);
	    delete Child.__notInherited;
	}
	
	/**
	 *
	 * @param {Object} fromObject
	 * @param {Object} toObject
	 */
	function copyOwnProperties(fromObject, toObject) {
	    var keysToBeCopied = Object.keys(fromObject);
	
	    for (var keyIndex = 0; keyIndex < keysToBeCopied.length; keyIndex++) {
	        var key = keysToBeCopied[keyIndex];
	        toObject[key] = fromObject[key];
	    }
	}
	
	/**
	 * @param {Function} Child
	 * @param {Function} Parent
	 */
	function addToInheritanceWaitingMap(Child, Parent) {
	    var parentClassName = getClassName(Parent);
	    var sameNamedClasses = inheritanceWaitingMap[parentClassName];
	
	    if (!sameNamedClasses) {
	        inheritanceWaitingMap[parentClassName] = sameNamedClasses = [];
	    }
	
	    for (var i = 0; i < sameNamedClasses.length; i++) {
	        if (sameNamedClasses[i].parent == Parent) {
	            sameNamedClasses[i].children.push(Child);
	            return;
	        }
	    }
	
	    sameNamedClasses.push({
	        parent:   Parent,
	        children: [Child]
	    });
	}
	
	/**
	 * @param {Function} Parent
	 */
	function inheritsDescendantsFor(Parent) {
	    var classesToNextInheritances = [Parent];
	
	    while (classesToNextInheritances.length > 0) {
	        var parent = classesToNextInheritances.shift();
	        var parentClassName = getClassName(parent);
	        var sameNamedClasses = inheritanceWaitingMap[parentClassName];
	
	        if (!sameNamedClasses) {
	            if (classesToNextInheritances.length == 0) {
	                return;
	            }
	
	            continue;
	        }
	
	        for (var parentClassesIndex = 0; parentClassesIndex < sameNamedClasses.length; parentClassesIndex++) {
	            var dependenciesDescriptor = sameNamedClasses[parentClassesIndex];
	
	            if (dependenciesDescriptor.parent != parent) {
	                continue;
	            }
	
	            var children = dependenciesDescriptor.children;
	
	            for (var childIndex = 0; childIndex < children.length; childIndex++) {
	                var child = children[childIndex];
	                classesToNextInheritances.push(child);
	                internalInheritsFrom(child, parent);
	            }
	
	            sameNamedClasses.splice(parentClassesIndex, 1);
	            parentClassesIndex--;
	
	            if (sameNamedClasses.length == 0) {
	                delete inheritanceWaitingMap[parentClassName];
	                break;
	            }
	        }
	    }
	}
	
	/**
	 * @param {Function} Ctor
	 * @return {string}
	 */
	function getClassName(Ctor) {
	    return Ctor.className || Ctor.name;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var B2 = function () {
	    this.b2 = 'b2-value';
	};
	
	InheritanceCreator.prepareToInherits(B2);
	
	module.exports = B2;
	
	var A2 = __webpack_require__(4);
	InheritanceCreator.inheritsFrom(B2, A2);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var A2 = function () {
	    this.a2 = 'a2-value';
	};
	
	module.exports = A2;
	
	var D5 = __webpack_require__(5);
	var B = __webpack_require__(7);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D5 = function () {
	    this.d5 = 'd5-value';
	};
	
	InheritanceCreator.prepareToInherits(D5);
	
	module.exports = D5;
	
	var C3 = __webpack_require__(6);
	InheritanceCreator.inheritsFrom(D5, C3);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var C3 = function () {
	    this.c3 = 'c3-value';
	};
	
	InheritanceCreator.prepareToInherits(C3);
	
	module.exports = C3;
	
	var B2 = __webpack_require__(3);
	InheritanceCreator.inheritsFrom(C3, B2);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var B = function () {
	    this.b = 'b-value';
	};
	
	InheritanceCreator.prepareToInherits(B);
	
	module.exports = B;
	
	var A = __webpack_require__(8);
	InheritanceCreator.inheritsFrom(B, A);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var A = function () {
	    this.a = 'a-value';
	};
	
	module.exports = A;
	
	var D = __webpack_require__(9);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D = function () {
	    this.d = 'd-value';
	};
	
	InheritanceCreator.prepareToInherits(D);
	
	module.exports = D;
	
	var C = __webpack_require__(10);
	InheritanceCreator.inheritsFrom(D, C);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var C = function () {
	    this.c = 'c-value';
	};
	
	InheritanceCreator.prepareToInherits(C);
	
	module.exports = C;
	
	var B = __webpack_require__(7);
	InheritanceCreator.inheritsFrom(C, B);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D4 = function () {
	    this.d4 = 'd4-value';
	};
	
	InheritanceCreator.prepareToInherits(D4);
	
	module.exports = D4;
	
	var C2 = __webpack_require__(12);
	InheritanceCreator.inheritsFrom(D4, C2);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var C2 = function () {
	    this.c2 = 'c2-value';
	};
	
	InheritanceCreator.prepareToInherits(C2);
	
	module.exports = C2;
	
	var B = __webpack_require__(7);
	InheritanceCreator.inheritsFrom(C2, B);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D2 = function () {
	    this.d2 = 'd2-value';
	};
	
	InheritanceCreator.prepareToInherits(D2);
	
	module.exports = D2;
	
	var C = __webpack_require__(10);
	InheritanceCreator.inheritsFrom(D2, C);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D3 = function () {
	    this.d3 = 'd3-value';
	};
	
	InheritanceCreator.prepareToInherits(D3);
	
	module.exports = D3;
	
	var C2 = __webpack_require__(12);
	InheritanceCreator.inheritsFrom(D3, C2);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var C = function () {
	    this.c = 'c-foreign1-value';
	};
	
	InheritanceCreator.prepareToInherits(C);
	
	module.exports = C;
	
	var B = __webpack_require__(7);
	InheritanceCreator.inheritsFrom(C, B);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var C = function () {
	    this.c = 'c-foreign2-value';
	};
	
	InheritanceCreator.prepareToInherits(C);
	
	module.exports = C;
	
	var B = __webpack_require__(7);
	InheritanceCreator.inheritsFrom(C, B);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var InheritanceCreator = __webpack_require__(1);
	
	var D = function () {
	    this.d = 'd-foreign1-value';
	};
	
	InheritanceCreator.prepareToInherits(D);
	
	module.exports = D;
	
	var C = __webpack_require__(15);
	InheritanceCreator.inheritsFrom(D, C);

/***/ }
/******/ ]);
//# sourceMappingURL=example.bundle.js.map