export interface ICooperador {
    nome?: string;
    cpf?: string;
    conta_aplicacao?: string;
    conta_corrente?: string;
    situacao?: string;
}


export interface ICooperadorApiData {
    data: ICooperador,
    exist: boolean,
    errorMsg: string

}

export interface ICooperadorFullData {
    nome: string,
    idade: number,
    cpf: string,
    rg: string,
    data_nasc: string,
    sexo: string,
    signo: string,
    mae: string,
    pai: string,
    email: string,
    senha: string,
    cep: string,
    endereco: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    telefone_fixo: string,
    celular: string,
    altura: string,
    peso: number,
    tipo_sanguineo: string,
    cor: string,
    situacao: string,
    conta_corrente: string,
    conta_aplicacao: string,
}