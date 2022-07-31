import { Component, OnChanges, Input } from '@angular/core';
import { cooperador } from 'src/app/pages/nova-admissao/models';
import { situacaoCpf } from "./models";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnChanges {

  @Input() info?: cooperador
  situacaoCpf: situacaoCpf | undefined

  constructor() { }

  ngOnChanges(): void {
    this.situacaoCpf = {class: 'positive', icon: 'check_circle_outline'}
    if (this.info?.situacao == 'Suspenso') {
      this.situacaoCpf = {class: 'negative', icon: 'highlight_off'}
    }

  }

}
