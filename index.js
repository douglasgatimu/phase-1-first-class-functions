function callMeBack() {
    return 'Wow!';
}
function receivesAFunction(callbackFunction) {
    return callbackFunction();

}

function returnsANamedFunction () {
    function innerFn() {
        return 'I am Inner Function!';
    }
    return innerFn;
}


function returnsAnAnonymousFunction() {
    return function () {return 'I am function anonymous.'} ;
}
//console.log(receivesAFunction(callMeBack));
//console.log(returnsANamedFunction()());
const af = returnsAnAnonymousFunction();
console.log(af());