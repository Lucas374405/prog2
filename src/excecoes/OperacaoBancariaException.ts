export class OperacaoBancariaException extends Error {
    private dataHora: Date;

    constructor(mensagem: string) {
        super(mensagem);

        this.name = "OperacaoBancariaException";
        this.dataHora = new Date();

        Object.setPrototypeOf(this, new.target.prototype);
    }

    getDataHora(): Date {
        return this.dataHora;
    }
}