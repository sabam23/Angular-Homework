import {  HttpClientModule  } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListComponent } from './form-list.component';

describe('FormListComponent', () => {
  let component: FormListComponent;
  let fixture: ComponentFixture<FormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should turn checker false and reset forms', ()=> {
    component.editEmployee();
    expect(component.checker).toEqual(false);
  })

  it('should turn checker true', ()=> {
    component.update(1);
    expect(component.checker).toEqual(true);
  })

  it('should turn checker to true and reset form',() => {
    component.cancel();
    expect(component.checker).toEqual(false);
  })
});
