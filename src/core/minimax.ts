import Node from "./node";

export interface Props {
    node: Node;
    depth: number;
    isMaximizingPlayers: boolean;
    alpha: number;
    beta: number;
}

export function minimax(props: Props): number {
    if (props.node.isEmpty()) return props.node.value

    if (props.isMaximizingPlayers) {
        let bestValue = Number.NEGATIVE_INFINITY;
        for (const child of props.node.children) {
            const value = minimax({node: child, depth: props.depth + 1, isMaximizingPlayers: false, alpha: props.alpha, beta: props.beta});
            bestValue = Math.max(bestValue, value);
            props.alpha = Math.max(props.alpha, bestValue);
            if (props.beta <= props.alpha) break;
        }
        return bestValue;
    }
    let bestValue = Number.POSITIVE_INFINITY;
    for (const child of props.node.children) {
        const value = minimax({node: child, depth: props.depth + 1, isMaximizingPlayers: true, alpha: props.alpha, beta: props.beta });
        bestValue = Math.min(bestValue, value);
        props.beta = Math.min(props.beta, bestValue);
        if (props.beta <= props.alpha) break;
    }
    return bestValue;
}