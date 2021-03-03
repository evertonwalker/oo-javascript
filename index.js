
import { Client } from './Client.js';
import { ContaCorrente } from './ContaCorrent.js';

const cliente1 = new Client();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

console.log(cliente1);

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.client = cliente1;


console.log(contaCorrenteRicardo);