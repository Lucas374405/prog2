import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

import { NotificacaoSMS } from "../canais/NotificacaoSMS";
import { NotificacaoEmail } from "../canais/NotificacaoEmail";
import { NotificacaoApp } from "../canais/NotificacaoApp";

const sms = new NotificacaoSMS();
const email = new NotificacaoEmail();
const app = new NotificacaoApp();

const joao = new Cliente(
    "João",
    "111.111.111-11",
    "Recife",
    3500
);

const maria = new Cliente(
    "Maria",
    "222.222.222-22",
    "Olinda",
    4200
);

const conta1 = new Conta("1001", "0001", joao, 1000, 300);
const conta2 = new Conta("1002", "0001", joao, 1000, 300);

const conta3 = new Conta("2001", "0002", maria, 1000, 300);
const conta4 = new Conta("2002", "0002", maria, 1000, 300);

const conta5 = new Conta("3001", "0003", joao, 1000, 300);
const conta6 = new Conta("3002", "0003", maria, 1000, 300);

const conta7 = new Conta("4001", "0004", joao, 1000, 300);
const conta8 = new Conta("4002", "0004", maria, 1000, 300);

const conta9 = new Conta("5001", "0005", joao, 1000, 300);
const conta10 = new Conta("5002", "0005", maria, 1000, 300);

console.log("\n valor inválido ");

conta1.sacar(-50, sms);
conta2.sacar(0, email);

console.log("\n conta bloqueada ");

conta3.bloquear();
conta4.bloquear();

conta3.sacar(100, app);
conta4.sacar(200, sms);

console.log("\n saldo insuficiente ");

conta5.sacar(1500, email);
conta6.sacar(2000, app);

console.log("\n limite diário excedido ");

conta7.sacar(400, sms);
conta8.sacar(500, email);

console.log("\n saque realizado com sucesso ");

conta9.sacar(100, app);
conta10.sacar(200, sms);

console.log("\n consultando  de saldos ");

console.log(
    `Saldo da conta ${conta9.getNumero()}: R$ ${conta9.consultarSaldo().toFixed(2)}`
);

console.log(
    `Saldo da conta ${conta10.getNumero()}: R$ ${conta10.consultarSaldo().toFixed(2)}`
);

console.log("\n conta dos clientes ");

console.log(
    `${joao.getNome()} possui ${joao.consultarContas().length} contas.`
);

console.log(
    `${maria.getNome()} possui ${maria.consultarContas().length} contas.`
);