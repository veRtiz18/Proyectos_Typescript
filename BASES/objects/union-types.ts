(() => {

    type HeroParams = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let myCustomVariable: string | number | HeroParams = 'Carlos';

    myCustomVariable = 'Carlos'
    console.log(typeof myCustomVariable);

    myCustomVariable = 810;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Vanessa',
        age: 22,
        powers: ['None'],
    }
})();