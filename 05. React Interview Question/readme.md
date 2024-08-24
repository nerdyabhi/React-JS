In our counter Project
we had

```js
<button
  onClick={() => {
    setCount(count + 1);
  }}
></button>
```

Very pretty decent code, that updates the counter by 1.

## Q1. Now what will happen if

the code is changed to

```js
<button
  onClick={() => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }}
></button>
```

**Ans** : Nothing will change.

### But why?

When you use `setCount(count + 1)` multiple times, each call is using the original count value from when the component first ran. React does not immediately update the state, so all those calls see the same initial value. That's why even though you call `setCount(count + 1)` four times, the count only increases by 1.

React batches these updates to optimize performance. To make sure each update uses the most recent count, you should use a function to update the state, like this:

## Q2. But how to Perform the same operation then ?

- We can do something like this.

```js
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);
```

- It's not a good practice usually but the setcount takes callback function where we can get the prevState of the count. and can do perform operations like this.

~ DO follow [Nerdy Abhi](https://www.github.com/nerdyabhi)
