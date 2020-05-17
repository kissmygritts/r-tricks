---
title: Create a vector
experience: basic
collection: vectors
---

A vector is a set of data all in a line. Every value within a vector must be of the same type, for instance, all number or character, etc. There are many ways and shortcuts to create vectors. 

```r
x <- c(1, 2, 3, 4)

# which is the same as
y <- 1:4
```

The function `c` will be one of the most common ways to create a vector of data. 

In the exmample above `:` is a shortcut to create a sequence of consecutive numbers. It can be used like above to create a sequence going from smallest to largest. Or, like this, `4:1` to create a sequence going from largest to smallest. Expressions can be used on either side of the `:` too.

```r
1:2 * 2
#> [1] 1 2 3 4
```

Vectors are one of the basic data structures in R. Learn them well.