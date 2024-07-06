const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 获取命令行参数中的输入文件路径
const inputFilePath = process.argv[2];
if (!inputFilePath) {
  console.error('Please provide the input file path as an argument.');
  process.exit(1);
}

// 创建 words 目录
const wordsDir = path.join(__dirname, '../words');
if (!fs.existsSync(wordsDir)) {
  fs.mkdirSync(wordsDir);
}

// 创建接口来读取文件
const rl = readline.createInterface({
  input: fs.createReadStream(inputFilePath),
  output: process.stdout,
  terminal: false
});

// 获取当前日期
function getCurrentDate() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// 将字符串中的特殊字符转换为下划线
function sanitizeFilename(name) {
  return name.replace(/[\/\\?%*:|"<>]/g, '_');
}

// 跟踪已处理的行
const processedLines = new Set();

// 逐行读取文件
rl.on('line', (line) => {
  if (processedLines.has(line)) {
    // 如果该行已处理过，则跳过
    return;
  }

  try {
    const json = JSON.parse(line);
    const word = json.word;
    const content = json.content;

    // 转换文件名中的特殊字符
    const sanitizedWord = sanitizeFilename(word);
    // 创建文件路径
    const filePath = path.join(wordsDir, `${sanitizedWord}.md`);

    // 检查文件是否存在
    if (fs.existsSync(filePath)) {
      // 文件存在，追加内容
      const appendContent = `\n---\n[[${getCurrentDate()}]]\n\n${content}\n`;
      fs.appendFile(filePath, appendContent, (err) => {
        if (err) throw err;
        console.log(`Content appended to ${filePath}`);
      });
    } else {
      // 文件不存在，创建文件并写入内容
      const initialContent = `# ${word}\n\n${content}\n`;
      fs.writeFile(filePath, initialContent, (err) => {
        if (err) throw err;
        console.log(`${filePath} has been saved!`);
      });
    }

    // 将处理过的行添加到 Set 中
    processedLines.add(line);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});

rl.on('close', () => {
  console.log('File processing completed.');
});

