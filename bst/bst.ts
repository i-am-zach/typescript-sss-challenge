export class BSTNode<T> {
    public left: BSTNode<T> | null = null;
    public right: BSTNode<T> | null = null;
    public key: number;
    public value: T;

    constructor(key: number, value: T) {
        this.key = key;
        this.value = value;
    }

    public insert(key: number, value: T): BSTNode<T>{
        // TODO: Implement this
        throw new Error("Unimplemented");
    }

    public find(key: number): T {
        // TOOD: Implement this 
        throw new Error("Unimplemented");
    }

}

export class BST<T> {
    public root: BSTNode<T> | null = null;

    public insert(key: number, value: T): BSTNode<T> {
        if(this.root) {
            return this.insert(key, value);
        } else {
            this.root = new BSTNode(key, value);
            return this.root;
        }
    }

    public find(key: number): T {
        if(this.root) {
            return this.root.find(key);
        }
        throw new Error("Not found");
    }
}