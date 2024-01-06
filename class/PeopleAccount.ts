import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    depositBonus10 = (value: number): number => {
        value += 10;
        this.deposit(value);

        return value;
    };
}
