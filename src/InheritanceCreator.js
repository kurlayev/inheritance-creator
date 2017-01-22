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

/**
 * @param {Function} Child
 * @param {Function} Parent
 */
function internalInheritsFrom(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parentClass = Parent.prototype;
    Child.parentClassName = getClassName(Parent);
    delete Child.__notInherited;
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
    return Ctor.name || Ctor.className;
}