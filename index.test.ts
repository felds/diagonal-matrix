import { describe, expect, test } from "bun:test"
import { createPositiveDiagonalOrderMatrix } from "."

describe("createPositiveDiagonalOrderMatrix", () => {
    test("Empty zero-length matrices", () => {
        expect(() => createPositiveDiagonalOrderMatrix(0, 0)).toThrowError(RangeError)
        expect(() => createPositiveDiagonalOrderMatrix(4, 0)).toThrowError(RangeError)
        expect(() => createPositiveDiagonalOrderMatrix(0, 4)).toThrowError(RangeError)
    })

    test("Square matrix", () => {
        expect(createPositiveDiagonalOrderMatrix(1, 1)).toEqual([
            [0]
        ])
        expect(createPositiveDiagonalOrderMatrix(3, 3)).toEqual([
            [0, 2, 5],
            [1, 4, 7],
            [3, 6, 8],
        ])
    })

    test("Rectangular matrix", () => {
        expect(createPositiveDiagonalOrderMatrix(4, 3)).toEqual([
            [0,  2,  5,  8],
            [1,  4,  7, 10],
            [3,  6,  9, 11],
        ])
        expect(createPositiveDiagonalOrderMatrix(3, 4)).toEqual([
            [0,  2,  5],
            [1,  4,  8],
            [3,  7, 10],
            [6,  9, 11],
        ])
    })
})