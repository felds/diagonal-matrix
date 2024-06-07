# Felds / Diagonal Matrix

Creates 2d matrices with numbers sorted diagonally, useful for masking arrays when creating listings.

Example:

```ts
const fruits = [
    "1 - Apple",
    "2 - Grape",
    "3 - Mango",
    "4 - Lemon",
    "5 - Peach",
    "6 - Melon",
    "7 - Plums",
    "8 - Berry",
    "9 - Guava",
]
const sortMask = createPositiveDiagonalOrderMatrix(3, 3)
const sortedFruits = sortMask.map((row) => row.map((i) => fruits[i]))

// outputs:
// [
//      [ "1 - Apple", "3 - Mango", "6 - Melon" ]
//      [ "2 - Grape", "5 - Peach", "8 - Berry" ]
//      [ "4 - Lemon", "7 - Plums", "9 - Guava" ]
// ]
```
