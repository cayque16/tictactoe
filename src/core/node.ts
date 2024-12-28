export default class Node {
    private _children: Array<Node> = [];
    private _value: number;
    
    constructor(value: number) {
        this._value = value;
    }

    addNode(node: Node): void {
        this._children.push(node);
    }

    isEmpty(): boolean {
        return this._children.length === 0;
    }

    get value(): number {
        return this._value;
    }

    get children(): Array<Node> {
        return this._children;
    }
}