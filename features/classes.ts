class Animal {
    constructor(public color: string) {
    }

    eat(): void {
        console.log('animal is eating');
    }
}

class Cat extends Animal {
    constructor(public legQty: number, public color: string) {
        super(color);
    }

    eat(): void {
        console.log('cat is eating');
    }

    meow(): void {
        console.log('meow');
    }
}

const cat = new Cat(4, 'grey');
cat.eat();
cat.meow();
