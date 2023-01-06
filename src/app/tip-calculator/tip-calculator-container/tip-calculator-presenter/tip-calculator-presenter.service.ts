import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class TipCalculatorPresenterService {

  constructor(private _fb:FormBuilder) { }

  public buildForm(){
    return this._fb.group({
      bill:[''],
      tip:[''],
      noOfPeople:[''],
    })
  }
}
