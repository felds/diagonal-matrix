/**
 * Create a non-empty matrix containing sequentials numbers sorted diagonally in
 * the positive diagonal, starting from the top-left cell.
 *
 * Check the [tests](./index.test.ts) to see some examples.
 *
 * @param cols The width of the matrix
 * @param rows The height of the matrix
 */
export function createPositiveDiagonalOrderMatrix(
    cols: number,
    rows: number,
): number[][] {
    if (!cols || !rows)
        throw RangeError(
            `Matrices should have positive lengths. ${cols}×${rows} given.`,
        )

    const matrix: number[][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }),
    )

    const numDiagonals = cols + rows - 1
    for (let d = 0, num = 0; d < numDiagonals; d++) {
        // determine the starting point of the diagonal
        let row = d < rows ? d : rows - 1
        let col = d < rows ? 0 : d - rows + 1

        // fill the cells
        while (row >= 0 && row < rows && col >= 0 && col < cols) {
            matrix[row]![col] = num
            row--, col++, num++
        }
    }

    return matrix
}

/**
 * Create a non-empty matrix containing sequentials numbers sorted diagonally in
 * the negative diagonal, starting from the bottom-left cell.
 *
 * Check the [tests](./index.test.ts) to see some examples.
 *
 * @param cols The width of the matrix
 * @param rows The height of the matrix
 */
export function createNegativeDiagonalOrderMatrix(
    cols: number,
    rows: number,
): number[][] {
    if (!cols || !rows)
        throw RangeError(
            `Matrices should have positive lengths. ${cols}×${rows} given.`,
        )

    const matrix: number[][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }),
    )

    const numDiagonals = cols + rows - 1
    for (let d = 0, num = 0; d < numDiagonals; d++) {
        // determine the starting point of the diagonal
        let row = d < rows ? rows - d - 1 : 0
        let col = d < rows ? 0 : d - rows + 1

        // fill the cells
        while (row >= 0 && row < rows && col >= 0 && col < cols) {
            matrix[row]![col] = num
            row++, col++, num++
        }
    }

    return matrix
}
