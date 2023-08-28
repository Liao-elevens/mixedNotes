// 1、类型检查机制
// 1.1、类型推断
// 1.1.1、基础类型推断
let bestTypeInference1 = 1 // 变量自动推断为 number 类型
// 1.1.2、最佳类型推断 —— 根据右边的值推断左边类型——【从右到左】
let bestTypeInference2 = (x = 1) => x // 函数参数、返回值自动推断为 number 类型
// 1.1.3、上下文类型推断 —— 根据上下文推断event的类型
window.onkeydown = (event) => {
  console.log(event.code);
}

interface AsInterface {
  a: number
}
// 类型断言——修改类型
let asType = {} as AsInterface
asType.a = 1

// 兼容性
// 接口萊客性 —— 少的兼容多的（不嫌多）
interface CompatibilityInterface1 {
  a: any;
  b: any
}
interface CompatibilityInterface2 {
  a: any;
  b: any;
  c: any;
}
let compatibilityInterface1: CompatibilityInterface1 = { a: 1, b: 2 }
let compatibilityInterface2: CompatibilityInterface2 = { a: 1, b: 2, c: 3 }
compatibilityInterface1 = compatibilityInterface2 // compatibilityInterface2 != compatibilityInterface1 

// 函数兼客性
type CompatibilityType = (a: number, b: number) => void
function compatibilityFn(handler: CompatibilityType) {
  return handler
}
// 1、传递的参数个数
let params1 = (a: number) => { }
compatibilityFn(params1)
let params2 = (a: number, b: number, c: number) => { }
// compatibilityFn(params2)
// 可选参数和剩余參数
let params3 = (p1: number, p2: number) => { }
let params4 = (p1?: number, p2?: number) => { }
let params5 = (...args: number[]) => { }
// 固定参数 兼容 可选/剩余参数
params3 = params4
params3 = params5
// 可选 不兼容 固定/剩余 ——可以关闭tsconfig文件中的（strictFunctionTypes:false）
// params4 = params3
// params4 = params5
// 剩余参数 兼容 固定/可选
params5 = params3
params5 = params4
// 2、参数类型
interface ParamsType_2 {
  x: number
  y: number
}
interface ParamsType_3 {
  x: number
  y: number
  z: number
}
let paramsType_2 = (p: ParamsType_2) => { }
let paramsType_3 = (p: ParamsType_3) => { }
// paramsType_2 = paramsType_3
paramsType_3 = paramsType_2
// 3、返回值类型
let returnType_1 = () => ({ a: 'aa' })
let returnType_2 = () => ({ a: 'aa', b: 'bb' })
returnType_1 = returnType_2
// returnType_2 = returnType_1



