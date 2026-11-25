import type { Cliente } from "../modelos/Cliente";

export interface CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void;
}