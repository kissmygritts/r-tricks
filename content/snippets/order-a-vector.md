---
title: Order a vector
experience: basic
collection: vectors
description: How to order a vector
---

## Order a numeric vector

```r
x <- c(4, 2, 5, 1, 2, 8, 6, 3, 7, 9)

# order returns the indices of the correct order
order(x)
#> [1] 4 2 7 1 3 6 8 5 9

# return the original values in the correct order
x[order(x)]
#> [1] 1 2 3 4 5 6 7 8 9

# reverse the order
x[order(x, decreasing = TRUE)]
#> [1] 9 8 7 6 5 4 3 2 1
```

## Order a character vector

```r
# create a random sequence of letters
x <- letters[sample(1:9, 9, replace = FALSE)]

# order returns the indices of the correct order
order(x)
#> [1] 3 9 4 8 2 7 1 6 5

# return the original values in the correct order
x[order(x)]
#> [1] "a" "b" "c" "d" "e" "f" "g" "h" "i"

# reverse the order
x[order(x, decreasing = TRUE)]
#> [1] "i" "h" "g" "f" "e" "d" "c" "b" "a"
```

## Dealing with NAs

One of the parameters for the `order` function is `na.last`. This will decide how to deal with any NA values in a vector. If `na.last = TRUE` (the default) NAs will be sorted to the end of the result vector. If `na.last = FALSE` NAs will be sorted to the beginning of the result vector.

```r
x <- c(1, 2, NA, 4, NA, 6)

x[order(x, na.last = FALSE)]
#> [1] NA NA  1  2  4  6

x[order(x, na.last = TRUE)]
#> [1]  1  2  4  6 NA NA
```