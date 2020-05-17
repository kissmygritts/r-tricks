---
title: Looping patterns
experience: tip
collection: loops
---

There are several different methods to initialize a loop, whether it be a for loop or any of the apply function. All the different methods deal with declaring how the loop is going to iterate over the input data.

## Loop over elements

```r
# create a named vector
vec <- c('apples', 'oranges', 'bananas')
names(vec) <- letters[1:3]

for (x in vec) {
  # loop body ...
  print(x)
}
#> [1] "apples"
#> [1] "oranges"
#> [1] "bananas"
```

In this example the foor loop is initialized and iterating over the elements in the input vector. Printing `x` shows the value of the iterator. In this case a fruit. 

An analogous `sapply` statement might look like this:

```r
sapply(vec, function(x) {
  print(x)
})
```

## Loop over indices

```r
for (i in seq_along(vec)) {
  print(vec[i])
}
#> [1] "apples"
#> [1] "oranges"
#> [1] "bananas"

# and an analogous sapply
sapply(seq_along(vec), function(i) {
  print(vec[i])
})

# output of seq_along function
seq_along(vec)
#> [1] 1 2 3
```

Each of these rely on the `seq_along` function which creates a sequence along each value in the vector, starting at 1 and continuing until the last value (in this example that is 1, 2, 3). The value of the iterator, `i`, in the loop is the index of each element in the vector. Use bracket notation to reference the actuall value, `vec[i]`.

## Loop over names

```r
for (name in names(vec)) {
  print(vec[name])
}
#> [1] "apples"
#> [1] "oranges"
#> [1] "bananas"

# and an sapply
lapply(names(vec), function(name) {
  print(vec[name])
})
```

This method is the rarest of the three because it requires the object that will be looped over to have names. This isn't always true. I highly recommend using one of the other two methods.