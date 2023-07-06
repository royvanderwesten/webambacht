import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getSubpageLink'
})
export class GetSubpageLinkPipe implements PipeTransform {
  transform(mainPage: any, pagesArr: any) {
    const subPages = pagesArr.find((p: any) => p.mainPageLink === mainPage);
    console.log(subPages);
    return pagesArr.find((p: any) => {
      console.log(p, mainPage);
      p.mainPageLink === mainPage
    });
  }
}
