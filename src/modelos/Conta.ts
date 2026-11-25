import type { Cliente } from "./Cliente";
import type { CanalNotificacao } from "../canais/CanalNotificacao";

import { ValorInvalidoException } from "../excecoes/ValorInvalidoException";
import { ContaBloqueadaException } from "../excecoes/ContaBloqueadaException";
import { SaldoInsuficienteException } from "../excecoes/SaldoInsuficienteException";
import { LimiteDiarioExcedidoException } from "../excecoes/LimiteDiarioExcedidoException";
import { OperacaoBancariaException } from "../excecoes/OperacaoBancariaException";

export class Conta {
    private numero: string;
    private numeroAgencia: string;
    private dataAbertura: Date;
    private saldo: number;
    private bloqueada: boolean;
    private limiteDiario: number;
    private sacadoHoje: number;
    private titular: Cliente;

    constructor(
        numero: string,
        numeroAgencia: string,
        titular: Cliente,
        saldoInicial: number,
        limiteDiario: number
    ) {
        this.numero = numero;
        this.numeroAgencia = numeroAgencia;
        this.titular = titular;
        this.dataAbertura = new Date();
        this.saldo = saldoInicial;
        this.bloqueada = false;
        this.limiteDiario = limiteDiario;
        this.sacadoHoje = 0;

        titular.adicionarConta(this);
    }

    getNumero(): string {
        return this.numero;
    }

    getNumeroAgencia(): string {
        return this.numeroAgencia;
    }

    getTitular(): Cliente {
        return this.titular;
    }

    getDataAbertura(): Date {
        return this.dataAbertura;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number): void {
        if (!Number.isFinite(valor) || valor <= 0) {
            throw new ValorInvalidoException(valor);
        }

        this.saldo += valor;

        console.log(`Depósito realizado: R$ ${valor.toFixed(2)}`);
    }

    sacar(valor: number, canalNotificacao: CanalNotificacao): void {
        try {
            if (!Number.isFinite(valor) || valor <= 0) {
                throw new ValorInvalidoException(valor);
            }

            if (this.bloqueada) {
                throw new ContaBloqueadaException(this.numero);
            }

            if (valor > this.saldo) {
                const faltante = valor - this.saldo;

                throw new SaldoInsuficienteException(
                    this.saldo,
                    faltante
                );
            }

            const disponivel = this.limiteDiario - this.sacadoHoje;

            if (valor > disponivel) {
                throw new LimiteDiarioExcedidoException(
                    this.limiteDiario,
                    disponivel,
                    valor
                );
            }

            this.saldo -= valor;
            this.sacadoHoje += valor;

            console.log(`Saque realizado: R$ ${valor.toFixed(2)}`);
            console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);

        } catch (erro) {
            if (erro instanceof OperacaoBancariaException) {
                console.log(`Erro: ${erro.message}`);

                canalNotificacao.enviar(
                    this.titular,
                    erro.message
                );
            } else {
                throw erro;
            }
        }
    }

    bloquear(): void {
        this.bloqueada = true;
        console.log(`Conta ${this.numero} bloqueada.`);
    }

    desbloquear(): void {
        this.bloqueada = false;
        console.log(`Conta ${this.numero} desbloqueada.`);
    }

    reiniciarLimiteDiario(): void {
        this.sacadoHoje = 0;
    }
}