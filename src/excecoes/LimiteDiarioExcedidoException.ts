import { OperacaoBancariaException } from "./OperacaoBancariaException";

export class LimiteDiarioExcedidoException extends OperacaoBancariaException {
    private limiteDiario: number;
    private disponivel: number;
    private valorTentado: number;

    constructor(
        limiteDiario: number,
        disponivel: number,
        valorTentado: number
    ) {
        super(
            `Limite diário excedido. Disponível: R$ ${disponivel.toFixed(2)}.`
        );

        this.name = "LimiteDiarioExcedidoException";
        this.limiteDiario = limiteDiario;
        this.disponivel = disponivel;
        this.valorTentado = valorTentado;
    }

    getLimiteDiario(): number {
        return this.limiteDiario;
    }

    getDisponivel(): number {
        return this.disponivel;
    }

    getValorTentado(): number {
        return this.valorTentado;
    }
}