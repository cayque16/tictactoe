import { minimax } from "./minimax"
import Node from "./node"

jest.mock('./node', () => {
    return jest.fn().mockImplementation((value: number) => {
        const children: Node[] = [];
        return {
            addNode: jest.fn((child) => children.push(child)),
            isEmpty: jest.fn(() => children.length === 0),
            value: value,
            children: children,
        }
    })
})

describe("Minimax unit tests", () => {
    it("should return the node value if node is empty", () => {
        const mockNode = new Node(10)
        const props = {
            node: mockNode,
            depth: 0,
            isMaximizingPlayers: true,
            alpha: Number.NEGATIVE_INFINITY,
            beta: Number.POSITIVE_INFINITY,
        }

        const result = minimax(props)
        expect(result).toBe(10)
        expect(mockNode.isEmpty).toHaveBeenCalled()
    })

    it("should find the maximum value for maximizing player", () => {
        const child1 = new Node(3)
        const child2 = new Node(5)
        const mockNode = new Node(0)
        mockNode.addNode(child1)
        mockNode.addNode(child2)

        const props = {
            node: mockNode,
            depth: 0,
            isMaximizingPlayers: true,
            alpha: Number.NEGATIVE_INFINITY,
            beta: Number.POSITIVE_INFINITY,
        }

        const result = minimax(props)
        expect(result).toBe(5)
    })

    it("should find the minimum value for minimizing player", () => {
        const child1 = new Node(3)
        const child2 = new Node(5)
        const mockNode = new Node(0)
        mockNode.addNode(child1)
        mockNode.addNode(child2)

        const props = {
            node: mockNode,
            depth: 0,
            isMaximizingPlayers: false,
            alpha: Number.NEGATIVE_INFINITY,
            beta: Number.POSITIVE_INFINITY,
        }

        const result = minimax(props)
        expect(result).toBe(3)
    })

    it("should respect alpha-beta pruning in the maximizing phase", () => {
        const child1 = new Node(3)
        const child2 = new Node(5)
        const child3 = new Node(2)
        const mockNode = new Node(0)
        mockNode.addNode(child1)
        mockNode.addNode(child2)
        mockNode.addNode(child3)

        const props = {
            node: mockNode,
            depth: 0,
            isMaximizingPlayers: true,
            alpha: Number.NEGATIVE_INFINITY,
            beta: 4,
        }

        const result = minimax(props)
        expect(result).toBe(5)
    })

    it("should respect alpha-beta pruning in the minimizing phase", () => {
        const child1 = new Node(3)
        const child2 = new Node(5)
        const child3 = new Node(2)
        const mockNode = new Node(0)
        mockNode.addNode(child1)
        mockNode.addNode(child2)
        mockNode.addNode(child3)

        const props = {
            node: mockNode,
            depth: 0,
            isMaximizingPlayers: false,
            alpha: 3,
            beta: Number.POSITIVE_INFINITY,
        }

        const result = minimax(props)
        expect(result).toBe(3)
    })
})