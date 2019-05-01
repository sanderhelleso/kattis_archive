import math
import os
import random
import re
import sys

b, ships = [int(x) for x in input().split()]
planets = [int(x) for x in input().split()]
planets.sort()

w = 0

for planet in planets:
    if planet >= ships:
        break
        
    ships -= planet + 1
    w += 1
        
print(w)
        
        
