import { Component, OnChanges, Input } from '@angular/core';
import { ICooperador, ICooperadorFullData } from 'src/models/interface/CooperadorInterface';
import { ISituacaoCPF } from 'src/models/interface/CPFInterface';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnChanges {

  @Input() info?: ICooperadorFullData
  situacaoCpf?: ISituacaoCPF

  constructor() { }

  ngOnInit():void {
  }

  ngOnChanges(): void {  
    this.handleData();
  }

  handleData():void{
    if (!this.info) {
      return;      
    }
     
    this.situacaoCpf = {class: 'positive', icon: 'check_circle_outline'}
    
    if (this.info.situacao == 'Suspenso') {
      this.situacaoCpf = {class: 'negative', icon: 'highlight_off'}
    }
  }

}
