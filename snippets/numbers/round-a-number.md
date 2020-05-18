---
title: Round a number
experience: basic
collection: numbers
description: Rounding numbers doesn't always work as expected in R. Here is a simple solution.
---

```r
x <- 1:5 + .5
#> [1] 1.5 2.5 3.5 4.5 5.5
round(x)
#> [1] 2 2 4 4 5

# round as expected
round2 <- function(x, digits = 0) {
  trunc((abs(x) * 10^digits) + .5) / (10^digits) * sign(x)
}

round2(x)
#> [1] 2 3 4 5 6
```

Rounding numbers in R might not work as expected. In the example above 1.5 rounds to 2, as expected, but 2.5 rounds to 2 also. What's up with that? [The documentation](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/Round) for the `round` function goes into detail about how it works. *The takeaway is when the number is even (2.5) it rounds down, when the number is odd it rounds up*. This behavior is strange, but expected. It says so in the documentation. 

## Round as expected 

The code above provides a solution to round as expected with a function called `round2`. Let's walk through that function to understand how it works, then test it with some examples.

```r
x <- 2.5
digits <- 0

# 1. get the absolute value of x, then multiply by the 
# digits to round off
(z <- abs(x) * 10^digits)
#> [1] 2.5

# 2. this makes certain the number will round properly
(z <- z + 0.5)
#> 3

# 3. truncate z to return an integer
(z <- trunc(z))
#> 3

# 4. back transform the number to the proper magnitude
(z <- z / 10^digits)
#> 3

# 5. assign the proper sign to the number
(z <- z * sign(x))
#> 3
```

Step 2 might be the most confusing above (it was for me). Once `abs(x) * 10^digits` is computed we are mostly dealing with the integers of the number. For instance, `2.151 * 10^1 = 21.51`. Then `21.51 + 0.5 = 22.51`. This step is doing the rounding. Adding 0.5 will make sure that any decimals greater than 0.5 increment to the next integer, while any decimals less than 0.5 will not increment the integer: `21.51 + 0.5 = 22.51` and `21.11 + 0.5 = 21.51`. Then, in the next step, the result is truncated to just the integer. Therefore, `trunc(22.51) = 22` and `trunc(21.51) = 21`.

Try the sequence of code above above with different values for `x` and `digits` and see how it works. 