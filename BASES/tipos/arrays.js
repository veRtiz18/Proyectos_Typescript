(function () {
    // tecnica que se utilizar para aislar funciones 
    // aqui ts ya infiere 
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var onlyNumbers = [1, 2, 3, 4];
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    // forEach
    villians.forEach(function (v) { console.log(v.toUpperCase()); });
    numbers.push(true);
    numbers.push(11); //<-- Error, solo se pueden insertar valores de tipo numerico a menos que se indique el tipo de dato permitido
    console.log(numbers);
})();
export {};
