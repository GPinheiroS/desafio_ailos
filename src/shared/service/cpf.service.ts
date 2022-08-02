import { Injectable } from '@angular/core';
import { ICooperadorApiData, ICooperadorFullData } from 'src/models/interface/CooperadorInterface';
import { CooperadorApiData } from '../constants/cooperadorInitialState';

@Injectable({providedIn: 'root'})
export class CPFService {
    constructor() {}    
    
    findCooperador(data: ICooperadorFullData[], cpf: string):ICooperadorFullData | undefined {
        
        const filterData = data.find((pessoa: ICooperadorFullData) => pessoa.cpf === cpf);
        
        return filterData;      
      };

      cpfInputValidator(cpf:string){

        var Soma;
        var Resto;
        Soma = 0;
        if (cpf == "00000000000") return {isValid:false, errorMsg: 'Insira um CPF Valido'};
  
        for (let i = 1; i <= 9; i++) {
          Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        }
  
        if (Resto == 10 || Resto == 11) Resto = 0;
        if (Resto != parseInt(cpf.substring(9, 10))) return {isValid:false, errorMsg: 'Insira um CPF Valido'};
  
        Soma = 0;
        for (let i = 1; i <= 10; i++) {
          Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
        }
  
        if (Resto == 10 || Resto == 11) Resto = 0;
        if (Resto != parseInt(cpf.substring(10, 11))) return {isValid:false, errorMsg: 'Insira um CPF Valido'};
        return {isValid:true, errorMsg: ''};
  }

}