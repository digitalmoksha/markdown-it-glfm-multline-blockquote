# markdown-it-glfm-multline-blockquote

> Plugin to add [GitLab Flavored Markdown (GLFM)](https://docs.gitlab.com/ee/user/markdown.htm) [multiline blockquote](https://docs.gitlab.com/ee/user/markdown.html#multiline-blockquote) syntax for the [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

Supports the `>>>` multiline blockquote syntax.

```
>>>
This is a **quote**

- item 1
- item 2
>>>
```

gives

```
<blockquote>
<p>This is a <strong>quote</strong></p>
<ul>
<li>item 1</li>
<li>item 2</li>
</ul>
</blockquote>
```

As it follows the CommonMark fenced code block rules, you can embed blockquotes within blockquotes:

```
- item 1

  >>>>
  Quoting another quote

  >>>
  second quote
  >>>
  >>>>
```

## Install

node.js, browser:

```bash
npm install markdown-it-glfm-multline-blockquote --save
bower install markdown-it-glfm-multline-blockquote --save
```

## Use

```js
var md = require('markdown-it')()
           .use(require('markdown-it-glfm-multline-blockquote'));

md.render('>>>\nThis is a quote\n>>>') // => '<blockquote><p>This is a quote</p></blockquote>'
```

_Differences in browser._ If you load script directly into the page, without
a package system, the module will add itself globally as `window.markdownitInjectLinenumbers`.

## License

[MIT](https://github.com/digitalmoksha/markdown-it-glfm-multline-blockquote/blob/master/LICENSE)
