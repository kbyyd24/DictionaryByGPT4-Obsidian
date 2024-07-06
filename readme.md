
这是基于 [DictionaryByGPT4](https://github.com/Ceelog/DictionaryByGPT4) 生成的 JSON 格式单词卡生成的 obsidian vault，可以用来学习里面的单词。

## 结构

- 所有的单词都在 `word` 目录中，每个单词单独一个文件
- `scripts` 中的脚本是用来读取[DictionaryByGPT4 中的 gptwords.json](https://github.com/Ceelog/DictionaryByGPT4/blob/main/gptwords.json) 文件并生成 `words` 中的文件的。由 ChatGPT-4o 生成
- `Dashboard` 用来组织单词，每日获取随机的未学习单词，收集学习中、已掌握单词

## 用法

`Dashboard` 中的 `今日单词` 是利用 `Dataview` 插件查询的没有标签的单词，每日生成新的 hash 并列出前 20 个。

`Dashboard` 中的 `今日已学习` 是利用 `Dataview` 查询的最后修改日期是今天的单词。

`学习中` 和 `已掌握` 是利用 obsidian 自带的查询功能列出的单词。

### 随机单词

可以利用 `Smart Random Note` 插件来随机打开单词卡，已绑定三个快捷键：

- 随机任意文件：`Ctrl+Alt+R`
- 从搜索结果中打开文件：`Ctrl+Alt+S`
- 从 tag 中打开文件：`Ctrl+Alt+T`

### 单词联想

原有数据中已经为一些单词列出了关联单词，但并不是 obsidian 的双链。可以利用 `Unlinked metions` 来查找这些单词的引用并添加 link，以 abstract 为例：

![[abstract unlinked metions.png]]
点击 link 后即可建立双链，方便将来查看。