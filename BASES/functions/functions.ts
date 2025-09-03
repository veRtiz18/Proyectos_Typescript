(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Batisenial activada';
    }


    console.log(activateBatisignal);

    const heroName = returnName();
})()