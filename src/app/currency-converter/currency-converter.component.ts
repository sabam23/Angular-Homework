import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencyForm = new FormGroup({
    currency1: new FormControl('',[Validators.required]),
    value1: new FormControl('',),
    currency2: new FormControl('',[Validators.required]),
    value2: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
