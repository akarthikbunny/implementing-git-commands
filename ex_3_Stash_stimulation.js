// git stash — Pause your work safely -save work temporarily without committing it, and come back to it later.
// You’re working on a feature, but suddenly need to switch branches.


// app.js ,code before stash , not yet commited 
// if u type --> git checkout main

// Git says:

// "You have uncommitted changes" -->solution : stash it -->git stash 
// Your changes are saved temporarily
// Your working directory becomes clean
function greet() {
  console.log("Hello World");
}

// you are editing this...
function greetUser(name) {
  console.log("Hello " + name);
}