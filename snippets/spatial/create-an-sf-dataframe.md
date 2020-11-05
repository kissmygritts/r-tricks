---
title: Create an sf object
experience: basic
collection: spatial
description: Create a simple features data frame with the sf packages for R
---

`sf` objects are very similar to `data.frame`. In fact, `sf` objects inherit many methods from the `data.frame` class. First, let's create a `data.frame` with an ID and some attribute data.

``` r
library(sf)

df <- data.frame(
  x = runif(10, -115, -110),
  y = runif(10, 40, 42),
  id = c(rep('a', 5), rep('b', 5)),
  attr_data = rnorm(10, 0, 1)
)

df
#>            x        y id   attr_data
#> 1  -112.0961 40.50321  a  0.11474846
#> 2  -110.1470 40.31472  a -0.39363779
#> 3  -111.8775 41.42512  a  0.12601113
#> 4  -114.8021 40.77149  a -1.19788279
#> 5  -110.1005 40.11135  a -0.04337118
#> 6  -110.3201 41.12008  b  0.86134310
#> 7  -112.4721 40.96720  b  2.56716788
#> 8  -114.8243 40.94679  b -0.55821603
#> 9  -112.6783 40.39912  b  0.92322485
#> 10 -114.2898 41.50762  b -0.25177705

# check the class
class(df)
#> [1] "data.frame"
```

Each record in the `data.frame` includes the x, y coordinates with and ID, an attribute data (called `attr_data`).

Now convert the `data.frame` to an `sf` object, or spatial data frame, with the `st_as_sf` function.

```r
pts_sf <- st_as_sf(x = df, coords = c('x', 'y'), crs = 4326)

# check the output
pts_sf
#> Simple feature collection with 10 features and 2 fields
#> geometry type:  POINT
#> dimension:      XY
#> bbox:           xmin: -114.8243 ymin: 40.11135 xmax: -110.#> 1005 ymax: 41.50762
#> CRS:            EPSG:4326
#>    id   attr_data                   geometry
#> 1   a  0.11474846 POINT (-112.0961 40.50321)
#> 2   a -0.39363779  POINT (-110.147 40.31472)
#> 3   a  0.12601113 POINT (-111.8775 41.42512)
#> 4   a -1.19788279 POINT (-114.8021 40.77149)
#> 5   a -0.04337118 POINT (-110.1005 40.11135)
#> 6   b  0.86134310 POINT (-110.3201 41.12008)
#> 7   b  2.56716788  POINT (-112.4721 40.9672)
#> 8   b -0.55821603 POINT (-114.8243 40.94679)
#> 9   b  0.92322485 POINT (-112.6783 40.39912)
#> 10  b -0.25177705 POINT (-114.2898 41.50762)

# check the class of pts_sf
class(pts_sf)
#> [1] "sf"         "data.frame"
```

The `st_as_sf` function accepts [several parameters](https://r-spatial.github.io/sf/reference/st_as_sf.html).

* `x` - is required, an object to be converted into an `sf` object.
* `coords` - the character or numeric vector of the columns containing the coordinates. This is only applicable for point data.
* `crs` - the coordinate reference system of the coordinates. In this case we are specifying that the points are in WGS 84, or [EPSG ID 4326](https://epsg.io/4326). This is the system used in GPS devices. 

The class of `pts_sf` has 2 outputs. The first `sf`, the second `data.frame`. This is an indicator that `sf` objects inherit methods from the `data.frame` class. As an example, we can filter this code using square brackets `[` like a `data.frame`.

```r
pts_sf[pts_sf$id == 'a', ]
#> Simple feature collection with 5 features and 2 fields
#> geometry type:  POINT
#> dimension:      XY
#> bbox:           xmin: -114.8021 ymin: 40.11135 xmax: -110.1005 ymax: 41.42512
#> CRS:            EPSG:4326
#>   id   attr_data                   geometry
#> 1  a  0.11474846 POINT (-112.0961 40.50321)
#> 2  a -0.39363779  POINT (-110.147 40.31472)
#> 3  a  0.12601113 POINT (-111.8775 41.42512)
#> 4  a -1.19788279 POINT (-114.8021 40.77149)
#> 5  a -0.04337118 POINT (-110.1005 40.11135)
```

## Working with the Tidyverse

A killer feature of the `sf` package is that it plays nicely with `tidyverse`. This means methods from from packages like `dplyr` will work. One thing to note, packages in the `tidyverse` use the `tibble` package to represent `data.frame`. You can think of this as an extension to the `data.frame` class. This means that the `sf` object can also use the `tibbl` format. For example:

```r
# load tidyverse libraries
library(tidyverse)

# create a tibble object and check the class
df_tbl <- as_tbl(df)
class(df_tbl)
#> [1] "tbl_df"     "tbl"        "data.frame"

# create sf object from a tbl
tbl_sf <- st_as_sf(x = df_tbl, coords = c('x', 'y'), crs = 4326)

# check the class
class(tbl_sf)
#> sf"         "tbl_df"     "tbl"        "data.frame"
```

This is great! We can now use the `tidyverse`. Now we can filter the `sf` object with the `dplyr` packages. *Note: the `dplyr` package is loaded when loading the `tidyverse` package.*

```r
# filter with the dplyr package
filter(tbl_sf, id == 'a')
#> Simple feature collection with 5 features and 2 fields
#> geometry type:  POINT
#> dimension:      XY
#> bbox:           xmin: -114.8021 ymin: 40.11135 xmax: -110.1005 ymax: 41.42512
#> CRS:            EPSG:4326
#> # A tibble: 5 x 3
#>   id    attr_data             geometry
#> * <chr>     <dbl>          <POINT [°]>
#> 1 a        0.115  (-112.0961 40.50321)
#> 2 a       -0.394   (-110.147 40.31472)
#> 3 a        0.126  (-111.8775 41.42512)
#> 4 a       -1.20   (-114.8021 40.77149)
#> 5 a       -0.0434 (-110.1005 40.11135)
```

## Summary

The `sf` package is a great package for working with spatial data. `sf` objects can be thought of as spatial `data.frames`.

* Convert `data.frame`s or `tbl_df` objects to `sf` objects with the `st_as_sf` function.
* `sf` objects inherit methods from `data.frame`s and `tbl_df`s or `tbl`s.
* `sf` objects play nicely with the packages from the `tidyverse`.
* `sf` objects can be converted to `sp` objects if the need arises, for example: `as(tbl_sf, 'Spatial')`