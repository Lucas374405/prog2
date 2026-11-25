import { CanalNotificacao } from "./CanalNotificacao";
import type { Cliente } from "../modelos/Cliente";

export class NotificacaoApp implements CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`Notificação no aplicativo para ${cliente.getNome()}: ${mensagem}`);
    }
}