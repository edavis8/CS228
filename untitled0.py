#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Sep 28 10:41:08 2020

@author: admin
"""

import pandas as pd

iris = pd.read_csv('iris.data.csv',names= ['1','2','3', 'species'])

s = 'nj.array(['

for row in iris.iterrows():
    s += str(list(row[1]))+','
s = s[:-1]
s += '])'

nj.array([[...], [...],
...
[...]]);

