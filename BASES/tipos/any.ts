(() => {

    let avenger: any = 123;
    let exists;
    let power; //-> si no asignamos ningun valor entonces es de tipo any


    avenger = 'Doctor Strange';

    console.log((avenger as string).charAt(0));
    avenger = 3.1416;
    console.log(<number>avenger.toFixed(2));


    console.log(exists);
    console.log(power);
})()