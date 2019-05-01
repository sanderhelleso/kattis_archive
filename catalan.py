import math
import os
import random
import re
import sys

def catalan(n, r):
    return math.factorial(n) // (math.factorial(r) * math.factorial(n- r))

n = int(input())
for _ in range(n):
    x = int(input())
    print(catalan(x * 2, x) // (x + 1))
