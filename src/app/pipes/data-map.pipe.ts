import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataMap'
})
export class DataMapPipe implements PipeTransform {
  transform(snapshot: any): unknown {
    const data = snapshot.docs.map((doc: any) => doc.data());
    console.log(data);
    return data;
  }
}
