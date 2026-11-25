import { OperacaoBancariaException } from "./OperacaoBancariaException";

export class ContaBloqueadaException extends OperacaoBancariaException {
    private numeroConta: string;

    constructor(numeroConta: string) {
        super(`A conta ${numeroConta} está bloqueada.`);

        this.name = "ContaBloqueadaException";
        this.numeroConta = numeroConta;
    }

    getNumeroConta(): string {
        return this.numeroConta;
    }
}