import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtidaWidgetComponent } from './curtida-widget.component';

describe('CurtidaWidgetComponent', () => {
  let component: CurtidaWidgetComponent;
  let fixture: ComponentFixture<CurtidaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtidaWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtidaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
