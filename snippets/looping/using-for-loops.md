---
title: Writing for loops
experience: intermediate
collection: loops
---

## For loop basics

For loops are used whenever we need to apply the same function to every value in a set of values. For instance, in the code below I've written a for loop to calculate the absolute value of every value in a vector of numbers.

```r
vec <- -2:2

for (x in vec) {
  print(abs(x))
}

#> output ...
#> [1] 2
#> [1] 1
#> [1] 0
#> [1] 1
#> [1] 2
```

This is a contrived example to show the basic structure of a for loop. Unfortunately it doesn't save the compute absolute value to a variable. This can be fixed by pushing the results to an vector that declared before the for loop.

```r
vec <- -2:2
result_vec <- c()

for (i in 1:length(vec)) {
  result_vec <- c(result_vec, abs(vec[i]))
}

# view result_vec
result_vec
#> [1] 2 1 0 1 2
```

In this example the absolute value is combined with `result_vec`, with the `c` function, in each iteration. This example uses a different method to start the for loop. It loops over each index of `vec` instead of looping over each element of `vec`. Then in the body of the loop values of `vec` are referenced by their index, `vec[i]`.

## Looping patterns

There are three basic methods to loop over a vector: 

1. loop over the elements: `for (x in vec)`
2. loop over the numeric indices: `for (i in 1:length(vec))` or `for (i in seq_along(vec))`
3. loop over the names: `for (name in names(vec))`

The first example above used the first method. The second example used the second method. All three are common across the R ecosystem. Become familiar with them so that reading any of the three becomes second nature. 

*Borrowed from [Advanced R by Hadley Wickham](adv-r.had.co.nz)*