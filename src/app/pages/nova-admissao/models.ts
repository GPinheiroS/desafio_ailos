export interface cpfValidate {
    isValid: boolean;
    errorMsg: string;
  }

export interface cooperador {
    nome: string | undefined;
    cpf: string | undefined;
    conta_aplicacao: string | undefined;
    conta_corrente: string | undefined;
    situacao: string | undefined;
  }

export interface responseData {
  data: cooperador,
  exist: boolean,
  errorMsg: string 

  }