import { RootedTree } from './rootedTree';

describe('BinarySearchTree', () => {
    test('find operator', () => {
        const tree = new RootedTree<string>();

        // Insert nodes into the tree
        //           8
        //         /   \
        //        3     10
        //       / \      \
        //      1   6     14
        //         /  \   /
        //        4   7  13
        tree.insert(8, "eight");
        tree.insert(3, "three");
        tree.insert(10, "ten");
        tree.insert(1, "one");
        tree.insert(6, "six");
        tree.insert(14, "fourteen");
        tree.insert(4, "four");
        tree.insert(7, "seven");
        tree.insert(13, "thirteen");

        // Test the find operator
        const findResult1 = tree.find(10);
        expect(findResult1).toEqual("ten");

        const findResult2 = tree.find(4);
        expect(findResult2).toEqual("four");
    });
});

