import {Directive, effect, ElementRef, inject, input, Renderer2} from '@angular/core';

export type Font_type =
  'body1'
  | 'body2'
  | 'body3'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6';
export type Text_colors =
  'default' |
  'primary'
  | 'secondary'
export const mapFont: Record<Font_type, string> = {
  'body1': '14px',
  'body2': '16px',
  'body3': '18px',
  'heading1': '20px',
  'heading2': '24px',
  'heading3': '26px',
  'heading4': '32px',
  'heading5': '36px',
  'heading6': '48px',
}
export const mapColor: Record<Text_colors, string> = {
  'default': 'var(----primary-color-text)',
  'primary': 'var(--primary-color)',
  'secondary': 'var(--text-color-secondary)',
}

@Directive({
  selector: '[appAseTypography]',
  standalone: true
})
export class AseTypographyDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  fontSize = input<Font_type>('body1');
  colorText = input<Text_colors>('default');

  constructor() {
    effect(() => {
      console.log(this.fontSize());
      this.setFontSize(mapFont[this.fontSize()]);
      this.setColor(mapColor[this.colorText()]);
    });
  }

  private setFontSize(size: string) {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', size);
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
