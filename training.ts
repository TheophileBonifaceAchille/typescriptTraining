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
let foo: string = 'Foo';
let bar: string = 'bar';
let fooBar: string = foo + bar;

function log(arg: string): void { console.log('Test log : ' + arg) };

log(fooBar);

// 2
//ctrl + clique gauche sur le type => fichier model
let foo1: Array<number> = [1, 2, 3];

// 3
// sans typage 
let a: any = 4;
a = 'Foo';
a = 4;

// 4 
let a1: {
    prop1: string
    prop2: number
};

a1 = { prop1: "test", prop2: 4 }

// 5
// Déclaration
// Interface = metadata décrivant la structure d'un objet
// Une interface a une double valeur => de type: associer un type à une variable | de contrat: impose une structure à une variable
interface IFooBar1 {
    foo: string;
    bar: number;
}

let bar1: IFooBar1 = { foo: 'foo', bar: 2};

// let wrongBar1: IFooBar = { foo: 'test', bar: 2};

// 6
// Les classes (ES6)
class FooBar2 { 
    constructor() {}
    foo = 'Blah'
    bar4 = 21
}

// 7
// Création d'une instance
let bar2 = new FooBar2();
console.log(bar2.bar4);    // 21

// 8
// Classes ou interface ?
// Différences : Objectif => interface = création d'un contrat, class = création d'un nouvel objet
interface IFooBar { foo: string; bar2: string; }

class FooBar implements IFooBar {
    foo: string;
    bar2: string;
        constructor(arg1, arg2) { this.foo = arg1; this.bar2 = arg2; }
}