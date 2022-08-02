import { Component, Input, OnInit } from '@angular/core';
import { CooperadorControllerService } from 'src/controllers/cooperadores.service';
import { ICooperadorApiData, ICooperadorFullData } from 'src/models/interface/CooperadorInterface';
import { IValidateCPF } from 'src/models/interface/CPFInterface';
import { mask } from 'src/shared/constants/cpfMask';
import { CPFService } from 'src/shared/service/cpf.service';

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.css']
})
export class NovaAdmissaoComponent {
  erroMsg: string = ''
  cooperador?: ICooperadorFullData
  cooperadorValid?: boolean
  cpfValidate!: IValidateCPF;
  @Input() cpfInputValue: string = '';
  
  constructor(private cpfService: CPFService, private cooperadorService: CooperadorControllerService) { }

  cpfMasked():string {    
    return mask['cpf'](this.cpfInputValue)
  }

  validateCpf():void {
    this.cpfValidate = this.cpfService.cpfInputValidator(this.cpfInputValue)
    this.erroMsg = this.cpfValidate.errorMsg
    if (!this.cpfValidate.isValid) {
      this.cooperadorValid = false
    }
  }

  cooperadorValidator():void{
    if (this.cpfValidate.isValid) {
      this.cooperador = this.cpfService.findCooperador( this.cooperadorService.getCooperador() ,this.cpfMasked())

      if(!this.cooperador){
        this.cooperadorValid = false
        this.erroMsg = 'CPF não encontrado'
        return
      }
      this.cooperadorValid = true
      this.erroMsg = ''
   } 
      
  }

  inputHandler():void {
    this.validateCpf()
    this.cooperadorValidator()
  }

}
