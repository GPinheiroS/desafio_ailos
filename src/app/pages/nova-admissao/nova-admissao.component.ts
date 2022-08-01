import { Component, Input, OnInit } from '@angular/core';
import { CooperadorControllerService } from 'src/controllers/cooperadores.service';
import { ICooperadorApiData } from 'src/models/interface/CooperadorInterface';
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
  cooperador?: ICooperadorApiData
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
  }

  cooperadorValidator():void{
    if (this.cpfValidate.isValid) {
      this.cooperador = this.cpfService.findCooperador( this.cooperadorService.getCooperador() ,this.cpfMasked())
      this.cooperadorValid = this.cooperador.exist
      this.erroMsg = this.cooperador.errorMsg
      return;
    } 
      this.cooperadorValid = false
  }

  inputHandler():void {
    this.validateCpf()
    this.cooperadorValidator()
  }

}
