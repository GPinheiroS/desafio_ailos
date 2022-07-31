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
  cpfValidate!: cpfValidate;
  @Input() cpfInputValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  convertToCpf(){    
    this.cpfInputValue = mask['cpf'](this.cpfInputValue)
  }

  inputHandler(){
    this.cpfValidate = cpfInputValidator(this.cpfInputValue)
    this.erroMsg = this.cpfValidate.errorMsg
    if (this.cpfValidate.isValid) {
      this.convertToCpf()
      this.cooperador = cpfFind( data ,this.cpfInputValue)
      this.erroMsg = this.cooperador.errorMsg
    }
  }

}
