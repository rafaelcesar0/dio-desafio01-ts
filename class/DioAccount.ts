export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => this.name;

    getAccountNumber = (): number => this.accountNumber;

    getBalance = (): number => this.balance;

    getStatus = (): boolean => this.status;

    private setStatus = (): void => {
        this.status = !this.status;
    };

    deposit = (value: number): number => {
        this.balance += value;

        return value;
    };

    withdraw = (value: number): number => {
        if (this.status && this.balance >= value) {
            this.balance -= value;

            return value;
        }

        throw new Error(
            'Erro ao sacar valor!\nPor favor entre em contato com o gerente do seu banco.'
        );
    };
}
