import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListNumbers]'
})
export class ListNumbersDirective {
  constructor() { }

  arabicNumeralsCodes: number[] = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  spaceBarCode: number = 32;
  commasCodes: number[] = [44, 188];

  @HostListener("keypress", ["$event"])
  numberOnly(event: KeyboardEvent): boolean {
    const charCode = event.which || event.keyCode;
    return (
      this.arabicNumeralsCodes.includes(charCode) ||
      charCode === this.spaceBarCode ||
      this.commasCodes.includes(charCode)
    );
  }

}
