import Node from "./node";

describe("Node unit test", () => {
    it("should create a new node with a given value", () => {
        const node = new Node(5);
        expect(node.value).toBe(5);
    });

    it("should add a child node to the parent node", () => {
        const parentNode = new Node(1);
        const childNode = new Node(2);

        parentNode.addNode(childNode);
        expect(parentNode.children).toContain(childNode);
    });

    it("should check if the parent node has no children", () => {
        const parentNode = new Node(1);
        expect(parentNode.isEmpty()).toBe(true);
    });

    it("should check if the parent node has children", () => {
        const parentNode = new Node(1);
        const childNode = new Node(2);

        parentNode.addNode(childNode);
        expect(parentNode.isEmpty()).toBe(false);
    });
})