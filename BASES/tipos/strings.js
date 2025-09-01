(function () {
    // Hay 3 o 4 formas de declarar un string
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "Volc\u00E1n Negro"; //<- Backtick
    console.log("I'm ".concat(batman, " "));
    console.log(((_a = batman[12]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'No existe la posición ingresada');
    console.log(volcanNegro.toUpperCase());
})();
export {};
