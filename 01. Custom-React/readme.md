# Working of React.

1. React is a JS library and the code in react get's compiled or parsed into javascript itself.

2. Inbuilt render functions are there to perform so.



#### This is how a custom renderer looks like in JS.
```js

function customRender(reactElement) {
  const element = document.createElement(reactElement.type);
  for (prop in reactElement.props) {
    element.setAttribute(prop, reactElement.props[prop]);
  }
  element.innerHTML = reactElement.children;
  container.appendChild(element);
}

```


and we've decided that it'll take input as 

```js
const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.github.com/nerdyabhi',
    target: '_blank',
  },

  children: 'Checkout my github page',
};
```

Isn't this amazing? right?

Now when we'll call the customRenderer for the reactElement object.

```cpp
customRender(reactElement);
```

Not exactly like this , but that's how the React do stuffs behind the scenes.

React expects specific arguements and then renders the element in it's virtual DOM.

like crazyyyy 🧠


## How in React ?

```js
    const reactElement = (
        <a href= "www.github.com/nerdyabhi" target = _blank>
    )
```

Notice that the parameters are 
```js
  <a href= "www.github.com/nerdyabhi" target = _blank>
  ```

they're defined like this in the inbuilt renderer of REACT 
 
 there are many other methods to render the html in REACT, one of the method is 

 ```js
    const reactElement = React.createElement(
        'a',
        {href:'https://github.com/nerdyabhi' , target : '_blank'}
        'Click to visit My github channel'
    )
 ```