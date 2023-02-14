
Table:
  webpack
  lib sematic ui (react lib)
  react JSX
  function component
  class component
      render()
  PROPS: Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes
  React usestate HOOK: Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. This new function useState is the first “Hook"
  Exmple,
  ```js
  import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
  
<a href="https://cdnjs.com/libraries/semantic-ui">semantic ui lib for css</a>

> more likely to the tailwind css. used a inbuilten classes.
