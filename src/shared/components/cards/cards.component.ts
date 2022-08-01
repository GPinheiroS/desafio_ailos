import { Component, OnChanges, Input } from '@angular/core';
import { ICooperador } from 'src/models/interface/CooperadorInterface';
import { ISituacaoCPF } from 'src/models/interface/CPFInterface';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnChanges {

  @Input() info?: ICooperador
  situacaoCpf: ISituacaoCPF | undefined

  constructor() { }

  ngOnChanges(): void {
    this.situacaoCpf = {class: 'positive', icon: 'check_circle_outline'}
    if (this.info?.situacao == 'Suspenso') {
      this.situacaoCpf = {class: 'negative', icon: 'highlight_off'}
    }

  }

}
