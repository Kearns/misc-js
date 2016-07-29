/* Example of jQuery-esque chainable methods
** using a constructor acting as an "editor" object
** and a seperate selector instantiating it */

/* Selector function which grabs an element and
** returns a new Editor object */
function $(id) {
 // Select an element and return a new Editor object
  var el = document.querySelector(id);
  return new Editor(el);
}

/* Editor constructor, holds chainable functions
** and a variable to hold the element. */
function Editor(el){

  // currentEl will hold the selected element
  this.currentEl = el;

  /* An example of a text editing method,
  ** will add text to selected element */
  this.text = function(text) {
    this.currentEl.textContent = text;
    return this;
  };

  /* An example of a style editing method,
  ** will updated style on selected element */
  this.css = function(property,value) {
    this.currentEl.style[property] = value;
    return this;
  };
}


// EXAMPLE
$("#editThis").text("Chaining methods is easy").css("color","blue");
