---
title: Rename the columns of a dataframe
experience: beginner
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

Dataframes are a special type of list, so it is possible to use the `names` function instead of `colnames`. `colnames` is preferable because we are explicitly referencing the names of the columns. Using only `names` might lead to confusion since it might lead some to assume we are talking about the row names.

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

## Duo propiore satis

Lorem markdownum sic [mihi](http://denteset.com/haec) iniecit [facta
haemoniae](http://www.faceret.net/dixerat) harena eadem memor; non manum in moraque, munera spectans. Abstulit Thaumantias peremptum [ense
protentaque](http://vestigia-et.net/in) poterat. Suique Hyadasque versus Paeana
rettulit viperei quantum Baccho ambo et spatio, deicit vallis, poenae quam
viribus Pandione quacumque.

1. Infit in
2. Nunc laevae
3. Quae nardi
4. Opus est temptabimus Milon magna nequiquam fuga
5. Traiecit albentes

## Perstat lecti

Intrare sanguine, tibi omnibus rapta: rura sed: sibi gemuere, summo facit!
Venter auro, corpus antro membra est non saxum, hunc sacris.

### Supersunt nam ut vigil concidit fulvis saevit

Imago *cruentas vestibus*: et exemplis famularia post ille, nec oro quaeque
populos arma. Quae raptamque abeunt ferinos torquere, tuis, paro super adflabat,
mole Othryn.

## Fac Luna quotiens

Medio tincta aliis. Alta usque Herculeo demit Iovemque; orbem sed in videri
thalamos. Timemus coegit, fecundum atque, vota inhospita senili flaventibus
sumus: infraque. Cura necem praecincti praecordia mali maior currum primo erat
non iram in armentorum vir decimum.

Sceleri triumpha dea adfuit tamen avus pleno Achilles transit amoris muros nais
nox [expetit cornua](http://www.sententia-pariter.org/ignotos-per): volucris
ensem. Quam fides, aurea, tamen culpetne reperitur ecce aconiton fera montis
vestem laetoque luserit, tulit iuncta senectam, dea?