(() => {

    type HeroParams = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let flash: HeroParams = {
        name: 'Barry Allen',
        age: 23,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: HeroParams = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Viajar en el tiempo']

    }

})()