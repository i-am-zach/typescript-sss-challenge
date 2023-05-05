class TreeNode<T> {
    key: number;
    value: T;
    firstChild: TreeNode<T> | null;
    nextSibling: TreeNode<T> | null;

    constructor(key: number, value: T, firstChild: TreeNode<T> | null = null, nextSibling: TreeNode<T> | null = null) {
        this.key = key;
        this.value = value;
        this.firstChild = firstChild;
        this.nextSibling = nextSibling;
    }
}

class RootedTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(key: number, value: T): void {
        if (this.root === null) {
            this.root = new TreeNode<T>(key, value);
        } else {
            this.insertNode(this.root, key, value);
        }
    }

    private insertNode(node: TreeNode<T>, key: number, value: T): void {
        if (key < node.key) {
            if (node.firstChild === null) {
                node.firstChild = new TreeNode<T>(key, value);
            } else {
                this.insertNode(node.firstChild, key, value);
            }
        } else {
            if (node.nextSibling === null) {
                node.nextSibling = new TreeNode<T>(key, value);
            } else {
                this.insertNode(node.nextSibling, key, value);
            }
        }
    }

    find(key: number): T | null {
        // TODO: Implement
        return null;
    }
}

export { RootedTree };
