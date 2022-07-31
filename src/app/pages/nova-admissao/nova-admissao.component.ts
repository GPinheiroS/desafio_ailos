import { Component, Input, OnInit } from '@angular/core';
import { mask } from '../../../utils/cpfMask';
import {cpfInputValidator} from '../../../utils/cpfInputValidator';
import {cpfFind} from '../../../utils/cpfFind';
import {cpfValidate,  responseData} from './models'
import data from "../../../data/pessoas.json"

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.css']
})
export class NovaAdmissaoComponent implements OnInit {
  erroMsg: string = ''
  cooperador?: responseData
  cooperadorValid?: boolean
  cpfValidate!: cpfValidate;
  @Input() cpfInputValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  cpfMasked(){    
    return mask['cpf'](this.cpfInputValue)
  }

  validateCpf(){
    this.cpfValidate = cpfInputValidator(this.cpfInputValue)
    this.erroMsg = this.cpfValidate.errorMsg
  }

  cooperadorValidator(){
    if (this.cpfValidate.isValid) {
      this.cooperador = cpfFind( data ,this.cpfMasked())
      this.cooperadorValid = this.cooperador.exist
      this.erroMsg = this.cooperador.errorMsg
    } else {
      this.cooperadorValid = false
    }
  }

  inputHandler(){
    this.validateCpf()
    this.cooperadorValidator()
  }

}
