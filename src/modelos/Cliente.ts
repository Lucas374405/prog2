import type { Conta } from "./Conta";

export class Cliente {
    private nome: string;
    private cpf: string;
    private endereco: string;
    private renda: number;
    private contas: Conta[];

    constructor(
        nome: string,
        cpf: string,
        endereco: string,
        renda: number
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.contas = [];
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getEndereco(): string {
        return this.endereco;
    }

    getRenda(): number {
        return this.renda;
    }

    adicionarConta(conta: Conta): void {
        if (!this.contas.includes(conta)) {
            this.contas.push(conta);
        }
    }

    consultarContas(): Conta[] {
        return [...this.contas];
    }
}