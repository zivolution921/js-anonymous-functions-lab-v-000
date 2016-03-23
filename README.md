# Juke Box Mania

## Objectives

+ Effectively use anonymous functions

## Intro

You've been hired to work for an online Juke Box company. Your job is to clean up their messy spaghetti code. Right now, it's filled with anonymous functions; we want to refactor those functions into named functions.

So for example, we'll take something like

```javascript
function menu() {
  $('#menu').on('click', function(e) {
    // do stuff, e.g.:
    
    console.log('#menu was clicked!');
  });
}
```

and change it to

```javascript
function menu() {
  $('#menu').on('click', handleMenuClick);
}

function handleMenuClick(e) {
  // do stuff, e.g.:
    
  console.log('#menu was clicked!');
}
```

## Instructions

You will be coding your solution in `js/jukebox.js`. You'll want to make sure that things work in both the browser and the tests. The tests currently all pass. You'll want to make sure they continue to pass once you're done refactoring.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-anonymous-functions-lab' title='Juke Box Mania'>Juke Box Mania</a> on Learn.co and start learning to code for free.</p>
