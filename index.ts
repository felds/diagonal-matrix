console.clear()

export function createPositiveDiagonalOrderMatrix(
    width: number,
    height: number,
): number[][] {
    if (!width || !height)
        throw RangeError(
            `Matrices should have positive lengths. ${width}×${height} given.`,
        )

    const matrix: number[][] = Array.from({ length: height }, () =>
        Array.from({ length: width }),
    )

    // console.log("empty matrix", matrix)

    const numDiagonals = width + height - 1
    for (let d = 0, num = 0; d < numDiagonals; d++) {
        // determine the starting point of the diagonal
        let row = d < height ? d : height - 1
        let col = d < height ? 0 : d - height + 1

        // console.log("Diagonal", [row, col, d])

        // fill the cells
        while (col < width && row >= 0) {
            matrix[row][col] = num
            row--, col++, num++
        }
    }

    return matrix
}
