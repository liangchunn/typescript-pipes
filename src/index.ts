import { pipe } from './pipe'

/**
 * With one functor,
 * a1 is inferred correctly as a string
 * Note that hovering over arg1 will yield a '{}' type
 * You would have to explicity cast arg1
 * due to TypeScript not supporting hoisted types
 * More information: https://github.com/Microsoft/TypeScript/issues/9366
 */
const a1 = pipe((arg1: string) => arg1.toString())('f(x)')
console.log(`const a1 = ${a1} (type ${typeof a1})`)


/**
 * With two functors,
 * a2 is inferred correctly due to the function overload definition
 */
const a2 = pipe(
    (arg1: number) => arg1.toString(),
    (arg2: string) => Number(arg2)
)(2)
console.log(`const a2 = ${a2} (type ${typeof a2})`)

/**
 * With six functors,
 * you would need to specify the input type 
 * and the output type.
 * -- OR -- 
 * Add the overload yourself
 */
const a3 = pipe<number, number>(
    (arg1: number) => arg1.toString(),
    (arg2: string) => Number(arg2),
    _ => _,
    _ => _,
    _ => _,
    _ => _,
)(2)
console.log(`const a3 = ${a3} (type ${typeof a3})`)
