# InlineJS
A simple JS function that can evaluate JavaScript and insert its return value directly inline with html on page load.

## How to use:
1) Import the JS file to your HTML file using a script tag with an src attribute pointing to the 'inline.js' file
2) Wherever you want to have JavaScript evaluated in your HTML file you simply start with a ';' character followed by the code to evaluate and then if you want to have something following the return value, just add a space and the interpreter will know to evaluate everything between the ';' and the space you just typed. Note it will still show the space. Alternatively if you don't need to have any text following the evaluated code just don't worry about it, the interpreter will know to exit evaluation on its own.

## Example usage:
### Inserting a variable value
Lets say we have the following in a JavaScript file:
```javascript
let user = {
  name: 'John'
};
```
And in an HTML file we have the following inside a body element:
```html
<h1>Hello, ;user.name</h1>
```
The result would be an h1 element that says "Hello, John". Pretty simple, but quite useful.
### Quick Maths
Lets say we have the following in a JavaScript file:
```javascript
const SALES_TAX = 0.075;
let beforeTax = 100.00;
```
And in an HTML file we have the following inside a body element:
```html
<h3>Before Tax: $;beforeTax</h3>
<h3>After Tax: $;beforeTax*(1+SALES_TAX)</h3>
```
The result would be an h3 element that says "Before Tax: $100.00", followed by another h3 element that says "After Tax: $107.5". Note that we have to resist the urge to use spaces before we are ready to exit the evaluation.
### Ternary
Lets say we have the following in a JavaScript file:
```javascript
let night = false;
```
And in an HTML file we have the following inside a body element:
```html
<h3>;night==true?"Goodnight.":"Goodmorning!"</h3>
```
The result would be an h3 element that says "Goodmorning!". Again note that we cannot use spacing in our output strings without storing them in a different variable in our JavaScript.

# Summation
### Is this extremely useful?
Probably not.
### Does it run Doom?
I mean... go for it, probably with some work.
### Do I plan on updating it to do more things?
Probably not, but maybe.
### So what is this for?
I was working on another project and needed some functionality to quickly insert some values from JavaScript but I didn't need a whole framework so I just wrote this simple function. It works great for simple tasks where you just need some quick dynamic HTML. In theory any valid JavaScript written following a ';' without any kind of spacing would run, it's just using the eval function when it comes down to it. Maybe I'll add some features if I need it to do more for the project I'm working on but it's just kind of a nice simple thing right now. Feel free to try it out, or not that's cool to. It's mainly uploaded here so I can use it in future projects.
