import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemDescriptionEditorComponent } from './cart-item-description-editor.component';

describe('CartItemDescriptionEditorComponent', () => {
  let component: CartItemDescriptionEditorComponent;
  let fixture: ComponentFixture<CartItemDescriptionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemDescriptionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemDescriptionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
