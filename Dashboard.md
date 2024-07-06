# 今日单词（无标记）

```dataview
list
from "words"
where length(file.tags) = 0
sort hash(dateformat(date(today), "YYYY-MM-DD"), file.name) asc
limit 20
```

# 今日已学习

```dataview
list
from "words"
where file.mday = date(today)
limit 20
```

# 学习中

```query
tag: 学习中
```


# 已掌握

```query
tag: 已掌握
```
