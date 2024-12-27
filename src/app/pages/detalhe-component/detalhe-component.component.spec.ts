import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComponentComponent } from './detalhe-component.component';

describe('DetalheComponentComponent', () => {
  let component: DetalheComponentComponent;
  let fixture: ComponentFixture<DetalheComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
