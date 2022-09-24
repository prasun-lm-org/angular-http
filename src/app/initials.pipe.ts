import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  constructor(private upperCasePipe: UpperCasePipe) {}

  transform(value: string, ...args: unknown[]): string {
    return this.upperCasePipe.transform(value[0])+'.';
  }

}
