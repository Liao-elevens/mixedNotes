# a='11==yoyoyoyoyo=='
# b=input('请输入：')
# print(a.count('yo'),'吖吖=='*2,b.join('==yoyo'),type(a))
# print(("ABC" > "ABD"),(123.0 > 123),("123.0" > "123"))

# 计算两个整数的四则运算计算器

# num1 = input("输入一个数字")
# num2 = input("输入另个数字")
# op = input("请输入运算符号")
# result = eval(f"{num1}{op}{num2}")
# print(f"计算结果为{result}")

# import os
# import pprint
# print(os.listdir())
# # 要保证文件路径地址
# with open("./24-demo.txt") as f:
#     file_data = f.readlines()
#     # file_data = f.read()
#     pprint.pprint(file_data)
#     print('统计全部行数: ', len(file_data))
#     print('统计空行行数: ', file_data.count("\n"))
#     print('统计单词 I 出现的次数: ', str(file_data).split(" ").count(
#         "I"), '== 错误用法，结果为0: ', file_data.count("I"))


# list=[ 'a', 1, 'b', 2, 'c', 'c', 3 ]
# # list[4:6]=[]
# list.remove('c')
# print('list_a: ',list)


# list1 = [ 1, 2, 3]
# tuple1 = ( 'abc', list1 )
# print( type( tuple1 ))
# dict1 = { tuple1, 1 } # 此语句是否能够正确执⾏？

# data=input('输入：')
# match data:
#     case '1':
#         print('1==')
#     case '2':
#         print('2==')
#     case 'a':
#         print('a==')
#     case _:
#         print('_==')

# n=5
# for i in range(n):
#   print(i)

import matplotlib.pyplot as plt
import numpy as np
import matplotlib.pyplot as plt
x = np.arange(0, 4 * np.pi, 0.1)
y = np.sin(x)
plt.plot(x, y) #横轴使用x，纵轴使用y绘图
plt.xlabel('x') #设定x轴的标签
plt.ylabel('y') #设定y轴的标签
plt.grid() #显示网格
plt.show()
