import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipCalculatorRoutingModule } from './tip-calculator-routing.module';
import { TipCalculatorComponent } from './tip-calculator.component';
import { TipCalculatorContainerComponent } from './tip-calculator-container/tip-calculator-container.component';
import { TipCalculatorPresentationComponent } from './tip-calculator-container/tip-calculator-presentation/tip-calculator-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TipCalculatorComponent,
    TipCalculatorContainerComponent,
    TipCalculatorPresentationComponent
  ],
  imports: [
    CommonModule,
    TipCalculatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class TipCalculatorModule { }
