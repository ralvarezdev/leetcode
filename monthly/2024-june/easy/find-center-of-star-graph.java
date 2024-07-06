class Solution {
    public int findCenter(int[][] edges) {
        int[] nodes=edges[0];

        for(int node: edges[1])
            if(node==nodes[0]||node==nodes[1])
                return node;

        return -1;
    }
}