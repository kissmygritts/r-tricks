---
title: Rename the columns of a dataframe
experience: basic
collection: dataframes
---

```r
# create an example data frame
df <- data.frame(
  a = 1:3,
  b = letters[1:3]
)

# check the names of a column
colnames(df)

# rename names
colnames(df) <- c('numbers', 'letters')

# check column names again
colnames(df)
#> [1] "numbers" "letters"
```

## Use base R to rename columns

Dataframes are a special type of list, so it is possible to use the `names` function instead of `colnames`. `colnames` is preferable because it explicitly referencing the names of the columns. Using only `names` might lead to confusion since it might lead some to confuse `rownames` and `colnames`

```r
# create an example data frame
df <- data.frame(
  a = 1:3,
  b = letters[1:3]
)

# check the names of a column
colnames(df)

# rename names
colnames(df) <- c('numbers', 'letters')

# check column names again
colnames(df)
#> [1] "numbers" "letters"
```

Dataframes are a special type of list, so it is possible to use the `names` function instead of `colnames`. `colnames` is preferable because we are explicitly referencing the names of the columns. Using only `names` might lead to confusion since it might lead some to assume we are talking about the row names.

## Use `{dplyr}` to rename columns

The `{dplyr}` package has a handy function called `rename` that might make renaming columns easier.

```r
library(dplyr)

df <- data.frame(
  a = 1:3,
  b = letters[1:3]
)

df <- rename(df, numbers = a, letters = b)
```

`{dplyr}` can be a little funky because of non-standard evaluation (column names don't need to be in quotes). `rename` is especially handy when using pipes (`%>%`) from the `{magrittr}` package. 