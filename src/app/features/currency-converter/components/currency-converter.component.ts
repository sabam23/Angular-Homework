import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConverterServiceService} from "../services/converter-service.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})

export class CurrencyConverterComponent implements OnInit {
  public currencyForm = new FormGroup({
    currency1: new FormControl('', [Validators.required]),
    currency2: new FormControl('', [Validators.required]),
    value1: new FormControl(),
    value2: new FormControl()
  })

  public data: any = {};

  constructor(private converterService: ConverterServiceService) {
  }

  keyPressNumbersWithDecimal(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  err = false;
  ngOnInit(): void {
    this.currencyForm.get("currency1")?.valueChanges.subscribe(cur => {
      this.converterService.cur1 = cur;
      if (cur?.length === 3 && this.currencyForm.get('currency2')?.value?.length === 3) {
        this.converterService.getData().subscribe(data => {
          this.data = data;
          this.currencyForm.get('value2')?.setValue((this.currencyForm.get('value1')?.value * data.conversion_rate).toFixed(2));
        });
      }
    })

    this.currencyForm.get("currency2")?.valueChanges.subscribe(cur => {
      this.converterService.cur2 = cur;
      if (cur?.length === 3 && this.currencyForm.get('currency1')?.value?.length === 3) {
        this.converterService.getData().subscribe(data => {
          this.data = data;
          this.currencyForm.get('value2')?.setValue((this.currencyForm.get('value1')?.value * data.conversion_rate).toFixed(2));
        });
      }
    })

    this.currencyForm.get("value1")?.valueChanges.subscribe(value => {
      this.currencyForm.get("value2")?.setValue((value * this.data.conversion_rate).toFixed(2), { emitEvent: false });
    })

    this.currencyForm.get("value2")?.valueChanges.subscribe(value => {
      this.currencyForm.get("value1")?.setValue((value / this.data.conversion_rate).toFixed(2), { emitEvent: false });
    })
  }
}
