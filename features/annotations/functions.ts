const max = (a: number, b: number): number => {
    if (a > b) {
        return a;
    }
    return b;
};

const min = (a: number, b: number): number => {
    if (a < b) {
        return a;
    }
    return b;
};

const abs = (a: number): number => {
    if (a < 0) {
        return -a;
    }
    return a;
};

// Function that does not return any value
const greet = (name: string): void => {
    console.log(`Hi! ${name}.`);
};

// Throw an exception
const throwException = (message: string): never => {
    throw new Error(message);
};

// Endless loop
const keepLooping = (): never => {
    while(true) {
        console.log('keep looping and do not end');
    }
};


const movie = {
    id: 'tt1745960',
    title: 'Top Gun: Maverick',
    year: 2022,
    genres: ['action', 'drama', 'adventure'],
};

// Deconstruct object parameter
const logMovie = ({ title, year }: {title: string; year: number}): void => {
    console.log(`${title} was released in ${year}`);
};

logMovie(movie);
