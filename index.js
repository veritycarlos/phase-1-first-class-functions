const receivesAFunction = cb => cb();

function returnsANamedFunction () {
    return (function stella(){console.log("We love Stella the dog!")})
}

function returnsAnAnonymousFunction() {
    return (function(){console.log('Stella the dog is great!')})
}