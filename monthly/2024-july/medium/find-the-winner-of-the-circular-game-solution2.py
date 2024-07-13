class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if k==1:
            return n

        players = [True for i in range(0,n)]
        roundCounter=0
        idx=-1

        move = lambda i:i+1 if idx<n-1 else 0

        while roundCounter<n-1:
            moveCounter=1
            idx= move(idx)

            while not players[idx]:
                idx= move(idx)
            #print(f'1. {idx+1}')

            while moveCounter<k:
                idx=move(idx)

                if not players[idx]:
                    while not players[idx]:
                        idx=move(idx)
                #print(f'2. {idx+1}')
                moveCounter+=1

            #print(f'3. {idx+1}')
            players[idx]=False
            roundCounter+=1

        for i,player in enumerate(players):
            if player:
                return i+1