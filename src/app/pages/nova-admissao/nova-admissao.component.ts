import { Component, Input, OnInit } from '@angular/core';
import { mask } from '../../../utils/cpfMask';
import data from "../../../data/pessoas.json"

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.css']
})
export class NovaAdmissaoComponent implements OnInit {
  @Input() cpfInputValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  convertToCpf(){    
    this.cpfInputValue = mask['cpf'](this.cpfInputValue)
  }

  inputHandler(){
    this.convertToCpf()
    console.log(this.cpfInputValue)
    console.log(data)
  }

}
