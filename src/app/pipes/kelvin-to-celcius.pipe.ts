import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelcius'
})
export class KelvinToCelciusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    var str=(value-273.15).toString();
    return (value-273.15).toFixed(1).toString()+" C";
  }

}
