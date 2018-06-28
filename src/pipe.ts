type Arity<A, B> = (a: A) => B

/**
 * Declare function overloads
 */
export function pipe<T, A>(fn1: Arity<T, A>): (init: T) => A
export function pipe<T, A, B>(fn1: Arity<T, A>, fn2: Arity<A, B>): (init: T) => B
export function pipe<T, A, B, C>(fn1: Arity<T, A>, fn2: Arity<A, B>, fn3: Arity<B, C>): (init: T) => C
export function pipe<T, A, B, C, D>(fn1: Arity<T, A>, fn2: Arity<A, B>, fn3: Arity<B, C>, fn4: Arity<C, D>): (init: T) => D
export function pipe<T, A, B, C, D, E>(fn1: Arity<T, A>, fn2: Arity<A, B>, fn3: Arity<B, C>, fn4: Arity<C, D>, fn5: Arity<D, E>): (init: T) => E
export function pipe<T, R>(...fns: Arity<any, any>[]): (init: T) => R
/**
 * Pipe implementation
 */
export function pipe<T, R>(...fns: Arity<any, any>[]) {
    return (init: T): R =>
        fns.reduce((prev: any, fn: Arity<T, R>) => fn(prev), init)
}
