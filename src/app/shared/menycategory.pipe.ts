import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menycategory'
})
export class MenycategoryPipe implements PipeTransform {

  transform(value:any[],catString:string,category:string): any[] {
    const result :any=[];
    if (!value || catString === '' || category === '') {
      return value;
    }
    value.forEach((a:any)=>{
      if(a[category].trim().toLowerCase().includes(catString.toLowerCase())){
        result.push(a);
      }
    });

    return result;
  }

}
