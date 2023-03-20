import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalBoxComponent } from './delete-modal-box.component';

describe('DeleteModalBoxComponent', () => {
  let component: DeleteModalBoxComponent;
  let fixture: ComponentFixture<DeleteModalBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteModalBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
