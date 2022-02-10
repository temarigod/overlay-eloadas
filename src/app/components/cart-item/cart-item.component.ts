import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    private readonly elementRef: ElementRef,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.descriptionEditorIsOpen = false;
      this.overlayRef.detach();
    });

    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((state) => {
      if (state.matches) {
        this.setMobileStrategies();
      } else {
        this.setDesktopStrategies();
      }
    });
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

  private setDesktopStrategies(): void {
    this.overlayRef.updatePositionStrategy(
      this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef.nativeElement)
        .withPositions([
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: 10,
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
          },
        ])
    );

    this.overlayRef.updateScrollStrategy(
      this.overlay.scrollStrategies.reposition()
    );
  }

  private setMobileStrategies(): void {
    this.overlayRef.updatePositionStrategy(
      this.overlay.position().global().centerHorizontally().centerVertically()
    );

    this.overlayRef.updateScrollStrategy(this.overlay.scrollStrategies.block());
  }
}
