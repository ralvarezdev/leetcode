class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if k==1:
            return n

        players = [i+1 for i in range(0,n)]
        idx=0
        maxIdx = n-1

        while len(players)>1:
            moveCounter=1

            while moveCounter<k:
                idx=idx+1 if idx<maxIdx else 0
                moveCounter+=1

            print(players[idx])
            del players[idx]

            if idx==maxIdx:
                idx=0

            maxIdx-=1

        return players[0]