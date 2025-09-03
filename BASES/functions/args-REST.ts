(() => {


    const fullName = (firstName: string, ...restArgs: string[]): string => {

        return `${firstName} ${restArgs.join(" ")}`
        return firstName;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();