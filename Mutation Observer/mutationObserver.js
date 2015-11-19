// select the target node
var target = document.getElementById('observeThis');
var button = document.getElementById('clickThis');
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

// generate a change in the elements childList
button.addEventListener("click", function onClick(){
  target.textContent = Math.random();
})
