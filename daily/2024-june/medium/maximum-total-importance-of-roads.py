class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        counter = dict()

        for road in roads:
            for node in road:
                if node not in counter:
                    counter[node]=1
                else:
                    counter[node]+=1

        counterList=list(counter.items())

        def sortFunc(entry):
            return entry[1]
            
        counterList.sort(key=sortFunc, reverse=True)
        
        importance = dict()
        maxCounter=n

        for node in counterList:
            importance[node[0]]=maxCounter
            maxCounter-=1

        total=0
        for road in roads:
            for i in range(0, 2):
                total+=importance[road[i]]

        return total