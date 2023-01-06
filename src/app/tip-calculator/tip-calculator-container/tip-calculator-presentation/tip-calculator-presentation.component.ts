import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TipCalculatorPresenterService } from '../tip-calculator-presenter/tip-calculator-presenter.service';

@Component({
  selector: 'app-tip-calculator-presentation',
  templateUrl: './tip-calculator-presentation.component.html',
  viewProviders: [TipCalculatorPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipCalculatorPresentationComponent implements OnInit {

  public tipCalculatorForm: FormGroup;
  public totalBill: number;
  public tip: number;
  public noOfPeople: number;
  public tipAmountPerPerson: number;
  public totalPerPerson: number;


  constructor(private tipCalcPresenterService: TipCalculatorPresenterService) {
    this.tipCalculatorForm = this.tipCalcPresenterService.buildForm();
    this.tipAmountPerPerson = 0.00;
    this.totalPerPerson = 0.00;
  }

  ngOnInit(): void {
    this.tipCalculatorForm.valueChanges.subscribe((data) => {
      this.totalBill = data.bill;
      this.tip = data.tip;
      this.noOfPeople = data.noOfPeople;
      this.calculate();
    })
  }

  public calculate() {
    let tipAmount = this.totalBill * (this.tip / 100);
    let totalAmount = this.totalBill + tipAmount;

    this.tipAmountPerPerson = tipAmount / this.noOfPeople;
    this.totalPerPerson = totalAmount / this.noOfPeople;

    if (this.tipAmountPerPerson === Infinity || Number.isNaN(this.tipAmountPerPerson)) this.tipAmountPerPerson = 0
    if (this.totalPerPerson === Infinity || Number.isNaN(this.totalPerPerson)) this.totalPerPerson = 0
  }

  public onReset() {
    this.tipCalculatorForm.reset();
  }
}
