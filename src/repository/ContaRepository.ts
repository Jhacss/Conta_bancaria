import { Conta } from "../model/Conta";

export interface ContaRepository{

    //Metodos do CRUD(create, read, update e delete)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPorTitular(titular: string): void;
    
    //metodos bancários 
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, NumeroDestino: number, valor: number): void;
}