import { describe, expect, test } from "bun:test"
import { createNegativeDiagonalOrderMatrix, createPositiveDiagonalOrderMatrix } from "."

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

    test("With mapfn", () => {
        const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
        const actual = createPositiveDiagonalOrderMatrix(3, 3, (idx) => values[idx])
        const expected = [
            [ "A", "C", "F" ],
            [ "B", "E", "H" ],
            [ "D", "G", "I" ],
        ]
        expect(actual).toEqual(expected)
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

describe("createNegativeDiagonalMatricex", () => {
    test("Square matrix", () => {
        expect(createNegativeDiagonalOrderMatrix(3, 3)).toEqual([
            [3, 6, 8],
            [1, 4, 7],
            [0, 2, 5],
        ])
    })

    test("Rectangular matrix", () => {
        expect(createNegativeDiagonalOrderMatrix(4, 3)).toEqual([
            [3,  6,  9,  11],
            [1,  4,  7,  10],
            [0,  2,  5,  8],
        ])
        expect(createNegativeDiagonalOrderMatrix(3, 4)).toEqual([
            [6,  9, 11],
            [3,  7, 10],
            [1,  4,  8],
            [0,  2,  5],
        ])
    })

    test("With mapfn", () => {
        const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
        const actual = createNegativeDiagonalOrderMatrix(3, 3, (idx) => values[idx])
        const expected = [
            [ "D", "G", "I" ],
            [ "B", "E", "H" ],
            [ "A", "C", "F" ],
        ]
        expect(actual).toEqual(expected)
    })
})