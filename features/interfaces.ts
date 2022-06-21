
interface Aircraft {
    name: string;
    role: string;
    summary(): void;
}

const oldAircraft = {
    name: 'F/A-18E Super Hornet',
    role: 'multi-role combat aircraft',
    summary(): string {
        return `${this.name} is ${this.role}`;
    }
};

const logAircraft = (aircraft: Aircraft): void => {
    console.log(aircraft.summary());
};

logAircraft(oldAircraft);
