// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'string'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, '3']

// 元组 —— 固定类型顺序的数组
let tuple: [number, string] = [0, '1']
// 元组越界
tuple.push(2)
console.log('元组越界：', tuple); // 可以打印出全部3个值

// 函数
let addArrowFn = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log('函数：', compute(1, 2));

// 对象
// let obj: object = { x: 1, y: 2 } // 直接定义为 object 类型无法修改 obj.key 值
let obj: { x: number, y: string } = { x: 1, y: '2' }
obj.x = 2
console.log('对象：', obj);

// symbol
let sym1: symbol = Symbol()
let sym2 = Symbol()
console.log('symbol 值唯一：', sym1 == sym2); // false

// undefined 、 null —— 为其他值的子类
let un: undefined = undefined // 不能赋值
let nu: null = null
// 将undefined、null 赋值给其他值，需要设置 "strictNullChecks": false, 或者使用联合类型

// void —— 无返回值 —— 可以让任何类型返回 undefined
let noReturn = () => { }

// any —— 不指定类型，和js一样了 —— 可以任意赋值
let anyP

// never —— 永远不会有返回值
let err = () => { // 抛出异常
  throw new Error('error')
}
let endless = () => { // 死循环
  while (true) { }
}

// 枚举 —— 一组有名字的常量集合 —— 只读属性，定义了不可修改
// 1、数字枚举 —— 反向映射 键值对互为key/value
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log('数字枚举，值会递增：', Role, Role.Developer, Role[2]);

// 2、字符串枚举 —— 没有反向映射
enum Message {
  Success = '成功',
  Fail = '失败'
}
console.log('字符串枚举：', Message);

// 异构枚举 —— 数字和字符串的混用 【不推荐】
enum Answer {
  N,
  Y = 'yes'
}
console.log('异构枚举：', Answer);

// 枚举成员
enum Char {
  // const —— 常量 —— 编译阶段就有值了
  a,
  b = Char.a, // 会覆盖 a 的反向映射{0: 'a'}而留下{0: 'b'}
  c = 1 + 3,
  // computed —— 计算 —— 保留到执行阶段才得到值 —— 后面的要有赋值
  d = Math.random(),
  e = '123'.length
}
console.log('枚举成员：', Char);

// 常量枚举 —— 编译完了会被移除 —— 不需要对象，只需要对象的值，减少编译阶段的代码
const enum Month {
  Jan,
  Feb,
  Mar,
}
// console.log('常量枚举：', [Month.Feb, Month.Jan, Month.Mar], Month);

enum TypeList {
  'tab1' = 1,
  'tab2' = 2
}
console.log('测试tab：', TypeList, TypeList.tab1);

/** 枚举类型 —— 和数字类型兼容，可互相赋值 —— 【常用来定义常量，方便硬编码】
 * 1、数字枚举
 *    1.1、没有初始值的：enum A { a, b }
 *    1.2、有初始数字值的：enum B { a = 0, b = 1 }
 * 2、字符串枚举：enum C { a = 'a', b = 'b' }
 */

// 接口 —— 约束类、对象、函数…… —— 约束必传的内容
// interface —— 对象 ===================
// 获取list数据 —— 模拟获取list 
interface ListObjInterface {
  id: number,
  name: string
}
interface ResultObjInterface {
  data: ListObjInterface[]
}
function render(result: ResultObjInterface, interfaceType: string) {
  result.data.forEach(val => {
    console.log(`接口-${interfaceType}-interface：`, val);
  })
}
let result = {
  data: [
    { id: 1, name: 'a', sex: 1 }, // 传入的数据要有必需的信息，【 可以多传 】
    { id: 2, name: 'b' }
  ]
}
render(result, '通过变量传值')
// 直接传数据 —— 【 不能多传数据 】，除非用 as 类型断言，绕过类型检查
render({
  data: [
    { id: 1, name: 'a', sex: 1 },
    { id: 2, name: 'b' }
  ]
} as ResultObjInterface, '断言方式1:【as】（推荐方法）；如果不用【断言】直接传数据是要严格按照interface约束的类型传')
render(<ResultObjInterface>{
  data: [
    { id: 1, name: 'a', sex: 1 },
    { id: 2, name: 'b' }
  ]
}, '断言方式2：【<type>param】； 断言 可以绕过类型检查，让直接传递的参数值可以多传内容')

// interface：数字索引 —— 字符串的数组
interface NumToStrObjInterface {
  [index: number]: string
}
let numToStringArr: NumToStrObjInterface = ['a', 'b']
console.log('interface:数字索引字符串的数组:', numToStringArr); // ['a', 'b'] ——> {0:'a',1:'b'}

// interface：字符串索引 ——> 混合索引签名
interface StrToStrObjInterface {
  [a: string]: string
  // b:number // 不能定义number类型的成员
  [c: number]: string // 可以定义数字索引签名 —— 返回值一定是字符串索引签名的字类型【js会进行类型转换，将number转换成string】
}
let mixStrNumArr: StrToStrObjInterface = {
  a: 'aaa',
  1: 'bbb'
}
console.log('interface: 混合索引签名：', mixStrNumArr); // {1: 'bbb', a: 'aaa'}

