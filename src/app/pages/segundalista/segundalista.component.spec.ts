import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundalistaComponent } from './segundalista.component';

describe('SegundalistaComponent', () => {
  let component: SegundalistaComponent;
  let fixture: ComponentFixture<SegundalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundalistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
