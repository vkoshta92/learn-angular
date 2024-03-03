import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  // transform(value: number, ...args: unknown[]): unknown {
  //   // console.log(args);
  //   return "+91-" +value;
  // }

  transform(value: number, country?:string): string {
    // console.log(args);
    let code="+91-";
    if(country=="USA") code="+1-"
    return code +value;
  }

}
