import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipCalculatorContainerComponent } from './tip-calculator-container/tip-calculator-container.component';

const routes: Routes = [{ path: '', component: TipCalculatorContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipCalculatorRoutingModule { }
