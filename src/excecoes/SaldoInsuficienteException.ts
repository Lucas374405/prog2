import { OperacaoBancariaException } from "./OperacaoBancariaException";

export class SaldoInsuficienteException extends OperacaoBancariaException {
    private saldoAtual: number;
    private valorFaltante: number;

    constructor(saldoAtual: number, valorFaltante: number) {
        super(`Saldo insuficiente. Faltam R$ ${valorFaltante.toFixed(2)}.`);

        this.name = "SaldoInsuficienteException";
        this.saldoAtual = saldoAtual;
        this.valorFaltante = valorFaltante;
    }

    getSaldoAtual(): number {
        return this.saldoAtual;
    }

    getValorFaltante(): number {
        return this.valorFaltante;
    }
}