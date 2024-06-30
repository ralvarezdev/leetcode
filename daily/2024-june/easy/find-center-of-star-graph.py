class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        nodes=edges[0]

        for node in edges[1]:
            if node == nodes[0] or node == nodes[1]:
                return node

        return -1