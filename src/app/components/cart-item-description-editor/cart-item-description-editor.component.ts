import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-description-editor',
  templateUrl: './cart-item-description-editor.component.html',
  styleUrls: ['./cart-item-description-editor.component.scss'],
})
export class CartItemDescriptionEditorComponent implements OnInit {
  @Input() description!: string;

  @Output() descriptionChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
