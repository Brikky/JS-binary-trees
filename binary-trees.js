function BinarySearchTree() {
    this.rootNode = null;
};

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,

    add: function(value) {
        var node = {
            value: value,
            left: null,
            right: null
        };

        if (!this.rootNode) {
            this.rootNode = node;
        } else {
            current = this.rootNode;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    },

    contains: function(value) {
        var found = false;
        var current = this.rootNode;

        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    },

    traverse: function(callback) {

        function inOrder(node) {
            if (node) {
                if (node.left !== null) {
                    inOrder(node.left);
                }
                callback.call(this, node);
                if (node.right !== null) {
                    inOrder(node.right);
                }
            }
        }
        inOrder(this.rootNode);

        ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////

        // function postOrder(node) {
        //     if (node) {
        //         if (node.right !== null) {
        //             postOrder(node.right);
        //         }
        //         callback.call(this, node);
        //         if (node.left !== null) {
        //             postOrder(node.left);
        //         }
        //     }
        // }
        // postOrder(this.rootNode);

        ///////////////////////////////////////////////////
        ///////////////////////////////////////////////////

        // function preOrder(node) {
        //     if (node) {
        //       callback.call(this, node);
        //         if (node.left !== null) {
        //             preOrder(node.left);
        //         }
        //         if (node.right !== null) {
        //             preOrder(node.right);
        //         }
        //     }
        // }
        // preOrder(this.rootNode);



    },

    size: function() {
        var length = 0;

        this.traverse(function(node) {
            length++;
        });
        return length;
    },

    toArray: function() {
        var result = [];

        this.traverse(function(node) {
            result.push(node.value);
        });
        return result;
    },

    toString: function() {
        return this.toArray().toString();
    }

};

////Tests
// var tree = new BinarySearchTree();
//
// for (var i = 0; i < 25; i++) {
//     tree.add(Math.random() * 100);
// };
//
// tree.size();
// tree.toArray();
