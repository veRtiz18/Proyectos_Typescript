(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;




    // para garantizar la firma de una funcion
    // let myFunction: (y: string) => string;
    // let myFunction: (x: number, y: number) => number;
    let myFunction: () => void;
    //? myFunction = 10;
    //? console.log(myFunction);

    //? myFunction = addNumbers;
    //? console.log(myFunction(1, 2));

    //? myFunction = greet;
    //? console.log(myFunction("Esto solo recibe un string"));

    myFunction = saveTheWorld;
    console.log(myFunction());
})()    