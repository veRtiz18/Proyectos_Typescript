(() => {

    // Hay 3 o 4 formas de declarar un string

    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Volcán Negro`; //<- Backtick

    console.log(`I'm ${batman} `);
    console.log(batman[12]?.toUpperCase || 'No existe la posición ingresada');
    console.log(volcanNegro.toUpperCase());

})()