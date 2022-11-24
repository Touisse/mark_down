import './App.css';
import React , {useState} from "react";
import {marked} from "marked"

//a heading element (H1 size), a sub heading element (H2 size),
// a link, inline code, a code block, 
//a list item, a blockquote, an image, and bolded text.


function App() {
  const [text,setText] = useState(`
  # H1 
  ## H2
  [title](http://exemple.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**

  `);
  marked.setOptions({
    breaks : true
  })
  return (
    <div className="App">
    <textarea id="editor" onChange={(e) => {setText(e.target.value)}}
    value = {text}>
    </textarea>
    <div id="preview" dangerouslySetInnerHTML={{
      __html:marked(text)
    }}></div>
    </div>
  );
}

export default App;
