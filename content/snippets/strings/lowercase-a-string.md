---
title: Lowercase a string
experience: basic
collection: strings
description: How to convert a string to all lowercase letters
---

```r
# base r
s <- 'Yellow'
casefold(s, upper = F)
#> [1] "yellow"

# stringr
stringr::str_to_lower(s)
#> [1] "yellow"

# stringi
stringi:stri_trans_tolower(s)
#> [1] "yellow"

# all these methods work on character vectors
s <- c('Yellow', 'GREEN')
casefold(s, upper = FALSE)
#> [1] "yellow" "green"

# stringr
stringr::str_to_lower(s)
#> [1] "yellow" "green"

# stringi
stringi:stri_trans_tolower(s)
#> [1] "yellow" "green"

# write your own function
to_lowercase <- function(s) {
  casefold(s, upper = FALSE)
}

to_lowercase(s)
#> [1] "yellow" "green"
```

Like most things in R, there are several methods to convert a string to all lowercase letters. Base R provides a solution with `casefold`. `stringi` and `stringr` attempt to provide a more consistent interface for string and text manipulation. Alternatively, write your own function if you don't want to rely on an external package but don't like the interface of `casefold`.