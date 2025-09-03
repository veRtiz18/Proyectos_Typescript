(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    // para garantizar la firma de una funcion
    // let myFunction: (y: string) => string;
    // let myFunction: (x: number, y: number) => number;
    var myFunction;
    //? myFunction = 10;
    //? console.log(myFunction);
    //? myFunction = addNumbers;
    //? console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction("Esto solo recibe un string"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
export {};
