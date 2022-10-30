import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  // If the beer object doesn't have an image url return an assets file ('assets/img/beer.png').
  
  transform(value: string | undefined): string | undefined {
    if (value === null) {
      return 'assets/img/beer.png';
    } else {
      return value;
    }
  }

}
