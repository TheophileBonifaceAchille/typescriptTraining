// Typescript training
/*
Type courant:
    1 Booléen
    2 Null
    3 Undefined
    4 Nombre
    5 String
    6 Symbole

La plupart des éléments JS sont des objets.
Rappel: Objet = structure contenant des données et des instructions en rapport avec ces données.

Objet les plus courants, natif en JS:
    Array
    Function
    Promise
    Error
*/
// 1
var foo = 'Foo';
var bar = 'bar';
var fooBar = foo + bar;
function log(arg) { console.log('Test log : ' + arg); }
;
log(fooBar);
// 2
//ctrl + clique gauche sur le type => fichier model
var foo1 = [1, 2, 3];
// 3
// sans typage 
var a = 4;
a = 'Foo';
a = 4;
// 4 
var a1;
a1 = { prop1: "test", prop2: 4 };
var bar1 = { foo: 'foo', bar: 2 };
// let wrongBar1: IFooBar = { foo: 'test', bar: 2};
// 6
// Les classes (ES6)
var FooBar2 = /** @class */ (function () {
    function FooBar2() {
        this.foo = 'Blah';
        this.bar4 = 21;
    }
    return FooBar2;
}());
// 7
// Création d'une instance
var bar2 = new FooBar2();
console.log(bar2.bar4); // 21
var FooBar = /** @class */ (function () {
    function FooBar(arg1, arg2) {
        this.foo = arg1;
        this.bar2 = arg2;
    }
    return FooBar;
}());
