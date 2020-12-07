---
title: Uppercase a string
experience: basic
collection: strings
description: How to convert a string to all uppercase letters
---

```r
# base r
s <- 'Yellow'
casefold(s, upper = TRUE)
#> [1] "YELLOW"

# stringr
stringr::str_to_upper(s)
#> [1] "YELLOW"

# stringi
stringi:stri_trans_toupper(s)
#> [1] "YELLOW"

# all these methods work on character vectors
s <- c('Yellow', 'green')
casefold(s, upper = TRUE)
#> [1] "YELLOW" "GREEN"

# stringr
stringr::str_to_upper(s)
#> [1] "YELLOW" "GREEN"

# stringi
stringi:stri_trans_toupper(s)
#> [1] "YELLOW" "GREEN"

# write your own function
to_uppercase <- function(s) {
  casefold(s, upper = FALSE)
}

to_upercase(s)
#> [1] "YELLOW" "GREEN"
```

Like most things in R, there are several methods to convert a string to all uppercase letters. Base R provides a solution with `casefold`. `stringi` and `stringr` attempt to provide a more consistent interface for string and text manipulation. Alternatively, write your own function if you don't want to rely on an external package but don't like the interface of `casefold`.