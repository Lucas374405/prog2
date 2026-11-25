import { OperacaoBancariaException } from "./OperacaoBancariaException";

export class ValorInvalidoException extends OperacaoBancariaException {
    private valorInformado: number;

    constructor(valor: number) {
        super(`Valor inválido informado: ${valor.toFixed(2)}`);

        this.name = "ValorInvalidoException";
        this.valorInformado = valor;
    }

    getValorInformado(): number {
        return this.valorInformado;
    }
}