import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConstStreamPageComponent } from './pros-const-stream-page.component';

describe('ProsConstStreamPageComponent', () => {
  let component: ProsConstStreamPageComponent;
  let fixture: ComponentFixture<ProsConstStreamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsConstStreamPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProsConstStreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
