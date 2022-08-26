import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { CurrencyGuard } from './currency.guard';

describe('CurrencyGuard', () => {
  let guard: CurrencyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CurrencyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
