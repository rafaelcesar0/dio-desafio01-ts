import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount('Nath', 10);
console.log('Nome:', peopleAccount.getName());
console.log('Número da conta:', peopleAccount.getAccountNumber());
console.log('Saldo:', peopleAccount.getBalance());
console.log('Status:', peopleAccount.getStatus());
console.log('Depositou:', peopleAccount.deposit(100));
console.log('Sacou:', peopleAccount.withdraw(80));
console.log('Depositou bônus 10:', peopleAccount.depositBonus10(100));
console.log('Saldo:', peopleAccount.getBalance());

console.log('---------------------------')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log('Nome:', companyAccount.getName());
console.log('Número da conta:', companyAccount.getAccountNumber());
console.log('Saldo:', companyAccount.getBalance());
console.log('Status:', companyAccount.getStatus());
console.log('Deposito:', companyAccount.deposit(100));
console.log('Saque:', companyAccount.withdraw(80));
console.log('Emprestimo:', companyAccount.getLoan(1000));
console.log('Saldo:', companyAccount.getBalance());
