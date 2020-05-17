---
title: Create a dataframe
experience: basic
collection: dataframes
---

Dataframes are two dimensional data structures in R. The easiest analogy is an Excel spreadsheet. Columns contain the variables and rows contain the observations. Many R packages create data structures similar to a base R `data.frame`. Most of these additionl data structures inherit the properties of a base R `data.frame`

## Create a `data.frame` with base R

The base R data structure is called a `data.frame`, and is created with the `data.frame` function.

```r
a <- data.frame(
  a = 1:3,
  b = letters[1:3]
)

# view the data.frame
a
#> output....
```

## Create a `tibble`

A `tibble` is a `data.frame` like structure from the `tibble` package (part of the tidyverse). These are common when using funcions from the `readr`, `dplyr`, `tidyr`, or `tibble` packages.

```r
a <- tibble(
  a = 1:3,
  b = letters[1:3]
)

# view the tibble

# inherits from data.frame
```