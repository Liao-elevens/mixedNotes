print("========= python base ===========")

# 1、输出 print
print("Hello,World")

# 2、注释：调试程序、添加说明 （单行注释）
'''
多行注释
'''

# 3、tab键的【缩进】：python规定同一作用域中的各行代码，它们的缩进量必须一致

# 4、变量赋值——python是弱类型语言，变量类型可变
base_4='new val'
base_4='可以改变重新赋值'
print('使用——输出变量n：'+base_4,' —— n的类型：',type(base_4))

# 5、数据类型
base_5_int=123_456_789 # Python 3.x 允许使用下划线_作为数字（包括整数和小数）的分隔符
base_5_float=10.0/3 # 会有误差
import decimal
base_5_float_decimal=decimal.Decimal(10.0)/decimal.Decimal(3) #【要精确的结果可以使用：decimal】
from fractions import Fraction
base_5_float_fractions=Fraction(10,3) #【要非常精确的结果可以使用：fractions】
base_5_complex=2+5j # 复数 = 实部（real）+ 虚部j/J（imag）
base_5_string='''
    1、反斜杠【\\】——转义，可特殊处理符号，让 Python 把它作为普通文本对待。
    2、字符串/表达式换行：【\\n】或【```三引号方式```】
    3、原始字符串r（所有内容都是原始的样子，不会出现转义）：'''
base_5_string_originR=r'D:\python\原始字符串.py'
base_5_bool=False
print()
print(
  '数字：',base_5_int,' 类型：  ',type(base_5_int),'\n',
  '浮点/小数：',base_5_float,' 类型：  ',type(base_5_float),'\n',
  '浮点/小数 - 精确：',base_5_float_decimal,' 类型：  ',type(base_5_float_decimal),'\n',
  '浮点/小数 - 非常精确：',base_5_float_fractions,' 类型：  ',type(base_5_float_fractions),'\n',
  '复数：',base_5_complex,' 类型：  ',type(base_5_complex),'\n',
  '字符串：',base_5_string,base_5_string_originR,'类型：',type(base_5_string),type(base_5_string_originR),'\n',
  '布尔：',base_5_bool,'(可做整数)',base_5_bool+1,(not base_5_bool)+1,'类型：',type(base_5_bool),'\n',
  )

# 6、输入 input
# base_6_input=input('请输入数字：')
# print('输入的内容是：',base_6_input,'类型：',type(base_6_input),'可转换成其他类型：',int(base_6_input),type(int(base_6_input)))

# 7、格式化字符串 %
base_7_format_str='aba'
base_7_format_num=12345
base_7_format_float=123.456
print('''
  1、格式化字符串: (转换为字符串：%s)、(转换为十进制整数：%d)
  2、指定最小输出宽度：%3s
  3、对齐方法：字符串只能使用-标志：%-6s 、整数：%+09d 、 小数：%-+010f
  4、指定小数精度(%%最小宽度.输出精度f)：%010.5f
''' % ('%s',123,base_7_format_str,base_7_format_str,base_7_format_num,base_7_format_float,base_7_format_float))

'''
  8、运算符：+、-、*、/、
    整除：//
    取余：%
    幂：**

  9、赋值运算符：
  10、位运算符：
  11、比较运算符：【is(完全相同的对象)和==(值相等)】
  12、逻辑运算符：and、or、not【 and 和 or 运算符会将其中一个表达式的值作为最终结果，而不是将 True 或者 False 作为最终结果。】
  13、三目运算符：<执行1> if <判断条件> else <执行2>
'''

'''
  14、序列：字符串、列表、元组、集合和字典【 集合 和 字典 不支持索引、切片、相加和相乘操作】
    切片：<序列名>[start : end : step?]
'''
base_14_str='abcdefghijklmnopqrstuvwxyz'
print('序列切片：',base_14_str[2:10:2],'\n序列相加：'+base_14_str[:5],'\n序列相乘：',base_14_str[:10:3]*3)

'''
  15、内置方法：list、len、max、min、str、sum、sorted、reversed、enumerate
'''
print('内置方法：',list(base_14_str),enumerate(base_14_str))

'''
  16、列表：
    访问：<列表>[start : end : step?] （同序列）
    整个删除：del <listName>
    元素操作
      添加：
        列表的末尾<list_1> + <list_2>、<list>.append(newEl)【代替push】、<list>.extend(拆解其中包含的元素)
        插入：<list>.insert(index, el)
      删除：del <list>[index]、del <list>[start : end]、<list>.push(index)、<list>.remove(第一个指定值的el【没有会报错】)、<list>.clear()=[]清除全部元素
      修改：同切片
      查找：index、count
      range
'''
base_16_list=[1,2,3,4,5,6,7,8,9]
base_16_list[2:4]=[22,33,44,55]
print('数组：\n修改',base_16_list)