// interface —— 函数 ===================
interface AddFnInterface {
  (x: number, y: number): number
}
// let 箭头函数方法见 compute
// 函数
function addFnDefine(x: number, y: number) {
  return x + y
}
// 另一种写法 —— 类型别名 —— 为函数定义类型
type AddFnType = (x: number, y: number) => number
let addFntype: AddFnType = (a, b) => a + b
console.log('类型别名 type 与 interface ：', addFntype(2, 3))

// 混合类型接口
interface MixTypeInterface {
  (): void,
  version: string,
  doSomething(): void
}
// 创建多个实例 —— 函数封装
function getMixTypeInterface() {
  let mixTypeInterface: MixTypeInterface = (() => { }) as MixTypeInterface
  mixTypeInterface.version = '1111';
  mixTypeInterface.doSomething = () => { }
  return mixTypeInterface
}
let getMixTypeInterface1 = getMixTypeInterface()
getMixTypeInterface1.doSomething()
let getMixTypeInterface2 = getMixTypeInterface()


/** 函数的定义方法 —— 可选参数?:<type> (必须在必选参数后)、 ...rest:<type[]>剩余参数【es6】
 * 1、function函数
 * ———————— 后面只是函数类型的定义，没有具体实现
 * 2、箭头函数 —— 变量
 * 3、type 类型别名
 * 4、interface 接口
 */

/** 函数重载 —— 静态类型语言中，两个函数名称相同，参数 个数/类型 不同 
 * —— 优点：不用为相似的功能而定义多个不同名称的函数，赠强函数可读性
 * ts 会从上往下查找匹配的定义
 */
