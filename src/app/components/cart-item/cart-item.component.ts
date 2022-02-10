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
  @ViewChild(CdkPortal) editorPortal!: CdkPortal;

  @Input() name!: string;
  description = '';

  @HostBinding('class.editor-open')
  descriptionEditorIsOpen: boolean = false;

  private portalOutlet!: PortalOutlet;

  constructor(
    private readonly cfr: ComponentFactoryResolver,
    private readonly appRef: ApplicationRef,
    private readonly injector: Injector
  ) {}

  ngOnInit(): void {
    this.portalOutlet = new DomPortalOutlet(
      document.body,
      this.cfr,
      this.appRef,
      this.injector
    );
  }

  ngOnDestroy(): void {
    this.portalOutlet.detach();
    this.portalOutlet.dispose();
  }

  toggleDescriptionEditor(): void {
    this.descriptionEditorIsOpen = !this.descriptionEditorIsOpen;

    if (this.descriptionEditorIsOpen) {
      this.portalOutlet.attach(this.editorPortal);
    } else {
      this.portalOutlet.detach();
    }
  }
}
