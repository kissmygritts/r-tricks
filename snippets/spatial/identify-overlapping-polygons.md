---
title: Identify overlapping polygons
experience: advanced
collection: spatial
description: Rounding numbers doesn't always work as expected in R. Here is a simple solution.
---

Given a set of polygons (a type of spatial vector data) how can we identify the polygons that overlap eachother? For this code snippet we will use the [`{sf}` package](https://r-spatial.github.io/sf/).

## Identify overlap between two polygons

Let's start by exploring how to identify the overlap between two polygons.

```r
library(sf)

# 1. create some overlapping polygons
m1 <- rbind(c(0, 0), c(2, 0), c(2, 2), c(0, 2), c(0, 0))
p1 <- st_polygon(list(m1))

m2 <- rbind(c(1, 1), c(3, 1), c(3, 3), c(1, 3), c(1, 1))
p2 <- st_polygon(list(m2))

# 2. plot polygon 1
# the additional xlim and ylim parameters ensure both
# polygons will fit on the same plot
plot(p1, border = 'purple', xlim = c(0, 3), ylim = c(0, 3))

## 3. plot polygon 2
plot(p2, border = 'blue', add = T)

# 4. find the overlap between the two
overlap <- st_intersection(p1, p2)

# 4. plot the overlap
plot(p1, border = 'purple', xlim = c(0, 3), ylim = c(0, 3))
plot(p2, border = 'blue', add = T)
plot(overlap, col = 'orange', add = T)
```

Walking through this code line by line:

1. Create polygons that definitely do overlap. Here, we create two squares.
2. Plot the first polygon
3. Plot the second polygon. We can now see that these polygons definitely overlap.
4. Identify the overlap between the two polygons with the `st_intersection` function from the `{sf}` package.
5. Replot the polygons and add the overlap between the two.

`st_intersection` will return an object that is the same class as the first parameter. In our case a polygon since `p1` is a polygon. The result is the intersection, or portion of the two polygons that overlap eachother. 

![image showing overlap of two polygons](/img/intersection-2-polys.png)

[Geocomputation with R](https://geocompr.robinlovelace.net/) has a great section describing the [topological relationships](https://geocompr.robinlovelace.net/spatial-operations.html#topological-relations) between spatial objects.

### What about non-overlapping polygons?

We can adapt the code above to see the return value of `st_intersection` when polygons don't overlap.

```r
m1 <- rbind(c(0, 0), c(1, 0), c(1, 1), c(0, 1), c(0, 0))
p1 <- st_polygon(list(m1))

m2 <- rbind(c(2, 2), c(3, 2), c(3, 3), c(2, 3), c(2, 2))
p2 <- st_polygon(list(m2))

plot(p1, border = 'purple', xlim = c(0, 3), ylim = c(0, 3))
plot(p2, border = 'blue', add = T)

overlap <- st_intersection(p1, p2)
#> GEOMETRYCOLLECTION EMPTY
```

## Find the overlap of many polygons

This example is from the `st_intersection` [documentation](https://r-spatial.github.io/sf/reference/geos_binary_ops.html) of the `{sf}` package.

```r
# 1. set seed for repeatabillity
set.seed(134)

# 2. create many polygons
m <- rbind(c(0,0), c(1,0), c(1,1), c(0,1), c(0,0))
p <- st_polygon(list(m))
n <- 5
l <- vector("list", n)
for (i in 1:n) {
  l[[i]] = p + 3 * runif(2)
}

s <- st_sfc(l)
s <- st_as_sf(s)
s$id <- seq(1, nrow(s))

# 3. plot polygons
plot(st_geometry(s), col = sf.colors(categorical = TRUE, alpha = .5))
text(st_coordinates(st_centroid(s)), add = T)

# 4. identify overlap
overlap <- st_intersection(s)

## view the data
overlap
## preview of overlap
#> Simple feature collection with 10 features and 3 fields
#> geometry type:  POLYGON
#> dimension:      XY
#> bbox:           xmin: 0.3018226 ymin: 0.5091987 xmax: 3.644496 ymax: 3.479921
#> CRS:            NA
#>     id n.overlaps origins                              x
#> 1    1          1       1 POLYGON ((1.601091 2.355931...
#> 2    2          1       2 POLYGON ((2.644496 1.509199...
#> 2.1  2          2    2, 3 POLYGON ((2.82985 0.7537682...
#> ....

# 5. get polygons that overlap
## check the n.overlaps column of the data
overlap <- overlap[overlap$n.overlaps > 1, ]

# 6. plot the overlapping polygons
plot(st_geometry(s), col = NA)
plot(overlap['n.overlaps'], add = T, col = sf.colors(categorical = T))
```

This is a little more complicated. However, most of this code is creating a set of random polygons (it isn't important to understand this code). Let's walk through it line by line:

1. `set.seed` makes the random numbers reproducible
2. Create a set of random polygons
3. Plot the random polygons with the id for each polygon
4. Identify the overlap of the polygons with `st_intersection`
5. Filter the overlap to only those polygons that are overlapping. The result of `st_intersection` contains a column called `n.overlaps` that represents the number of overlaps for the resulting geometry. If `n.overlaps > 1` then multiple polygons are overlaping. 
6. Plot the resulting polygons over the original polygons. Each color represents a unique polygon created because of the intersection of some number of polyongs.

![many overlapping polygons](/img/many-overlaping-polys.png)

## Scale this to hundreds of polygons

This solution can be scaled to large sets of polygons. See the code below.

```r
set.seed(134)
m <- rbind(c(0,0), c(1,0), c(1,1), c(0,1), c(0,0))
p <- st_polygon(list(m))
n <- 300
l <- vector("list", n)
for (i in 1:n) {
  l[[i]] = p + 10 * runif(2)
}

s <- st_sfc(l)
s <- st_as_sf(s)
s$id <- seq(1, nrow(s))

plot(st_geometry(s), col = sf.colors(categorical = TRUE, alpha = .5))

overlap <- st_intersection(s)

# plot the result of st_intersection, it'll be 
# colored by number of overlaps
plot(overlap['n.overlaps'])
```

![lots of overlapping polygons](/img/lots-of-overlaps.png)

This time we plot all the polygons and color them by the `n.overlaps` column. The brighter the color the more polygons that overlap.