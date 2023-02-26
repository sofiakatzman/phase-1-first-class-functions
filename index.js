function receivesAFunction(returnFunction){
    returnFunction();
}

function returnsANamedFunction(){
return function thisIsTheNamedFunction() {
    console.log(`Nom nom nom, this is delicious!`);}}

function returnsAnAnonymousFunction(){
return function() {
    console.log(`Woah, this is delicious!`);}}
   