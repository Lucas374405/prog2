import { CanalNotificacao } from "./CanalNotificacao";
import type { Cliente } from "../modelos/Cliente";

export class NotificacaoSMS implements CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`SMS enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}