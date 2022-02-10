import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  CdkPortal,
  CdkPortalOutlet,
  DomPortalHost,
  DomPortalOutlet,
  PortalOutlet,
} from '@angular/cdk/portal';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() name!: string;
  description = '';

  @HostBinding('class.editor-open')
  descriptionEditorIsOpen: boolean = false;

  private overlayRef!: OverlayRef;

  @ViewChild(CdkPortal) editorPortal!: CdkPortal;

  constructor(
    private readonly overlay: Overlay,
  ) {}

  ngOnInit(): void {
    this.overlayRef = this.overlay.create({});
  }

  toggleDescriptionEditor(): void {
    this.descriptionEditorIsOpen = !this.descriptionEditorIsOpen;

    if (this.descriptionEditorIsOpen) {
      this.overlayRef.attach(this.editorPortal);
    } else {
      this.overlayRef.detach();
    }
  }

  ngOnDestroy(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
