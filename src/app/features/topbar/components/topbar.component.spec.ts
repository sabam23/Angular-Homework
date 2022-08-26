import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '../../Form & Form-list/services/login.service';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarComponent ],
      providers: [LoginService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    component.logOut();
    expect(component.loginService.isLoggedIn).toEqual(false);
    expect(component.loginService.loginPage).toEqual(true);
    expect(component.loginService.currencyCheck).toEqual(false);
  })
});