function fnReload(...rest: number[]): number
function fnReload(...rest: string[]): string
function fnReload(...rest: any[]): any {
  let firstEl = rest[0]
  if (typeof firstEl === 'string') {
    return rest.join(',')
  } else if (typeof firstEl === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log('函数重载 - string[]：', fnReload('a', 'b', 'c')); // a,b,c
console.log('函数重载 - number[]：', fnReload(1, 2, 3)); // 6

/** class 类 —— ts 覆盖了 es6 的类 (比 es6 多了类型注解)
 * 1、class 类里的 constructor 是其本身，类成员的 属性/方法 都是实例 属性/方法
 * 2、实例的属性必须有初始值，或者在 constructor 构造函数中初始化
 */
class TsOverEs6Class {
  constructor(name: string) {
    this.name = name
  }
  name: string
  run() { }
}
console.log('class ', TsOverEs6Class.prototype); // {run: ƒ, constructor: ƒ}
// name 属性只在实例上，不在原型上
let tsOverEs6Class = new TsOverEs6Class('TsOverEs6ClassName')
console.log('class - 类成员的 属性/方法 都是实例 属性/方法', tsOverEs6Class); // TsOverEs6Class {name: 'TsOverEs6ClassName'}

// class 的继承 extends
class ExtendsTsOverEs6Class extends TsOverEs6Class {
  constructor(name: string, child: string, public modifier: string) { // 参数要有父类的
    super(name) // es6 中强行的规定 —— 父类的实例
    // this 要 在super 之后
    this.child = child
  }
  child: string
}

/** class 的修饰符 —— ts 对 es6 的扩展
 * 1、public：公有成员 —— 对所有成员可见（默认）
 * 2、private：私有成员 —— 只能在类的本身被调用，不能被 实例/子类 调用 —— 给 constructor 就是不能被实例化/继承
 * 3、protected：被保护成员 —— 只能在 类/子类 中访问，不能在实例中访问 —— 给 constructor 就是不能实例化，只能继承（相当于一个基类）
 * 4、readonly：只读属性 —— 不可更改，所以一定要初始化
 * 5、static：静态成员 —— 只能通过类名访问，不能通过实例访问
 * 
 * ——> 除了可以给 class 成员添加修饰符，还可以给构造函数的参数 —— 自动将参数变成了实例的属性(见上 ExtendsTsOverEs6Class 的 modifier 属性) —— 代码会更简洁
 */

// abstract 抽象类 —— ts 对 es6 的拓展 —— 只能被继承，不能实例化
abstract class AbstractClass {
  fatherClass() {
    console.log('abstract 抽象类 —— 只能被继承，不能实例化');
  }
  // 抽象方法 —— 可以只定义，在多个子类中实现不同方法，就可以做到多样化了（代码的复用、拓展）—— 【多态】
  abstract abstractFn(): void // 可实现多态
}
class Child1AbstractClass extends AbstractClass {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  abstractFn() {
    console.log('abstract 抽象方法 1 —— 可以只定义，在子类中实现方法，就可以做到多样化了');

  }
}
let child1AbstractClass = new Child1AbstractClass('child-1')
child1AbstractClass.fatherClass()
class Child2AbstractClass extends AbstractClass {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  abstractFn() {
    console.log('abstract 抽象方法 2 —— 在子类实现多态——多样化');

  }
}
let child2AbstractClass = new Child2AbstractClass('child-2')
child2AbstractClass.fatherClass()

// 多态的实现
let abstractClassArr: AbstractClass[] = [child1AbstractClass, child2AbstractClass]
abstractClassArr.forEach(i => i.abstractFn())

// 链式调用
class ChainMethodsClass {
  chain1() {
    console.log('class - 链式调用-1');
    return this
  }
  chain2() {
    console.log('class - 链式调用-2');
    return this
  }
}
new ChainMethodsClass().chain1().chain2() // 父类
// 子类继承中链式调用的 this 既可以是子类的，也可以是父类的
class ChildChainMethodsClass extends ChainMethodsClass {
  childChain() {
    console.log('class - 子类-链式调用-1');
    return this
  }
}
new ChildChainMethodsClass().childChain().chain1() // 保证了子类、父类调用的连贯性

/** 接口和类的关系
 * 1、类实现接口时，必须实现接口定义的所有 属性/方法 —— 接口只能约束类的公用成员
 */
interface OriInterface {
  // new (name:string):void // 接口 不能约束 constructor
  name: string
  someFn(): void
}
class ClassToInterface implements OriInterface {
  constructor(name: string) {
    this.name = name
  }
  // private name: string // 接口只能约束类的公用成员 public
  name: string
  someFn() {
    console.log('接口和类的关系 - 类实现接口时，必须实现接口定义的所有 属性/方法');
  }
  classSelfFn() {
    console.log('class 可以定义自己的方法');
  }
}
// 2、接口可以继承多个接口 —— 可抽离出重用的接口、多个接口可合并成一个接口
interface OriInterface_2 {
  oriFn(): void
}
interface ChildExtendsMutipl extends OriInterface, OriInterface_2 { }
let childExtendsMutipl: ChildExtendsMutipl = {
  name: 'string',
  someFn() { },
  oriFn() { }
}
// 3、接口继承类 —— 接口把类的成员都抽象了出来（只有类的成员结构，没有具体实现）—— 抽离了 public、private、protected 成员
class InterfaceExtendsClass {
  state = 1
  // private name='name' // 接口可抽象出类的 [public、private、protected] 成员
}
interface InterfaceExtendsClassInterface extends InterfaceExtendsClass { }
// 3.1、子类直接继承（继承原始类的）接口需要实现原始类的方法 —— 只能约束类的 public 成员
class ChildInterfaceExtendsClass implements InterfaceExtendsClassInterface {
  state = 2
}
// 3.2、子类通过继承原始类，再继承接口，原始类的方法/属性会通过继承给子类
class Child2InterfaceExtendsClass extends InterfaceExtendsClass implements InterfaceExtendsClassInterface { }
/** 接口 & 类 关系
 * extends：
 *  （interface --> interface [接口的复用]）
 *  （class --> interface [public、private、protected]接口可以抽象出类的成员）
 *  （class -->class [方法/属性 的复用]）
 * 
 * implements：（interface --> class [public][接口可以通过类实现，接口只能约束类的公用成员(约束子类)]）
 */

// T 泛型 —— 不预先确定的数据类型，具体类型在使用时才确定 —— 一般的、广泛的、具体使用具体定义   ===================
// 1、泛型函数 ——> 函数重载、联合类型 ——(宽泛的类型)——> any（缺少了类型信息,没有约束关系）
// 1.1、【定义函数】
function tAnyFn<T>(value: T): T { // 输入和返回值类型一致
  console.log('泛型：', value);
  return value
}
// 使用方法1
tAnyFn<string[]>(['a', 'b'])
// 使用方法2 —— ts 自带的类型推断【推荐使用方法】
tAnyFn(['cc', 'dd'])

// 1.2、通过类型别名【定义函数 类型】
type TTypeFn = <T>(value: T) => T // 和函数签名格式差不多，只是其中【 函数名称 <T>、参数类型 T、返回值类型 T 】
let tTypeFn: TTypeFn = tAnyFn

// 2、泛型接口
interface TFnInterface { // 只约束函数和上面类型别名的定义方法是等价的
  <T>(value: T): T // 【 函数名称 <T>、参数类型 T、返回值类型 T 】
}
interface TOtherInterface<T = string> { // 可以约束其他成员了
  (value: T): T
}
let tOtherInterface: TOtherInterface = tAnyFn
tOtherInterface('<T> 约束其他成员需要指定类型')

// 3、泛型类
class TClass<T extends TClassInterface>{ // <T> 可以约束类的成员
  tClassFn(val: T) {
    console.log(val,val.length);// <T> 继承接口可以读取length属性【意味着 T 受到了约束，不再是任意类型】
    return val
  }
}
interface TClassInterface{
  length:number
}
let tClassObj = new TClass()
tClassObj.tClassFn("泛型类 —— 可以传递任意类型的值")

/** 泛型的好处
 * 1、函数和类可以轻松的支持多种类型，增强程序的拓展性
 * 2、不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 * 3、灵活控制类型之间的约束 
 */