# Asynchronous JS with Callbacks, Promises and Async/Await
JavaScript is synchronous, single threaded language. This means it runs one command at a time on a particular order. If we want to perform some actions parallelly then we have to use asynchronous JavaScript. callbacks, promises are examples for asynchronous JavaScript methods. Lets see how these methods working in JS.

### Callbacks
If there are two methods that runs one after the other we will get the result according to the method calling order. The below example has two functions that execute after some time. If we normally call these methods one after the other, it will print “second” to the console first and then “first”. But we need to call first function and then after it should run the second function. This kind of scenarios we can use callbacks. We are passing the second function as a callback function to the first function. So this will execute first function and will print “first” to the console first and then it executes the second function with “second” to the console.

### Promises
promises are also used to achieve the asynchronous features in JS. Instead of callbacks we can use promises to run our tasks parallelly and according to our own order. So with promises we make sure that the first function return a promise as in the example. According to the logic in that promise will go to resolve stage. Therefore we can call first function, and with “then” we can pass the second function. So the second function will wait for first function results and then it will execute. The output will be “first” and then it will print “second” to the console.

### Async / Await
Async and Await makes easier to write promises. It is not needed to call functions like in the above example. We can use the async keyword to make the main function asynchronous and inside main function we have our two methods. The first function will return a promise , so for that we use await keyword. Then we can call the second function and finally we can call main function to execute. This also produce the same output as default promises.

### Summary
So using callbacks and promises we can achieve asynchronous programming in JavaScript. Async and Await makes easier to write promises.

### Get in Touch
Linkedin — https://www.linkedin.com/in/tharaka-udayanga-61a424166/
