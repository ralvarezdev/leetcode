class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        arrival=None
        time=None
        currTime=None
        totalTime=0
        idx=0

        arrival,time = customers[idx]
        totalTime+=time
        currTime=arrival+time
        idx+=1

        while idx<len(customers):
            arrival, time=customers[idx]

            if currTime-arrival>=0:
                totalTime+=currTime+time-arrival
                currTime+=time
            else:
                totalTime+=time
                currTime=time+arrival

            idx+=1

        return totalTime/len(customers)