import math
import os
import random
import re
import sys

def calc(x1, x2, y1, y2 , p):
    x = math.pow(math.fabs(x1 - x2), p)
    y = math.pow(math.fabs(y1 - y2), p)
    
    return math.pow(x + y, 1.0 / p)

while True:
    nums = list(map(float, input().split()))
    if nums[0] == 0: break
        
    x1 = nums[0]
    y1 = nums[1]
    x2 = nums[2]
    y2 = nums[3]
    p = nums[4]
    
    print(calc(x1, x2, y1, y2, p))
