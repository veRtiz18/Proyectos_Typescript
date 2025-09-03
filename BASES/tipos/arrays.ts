(() => {
    // tecnica que se utilizar para aislar funciones 

    // aqui ts ya infiere 
    const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const onlyNumbers: number[] = [1, 2, 3, 4];

    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

    // forEach

    villians.forEach(v => { console.log(v.toUpperCase()) });


    numbers.push(true);
    numbers.push(11); //<-- Error, solo se pueden insertar valores de tipo numerico a menos que se indique el tipo de dato permitido

    console.log(numbers);

})()