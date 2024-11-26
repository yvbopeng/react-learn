import { useState, useMemo } from "react";
import { marked } from "marked";

// 初始文本内容
const initTextObj = {
    initText:  '# Markdown Preview\n' +
    '## Header 2\n' +
    '1. List item 1\n' +
    '2. List item 2\n' +
    '3. List item 3\n' +
    '\n' +
    '[百度](https://www.baidu.com/)\n' +
    '\n' +
    '\n' +
    '粗体文本：**粗体文本**  __粗体文本__\n' +
    '斜体文本：*斜体文本*    _斜体文本_\n' +
    '删除文本：~~删除文本~~\n' +
    '标记文本：==标记文本==\n' +
    '下划线：<u>下划线文本</u>\n' +
    '\n' +
    '```javascript\n' +
    '  // An highlighted block\n' +
    '  var foo = "bar";\n' +
    '```\n' +
    'sdflsdf `pringtf("hello world");`adfadf\n' +
    '- 1级列表\n' +
    '    * 2级列表\n' +
    '    * 2级列表\n' +
    '        + 3级列表\n' +
    '        + 3级列表\n' +
    '- 1级列表\n' +
    '- 1级列表\n' +
    '\n' +
    '> 引用1\n' +
    '>> 引用2\n' +
    '>\n' +
    '> 引用1\n' +
    '\n' +
    '\n' +
    '## 图片\n' +
    '![图片描述](https://www.z01.com/template/office/style/images/hezi5.jpg)'
};

export default function Markdown() {
    // 状态管理：保存用户输入的 Markdown 文本
    const [input, setInput] = useState(initTextObj.initText);

    // 使用 useMemo 缓存解析后的 HTML，减少不必要的计算
    const parsedMarkdown = useMemo(() => {

        marked.setOptions({
            breaks: true, // 使换行符(\n)转为 <br />
            gfm: true     // 启用 GitHub 风格的 Markdown
        });
        
        return marked.parse(input);
    }, [input]);

    return (
        <div className="markdown">
            <div className="editor-container">
                <textarea
                    name="markdown"
                    id="editor"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="在此输入 Markdown 文本..."
                    rows={10}
                ></textarea>
            </div>
            <div
                id="preview"
                className="preview-container"
                dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
            ></div>
        </div>
    );
}
