import { CanalNotificacao } from "./CanalNotificacao";
import type { Cliente } from "../modelos/Cliente";

export class NotificacaoEmail implements CanalNotificacao {
    enviar(cliente: Cliente, mensagem: string): void {
        console.log(`E-mail enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}