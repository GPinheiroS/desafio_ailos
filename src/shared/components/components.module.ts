import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardsComponent } from './cards/cards.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';

@NgModule({
    imports: [MatIconModule],
    declarations: [CardsComponent, ProgressStepperComponent],
    exports: [CardsComponent, ProgressStepperComponent],
})
export class SharedComponentsModule { }
