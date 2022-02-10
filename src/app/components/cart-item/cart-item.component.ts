import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() name!: string;
  description = '';

  descriptionEditorIsOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDescriptionEditor(): void {
    this.descriptionEditorIsOpen = !this.descriptionEditorIsOpen;
  }
}
