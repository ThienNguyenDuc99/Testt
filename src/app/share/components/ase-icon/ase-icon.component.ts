import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  Input,
  Renderer2, Signal,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ase-icon',
  standalone: true,
  imports: [],
  templateUrl: './ase-icon.component.html',
  styleUrl: './ase-icon.component.scss'
})
export class AseIconComponent implements AfterViewInit {
  private renderer = inject(Renderer2)
  @ViewChild('iconRef', {static: true}) iconRef!: ElementRef;
  iconName = input.required<string>();
  width = input.required<string>();
  height = input.required<string>();

  ngAfterViewInit(): void {
    console.log(this.iconRef);
    this.renderer.setStyle(this.iconRef.nativeElement, 'width', this.width());
    this.renderer.setStyle(this.iconRef.nativeElement, 'height', this.height());
  }

}
