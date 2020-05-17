---
title: Loop with lapply
experience: advanced
collection: loops
---

## `lapply` basics

`lapply` is a more advance and expressive method of looping over a set of data. The results of an `lapply` loop accumulate as the loop runs, then returned as a list. For instance, the code below loops over a vectore with `lapply` to calculate the absolute value of every element.
```r
vec <- -2:2

result <- outlapply(vec, abs)
typeof(result)
#> list

result
#> [[1]]
#> [1] 2
#> 
#> [[2]]
#> [1] 1
#> 
#> [[3]]
#> [1] 0
#> 
#> [[4]]
#> [1] 1
#> 
#> [[5]]
#> [1] 2

# coerce to a character
unlist(result)
#> [1] 2 1 0 1 2
```

The results are saved, as a list, to the `result` variable. Coerce the list to a vector of numbers with the `unlist` function. 

The second parameter to `lapply` is either the name of a function, or an anonymous function. In the example above the `abs` function is provided as the second parameter. Sometimes more logic needs to be provided than just a single function, that is when an anonymous function should be used. 

```r
# example of anonymous function
```

## Looping patterns

There are three basic methods to loop over a vector with `lapply`: 

1. loop over the elements: `lapply((x in vec), ...)`
2. loop over the numeric indices: `lapply((i in 1:length(vec)), ...)` or `lapply((i in seq_along(vec)), ...)`
3. loop over the names: `lapply((name in names(vec)), ...)`

The first example above used the first method. The second example used the second method. All three are common across the R ecosystem. Become familiar with them so that reading any of the three becomes second nature. 

*Borrowed from [Advanced R by Hadley Wickham](adv-r.had.co.nz)*