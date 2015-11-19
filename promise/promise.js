'use strict';
var count = 0;

function examplePromise() {
    var count = ++count;

    var log = document.getElementById('log');

    log.insertAdjacentHTML('beforeend', 'Started (<small>Sync code started</small>)<br/>');

    // We make a new promise: we promise the string 'result' (after waiting 3s)
    var promise = new Promise(
        /* The resolver function is called with the ability to resolve or
        /* reject the promise */
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', 'Promise started (<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    // We fulfill the promise !
                    resolve(count);
                }, Math.random() * 2000 + 1000);
        });

    /* We define what to do when the promise is fulfilled
    /* but we only call this if the promise is resolved/fulfilled */
    promise.then(
        // Just log the message and a value
        function(val) {
            log.insertAdjacentHTML('beforeend', 'Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        // Rejected promises are passed on by Promise.prototype.then(onFulfilled)
        function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', 'Promise made (<small>Sync code terminated</small>)<br/>');
}
examplePromise()
