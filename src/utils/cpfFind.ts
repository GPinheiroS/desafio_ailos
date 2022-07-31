import { responseData } from '../app/pages/nova-admissao/models';

export const cpfFind = (data: Array<object>, cpf: String) => {
  let response: responseData = {data:{nome: '', cpf: '', conta_corrente: '', conta_aplicacao: '', situacao: ''}, errorMsg: ''};

  data.map((props: any) => {
    if (props.cpf === cpf) {
      response = {
        data: {
            nome: props.nome,
            cpf: props.cpf,
            conta_corrente: props.conta_corrente,
            conta_aplicacao: props.conta_aplicacao,
            situacao: props.situacao},
        errorMsg: ''
      };
    }
});
if (!response.data.cpf) {
    response.errorMsg = 'Cooperador inexistente'
}

return response;

};