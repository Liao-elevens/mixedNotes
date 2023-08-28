

base_string='1、反斜杠【\\】——转义，可特殊处理符号，让 Python 把它作为普通文本对待。\n'+'''2、字符串/表达式换行：【\\n】或【```
三引号方式
```】
3、原始字符串r（所有内容都是原始的样子，不会出现转义）：'''
base_string_originR=r'D:\python\原始字符串.py'
print('字符串：',base_string,base_string_originR,'类型：',type(base_string),type(base_string_originR))