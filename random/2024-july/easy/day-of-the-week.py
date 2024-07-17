def is_leap(year):
    leap = False

    if year % 4 == 0:
        if year % 100 == 0:
            leap = year % 400 == 0

        else:
            leap = True

    return leap

class Solution:
    _days=["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"]

    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
        # December 31th,1970 (thursday, position: 3)
        day_counter=3+day

        for y in range(1971, year):
            day_counter+=366 if is_leap(y) else 365
        
        for m in range(1, month):
            if m==2:
                day_counter+=29 if is_leap(year) else 28
            elif (m<=7 and m%2==1) or (m>7 and m%2==0):
                day_counter+=31
            else:
                day_counter+=30

        return self._days[day_counter%7]