

//Time 0(n + m) || Space 0(n)

var cloneGraph = function(node) {
    if (!node) return null;
    const queue = [node]
    const map = new Map()

    map.set(node, new Node(node.val, []))

    while (queue.length) {
        const curr = queue.shift()
        for (const neighbor of curr.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val, []))
                queue.push(neighbor)
            }
            const cloneNode = map.get(curr)
            const cloneNeighbor = map.get(neighbor)
            cloneNode.neighbors.push(cloneNeighbor)
        }
    }
    return map.get(node)
}