import React, { useState } from 'react';
import marked from 'marked'
import './App.css';

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\` between 2 backticks. 
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists to
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`

function App() {
   const [text, setText] = useState(initialText)
   const [markup, setMarkup] = useState(marked(initialText))

   const handleChange = (e) => {
      setText(e.target.value)
      const html = marked(e.target.value)
      setMarkup(html)
   }

   return (
      <div className="App">
         <header>Editor</header>
         <textarea value={text} onChange={handleChange} name="editor" id="editor"></textarea>
         <header>Preview</header>
         <div id="preview" dangerouslySetInnerHTML={{ __html: markup }}></div>
      </div>
   );
}

export default App;
